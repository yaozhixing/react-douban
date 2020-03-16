import React from 'react'

import AppHead from '../../Layout/AppHead' // 头部
import AppFoot from '../../Layout/AppFoot' // 底部
import Hot from './Hot'
import Soon from './Soon'
import America from './America'

class Home extends React.Component {
  render() {
    return (
      <div>
        <AppHead></AppHead>
        <Hot></Hot>
        <p className="p-space"></p>
        <Soon></Soon>
        <p className="p-space"></p>
        <America></America>
        <AppFoot></AppFoot>
      </div>
    )
  }
}

export default Home
