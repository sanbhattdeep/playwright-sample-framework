import test, { expect } from '../../../src/base/utils/fixtures';

test('Verify User is able to Create Master Quote from @ui', async ({ page, createCustomerPage,  classManagementPage, createNewQuotePage, logger}) => {

    await test.step('Select Customer type as Organization', async () => {

      logger.setLogTransport("create_master_quote_ui_test");
      logger.getLogger().info("Verify User is able to create Master Quote from UI");

      await createCustomerPage.selectProductType();
      logger.getLogger().info("Select Customer type as Organization");
    });
  
    await test.step('Fill General Info Section', async () => {
      await createCustomerPage.fillGeneralInfoLegalName();
      logger.getLogger().info("Fill General Info Section");
    });
  
    await test.step('Fill Contact Address details and Save', async () => {
      await createCustomerPage.fillContactAddress('Legal');
      await createCustomerPage.doConfirm();
      await createCustomerPage.doSaveAndExit();
      logger.getLogger().info("Fill Contact Address details and Save");
    });
  
    await test.step('Fill Details in the Class Management Page to create class and click on Opportunity link', async () => {
        await classManagementPage.addClass();
        await classManagementPage.enterClassNumber();
        await createCustomerPage.doSaveAndExit();   
        await classManagementPage.clickOpportunity();
        logger.getLogger().info("Fill Details in the Class Management Page to create class and click on Opportunity link");
    });

    await test.step('Click on create new quote button and select Product', async () => {
        await createNewQuotePage.selectNewQuote();
        logger.getLogger().info("Click on create new quote button and select Product");
    });

    await test.step('Fill the Mandatory details in Policy Summary section on Quote Creation page', async () => {
        await createNewQuotePage.policySummaryPage();
        logger.getLogger().info("Fill the Mandatory details in Policy Summary section on Quote Creation page");
    });

    await test.step('Add New Agency from Agencies & Compensation Tab on Quote Creation Page', async () => {
        await createNewQuotePage.agencyCompensation();
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
      await createNewQuotePage.fillDetailsInQuotePremiumSection();
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
  });