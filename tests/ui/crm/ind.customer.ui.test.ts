import Env from "../../../src/base/utils/Env";
import test, { expect } from "../../../src/base/fixtures";

test('Verify User is able to create Individual customer from UI @ui', async ({ page, createCustomerPage, logger }) => {

  logger.setLogTransport("create_ind_customer_ui_test");
  logger.getLogger().info("Verify User is able to create Individual customer from UI");

  await test.step('Select Customer type as individual', async () => {
    await createCustomerPage.doAddNew();
    await createCustomerPage.doOk();
    await expect(page).toHaveURL(`${Env.CSSR_BASE_URL}${Env.cssr_create_ind_customer_url}`);
    logger.getLogger().info("Select Customer type as individual");
  });

  await test.step('Fill General Info Section', async () => {
    await createCustomerPage.fillGeneralInfoFirstName();
    await createCustomerPage.fillGeneralInfoLastName();
    logger.getLogger().info("Fill General Info Section");
  });

  await test.step('Fill Contact Address details and Save', async () => {
    await createCustomerPage.fillContactAddress('Mailing');
    await createCustomerPage.doConfirm();
    await createCustomerPage.doSaveAndExit();
    logger.getLogger().info("Fill Contact Address details and Save");
  });

  await test.step('Verify Customer Save Success', async () => {
    await createCustomerPage.verifyCustomerSuccessBanner();
    logger.getLogger().info("Verify Customer Save Success");
  });
});