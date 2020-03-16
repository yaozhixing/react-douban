import React from 'react'
import MoveItem from '../../components/MoveItem'

import { NavLink } from 'react-router-dom'

class Soon extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      soonMoves: [] // 即将上映
    }
  }

  // componentWillMount()
  componentDidMount() {
    this.getSoonMoves()
  }

  // api
  getSoonMoves() {
    console.log('ajax')
    fetch('https://douban.uieee.com/v2/movie/coming_soon', { method: 'get' })
      .then(res => res.json())
      .then((data) => {
        // console.log(data)
        this.setState({
          soonMoves: data.subjects.slice(0, 9)
        });
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    const { soonMoves } = this.state
    console.log('即将上映', soonMoves)

    return (
      <div className="laybox">
        <div className="lay-tit">
          <span className="title">即将上映</span>
          <NavLink
            className="more"
            to="/soonMoving"
          >更多</NavLink>
        </div>
        <div className="lay-main">
          {
            soonMoves.map((item) =>
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

export default Soon