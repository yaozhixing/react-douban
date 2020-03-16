import React from 'react'
import MoveItem from '../../components/MoveItem'

import { NavLink } from 'react-router-dom'

class Hot extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hotMoves: [] // 热映电影
    }
  }

  // componentWillMount()
  componentDidMount() {
    this.getHotMoves()
  }

  // api
  getHotMoves() {
    fetch('https://douban.uieee.com/v2/movie/in_theaters', { method: 'get' })
      .then(res => res.json())
      .then((data) => {
        // console.log(data)
        this.setState({
          hotMoves: data.subjects.slice(0, 9)
        });
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    const { hotMoves } = this.state
    console.log('影院热映', hotMoves)

    return (
      <div className="laybox">
        <div className="lay-tit">
          <span className="title">影院热映</span>
          <NavLink
            className="more"
            to="/hotMoving"
          >更多</NavLink>
        </div>
        <div className="lay-main">
          {
            hotMoves.map((item) =>
              <MoveItem
                id={item.id}
                imgSrc={item.images.large}
                key={item.id}
                score={item.rating.average}
                title={item.title}
              ></MoveItem>
            )
          }
        </div>
      </div>
    )
  }
}

export default Hot