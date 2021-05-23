import axios from 'axios';
import Config from 'react-native-config';


axios.defaults.baseURL=Config.API_URL;

//添加请求拦截器
axios.interceptors.request.use(function(config){ 
    console.log("request请求参数",config.params,"request请求方法",config.method,"request请求url",config.url)
    return config;
},function(err){
    return Promise.reject(err);
});

//添加响应拦截器
axios.interceptors.response.use(function(response){ 
    console.log("request响应数据",response.data)
    return response.data;
},function(err){
    return Promise.reject(err);
})