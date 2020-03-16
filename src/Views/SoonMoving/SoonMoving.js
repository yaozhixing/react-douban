import React from 'react'
import MoveItem from '../../components/MoveItem'

class SoonMoving extends React.Component {

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
          soonMoves: data.subjects
        });
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    const { soonMoves } = this.state

    return (
      <div className="laybox">
        <div className="lay-tit list-tit">
          <span className="title">即将热映</span>
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

export default SoonMoving