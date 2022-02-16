//api接口统一管理
import requests from './request'

//三级联动的接口
// export const reqCategoryList = () => requests({
//   url:'/product/getBaseCategoryList',
//   method:'get'
// })
export const reqCategoryList = () =>requests.get(`/product/getBaseCategoryList`);