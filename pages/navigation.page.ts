import { Page } from "@playwright/test";
import { CommonMetaData } from "../data/page_metdata/common.metadata";
import Wrapper from "../src/base/Wrapper";

export default class NavigationPage extends Wrapper {

    constructor(public page: Page) {
        super(page);
    }

    public async navigatetoTab(tabName: string){
        const navigateTab = await this.findLocator(CommonMetaData.Navigate_To_Tab.replace("TabName", tabName));
        navigateTab.click();
    }
}