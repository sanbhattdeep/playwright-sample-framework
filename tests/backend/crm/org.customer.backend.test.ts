import { test } from '@playwright/test';
import Env from '../../../src/base/utils/Env';
import Utils from '../../../src/base/utils/utils';
import { CustomerService } from '../../../src/base/backend/crm/CustomerService';

test.describe('Create Organisation customer from backend @backend', async () => {
  let _lastRootID; let testdata;
  const org_customer = new CustomerService("create_org_customer_backend_test");
  let init_url = `${Env.CRM_BASE_URL}${Env.org_customer_init_url}`;
  let write_url = `${Env.CRM_BASE_URL}${Env.org_customer_write_url}`;


  test('create/verify org customer from backend with init-write-load @backend', async ({ request }) => {

    await test.step('call init customer api', async () => {
      _lastRootID = await org_customer.doInitOperation(init_url, request);
    });

    await test.step('Extract rootId from Init response and update in write post data', async () => {
      testdata = Utils.updateTestData_OrgCustomer_Write(_lastRootID);
    });

    await test.step('call write customer api', async () => {
      await org_customer.doWriteOperation(write_url, request, testdata);
    });

    await test.step('call load customer api and verify rootId', async () => {
      let org_custLoad_url_withRootID = `${Env.CRM_BASE_URL}${Env.org_customer_load_url}${_lastRootID}`;
      await org_customer.doPost(org_custLoad_url_withRootID, request);
    });
    
  });
});
