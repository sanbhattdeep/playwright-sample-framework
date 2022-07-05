import { test, expect } from '@playwright/test';
import Env from '../../../src/base/utils/Env';
import Utils from '../../../src/base/utils/utils';
import * as empty_body from '../../../data/backend/empty_body.json';


test.describe('Create Organisation customer from backend', async () => {

  let _lastRootID: string;

  test('create/verify org customer from backend with init-write-load @backend', async ({ request }) => {

    //init customer and capture rootId
    let _response = await request.post(`${Env.crm_base_url}${Env.org_customer_init_url}`, {
      data: JSON.stringify(empty_body),
    });

    expect(_response).toBeOK();
    const apiResponse = await _response.json();
    _lastRootID = apiResponse.body.success._key.rootId;
    console.log("Customer init with rootId: " + _lastRootID);

    //generate random legal name and update customer post data with name and rootId
    const testdata = Utils.updateTestData_OrgCustomer_Write(_lastRootID);

    //write customer with rootId from init
    _response = await request.post(`${Env.crm_base_url}${Env.org_customer_write_url}`, {
      data: JSON.stringify(testdata),
    });

    expect(_response).toBeOK();

    //verify created customer with load{rootId}
    _response = await request.post(`${Env.crm_base_url}${Env.org_customer_load_url}${_lastRootID}`, {
      data: JSON.stringify(empty_body),
    });

    expect(_response).toBeOK();
    console.log(await _response.json());
  });
});
