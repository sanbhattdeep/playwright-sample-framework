export enum MemberQuoteTabMetaData {
    MemberQuoteTab_Btn = 'text=Member Quotes (0)',
    CreateMemberQuote_Btn = 'button:has-text("Create Member Quote")',   
}

export enum PolicyDetailsPageMetaData {
    WorkState_Select = 'div[role="combobox"] >> nth=2',
    WorkState_SelOption = 'li[role="option"]:has-text("AL")',
    EnrollmentType_Select = 'div[role="combobox"] >> nth=3',
    EnrollmentType_SelOption = 'text=New Hire',
    Next_Btn = 'button:has-text("Next")',
}

export enum AgencyAndCompensationPageMetaData {
    AddNewAgency_Btn = '[data-testid="add-button-top-right"]',
    SearchAgency_Btn = 'button:has-text("Search Agency") >> nth=1',
    AgencyName_Input = '#nameInput',
    Search_Btn = 'button:has-text("Search") >> nth=2',
    AganecyName_Radio = 'input[type="radio"]',
    Apply_Btn = 'button:has-text("Apply")',
    Confirm_Btn = 'button:has-text("Confirm") >> nth=1',
}

export enum InsuredPageMetaData {
    AddNewInsured_Btn = '[data-testid="add-button-top-right"]',
    InsuredFirstName_Input = 'text=First NameMiddle NameLast NameSearch Party >> input[type="text"] >> nth=0',
    InsuredLastName_Input = 'text=First NameMiddle NameLast NameSearch Party >> input[type="text"] >> nth=2',
    DateOfBirth_Btn = '(//i[@class="anticon ant-calendar-picker-icon"])[1]',
    DateOfBirth_Inputs = '//input[@class="ant-calendar-input " and @placeholder="Select date"]',
    AddNewAddress_Btn = '(//button[@class="ant-btn ant-btn-link ant-btn-sm"])[1]',
    AddressLine1_Input = '(//input[@id="quote.parties[0].personInfo.addressInfos[0].addressLine1"])[1]',
    ZIPCode_Input = '(//input[@id="quote.parties[0].personInfo.addressInfos[0].postalCode"])[1]',
    City_Input = '(//input[@id="quote.parties[0].personInfo.addressInfos[0].city"])[1]',
    State_Select = '(//div[@id="quote.parties[0].personInfo.addressInfos[0].stateProvinceCd"])[1]',
    State_SelOption = '//li[@title="AL"]',
    Confirm_BtnInsuredPage = '(//button[@class="ant-btn card-list__item--edit-confirm-btn eis-btn-reset-margin ant-btn-primary"])[1]',
    WorkRelatedInfo_Class = 'text=Class Original Hire Date >> div[role="combobox"]',
    Class_SelOption = '//li[@class="ant-select-dropdown-menu-item ant-select-dropdown-menu-item-active"]',
    OrginalHireDate = '[id="quote\.insured\.relationshipDetails\.originalHireDate"] [placeholder="Select date"]',
    OrginalHireDate_Today = 'text=Today',
    AnnualEarning_Input = '[id="quote\.insured\.relationshipDetails\.annualEarningsAmount"]',
    PayrollFrequency_Select = 'text=Employment Type Payroll Frequency >> div[role="combobox"] >> nth=1',
    PayrollFrequency_SelOption = '//li[@title="Monthly"]',
}

export enum CoveragesPageMetaData{
    ShortTermDisabilityPlus_Btn = 'text=Select PlanSHORT TERM DISABILITY >> svg[role="img"] >> nth=1',
    SelectPlan1_STD = 'input[type="checkbox"]',
    EnrollementDate_Btn = '[id="quote\.individualPackagingDetail\.plan\.coverageDefs\[0\]\.enrollmentDate"] [placeholder="Select date"]',
    PriorCoverageAmount_Input = '[id="quote\.individualPackagingDetail\.plan\.coverageDefs\[0\]\.benefitStructure\.priorCoverageAmount"]',
}

export enum PremiumSummaryPageMetaData{
    CalculatePremium_Btn = 'button:has-text("Calculate Premium")',
    
    MemberQuoteStatus = 'text=StatusActive',
}