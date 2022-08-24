
export default class Env {
    public static org_customer_init_url:string = 'api/customer/ORGANIZATIONCUSTOMER/v1/command/init';
    public static org_customer_write_url:string = 'api/customer/ORGANIZATIONCUSTOMER/v1/command/write';
    public static org_customer_load_url:string = 'api/customer/ORGANIZATIONCUSTOMER/v1/load/';
    public static ind_customer_init_url:string = 'api/customer/INDIVIDUALCUSTOMER/v1/command/init';
    public static ind_customer_write_url:string = 'api/customer/INDIVIDUALCUSTOMER/v1/command/write';
    public static ind_customer_load_url:string = 'api/customer/INDIVIDUALCUSTOMER/v1/load/';
    public static ccsr_login_url:string = 'login';
    public static cssr_signedin_url:string = 'dashboard';
    public static cssr_create_org_customer_url = 'customers/create/nonindividual';
    public static cssr_create_ind_customer_url = 'customers/create/individual';
    public static CRM_BASE_URL = process.env.CRM_BASE_URL;
    public static CSSR_BASE_URL = process.env.CSSR_BASE_URL;
    public static QA_USER_PASSWORD  = process.env.QA_USER_PASSWORD;
}