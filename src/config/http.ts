import axios from 'axios';
import Config from 'react-native-config';


axios.defaults.baseURL=Config.API_URL;

//添加请求拦截器
axios.interceptors.request.use(function(config){ 
    return config;
},function(err){
    return Promise.reject(err);
});

//添加响应拦截器
axios.interceptors.response.use(function(response){ 
    return response.data;
},function(err){
    return Promise.reject(err);
})