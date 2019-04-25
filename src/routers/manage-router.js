import ManageIndex from '@pages/manage/index/index';
import Login from '@pages/manage/login/login';
import AddGoods from '@pages/manage/add/add';

const routers = [
    {
        path:'/manage',
        exact:true,
        component:ManageIndex,
        childRoutes:[
            { path: '/add', component: AddGoods },
        ]
    },
    {
        path:'/login',
        exact:true,
        component:Login
    }
];

export default routers;
