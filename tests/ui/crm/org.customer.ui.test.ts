import test, { expect } from '../../../src/base/utils/fixtures';
import Env from '../../../src/base/utils/Env';

test('Verify User is able to create Organization customer from UI @ui', async ({ page, createCustomerPage }) => {

  await test.step('Select Customer type as Organization', async () => {
    await createCustomerPage.selectOrgCustomerTye();
    await expect(page).toHaveURL(`${Env.cssr_base_url}${Env.cssr_create_org_customer_url}`);
  });

  await test.step('Fill General Info Section', async () => {
    await createCustomerPage.fillGeneralInfoLegalName();
  });

  await test.step('Fill Contact Address details and Save', async () => {
    await createCustomerPage.fillContactAddress('Legal');
    await createCustomerPage.doConfirm();
    await createCustomerPage.doSaveAndExit();
  });

  await test.step('Verify Customer Save Success', async () => {
    await createCustomerPage.verifyCustomerSuccessBanner();
  });
});

