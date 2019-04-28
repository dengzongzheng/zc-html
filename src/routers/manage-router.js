import ManageIndex from '@pages/manage/index/index';

import AddGoods from '@pages/manage/add/add';
import DetailGoods from '@pages/manage/detail/detail';
import UploadPic from '@pages/manage/upload/upload';

const routers = [
    {
        path:'/manage',
        exact:true,
        component:ManageIndex,
        needAuth:true,
        routes:[
            { path: '/manage/add', component: AddGoods },
            { path: '/manage/detail', component: DetailGoods },
        ]
    },
    {
        path:'/upload',
        exact:true,
        component:UploadPic
    }
];

export default routers;
