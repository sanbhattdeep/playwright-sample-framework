import { Page } from "@playwright/test";
import { CommonMetaData } from "../data/page_metdata/common.metadata";
import Wrapper from "../src/base/Wrapper";

export default class CommonHeaderPage extends Wrapper {

    constructor(public page: Page) {
        super(page);
    }

    public async doSave() {
        const SaveBtn =  (await this.findLocator(CommonMetaData.Save_Btn)).first();
        await SaveBtn.click();
        await this.waitForSpinner();
    }

    public async clickLeftArrow() {
        const left_arrow =  await this.findLocator(CommonMetaData.left_arrow);
        await left_arrow.click();
    }
}