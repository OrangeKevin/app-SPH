# 笔记

1:编程式路由跳转到当前路由(参数不变)，多次执行会抛出NavigationDuplicated的警告错误?
--路由跳转有两种形式:声明式导航、编程式导航
--声明式导航没有这类问题的，因为vue- router底层已经处理好了
1.1为什么编程式导航进行路由跳转的时候，就有这种警告错误那?
"vue-router": "^3.5.3": 最新的vue-router引入promise
1.2通过给push方法传递相应的成功、失败的回调函数，可以捕获到当前错误，可以解决。
1.3通过底部的代码，可以

2.三级联动拆分

PostMan 请求接口

3.axios二次封装
为什么要进行二次封装？
请求拦截器：可以在发起请求之前处理一些业务
响应拦截器：当服务器数据返回后，可以处理一些事情

在项目当中有一个文件夹api一般是写接口的

4.跨域问题
什么是跨域：协议、域名、端口号不同请求，称之为跨域
<http://localhost:8080/#/home> ----前端项目本地服务器
<http://39.38.123.211>         ----后台服务器

JSONP、CORS、代理

5.进度条使用
start 进度条开始，写在请求拦截器
done 进度条结束，写在响应拦截器

6.vuex状态管理库
vuex是什么
vuex是一个官方提供的插件，是一个状态管理库，集中式管理项目中组件共用的数据
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//state:仓库存储数据的地方
const state = {}
//mutations:修改state的唯一手段
const mutations = {}
//actions:可以书写自己的业务逻辑，也可以书写异步
const actions = {}
//getters:可以理解为vuex的计算属性,用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {}

```javascript
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

vuex实现模块式开发
如果项目过大，组件过多，接口也很多，数据也很多
```

[V$DIAG_ALERT_EXT](https://oracle-base.com/articles/11g/read-alter-log-from-sql#v$diag_alert_ext)

这是一个链接 [Markdown语法](https://markdow$n.com.cn)
$xxx$
