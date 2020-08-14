import Vue from 'vue'
import App from './App'

import uView from "uview-ui";
Vue.use(uView);

//自定义全局方法
import MyPlugin from '@/tools/myPlugin' 
Vue.use(MyPlugin);

Vue.config.productionTip = false

App.mpType = 'app'

import config from '@/config/index.js';
Vue.prototype.$config = config;


const app = new Vue({
    ...App
})
app.$mount()

import http from '@/http/serve/interApi.js';//请求拦截器
Vue.use(http, app);
import api from '@/http/serve/api.js';//接口集中管理
Vue.use(api, app);



import customButton from '@/components/custom-button/custom-button.vue';
Vue.component('custom-button', customButton);
