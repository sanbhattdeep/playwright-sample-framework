import { test, APIResponse } from '@playwright/test';
import Env from '../../../src/base/utils/Env';
import Utils from '../../../src/base/utils/utils';
import * as empty_body from '../../../data/backend/empty_body.json';
import { CustomerService } from '../../../src/base/backend/crm/CustomerService';

test.describe('Create Individual customer from backend', async () => {

  let _lastRootID;
  let _response: APIResponse;
  let testdata: object;
  const ind_customer =new CustomerService("create_ind_customer_backend_test");
  let ind_init_url = `${Env.crm_base_url}${Env.ind_customer_init_url}`;
  let ind_write_url = `${Env.crm_base_url}${Env.ind_customer_write_url}`;
  
  test('create/verify individual customer from backend with init-write-load @backend', async ({ request }) => {

    await test.step('call init customer api', async () => {
     _lastRootID = await ind_customer.doInitOperation(ind_init_url, request); 
    });

    await test.step('Extract rootId from Init response and update in write post data', async () => {
      testdata = Utils.updateTestData_IndCustomer_Write(_lastRootID);
    });

    await test.step('call write customer api', async () => {
     await ind_customer.doWriteOperation(ind_write_url, request, testdata);
    });

    await test.step('call load customer api and verify rootId', async () => {
      let ind_custLoad_url_withRootID = `${Env.crm_base_url}${Env.ind_customer_load_url}${_lastRootID}`;
      await ind_customer.doPost(ind_custLoad_url_withRootID, request);
    });

  });  
});
