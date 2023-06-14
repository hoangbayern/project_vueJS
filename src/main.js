import { createApp } from 'vue'
import router from './router/index.js'
import axios from 'axios'
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
import {
    InputNumber,
    Input,
    Select,
    Avatar,
    Table,
    Card,
    Menu,
    List,
    Drawer,
    Button,
    message
} from 'ant-design-vue'
import App from './App.vue'

import 'ant-design-vue/dist/antd.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-utilities.min.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App);
app.use(VueSweetalert2);
app.use(InputNumber);
app.use(Input);
app.use(Select);
app.use(Avatar);
app.use(Table);
app.use(Card);
app.use(router);
app.use(Button);
app.use(Drawer);
app.use(List);
app.use(Menu);
app.mount('#app');

app.config.globalProperties.$message = message;