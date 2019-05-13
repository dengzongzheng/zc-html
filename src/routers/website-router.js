import WebsiteIndex from '@pages/website/index/index';
import WebsiteDetail from '@pages/website/detail/detail';
import WebsiteList from '@pages/website/list/list';
import Search from '@pages/website/search/list';
import Login from '@pages/manage/login/login';
import About from '@pages/website/about/about';
import Test from '@pages/manage/test/test';
import Us from '@pages/website/us/us';
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
        exact:true,
        component:WebsiteDetail
    },
    {
        path:'/list',
        exact:true,
        component:WebsiteList
    },
    {
        path:'/about',
        exact:true,
        component:About
    },
    {
        path:'/login',
        exact:true,
        component:Login
    },
    {
        path: '/search',
        exact:true,
        component:Search
    },
    {
        path: '/us',
        exact:true,
        component:Us
    }
];

export default routers;
