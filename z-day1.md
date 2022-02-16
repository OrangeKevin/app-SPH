# 笔记

## 1:项目基本文件

public文件夹：一般放置一些静态资源(图片)，需要注意放在public文件夹的静态资源，webpack进行打包的时候，会原封不动打包到dist文件夹中

src文件夹(程序员源代码文件夹):
    assets文件夹: 一般也是放置静态资源（一般放置对各组件共用的静态资源），需要注意，放置在asses文件夹里面的静态资源，在webpack打包时，webpack会把静态资源当做一个模块，打包到JS文件里面。
    components文件夹: 一般放置的是非路由组件(全局组件)
    App.vue: 唯一的根组件，vue当中的组件（.vue）
    main.js: 程序的入口文件，也是整个程序当中最先执行的文件

babel.config.js: 配置文件(babel相关)

package.json文件: 项目的“身份证”，记录项目叫什么，怎么运行，使用了那些依赖

package-lock.json: 缓存性文件，

README.md: 项目说明性文件

## 2:项目的其他配置

2.1项目运行的时候，让浏览器自动打开
serve后加--open

2.2ES-Lint关闭
---在根目录下，创建一个vue.config.js

```javascript
module.exports = {
    //关闭esLint
    lintOnSave: false
}
```

2.3 src文件夹简写方法,配置别名 @代表src文件夹
jsconfig.json配置别名@提示

```javascript
{
    "compilerOptions": {
      "baseUrl": "./",
      "paths": {
        "@/*":["src/*"]
      }
    },
    "exclude": ["node_modules", "dist"]
}
```

## 3.项目路由的分析

前端路由: KV键值对。
key:URL(地址栏中的路径)
value:相应的路由组件
注意:项目上中下结构

路由组件：
Home首页路由组件、Search路由组件、login登录组件、Register注册组件
非路由组件:
Header头部组件、Footer底部组件(登录注册页没有)

## 4.完成非路由组件Header、Footer

开发项目步骤
1.书写静态页面
2.拆分组件
3.获取服务器数据动态展示
4.完成相应的动态业务逻辑

注意1.组件图片，样式，资源
注意2.安装less lessloader style写lang

4.1使用组件的步骤（非路由组件）
创建或定义
引入
注册
使用

## 5.路由组件的搭建

在上面分析的时候，路由组件应该有四个Home、Search、Login、Register
components文件夹📂放非路由组件/全局组件
pages|views文件夹放路由组件

5.1配置路由
项目当中配置的路由一般放置在router文件夹中

5.2 总结
路由组件与非路由组件区别
1.路由组件一般放置在pages|views文件夹，非路由组件一般放置在components文件夹中
2.路由组件一般需要在router文件夹中进行注册（使用的即为组件的名字），非路由组件在使用的时候，一般都是以标签的形式使用
3.注册完路由，不管路由组件还是非路由组件身上都有$route\$routers属性

\$route:一般获取路由信息【路径、query、params等等】
\$router:一般进行编程式导航进行路由跳转【push | replace】

编程式导航可以做的更多，不仅跳转，可以做更多的业务

## 6.Footer组件显示与隐藏

Footer组件在登录注册页面不显示

6.1我们可以根据组件身上的$route获取当前路由信息,通过路由的路径判断Footer的显示和隐藏
6.2配置路由可以设置元信息meta，通过$route.meta.xx做页面的判断

## 路由

8.1 路由的跳转
路由的跳转有两种形式：
声明式导航router-link,可以进行路由的跳转
编程式导航push|replace,可以进行路由的跳转

8.2 路由传参，参数有几种写法
params参数:属于路径当中的一部分，在配置路由的时候，需要占位
query参数:不属于路径当中的一部分，类似于Ajax中的queryString  /home?k=v&kv=,不需要占位

记住：params方式要写name

## 路由传参相关面试题

1.路由传递参数path是否可以结合params参数一起使用
答：不可以params参数只能结合name，path结合的是query参数

2.如何指定params参数可传可不传
如果指定可传可不传，需在路由修改占位符（加问号）

```javascript
    {
      path:'/search/:keyword?',
      name:'search',
      component:Search,
      meta:{show:true}
    },
```

3.params参数可以传递也可以不传递，如果传递的是空串，如何解决
答：使用 || underfind

4.路由组件能不能传递props数据
可以
