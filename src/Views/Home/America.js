import React from 'react'
import MoveItem from '../../components/MoveItem'

import { NavLink } from 'react-router-dom'

class America extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      americaMoves: [] // 北美票房榜
    }
  }

  // componentWillMount()
  componentDidMount() {
    this.getAmericaMoves()
  }

  // api
  getAmericaMoves() {
    console.log('ajax')
    fetch('https://douban.uieee.com/v2/movie/us_box', { method: 'get' })
      .then(res => res.json())
      .then((data) => {
        // console.log(data)
        this.setState({
          americaMoves: data.subjects.slice(0, 9)
        });
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    const { americaMoves } = this.state
    console.log('北美票房榜', americaMoves)

    return (
      <div className="laybox">
        <div className="lay-tit">
          <span className="title">北美票房榜</span>
          <NavLink
            className="more"
            to="/AmericaMoving"
          >更多</NavLink>
        </div>
        <div className="lay-main">
          {
            americaMoves.map((item) =>
              <MoveItem
                id={item.subject.id}
                imgSrc={item.subject.images.large}
                key={item.subject.id}
                score={item.subject.rating.average}
                title={item.subject.title}
              ></MoveItem>
            )
          }
        </div>
      </div>
    )
  }
}

export default America