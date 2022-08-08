import { expect, test as base } from '@playwright/test';
import LoginPage from '../../pages/login.page';
import CreateCustomerPage from '../../pages/createcustomer.page';
import ClassManagementPage from '../../pages/classmanagement.page';
import CreateNewQuotePage from '../../pages/createnewquote.page';
import CustomerPortfolioPage from '../../pages/customerportfolio.page';
import Env from "../base/utils/Env";
import Logger from '../base/utils/Logger';


//override page fixture to include login
const test = base.extend<{
    createCustomerPage: CreateCustomerPage
    classManagementPage: ClassManagementPage
    createNewQuotePage: CreateNewQuotePage
    logger: Logger
    customerPortfolioPage: CustomerPortfolioPage

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
    classManagementPage: async ({page}, use) => {
        await use(new ClassManagementPage(page));
    },
    createNewQuotePage: async ({page}, use) => {
        await use(new CreateNewQuotePage(page));
    },
    logger:async ({}, use) => {
        await use(new Logger());
    },
    customerPortfolioPage: async ({page}, use) => {
        await use(new CustomerPortfolioPage(page));
    }
});

export default test;
export { expect } from '@playwright/test';

