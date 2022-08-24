import test, { expect } from '../../../src/base/fixtures';
import Env from '../../../src/base/utils/Env';

test('Verify Organization customer creation from UI @ui', async ({ page, createCustomerPage, logger }) => {

   logger.setLogTransport("create_org_customer_ui_test");
    logger.getLogger().info("Verify User is able to create Organization customer from UI");

  await test.step('Select Customer type as Organization', async () => {
    await createCustomerPage.selectOrgCustomerTye();
    await expect(page).toHaveURL(`${Env.CSSR_BASE_URL}${Env.cssr_create_org_customer_url}`);
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

  await test.step('Verify Customer Save Success', async () => {
    await createCustomerPage.verifyCustomerSuccessBanner();
    logger.getLogger().info("Verify Customer Save Success");
  });
});

