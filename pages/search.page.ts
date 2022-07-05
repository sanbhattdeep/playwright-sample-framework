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

        const searchTextResult = await this.findLocator(CommonMetaData.Search_Result.replace("search text", searchTxt));
        searchTextResult.click();
    }
}