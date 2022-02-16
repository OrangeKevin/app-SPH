import axios from "axios";
//引入进度条及样式
import nprogress from 'nprogress'
import "nprogress/nprogress.css";

const requests = axios.create({
  //基础路径，发请求的时候，路径当中会出现api
  baseURL:'/api',
  //请求超时时间
  timeout:5000
})
//请求拦截器：再发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config)=>{
  //config：配置对象，对象里面有一个属性很重要，header请求头
  nprogress.start();
  return config
})
//响应拦截器：在服务器响应后，处理一些事情
requests.interceptors.response.use((res)=>{
  //进度条结束
  nprogress.done();
  return res.data
},(err)=>{
  //响应失败的回调函数
  return Promise.reject(new Error('faile'))
})


export default requests