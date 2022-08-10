import Wrapper from "../src/base/Wrapper";
import { Page } from "@playwright/test";
import { ClassManagementPage } from "../data/page_metdata/createnewquote.metadata";
import { PolicySummaryPageMetaData } from "../data/page_metdata/createnewquote.metadata";
import { AgenciesAndCompensationPageMetaData } from "../data/page_metdata/createnewquote.metadata";
import { PlansTabMetaData } from "../data/page_metdata/createnewquote.metadata";
import { DeleteByUpMetaData } from "../data/page_metdata/createnewquote.metadata";
import { ClassSelectionMetaData } from "../data/page_metdata/createnewquote.metadata";
import { QuotePremiumSectionMetaData } from "../data/page_metdata/createnewquote.metadata";
import { ProposeQuoteMetaData } from "../data/page_metdata/createnewquote.metadata";
import { ReviewAndIssuePolicySection } from "../data/page_metdata/createnewquote.metadata";
import { expect } from "@playwright/test";
import TestData from "../src/base/utils/TestData";

export default class CreateNewQuotePage extends Wrapper {

    constructor(public page: Page) {
        super(page);
    }

    public async selectNewQuote() {
    const createnewquote_btn = await this.findLocator(ClassManagementPage.CreateNewQuote_Btn);
    await createnewquote_btn.click();
    await this.waitForSpinner();
    const selectProduct_std = await this.findLocator(ClassManagementPage.SelectProduct_STD);
    await selectProduct_std.click();
    const continue_btn = await this.findLocator(ClassManagementPage.Continue_Btn);
    await continue_btn.click();
    await this.waitForSpinner();
    }

    public async policySummaryPage(testData:TestData) {
        const deliveryModel = await this.findLocator(PolicySummaryPageMetaData.DeliveryModel_SelOption);
        await deliveryModel.click();
        const deliveryModelInput = await this.findLocator(PolicySummaryPageMetaData.DeliveryModel_Input);
        await this.fill(deliveryModelInput,testData.getTestData().PolicySummary.deliverymodel.toString())
        const situsState = await this.findLocator(PolicySummaryPageMetaData.SitusState_SelOption);
        await situsState.click();
        const situsStateInput = await this.findLocator(PolicySummaryPageMetaData.SitusState_Input);
        await this.fill(situsStateInput,testData.getTestData().PolicySummary.situsstate.toString())
        const SituStateALOption = await this.findLocator(PolicySummaryPageMetaData.SitusState_ALOption);
        await SituStateALOption.click();
        const saveBtn = await this.findLocator(PolicySummaryPageMetaData.Save_Btn);
        await saveBtn.click();
        await this.waitForSpinner();
    }

    public async agencyCompensation(testData:TestData) {
        const agencyCompensastgionTab = await this.findLocator(AgenciesAndCompensationPageMetaData.AgenciesAndCompensation_Tab);
        await agencyCompensastgionTab.click();
        const addNewAgency = await this.findLocator(AgenciesAndCompensationPageMetaData.AddNewAgency_Btn);
        await addNewAgency.click();
        const searchAgencyBtn = await this.findLocator(AgenciesAndCompensationPageMetaData.SearchAgency_Btn);
        await searchAgencyBtn.click();
        const agencyNameInput = await this.findLocator(AgenciesAndCompensationPageMetaData.AgencyName_Input);
        await this.fill(agencyNameInput,testData.getTestData().agencies.agencyname.toString());
        const searchBtn = await this.findLocator(AgenciesAndCompensationPageMetaData.Search_Btn);
        await searchBtn.click();
        await this.waitForSpinner();
        const agencyNameRadioBtn = await this.findLocator(AgenciesAndCompensationPageMetaData.AgencyName_RadioBtn);
        await agencyNameRadioBtn.click();
        const applyBtn = await this.findLocator(AgenciesAndCompensationPageMetaData.Apply_Btn);
        await applyBtn.click();
        await this.waitForSpinner();
        const confirmBtn = await this.findLocator(AgenciesAndCompensationPageMetaData.Confirm_Btn);
        await confirmBtn.click();
        await this.waitForSpinner();
    }

    public async plansPage() {
        const plansTab = await this.findLocator(PlansTabMetaData.PlanTab);
        await plansTab.click();
        const selectPlan_PlanTab = await this.findLocator(PlansTabMetaData.SelectPlan_PlanTab);
        await selectPlan_PlanTab.click();
        const selectPlan_STD1 = await this.findLocator(PlansTabMetaData.SelectPlan1_STD);
        await selectPlan_STD1.click();
        const continue_btn = await this.findLocator(ClassManagementPage.Continue_Btn);
        await continue_btn.click();
        await this.waitForSpinner();
    }

    public async deleteByUp(){
        const deleteBtn = await this.findLocator(DeleteByUpMetaData.DeleteByUp_Btn);
        await deleteBtn.click(); 
        await this.waitForSpinner();
    }

    public async selectClassOnPlanTab(){
        const classSelection_RadioBtn = await this.findLocator(ClassSelectionMetaData.ClassSelection_RadioBtn);
        await classSelection_RadioBtn.click();
        const contributionBasis = await this.findLocator(ClassSelectionMetaData.ConributionBasis);
        await contributionBasis.click();
        const contributionBasis_Option = await this.findLocator(ClassSelectionMetaData.ConributionBasis_SelOption);
        await contributionBasis_Option.click();
    }

    public async fillDetailsInQuotePremiumSection(testData:TestData){
        const clickArrowBtn = await this.findLocator(QuotePremiumSectionMetaData.Arrow_Btn);
        await clickArrowBtn.click();
        const numberOfParticipant_Input = await this.findLocator(QuotePremiumSectionMetaData.NumberOfParticipant_Input);
        await numberOfParticipant_Input.click();
        await this.fill(numberOfParticipant_Input,testData.getTestData().rating.numberofparticipants.toString())
        const calculateRate_Btn = await this.findLocator(QuotePremiumSectionMetaData.CalculateRate_Btn);
        await calculateRate_Btn.click();
        await this.waitForSpinner();
    }

    public async rateAdjustCancelAction(){
        const adjustRateBtn = await this.findLocator(QuotePremiumSectionMetaData.AdjustRate_Btn);
        await adjustRateBtn.click();
        await this.waitForSpinner();
        const cancelBtn = await this.findLocator(QuotePremiumSectionMetaData.CancelBtn_AdjustRateScreen);
        await cancelBtn.click();
        await this.waitForSpinner();
    }

    public async readyToProposeOption(){
        const quotesCheckbox = await this.findLocator(ProposeQuoteMetaData.Quotes_CheckBox);
        await quotesCheckbox.click();
        const readyToProposeOption = await this.findLocator(ProposeQuoteMetaData.ReadyToPropose_Option);
        await readyToProposeOption.click();
        const status_ReadyForPropose = await this.findLocator(ProposeQuoteMetaData.Status_ReadyForPropose);
        await expect(status_ReadyForPropose).toBeVisible();
    }

    public async proposeOption(){
        const quotesCheckbox = await this.findLocator(ProposeQuoteMetaData.Quotes_CheckBox);
        await quotesCheckbox.click();
        const proposeOption = await this.findLocator(ProposeQuoteMetaData.Propose_Option);
        await proposeOption.click();
        const status_Proposed = await this.findLocator(ProposeQuoteMetaData.Status_Proposed);
        await expect(status_Proposed).toBeVisible();        
    }

    public async markAsSoldOption(){
        const quotesCheckbox = await this.findLocator(ProposeQuoteMetaData.Quotes_CheckBox);
        await quotesCheckbox.click();
        const markAsSold_Option = await this.findLocator(ProposeQuoteMetaData.MarkAsSold_Option);
        await markAsSold_Option.click();
        const status_Sold = await this.findLocator(ProposeQuoteMetaData.Status_Sold);
        await expect(status_Sold).toBeVisible();        
    }

    public async issueOption(){
        const quotesCheckbox = await this.findLocator(ProposeQuoteMetaData.Quotes_CheckBox);
        await quotesCheckbox.click();
        const issue_Option = await this.findLocator(ProposeQuoteMetaData.Issue_Option);
        await issue_Option.click();
    }

    public async fillInPolicyDetailsSection(){
        const expandReviwPolicySection = await this.findLocator(ReviewAndIssuePolicySection.ExpandReviewAndIssuePolicySection);
        await expandReviwPolicySection.click();
        const anniversary_Month = await this.findLocator(ReviewAndIssuePolicySection.Anniversary_Month);
        await anniversary_Month.click();
        const anniversaryMonth_January = await this.findLocator(ReviewAndIssuePolicySection.AnniversaryMonth_January);
        await anniversaryMonth_January.click();
        const enrollmentStartDate = await this.findLocator(ReviewAndIssuePolicySection.EnrollmentStartDate);
        await enrollmentStartDate.click();
        const SelectTodayOption = await this.findLocator(ReviewAndIssuePolicySection.TodayOption);
        await SelectTodayOption.click();
        const enrollmentEndDate = await this.findLocator(ReviewAndIssuePolicySection.EnrollmentEndDate);
        await enrollmentEndDate.click();
        const SelectTodayOptionForEndDate = await this.findLocator(ReviewAndIssuePolicySection.TodayOption);
        await SelectTodayOptionForEndDate.click();
        const enrollmentMethod = await this.findLocator(ReviewAndIssuePolicySection.EnrollmentMethod);
        await enrollmentMethod.click();
        const enrollmentMethod_OptionOnline = await this.findLocator(ReviewAndIssuePolicySection.EnrollmentMethod_OptionOnline);
        await enrollmentMethod_OptionOnline.click();
        const annualEnrollmentStart_Option = await this.findLocator(ReviewAndIssuePolicySection.AnnualEnrollmentStart_Option);
        await annualEnrollmentStart_Option.click();
        const annualEnrollmentStart_MonthJanuary = await this.findLocator(ReviewAndIssuePolicySection.AnnualEnrollmentStart_MonthJanuary);
        await annualEnrollmentStart_MonthJanuary.click();
        const annualEnrollmentEnd_Option = await this.findLocator(ReviewAndIssuePolicySection.AnnualEnrollmentEnd_Option);
        await annualEnrollmentEnd_Option.click();
        const annualEnrollmentEnd_MonthDecember = await this.findLocator(ReviewAndIssuePolicySection.AnnualEnrollmentEnd_MonthDecember);
        await annualEnrollmentEnd_MonthDecember.click();
        const enrollmentTechnology = await this.findLocator(ReviewAndIssuePolicySection.EnrollmentTechnology);
        await enrollmentTechnology.click();
        const enrollmentTechnology_Option = await this.findLocator(ReviewAndIssuePolicySection.EnrollmentTechnology_Option);
        await enrollmentTechnology_Option.click();
        const nextBtn = await this.findLocator(ReviewAndIssuePolicySection.NextBtn);
        await nextBtn.click();
        await this.waitForSpinner();
    }

    public async fillInCustomerDataSection(){
        const nextBtn = await this.findLocator(ReviewAndIssuePolicySection.NextBtn);
        await nextBtn.click();
        await this.waitForSpinner();
    }

    public async fillInDocumentsSection(){
        const nextBtn = await this.findLocator(ReviewAndIssuePolicySection.NextBtn);
        await nextBtn.click();
        await this.waitForSpinner();
    }

    public async issueQuote(){
        const issueBtn = await this.findLocator(ReviewAndIssuePolicySection.IssueBtn);
        await issueBtn.click();
        await this.waitForSpinner();
        const confirmBtn = await this.findLocator(AgenciesAndCompensationPageMetaData.Confirm_Btn);
        await confirmBtn.click();
        await this.waitForSpinner();
    }
}