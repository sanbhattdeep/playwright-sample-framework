
export default class Env {
    public static crm_base_url:string = 'https://crm-app-genesis.lagrins.pwcus.cloud/';
    public static org_customer_init_url:string = 'api/customer/ORGANIZATIONCUSTOMER/v1/command/init';
    public static org_customer_write_url:string = 'api/customer/ORGANIZATIONCUSTOMER/v1/command/write';
    public static org_customer_load_url:string = 'api/customer/ORGANIZATIONCUSTOMER/v1/load/';
    public static ind_customer_init_url:string = 'api/customer/INDIVIDUALCUSTOMER/v1/command/init';
    public static ind_customer_write_url:string = 'api/customer/INDIVIDUALCUSTOMER/v1/command/write';
    public static ind_customer_load_url:string = 'api/customer/INDIVIDUALCUSTOMER/v1/load/';
    public static cssr_base_url:string = 'https://cssr-app-genesis.lagrins.pwcus.cloud/';
    public static ccsr_login_url:string = 'login';
    public static cssr_signedin_url:string = 'dashboard';
    public static cssr_create_org_customer_url = 'customers/create/nonindividual';
    public static cssr_create_ind_customer_url = 'customers/create/individual';
    public static qa_user_password:string = 'qa';
}