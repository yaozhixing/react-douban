import React from 'react'
import { NavLink } from 'react-router-dom'

class AppFoot extends React.Component {
  render() {
    return (
      <div className="footbar">
        <NavLink
          activeClassName="active"
          className="fbar-item"
          to="/home"
        >
          <div className="dbico icon-home fbar-ico fbar-ico1"></div>
          <p className="fbar-title">首页</p>
        </NavLink>

        <NavLink
          className="fbar-item"
          to="/hotMoving"
        >
          <div className="dbico icon-hot fbar-ico fbar-ico2"></div>
          <p className="fbar-title">正在热映</p>
        </NavLink>

        <NavLink
          className="fbar-item"
          to="/soonMoving"
        >
          <div className="dbico icon-like fbar-ico fbar-ico3"></div>
          <p className="fbar-title">即将上映</p>
        </NavLink>

        <NavLink
          className="fbar-item"
          to="/aboutUs"
        >
          <div className="dbico icon-my fbar-ico fbar-ico4"></div>
          <p className="fbar-title">关于我</p>
        </NavLink>
      </div>
    )
  }
}

export default AppFoot