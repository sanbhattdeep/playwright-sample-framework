import { test, expect, APIResponse } from '@playwright/test';
import Env from '../../../src/base/utils/Env';
import Utils from '../../../src/base/utils/utils';
import * as empty_body from '../../../data/backend/empty_body.json';


test.describe('Create Individual customer from backend', async () => {

  let _lastRootID: string;
  let _response: APIResponse;
  let testdata: object;

  test('create/verify individual customer from backend with init-write-load @backend', async ({ request }) => {

    await test.step('call init customer api', async () => {
       _response = await request.post(`${Env.crm_base_url}${Env.ind_customer_init_url}`, {
        data: JSON.stringify(empty_body),
      });

      expect(_response).toBeOK();
    });

    await test.step('Extract rootId from Init response and update in write post data', async () => {
      const apiResponse = await _response.json();

      _lastRootID = apiResponse.body.success._key.rootId;
      console.log("Customer init with rootId: " + _lastRootID);

      testdata = Utils.updateTestData_IndCustomer_Write(_lastRootID);
    });

    await test.step('call write customer api', async () => {
      _response = await request.post(`${Env.crm_base_url}${Env.ind_customer_write_url}`, {
        data: JSON.stringify(testdata),
      });

      expect(_response).toBeOK();
    });

    await test.step('call load customer api and verify rootId', async () => {
      //verify created customer with load{rootId}
      _response = await request.post(`${Env.crm_base_url}${Env.ind_customer_load_url}${_lastRootID}`, {
        data: JSON.stringify(empty_body),
      });

      expect(_response).toBeOK();
    });
  });
});
