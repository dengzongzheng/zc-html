import WebsiteIndex from '@pages/website/index/index';
import WebsiteDetail from '@pages/website/detail/detail';
import WebsiteList from '@pages/website/list/list';
import Login from '@pages/manage/login/login';
const routers = [
    {
        path:'/',
        exact:true,
        component:WebsiteIndex
    },
    {
        path:'/index',
        exact:true,
        component:WebsiteIndex
    },
    {
        path:'/detail',
        exact:false,
        component:WebsiteDetail
    },
    {
        path:'/list',
        exact:true,
        component:WebsiteList
    },
    {
        path:'/login',
        exact:true,
        component:Login
    }
];

export default routers;
