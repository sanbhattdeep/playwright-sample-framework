import { CustomerService } from '../../../src/base/backend/crm/CustomerService';
import test, { expect } from '../../../src/base/fixtures';
import Env from '../../../src/base/utils/Env';
import TestData from '../../../src/base/utils/TestData';
import { TestDataKeys } from '../../../src/base/utils/TestDataKeys';

let testData: TestData;
const org_customer = new CustomerService("create_org_customer_backend_test");
let customerNumber: any;

let init_url = `${Env.CRM_BASE_URL}${Env.org_customer_init_url}`;
let write_url = `${Env.CRM_BASE_URL}${Env.org_customer_write_url}`;

test.beforeEach(async ({ logger }) => {
  logger.setLogTransport("midtermcancel_master_policy_ui_test");
  testData = new TestData(TestDataKeys.QUOTE_DATA_GATHER);
});

test('Verify User is able to Cancel Mid Term Master policy from @ui', async ({ page, createCustomerPage,  classManagementPage, createNewQuotePage, customerPortfolioPage, logger, request, searchPage}) => {

  await test.step('Create organisation customer through API', async () => {
    customerNumber = await org_customer.createCustomerViaAPI(init_url, write_url, request);
    logger.getLogger().info("Organization Customer created with number: " +customerNumber);
    await searchPage.doQuickSearch(customerNumber);
  });

  await test.step('Fill Details in the Class Management Page to create class and click on Opportunity link', async () => {
    await classManagementPage.addClass();
    await classManagementPage.enterClassNumber(testData);
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
    await createNewQuotePage.selectFirstDayOfMonth();
    await createNewQuotePage.policySummaryPage(testData);
    logger.getLogger().info("Fill the Mandatory details in Policy Summary section on Quote Creation page");
  });

  await test.step('Add New Agency from Agencies & Compensation Tab on Quote Creation Page', async () => {
    await createNewQuotePage.agencyCompensation(testData);
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

  await test.step('Select Class created on the Plan Tab' , async () => {
    await createNewQuotePage.selectClassOnPlanTab();
    logger.getLogger().info("Select Class created on the Plan Tab");
  });

  await test.step('Fill details in Quote premium section and click on Save & Exit' , async () => {
    await createNewQuotePage.fillDetailsInQuotePremiumSection(testData);
    await createNewQuotePage.rateAdjustCancelAction();
    await createCustomerPage.doSaveAndExit();
    logger.getLogger().info("Fill details in Quote premium section and click on Save & Exit");
  });
  
  await test.step('Perform different action to issue the quote' , async () => {
    await createNewQuotePage.readyToProposeOption();
    await createNewQuotePage.proposeOption();
    await createNewQuotePage.markAsSoldOption();
    await createNewQuotePage.issueOption();
    logger.getLogger().info("Perform different action to issue the quote");
  });

  await test.step('Fill the details in Review and Issue Policy page for different section and then issue the quote' , async () => {
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

  await test.step('Click on I Want To button to proceed for cancelling the Master Policy and verfiy the Cancellation Message' , async () => {
    await customerPortfolioPage.doPolicyCancellation();
    await customerPortfolioPage.verifyCancellationMsg();
    logger.getLogger().info("Click on I Want To button to proceed for cancelling the Master Policy and verfiy the Cancellation Message");
  });

  await test.step('Verfiy the Cancellation Message status on Transaction Page' , async () => {
    await customerPortfolioPage.verifyStatusOnTransactionPage("Cancellation");
    logger.getLogger().info("Verfiy the Cancellation Message status on Transaction Page");
  });
});