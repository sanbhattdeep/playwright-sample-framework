import { Page } from "@playwright/test";
import { CreateCustomerTypeMetaData } from "../data/page_metdata/customer.metdadata";
import Wrapper from "../src/base/Wrapper";
import { CommonMetaData } from "../data/page_metdata/common.metadata";
import * as orgcustomer_testdata from "../data/backend/ORGCUSTOMER_WRITE_data.json";
import { GeneralInfoMetaData } from "../data/page_metdata/customer.metdadata";
import { ContactInfoAddressMetadata } from "../data/page_metdata/customer.metdadata";
import { SelectProductTypeMetaData } from "../data/page_metdata/customer.metdadata";
import { expect } from "@playwright/test";
import Utils from "../utils/utils";

export default class CreateCustomerPage extends Wrapper {

    constructor(page: Page) {
        super(page)
    }

    public async doAddNew() {
        const Add_New_Btn = await this.findLocator(CommonMetaData.Add_New_Btn);
        await Add_New_Btn.click();
    }

    public async doOk() {
        const Ok_Btn = await this.findLocator(CommonMetaData.Ok_Btn);
        await Ok_Btn.click();
    }


    public async selectIndCustomerTye() {
        this.doAddNew();
        const indCustomerType = await this.findLocator(CreateCustomerTypeMetaData.Ind_Customer);
        await indCustomerType.check();
        this.doOk();
    }

    public async selectOrgCustomerTye() {
        this.doAddNew();
        const orgCustomerType = await this.findLocator(CreateCustomerTypeMetaData.Org_Customer);
        await orgCustomerType.check();
        this.doOk();
    }

    public async fillGeneralInfoLegalName() {
        const legalName = await this.findLocator(GeneralInfoMetaData.legalName);
        await legalName.click();
        await legalName.fill(Utils.generateName());
    }

    public async fillGeneralInfoFirstName() {
        const firstName = await this.findLocator(GeneralInfoMetaData.firstName);
        await firstName.click();
        await firstName.fill(Utils.generateFirstName());
    }

    public async fillGeneralInfoLastName() {
        const firstName = await this.findLocator(GeneralInfoMetaData.lastName);
        await firstName.click();
        await firstName.fill(Utils.generateLastName());
    }

    public async fillContactAddress(addType:string) {
        //click add new address
        const addNewAddress_Btn = await this.findLocator(ContactInfoAddressMetadata.addNewAddress);
        await addNewAddress_Btn.click();

        //Set Address type to Legal/Mailing
        let addressType = await this.findLocator(ContactInfoAddressMetadata.addressTypeSpan);
        await addressType.nth(1).click();
        addressType = await this.findLocator(ContactInfoAddressMetadata.addressTypeInput);
        await addressType.fill(addType);
        addressType = await this.findLocator(ContactInfoAddressMetadata.addressTypeSelect);
        addressType.click();


        //make address as preferred
        const makePreferred = await this.findLocator(ContactInfoAddressMetadata.makePreferred);
        await makePreferred.click();

        //fill zip code
        const zipCode = await this.findLocator(ContactInfoAddressMetadata.zipCode);
        await zipCode.click();
        await zipCode.fill(orgcustomer_testdata.body.customer.communicationInfo.addresses[0].location.postalCode);

        //fill address line 1
        const addressLine1 = await this.findLocator(ContactInfoAddressMetadata.addressLine1);
        await addressLine1.click();
        await addressLine1.fill(orgcustomer_testdata.body.customer.communicationInfo.addresses[0].location.addressLine1);

        //fill city
        const city = await this.findLocator(ContactInfoAddressMetadata.city);
        await city.click();
        await city.fill(orgcustomer_testdata.body.customer.communicationInfo.addresses[0].location.city);

        //fill State/Province and confirm
        let stateCd = orgcustomer_testdata.body.customer.communicationInfo.addresses[0].location.stateProvinceCd;
        let state = await this.findLocator(ContactInfoAddressMetadata.stateProvinceDiv);
        await state.first().click();
        state = await this.findLocator(ContactInfoAddressMetadata.stateProvinceDivInput);
        await state.fill(stateCd);
        state = await this.findLocator(ContactInfoAddressMetadata.stateProvinceState.replace('State', stateCd))
        await state.click();
    }

    public async doConfirm() {
        const Confirm_Btn = await this.findLocator(CommonMetaData.Confirm_Btn);
        await Confirm_Btn.click();
    }

    public async doSaveAndExit() {
        //Save and Exit the changes
        const Save_Exit_Btn = await this.findLocator(CommonMetaData.Save_Exit_Btn);
        await Save_Exit_Btn.click();
    }

    public async verifyCustomerSuccessBanner() {
        //Verify Customer Save Success Banner
        const Customer_Save_Success_Banner = await this.findLocator(CreateCustomerTypeMetaData.Customer_Save_Success_Banner);
        await expect(Customer_Save_Success_Banner).toBeVisible();
    }

    public async selectProductType(){
        //Select Product Type
        console.log("Click on Global Navigation Button and navigate to Select Product Screen");
        const GlobalNavigationBtn = await this.findLocator(SelectProductTypeMetaData.globalNavigationButton);
        await GlobalNavigationBtn.click();
        const QuotesPlusBtn = await this.findLocator(SelectProductTypeMetaData.quotesPlusButton);
        await QuotesPlusBtn.click();
        const SelectProductType = await this.findLocator(SelectProductTypeMetaData.productType_STD);
        await SelectProductType.click();
        const ContinueBtn = await this.findLocator(SelectProductTypeMetaData.continue_Btn);
        await ContinueBtn.click();
        console.log("STD Product is selected and navigated to General Information Section");
    }
}