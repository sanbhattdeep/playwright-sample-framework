import { CustomerService } from '../../../src/base/backend/crm/CustomerService';
import test, { expect } from '../../../src/base/fixtures';
import Env from '../../../src/base/utils/Env';
import TestData from '../../../src/base/utils/TestData';
import { TestDataKeys } from '../../../src/base/utils/TestDataKeys';

let testDataMaster: TestData;
let testDataMember: TestData;
const org_customer = new CustomerService("create_org_customer_backend_test");
let customerNumber: any;

let init_url = `${Env.crm_base_url}${Env.org_customer_init_url}`;
let write_url = `${Env.crm_base_url}${Env.org_customer_write_url}`;


test.beforeEach(async ({ logger }) => {
  logger.setLogTransport("create_amendment_member_policy_ui_test");
  testDataMaster = new TestData(TestDataKeys.QUOTE_DATA_GATHER);
  testDataMember = new TestData(TestDataKeys.MEMBERQUOTE_DATA_GATHER);
});

test('Verify User is able to Create Member Quote from @ui', async ({ page, createCustomerPage, classManagementPage, createNewQuotePage, customerPortfolioPage, createMemberQuotePage, logger, request, searchPage }) => {

  await test.step('Create organisation customer through API', async () => {
    customerNumber = await org_customer.createCustomerViaAPI(init_url, write_url, request);
    logger.getLogger().info("Organization Customer created with number: " +customerNumber);
    await searchPage.doQuickSearch(customerNumber);
  });

  await test.step('Fill Details in the Class Management Page to create class and click on Opportunity link', async () => {
    await classManagementPage.addClass();
    await classManagementPage.enterClassNumber(testDataMaster);
    await createCustomerPage.doSaveAndExit();
    await classManagementPage.createOpportunity();
    await classManagementPage.clickOpportunity();
    logger.getLogger().info("Fill Details in the Class Management Page to create class and click on Opportunity link");
  });

  await test.step('Click on create new quote button and select Product', async () => {
    await createNewQuotePage.selectNewQuote();
    logger.getLogger().info("Click on create new quote button and select Product");
  });

  await test.step('Fill the Mandatory details in Policy Summary section on Quote Creation page', async () => {
    await createNewQuotePage.policySummaryPage(testDataMaster);
    logger.getLogger().info("Fill the Mandatory details in Policy Summary section on Quote Creation page");
  });

  await test.step('Add New Agency from Agencies & Compensation Tab on Quote Creation Page', async () => {
    await createNewQuotePage.agencyCompensation(testDataMaster);
    logger.getLogger().info("Add New Agency from Agencies & Compensation Tab on Quote Creation Page");
  });

  await test.step('Select plans for Master Quote Creation', async () => {
    await createNewQuotePage.plansPage();
    logger.getLogger().info("Select plans for Master Quote Creation");
  });

  await test.step('Click on Delete By up Button from Select Plans Section', async () => {
    await createNewQuotePage.deleteByUp();
    logger.getLogger().info("Click on Delete By up Button from Select Plans Section");
  });

  await test.step('Select Class created on the Plan Tab', async () => {
    await createNewQuotePage.selectClassOnPlanTab();
    logger.getLogger().info("Select Class created on the Plan Tab");
  });

  await test.step('Fill details in Quote premium section and click on Save & Exit', async () => {
    await createNewQuotePage.fillDetailsInQuotePremiumSection(testDataMaster);
    await createNewQuotePage.rateAdjustCancelAction();
    await createCustomerPage.doSaveAndExit();
    logger.getLogger().info("Fill details in Quote premium section and click on Save & Exit");
  });

  await test.step('Perform different action to issue the quote', async () => {
    await createNewQuotePage.readyToProposeOption();
    await createNewQuotePage.proposeOption();
    await createNewQuotePage.markAsSoldOption();
    await createNewQuotePage.issueOption();
    logger.getLogger().info("Perform different action to issue the quote");
  });

  await test.step('Fill the details in Review and Issue Policy page for different section and then issue the quote', async () => {
    await createNewQuotePage.fillInPolicyDetailsSection();
    await createNewQuotePage.fillInCustomerDataSection();
    await createNewQuotePage.fillInDocumentsSection();
    await createNewQuotePage.issueQuote();
    logger.getLogger().info("Fill the details in Review and Issue Policy page for different section and then issue the quote");
  });

  await test.step('Navigate to Customer Page' , async () => {
    await classManagementPage.clickOpportunity();
    await classManagementPage.doClickCustomerName();
    logger.getLogger().info("Navigate to Customer Page");
  });

  await test.step('Click on Policies Tab to navigate Policy Summary Page' , async () => {
    await customerPortfolioPage.doClickPoliciesTab();
    await customerPortfolioPage.doClickPolicyName();
    logger.getLogger().info("Click on Policies Tab to navigate Policy Summary Page");
  });

  await test.step('Click on Member Quotes Tab to start creating Member Quote' , async () => {
    await createMemberQuotePage.doClickCreateMemberQuote();
    logger.getLogger().info("Click on Member Quotes Tab to start creating Member Quote");
  });  

  await test.step('Fill all the Mandatory details in the Policy Details, Agenicies & Compensastion, Insured, Coverages and Premium Tab of Member Quote Page', async () => {
    await createMemberQuotePage.fillPolicyDetailsSection();
    await createMemberQuotePage.doNext();
    await createMemberQuotePage.doClickAddNewInsured();
    await createMemberQuotePage.fillInsuredGeneralInfoFirstName();
    await createMemberQuotePage.fillInsuredGeneralInfoDOB(testDataMember);
    await createMemberQuotePage.fillInsuredGeneralInfoLastName();
    await createMemberQuotePage.fillAddNewAddress(testDataMember);
    await createMemberQuotePage.fillWorkRelatedInfo(testDataMember);
    await createMemberQuotePage.selectCoverages(testDataMember);
    logger.getLogger().info("Fill all the Mandatory details in the Policy Details, Agenicies & Compensastion, Insured, Coverages and Premium Tab of Member Quote Page");
  });

  await test.step('Calculate Premium Rate to issue the member quote' , async () => {
    await createMemberQuotePage.issueMemberQuote();
    logger.getLogger().info("Calculate Premium Rate to issue the member quote");
  });

  await test.step('Verify Status of Member Quote' , async () => {
    await createMemberQuotePage.verifyMemberQuoteStatus();
    logger.getLogger().info("Verify Status of Member Quote");
  });

  await test.step('Amend the member quote' , async () => {
    await createMemberQuotePage.doMemberPolicyAmend();
    await createMemberQuotePage.verifyAmendmentDetailsInPolicyHistory();
    logger.getLogger().info("Amendment to Member Policy is completed successfully");
  });

});