import * as empty_body from '../../../../data/backend/empty_body.json';
import { APIRequestContext, APIResponse, expect } from '@playwright/test';
import Logging from '../../utils/Logger';
import Utils from '../../utils/utils';
import Env from '../../utils/Env';
let testdata;

export class CustomerService {

  private logger: Logging;

  constructor(logFileName: string) {
    this.logger = new Logging();
    this.logger.setLogTransport(logFileName);
  }

  async doPost(url: string, request: APIRequestContext, testdata?: Object): Promise<APIResponse> {
    this.logger.getLogger().info("Post : Started with URL:  " + url);
    let _response = await request.post(url, { data: JSON.stringify(testdata) });
    await expect(_response).toBeOK();
    this.logger.getLogger().info("Post : Completed ");
    return _response;
  }

  async doInitOperation(init_url: string, request: APIRequestContext): Promise<string> {
    this.logger.getLogger().info("Init : Started with URL: " + init_url);
    let _response = await this.doPost(init_url, request, empty_body);
    let rootId = await this.getRootIDfromResponse(_response);
    rootId = await Promise.resolve(rootId);
    this.logger.getLogger().info("Init : COMPLETED with rootid: " + rootId);
    return rootId;
  }

  async doWriteOperation(write_url: string, request: APIRequestContext, testdata: any) {
    this.logger.getLogger().info("Write: Started with URL: " + write_url);
    let _response = await this.doPost(write_url, request, testdata);
    await expect(_response).toBeOK();
    this.logger.getLogger().info("Write: Completed. ");
  }

  async getRootIDfromResponse(_response: APIResponse): Promise<string> {
    this.logger.getLogger().info("Get Root ID from Response : Started. ");
    const apiResponse = await _response.json();
    let rootId = apiResponse.body.success._key.rootId;
    this.logger.getLogger().info("Get Root ID from Response : COMPLETED with rootID: " + rootId);
    return rootId;
  }

  async getCustomerNumberfromResponse(_response: APIResponse): Promise<string> {
    this.logger.getLogger().info("Get Customer from Response : Started. ");
    const apiResponse = await _response.json();
    let customerNumber = apiResponse.body.success.customerNumber;
    this.logger.getLogger().info("Get Customer Number from Response : COMPLETED with customer Number: " + customerNumber);
    return customerNumber;
  }

  async createCustomerViaAPI(init_url: string, write_url: string, request: APIRequestContext): Promise<string> {

    let _lastRootID = await this.doInitOperation(init_url, request);
    testdata = Utils.updateTestData_OrgCustomer_Write(_lastRootID);

    this.logger.getLogger().info("Write: Started with URL: " + write_url);
    let _response = await this.doPost(write_url, request, testdata);
    const apiResponse = await _response.json();
    await expect(_response).toBeOK();
    this.logger.getLogger().info("Write: Completed. ");

    let org_custLoad_url_withRootID = `${Env.CRM_BASE_URL}${Env.org_customer_load_url}${_lastRootID}`;
    await this.doPost(org_custLoad_url_withRootID, request);

    let customerNumber = apiResponse.body.success.customerNumber;
    this.logger.getLogger().info("Get Customer Number from Response : COMPLETED with customer Number: " + customerNumber);
    return customerNumber;
  }




}