import Home from '../router/home/HomeAsync';
import Login from '../router/login/LoginAsync';
import Jsl from '../router/jsl/jslAsync';
export default [
    {
        path:'/',
        component:Home
    },{
        path:'/login',
        component:Login
    },{
        path:'/jsl',
        component:Jsl
    },]