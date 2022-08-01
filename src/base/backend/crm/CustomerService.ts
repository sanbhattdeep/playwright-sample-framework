import * as empty_body from '../../../../data/backend/empty_body.json';
import { APIRequestContext, APIResponse, expect, request } from '@playwright/test';
import Logging from '../../utils/Logger';

export class CustomerService {

  private logger:Logging;

  constructor(logFileName:string) {
    this.logger = new Logging();
    this.logger.setLogTransport(logFileName);
  }

  async doPost(url: string, request: APIRequestContext, testdata?: Object): Promise<APIResponse> {
    this.logger.getLogger().info("Post : Started with URL:  " +url);
    let _response = await request.post(url, { data: JSON.stringify(testdata) });
    await expect(_response).toBeOK();
    this.logger.getLogger().info("Post : Completed ");
    return _response;
  }

  async doInitOperation(init_url:string, request: APIRequestContext): Promise<string> {
    this.logger.getLogger().info("Init : Started with URL: " + init_url);
    let _response = await this.doPost(init_url, request, empty_body);
    let rootId = await this.getRootIDfromResponse(_response);
    rootId = await Promise.resolve(rootId);
    this.logger.getLogger().info("Init : COMPLETED with rootid: " + rootId);
    return rootId;
  }

  async doWriteOperation(write_url: string, request: APIRequestContext, testdata: any) {
    this.logger.getLogger().info("Write: Started with URL: "+write_url);
    let _response = await this.doPost(write_url, request, testdata);
    await expect(_response).toBeOK();
    this.logger.getLogger().info("Write: Completed. ");
  }

  async getRootIDfromResponse(_response: APIResponse): Promise<string> {
    this.logger.getLogger().info("Get Root ID from Response : Started. ");
    const apiResponse = await _response.json();
    let rootId = apiResponse.body.success._key.rootId;
    this.logger.getLogger().info("Get Root ID from Response : COMPLETED with rootID: " +rootId);
    return rootId;
  }
}