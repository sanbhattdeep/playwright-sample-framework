import Wrapper from "../src/base/Wrapper";
import { Page } from "@playwright/test";
import Env from "../src/base/utils/Env";
import * as ClassManagementTypeMetaData from "../data/page_metdata/classmanagement.metadata";

export default class ClassManagementPage extends Wrapper {

    constructor(public page: Page) {
        super(page);
    }

    public async createOpportunity() {
        const createOpportunityLink = await this.findLocator(ClassManagementTypeMetaData.ClassManagementPage.CreateNewOpportunity_Link);
        await createOpportunityLink.click();
        const createBtn = await this.findLocator(ClassManagementTypeMetaData.ClassManagementPage.Create_Btn);
    }

    public async addClass(){
        const createClassBtn = await this.findLocator(ClassManagementTypeMetaData.ClassManagementPage.CreateClass_Btn);
        await createClassBtn.click();
        const addClassBtn = await this.findLocator(ClassManagementTypeMetaData.ClassManagementPage.AddClass_Btn);
        await addClassBtn.click();
    } 

    public async enterClassNumber() {
        const classNumber = await this.findLocator(ClassManagementTypeMetaData.ClassManagementPage.ClassNumber_Input);
        await classNumber.click();
        await classNumber.fill(Env.class_number_input);
        const saveBtn = await this.findLocator(ClassManagementTypeMetaData.ClassManagementPage.Save_Btn);
        await saveBtn.click();
    }

    public async enterClassName() {
        const className = await this.findLocator(ClassManagementTypeMetaData.ClassManagementPage.ClassName_Input);
        await className.click();
        await className.fill(Env.class_name_input);
    }

    public async clickConfirm() {
        const confirmBtn = await this.findLocator(ClassManagementTypeMetaData.ClassManagementPage.Confirm_Btn);
        await confirmBtn.click();
    }

    public async clickOpportunity() {
        const opportunityLink = await this.findLocator(ClassManagementTypeMetaData.ClassManagementPage.Opportunity_link);
        await opportunityLink.click();
    } 
}