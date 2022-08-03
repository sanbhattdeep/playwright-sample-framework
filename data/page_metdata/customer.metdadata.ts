export enum CreateCustomerTypeMetaData {
    Org_Customer = 'input[value="NONINDV"]',
    Ind_Customer = 'input[value="INDV"]',
    Customer_Save_Success_Banner = 'text=Customer saved successfully!',
} 

export enum GeneralInfoMetaData {
    legalName = '[id="customer\\.details\\.legalEntity\\.legalName"]',
    firstName = '[id="customer\\.details\\.person\\.firstName"]',
    lastName = '[id="customer\\.details\\.person\\.lastName"]',
}

export enum ContactInfoAddressMetadata {
   addNewAddress = 'button:has-text("Add New Address")',
   addressTypeSpan = 'text=Type Make PreferredDo Not Solicit >> div[role="combobox"] span',
   addressTypeInput = 'text=Type Make PreferredDo Not Solicit >> input',
   addressTypeSelect = '[data-testid="select-input-option"]',
   makePreferred = '[id="customer\\.communicationInfo\\.addresses\\[0\\]\\.preferred"]',
   zipCode = '[id="customer\\.communicationInfo\\.addresses\\[0\\]\\.location.postalCode"]',
   addressLine1 = '[id="customer\\.communicationInfo\\.addresses\\[0\\]\\.location\\.addressLine1"]',
   city = '[id="customer\\.communicationInfo\\.addresses\\[0\\]\\.location.city"]',
   stateProvinceDiv = 'text=CityState / Province >> div[role="combobox"] div',
   stateProvinceDivInput = 'text=CityState / Province >> div[role="combobox"] input',
   stateProvinceState = 'li[title="State"]',
}

export enum CustomerMetaData {
    customerName = 'div.gen-customer-overview-name',
}

export enum SelectProductTypeMetaData{
   globalNavigationButton = '[data-testid="globalNavigation"]',
   quotesPlusButton = 'button >> nth=3',
   productType_STD = '.gen-products-dialog-card__content >> nth=0',
   continue_Btn = 'button:has-text("Continue")',
}