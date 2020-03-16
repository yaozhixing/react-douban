import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom' // Redirect

import routes from './Modle/router' // 路由集合

import AppHead from './Layout/AppHead' // 头部
import AppFoot from './Layout/AppFoot' // 底部

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <AppHead></AppHead>
        <Switch>
          {
            routes.map((item, index) => {
              // 完全匹配
              if (item.exact) {
                return <Route component={item.component}
                  exact
                  key={index}
                  onEnter={() => { document.title = item.title }}
                  path={item.path}
                ></Route>
              } else {
                if (item.redirect) { // 默认首页
                  return <Redirect key={index}
                    onEnter={() => { document.title = item.title }}
                    to="/"
                  ></Redirect>
                } else { // 指定路由
                  return <Route component={item.component}
                    key={index}
                    onEnter={() => { document.title = item.title }}
                    path={item.path}
                  ></Route>
                }
              }

            })
          }
        </Switch>
        <AppFoot></AppFoot>
      </div>
    )
  }
}

export default App
