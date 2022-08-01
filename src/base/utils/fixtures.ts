import { expect, test as base } from '@playwright/test';
import LoginPage from '../../../pages/login.page';
import CreateCustomerPage from '../../../pages/createcustomer.page';
import Env from "../utils/Env";
import Logger from './Logger';


//override page fixture to include login
const test = base.extend<{
    createCustomerPage: CreateCustomerPage,
    logger: Logger
}>({
    page: [async ({ page }, use) => {
        //sign-in
        await page.goto(Env.cssr_base_url);
        await page.goto(`${Env.cssr_base_url}${Env.ccsr_login_url}`);
        const loginPage = new LoginPage(page);
        await loginPage.enterUserName();
        await loginPage.enterPassword();
        await loginPage.signIn();
        await expect(page).toHaveURL(`${Env.cssr_base_url}${Env.cssr_signedin_url}`);
        // Use signed-in page in the test.
        await use(page);
    }, { scope: 'test', timeout: 60000 } ],

    createCustomerPage: async ({page}, use) => {
        await use(new CreateCustomerPage(page));
    },
    logger:async ({}, use) => {
        await use(new Logger());
    }
});

export default test;
export { expect } from '@playwright/test';

