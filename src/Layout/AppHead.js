import React from 'react'
import logo from '../assets/images/common/logo.png'

import { NavLink } from 'react-router-dom'

class AppHead extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="p-head">
        <NavLink
          className="logo"
          to="home"
        >
          <img
            alt="豆瓣"
            src={logo}
          />
        </NavLink>
        <div className="phead-tit">首页</div>
        <i></i>
      </div>
    )
  }
}

export default AppHead