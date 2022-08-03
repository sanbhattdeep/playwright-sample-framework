export enum ClassManagementPage {
    CreateNewQuote_Btn = 'button:has-text("Create a new Quote")',
    SelectProduct_STD = '.ant-card.eis-card.gen-products-dialog-card > .ant-card-body >> nth=0',
    Continue_Btn = 'button:has-text("Continue")', 
}

export enum PolicySummaryPageMetaData {
    DeliveryModel_SelOption = '(//div[@class="ant-select-selection__rendered"])[2]',
    DeliveryModel_Input = '//input[@id="quote.methodOfDelivery"]',
    DeliveryModel_GroupOption = '//li[@title="Group/Voluntary"]',
    SitusState_SelOption = '(//div[@class="ant-select-selection__rendered"])[3]',
    SitusState_Input = '//input[@id="quote.riskStateCd"]',
    SitusState_ALOption = '//li[@title="AL"]',
    Save_Btn = '//button[@class="ant-btn gen-data-gather-header-save-btn"]',
}

export enum AgenciesAndCompensationPageMetaData {
    AgenciesAndCompensation_Tab = 'text=Agencies & Compensation',
    AddNewAgency_Btn = 'button:has-text("Add New Agency")',
    SearchAgency_Btn = 'button:has-text("Search Agency")',
    Search_Btn = '//button[@class="ant-btn gen-agency-search-panel-search-button"]',
    AgencyName_Input = '#nameInput',
    AgencyName_RadioBtn = 'input[type="radio"]',
    Apply_Btn = 'button:has-text("Apply")',
    AddNewCompensastion_Btn = 'button:has-text("+ Add New Compensation")',
    Confirm_Btn = 'button:has-text("Confirm")',
}

export enum PlansTabMetaData{
    PlanTab = 'div[role="tab"]:has-text("Plans")',
    SelectPlan_PlanTab = '#plus-in-circle',
    SelectPlan1_STD = 'text=STD Plan 1Plan Description:STD Plan 1Coverages:STD Core, STD Buy UpSTD Plan 2Pla >> input[type="checkbox"] >> nth=0',
}

export enum ClassSelectionMetaData{
    ClassSelection_RadioBtn = 'text=Class SelectionClass 78 >> input[type="checkbox"]',
    ConributionBasis = '(//span[@class="ant-form-item-children"]//div[@class="ant-select-show-arrow ant-select ant-select-enabled ant-select-allow-clear"])[5]',
    ConributionBasis_SelOption = 'li[role="option"]:has-text("Percent")',
}

export enum DeleteByUpMetaData{
    DeleteByUp_Btn = 'div:nth-child(3) > .gen-plans-menu-item > .gen-plans-menu-item-header-wrapper > .gen-plans-menu-item-icons',
}

export enum QuotePremiumSectionMetaData{
    Arrow_Btn = 'text=STD CoreNon-contributory0%12 >> svg[role="img"]',
    NumberOfParticipant_Input = 'text=STD CoreNon-contributory0%12Class# of ParticipantsTotal VolumeRateMonthly Premiu >> input',
    CalculateRate_Btn = 'button:has-text("Calculate Rates")',
    AdjustRate_Btn = '//span[@class="eis-btn-content" and contains(text(),"Adjust Rates")]',
    CancelBtn_AdjustRateScreen = '//div[@class="gen-rate-adjust-buttons-footer"]//button[@type="button"]//span[@class="eis-btn-content" and contains(text(),"Cancel")]',
}

export enum ProposeQuoteMetaData{
    Quotes_CheckBox = '//button[@class="ant-btn gen-customer-control gen-customer-actions-control ant-dropdown-trigger"]',
    Action_Btn = 'button:has-text("Action")',
    ReadyToPropose_Option = '//li[@class="ant-dropdown-menu-item" and contains(text(),"Ready to Propose")]',
    Status_ReadyForPropose = 'text=Ready For Proposal',
    Propose_Option = '//li[@class="ant-dropdown-menu-item" and contains(text(),"Propose")]',
    Status_Proposed = 'text=Proposed',
    MarkAsSold_Option = '//li[@class="ant-dropdown-menu-item" and contains(text(),"Mark as Sold")]',
    Status_Sold = 'p:has-text("Sold")',
    Issue_Option = '//li[@class="ant-dropdown-menu-item" and contains(text(),"Issue")]',
    ReviewAndIssuePolicy = 'text=Review & Issue Policy',
}

export enum ReviewAndIssuePolicySection{
    ExpandReviewAndIssuePolicySection = '//div[@class="ant-collapse-header" and @role="button"]',
    Anniversary_Month = '.ant-select-show-arrow > .ant-select-selection > .ant-select-selection__rendered >> nth=0',
    AnniversaryMonth_January = 'li[role="option"]:has-text("January")',
    EnrollmentStartDate = '[id="quote\.detailEnrollment\.enrollmentStartDateInitial"] [placeholder="Select date"]',
    TodayOption = 'text=Today',
    EnrollmentEndDate = '[id="quote\.detailEnrollment\.enrollmentEndDateInitial"] [placeholder="Select date"]',
    EnrollmentMethod = '[id="quote\.detailEnrollment\.enrollmentMethod"] > .ant-select-selection',
    EnrollmentMethod_OptionOnline = '//li[@title="Online"]',
    EnrollmentTechnology = '[id="quote\.detailEnrollment\.enrollmentTechnology"] > .ant-select-selection',
    EnrollmentTechnology_Option = '//li[@title="Enrollment Partner 1"]',
    AnnualEnrollmentStart_Option = '(//div[@class="ant-select-show-arrow ant-select ant-select-enabled"])[3]',
    AnnualEnrollmentStart_MonthJanuary = '//li[@class="ant-select-dropdown-menu-item ant-select-dropdown-menu-item-active" and contains (text(),"January")]',
    AnnualEnrollmentEnd_Option = '(//div[@class="ant-select-show-arrow ant-select ant-select-enabled"]//div[@class="ant-select-selection__rendered"])[4]',
    AnnualEnrollmentEnd_MonthDecember = '(//li[@class="ant-select-dropdown-menu-item" and contains(text(),"June")])[3]',
    NextBtn = 'button:has-text("Next")',
    IssueBtn = 'button:has-text("Issue")',
}