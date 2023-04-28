// Admin page
import AdminHomePage from '~/pages/AdminPages/Home';
import ManageOrder from '~/pages/AdminPages/ManageOrder';
import OrderDetail from '~/pages/AdminPages/OrderDetails';
import ManageBookView from '~/pages/AdminPages/ManageBookView';
import ManageBookAdd from '~/pages/AdminPages/CRUDBook/ManageBookAdd';

//Customer page
import HomePage from '~/pages/CustomerPages/Home';
import SearchPage from '~/pages/CustomerPages/searchBook/Search';
import Cart from '~/pages/CustomerPages/CartPage/Cart';
import Payment from '~/pages/CustomerPages/Paymentpage/Payment';
import BookDetail from '~/pages/CustomerPages/BookDetail/BookDetail';

import LogIn from '~/pages/Authorization/LogIn';
import LogInAdmin from '~/pages/Authorization/LogInAdmin';

import ManageCustomerView from '~/pages/AdminPages/ManageCustomerView';
import ManageCustomerAdd from '~/pages/AdminPages/CRUDCustomer/ManageCustomerAdd';

import Page1 from '~/pages/CustomerPages/Support/Page1';
import Page2 from '~/pages/CustomerPages/Support/Page2';
import Page3 from '~/pages/CustomerPages/Support/Page3';

const routes = [
    //Authorization
    { path: '/LogIn', component: LogIn },
    { path: '/LogInAdmin', component: LogInAdmin },

    //support Customer
    { path: '/cau-hoi-thuong-gap', component: Page1 },
    { path: '/chinh-sach-doi-tra-hang', component: Page2 },
    { path: '/tieu-chuan-binh-luan', component: Page3 },

    //customer
    { path: '/', component: HomePage },
    { path: '/search', component: SearchPage },
    { path: '/cart', component: Cart },
    { path: '/payment', component: Payment },
    { path: '/bookDetail', component: BookDetail },

    // admin
    { path: '/admin', component: AdminHomePage },
    { path: '/manage-order', component: ManageOrder },
    { path: '/manage-book', component: ManageBookView },
    { path: '/manage-book/add', component: ManageBookAdd },
    { path: '/manage-order/details', component: OrderDetail },
    { path: '/member', component: ManageCustomerView },
    { path: '/member/add', component: ManageCustomerAdd },
];

export default routes;
