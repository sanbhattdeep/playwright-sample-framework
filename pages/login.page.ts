import Wrapper from "../src/base/Wrapper";
import { Page } from "@playwright/test";
import Env from "../src/base/utils/Env";
import * as LoginMetaData from "../data/page_metdata/loginpage.metadata";

export default class LoginPage extends Wrapper {

    constructor(public page: Page) {
        super(page);
    }

    public async enterUserName() {
        const userName = await this.findLocator(LoginMetaData.LoginPage.userName);
        await userName.click();
        await userName.fill(Env.QA_USER_PASSWORD);
    }

    public async enterPassword() {
        const enterPassword = await this.findLocator(LoginMetaData.LoginPage.Password);
        await enterPassword.click();
        await enterPassword.fill(Env.QA_USER_PASSWORD);
        await enterPassword.press('Tab');
    }

    public async signIn() {
        const signIn = await this.findLocator(LoginMetaData.LoginPage.signIn);
        await signIn.click();
    }

    public async logIn() {
        try {
            await this.enterUserName();
            await this.enterPassword();
            await this.signIn();
        }
        catch (err) {
            console.log("Error while Logging In " + err);
        }
    }
}