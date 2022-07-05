import Env from "../../../src/base/utils/Env";
import test, { expect } from "../../../src/base/utils/fixtures";

test('Verify User is able to create Individual customer from UI @ui', async ({ page, createCustomerPage }) => {

  await test.step('Select Customer type as individual', async () => {
    await createCustomerPage.doAddNew();
    await createCustomerPage.doOk();
    await expect(page).toHaveURL(`${Env.cssr_base_url}${Env.cssr_create_ind_customer_url}`);
  });

  await test.step('Fill General Info Section', async () => {
    await createCustomerPage.fillGeneralInfoFirstName();
    await createCustomerPage.fillGeneralInfoLastName();
  });

  await test.step('Fill Contact Address details and Save', async () => {
    await createCustomerPage.fillContactAddress('Mailing');
    await createCustomerPage.doConfirm();
    await createCustomerPage.doSaveAndExit();
  });

  await test.step('Verify Customer Save Success', async () => {
    await createCustomerPage.verifyCustomerSuccessBanner();
  });
});