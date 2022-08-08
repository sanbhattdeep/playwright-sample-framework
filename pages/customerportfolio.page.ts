import Wrapper from "../src/base/Wrapper";
import { Page } from "@playwright/test";
import { PoliciesTabMetaData } from "../data/page_metdata/customerportfolio.metadata";
import { expect } from "@playwright/test";

export default class CustomerPortfolioPage extends Wrapper {

    constructor(public page: Page) {
        super(page);
    }

    public async doClickPoliciesTab() {
        const policiesTab_Btn = await this.findLocator(PoliciesTabMetaData.PoliciesTab_Btn);
        await policiesTab_Btn.click();
    }

    public async doClickPolicyName() {
        const policyName_Link = await this.findLocator(PoliciesTabMetaData.PolicyName_Link);
        await policyName_Link.click();
    }

    public async doVerifyPolicyStatus() {
        const policyStatus_Active = await this.findLocator(PoliciesTabMetaData.PolicyStatus_Active);
        await expect(policyStatus_Active).toBeVisible();
    }
    
    public async doPolicyCancellation() {
        const iWantTo_Btn = await this.findLocator(PoliciesTabMetaData.IWantTo_Btn);
        await iWantTo_Btn.click();
        const iWantTo_CancelBtn = await this.findLocator(PoliciesTabMetaData.IWantTo_CancelBtn);
        await iWantTo_CancelBtn.click();
        const cancellationEffectiveDate = await this.findLocator(PoliciesTabMetaData.CancellationEffectiveDate);
        await cancellationEffectiveDate.click();
        const today_SelDate = await this.findLocator(PoliciesTabMetaData.Today_SelDate);
        await today_SelDate.click();
        const cancellationReason_ComboBox = await this.findLocator(PoliciesTabMetaData.CancellationReason_ComboBox);
        await cancellationReason_ComboBox.click();
        const cancellationReason_Option = await this.findLocator(PoliciesTabMetaData.CancellationReason_Option);
        await cancellationReason_Option.click();
        const continue_Btn = await this.findLocator(PoliciesTabMetaData.Continue_Btn);
        await continue_Btn.click();
        const confirm_Btn = await this.findLocator(PoliciesTabMetaData.Confirm_Btn);
        await confirm_Btn.click();
    }

    public async verifyCancellationMsg(){
        const policyCancellation_AlertMessage = await this.findLocator(PoliciesTabMetaData.PolicyCancellation_AlertMessage);
        await expect(policyCancellation_AlertMessage).toBeVisible();
    }

    public async verifyStatusOnTransactionPage(Status: string){
        const transactionHistory_Btn = await this.findLocator(PoliciesTabMetaData.TransactionHistory_Btn);
        await transactionHistory_Btn.click();
        const transactionHistory_CancellationStatus = await this.findLocator(PoliciesTabMetaData.TransactionHistory_Status.replace("STATUS", Status));
        await expect(transactionHistory_CancellationStatus).toBeVisible();
    }
}