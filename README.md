## 仿豆瓣电影网 React

> 之前做一个 vue 技术栈的豆瓣电影网站，最近在学 React，就拿豆瓣网做一个 demo，比较好入手，会持续更新...

## 技术栈

React + react-route-dom + fetch

## 演示地址：

> 暂无...(后续会持续更新)

## Api 公开免费接口

来源：https://github.com/zce/douban-api-docs ，首先要感谢@zce 的开发，免费开源，还备案了多个域名提供接口，本人已测试，接口很稳定，放心使用！

Api 地址：https://douban.uieee.com  
文档：https://douban-api-docs.zce.me/movie.html#subject

## 页面如下：

- 首页
- 正在热映
- 即将上映
- 北美票房榜
- 电影内容页
- 关于我

## 技术要点

- **react-router** 路由跳转以及路由传参；
- **Model** 层完全分离，路由分离，有效管控路由；
- 嵌套多层路由，如何跳转路由，用到 **withRouter** 高阶函数；
- 父子**组件传递**参数；
- **fetch** 服务请求；
- 星星评分系统，根据星星分数，处理样式 class 高亮状态，**动态实现 className 样式**；
