import Wrapper from "../src/base/Wrapper";
import { Page } from "@playwright/test";
import { MemberQuoteTabMetaData } from "../data/page_metdata/memberquote.metadata";
import { PolicyDetailsPageMetaData } from "../data/page_metdata/memberquote.metadata";
import { InsuredPageMetaData } from "../data/page_metdata/memberquote.metadata";
import { CoveragesPageMetaData } from "../data/page_metdata/memberquote.metadata";
import { PremiumSummaryPageMetaData } from "../data/page_metdata/memberquote.metadata";
import { CommonMetaData } from "../data/page_metdata/common.metadata";
import Utils from "../utils/utils";
import { expect } from "@playwright/test";
import TestData from "../src/base/utils/TestData";
import CommonHeaderPage from "./commonheader.page";

export default class CreateMemberQuotePage extends Wrapper {

    private commonHeaderPage:CommonHeaderPage;

    constructor(public page: Page) {
        super(page);
        this.commonHeaderPage = new CommonHeaderPage(page);
    }

    public async doClickCreateMemberQuote(){
        const memberQuoteTab_Btn = await this.findLocator(MemberQuoteTabMetaData.MemberQuoteTab_Btn);
        await memberQuoteTab_Btn.click();
        await this.waitForSpinner();
        const createNewMemberQuote_Btn = await this.findLocator(MemberQuoteTabMetaData.CreateMemberQuote_Btn);
        await createNewMemberQuote_Btn.click();
        await this.waitForSpinner();
    }

    public async fillPolicyDetailsSection(){
        await this.commonHeaderPage.clickLeftArrow();
        const workState_Select = await this.findLocator(PolicyDetailsPageMetaData.WorkState_Select);
        await workState_Select.click();
        const workState_SelOption = await this.findLocator(PolicyDetailsPageMetaData.WorkState_SelOption);
        await workState_SelOption.click();
        const enrollmentType_Select = await this.findLocator(PolicyDetailsPageMetaData.EnrollmentType_Select);
        await enrollmentType_Select.click();
        const enrollmentType_SelOption = await this.findLocator(PolicyDetailsPageMetaData.EnrollmentType_SelOption);
        await enrollmentType_SelOption.click();
        this.commonHeaderPage.doSave();
        const next_Btn = await this.findLocator(PolicyDetailsPageMetaData.Next_Btn);
        await next_Btn.click();
        await this.waitForSpinner();
    }

    public async doNext(){
        //click Next Button on Agency & Compensation Tab as Details are filled during Master quote creation
        const next_Btn = await this.findLocator(PolicyDetailsPageMetaData.Next_Btn);
        await next_Btn.click();
        await this.waitForSpinner(); 
    }

    public async doClickAddNewInsured(){
         //click on Add New Insured
         const addNewInsured_Btn = await this.findLocator(InsuredPageMetaData.AddNewInsured_Btn);
         await addNewInsured_Btn.click();
         await this.waitForSpinner();
    }

    public async fillInsuredGeneralInfoFirstName(){
        const insuredFirstName_Input = await this.findLocator(InsuredPageMetaData.InsuredFirstName_Input);
        await insuredFirstName_Input.click();
        await insuredFirstName_Input.fill(Utils.generateFirstName());
    }

    public async fillInsuredGeneralInfoLastName(){
        const insuredLastName_Input = await this.findLocator(InsuredPageMetaData.InsuredLastName_Input);
        await insuredLastName_Input.click();
        await insuredLastName_Input.fill(Utils.generateFirstName());
    }

    public async fillInsuredGeneralInfoDOB(testData:TestData){
        const dateOfBirth_Btn = await this.findLocator(InsuredPageMetaData.DateOfBirth_Btn);
        await dateOfBirth_Btn.click();
        const dateOfBirth_Inputs = await this.findLocator(InsuredPageMetaData.DateOfBirth_Inputs);
        await dateOfBirth_Inputs.click();
        await this.fill(dateOfBirth_Inputs,testData.getTestData().InsuredGeneralInfo.DOB.toString());
    }

    public async fillAddNewAddress(testData:TestData){
        const addNewAddress_Btn = await this.findLocator(InsuredPageMetaData.AddNewAddress_Btn);
        await addNewAddress_Btn.click();
        await addNewAddress_Btn.click();
        //Enter Address
        const addressLine1_Input = await this.findLocator(InsuredPageMetaData.AddressLine1_Input);
        await addressLine1_Input.click();
        await this.fill(addressLine1_Input,testData.getTestData().InsuredGeneralInfo.Address.toString());
        //Enter ZIP Code
        const zipCode_Input = await this.findLocator(InsuredPageMetaData.ZIPCode_Input);
        await zipCode_Input.click();
        await this.fill(zipCode_Input,testData.getTestData().InsuredGeneralInfo.ZIPCode.toString());
        //Enter City Name
        const city_Input = await this.findLocator(InsuredPageMetaData.City_Input);
        await city_Input.click();
        await this.fill(city_Input,testData.getTestData().InsuredGeneralInfo.City.toString());
        //Select State
        const state_Select = await this.findLocator(InsuredPageMetaData.State_Select);
        await state_Select.click();
        const state_SelOption = await this.findLocator(InsuredPageMetaData.State_SelOption);
        await state_SelOption.click();
        //Click on Confirm Button to confirm the entered Address
        const confirm_BtnInsuredPage = await this.findLocator(InsuredPageMetaData.Confirm_BtnInsuredPage);
        await confirm_BtnInsuredPage.click();
        await this.waitForSpinner();
    }

    public async fillWorkRelatedInfo(testData:TestData){
        const workRelatedInfo_Class = await this.findLocator(InsuredPageMetaData.WorkRelatedInfo_Class);
        await workRelatedInfo_Class.click();
        const class_SelOption = await this.findLocator(InsuredPageMetaData.Class_SelOption);
        await class_SelOption.click();
        const orginalHireDate = await this.findLocator(InsuredPageMetaData.OrginalHireDate);
        await orginalHireDate.click();
        const orginalHireDate_Today = await this.findLocator(InsuredPageMetaData.OrginalHireDate_Today);
        await orginalHireDate_Today.click();
        const payrollFrequency_Select = await this.findLocator(InsuredPageMetaData.PayrollFrequency_Select);
        await payrollFrequency_Select.click();
        const payrollFrequency_SelOption = await this.findLocator(InsuredPageMetaData.PayrollFrequency_SelOption);
        await payrollFrequency_SelOption.click();
        const annualEarning_Input = await this.findLocator(InsuredPageMetaData.AnnualEarning_Input);
        await annualEarning_Input.click();
        await annualEarning_Input.press('Backspace');
        await annualEarning_Input.press('Backspace');
        await annualEarning_Input.press('Backspace');
        await annualEarning_Input.press('Backspace');
        await this.fill(annualEarning_Input,testData.getTestData().InsuredWorkRelatedInfo.AnnualEarning.toString());
        await this.commonHeaderPage.doSave();
        const next_Btn = await this.findLocator(PolicyDetailsPageMetaData.Next_Btn);
        await next_Btn.click();
        await this.waitForSpinner();
    }

    public async selectCoverages(testData:TestData){
        const shortTermDisabilityPlus_Btn = await this.findLocator(CoveragesPageMetaData.ShortTermDisabilityPlus_Btn);
        await shortTermDisabilityPlus_Btn.click();
        const selectPlan1_STD = await this.findLocator(CoveragesPageMetaData.SelectPlan1_STD);
        await selectPlan1_STD.click();
        const continue_Btn = await this.findLocator(CommonMetaData.Continue_Btn);
        await continue_Btn.click();
        const enrollementDate_Btn = await this.findLocator(CoveragesPageMetaData.EnrollementDate_Btn);
        await enrollementDate_Btn.click();
        const orginalHireDate_Today = await this.findLocator(InsuredPageMetaData.OrginalHireDate_Today);
        await orginalHireDate_Today.click();
        const priorCoverageAmount_Input = await this.findLocator(CoveragesPageMetaData.PriorCoverageAmount_Input);
        await priorCoverageAmount_Input.click();
        await priorCoverageAmount_Input.press('Backspace');
        await priorCoverageAmount_Input.press('Backspace');
        await priorCoverageAmount_Input.press('Backspace');
        await priorCoverageAmount_Input.press('Backspace');
        await this.fill(priorCoverageAmount_Input,testData.getTestData().CoverageDetailsSec.PriorCoverageAmount.toString());
        await this.commonHeaderPage.doSave();
        const next_Btn = await this.findLocator(PolicyDetailsPageMetaData.Next_Btn);
        await next_Btn.click();
        await this.waitForSpinner();
    }

    public async issueMemberQuote(){
        //Click on Calculate Premium Button
        const calculatePremium_Btn = await this.findLocator(PremiumSummaryPageMetaData.CalculatePremium_Btn);
        await calculatePremium_Btn.click();
        //Click on Issue Button to issue member quote
        const memberQuoteIssue_Btn = await this.findLocator(CommonMetaData.Issue_Btn);
        await memberQuoteIssue_Btn.click();
        const confirmIssue_Btn = await this.findLocator(CommonMetaData.Confirm_Btn);
        await confirmIssue_Btn.click();
        await this.waitForSpinner();
    }

    public async verifyMemberQuoteStatus(){
        const memberQuoteStatus = await this.findLocator(PremiumSummaryPageMetaData.MemberQuoteStatus);
        await expect(memberQuoteStatus).toBeVisible();
    }
}