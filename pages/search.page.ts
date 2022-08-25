import { Page } from "@playwright/test";
import Wrapper from "../src/base/Wrapper";
import { CommonMetaData } from '../data/page_metdata/common.metadata';

export default class SearchPage extends Wrapper {

    constructor(page: Page) {
        super(page);
    }

    public async doQuickSearch(searchTxt: string) {
        const searchIcon = await this.findLocator(CommonMetaData.Search_Icon);
        await searchIcon.click();

        const searchText = await this.findLocator(CommonMetaData.Search_Text);
        await searchText.click();
        await searchText.fill(searchTxt);
        await this.waitForParticularTime(1000);
        await searchText.press('Enter');
        await this.waitForParticularTime(1000);
        const searchIcon_Close = await this.findLocator(CommonMetaData.Search_Icon_Close);
        await searchIcon_Close.click();

        const searchTextResult = await this.findLocator(CommonMetaData.Search_Result.replace("search text", searchTxt));
        await searchTextResult.click();
    }

    
}