import React from 'react'

class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <div className="myintro">
          <p className="name">姚志星<i> Danny web前端开发工程师</i></p>
          <p className="des">折腾就折腾着，我是一名前端道路的追逐者...</p>
          <p className="githubadd">Github：https://github.com/</p>

        </div>
        <p className="p-space"></p>
        <div className="myintro-content">
          <p className="title">个人特长与专项：</p>
          <ul>
            <li>1、熟练掌握html,css(css3),less,scss，原生javascript，高效极致到完美的静态页面输出；</li>
            <li>2、掌握vuejs，requiejs，jquery等主流开发框架和库，熟练组件化开发，独立配置webpack，gulp；</li>
            <li>3、擅长解决浏览器兼容性问题；</li>
            <li>4、擅长H5移动端开发以及微信公众号开发；</li>
            <li>5、前后端分离，擅长撰写良好的网站命名规范和指定文档规范；</li>
            <li>6、了解nodejs开发，熟悉express开发框架，独立搭建过爬虫，聊天室</li>
            <li>7、聊天室演示地址：<a href="https://chatnice.herokuapp.com/">https://chatnice.herokuapp.com/</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default AboutUs