import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

class MoveItem extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }

  // 显示分数和暂无数据
  getscoreState(score) {
    return score === 0 ? false : true;
  }

  // 分数 => 星星亮度css
  getscroe(score) {
    const zsco = Math.round(score);
    if (zsco > 0 && zsco <= 2) {
      return 'sco1';
    }
    else if (zsco > 2 && zsco <= 4) {
      return 'sco2';
    }
    else if (zsco > 4 && zsco <= 6) {
      return 'sco3';
    }
    else if (zsco > 6 && zsco <= 8) {
      return 'sco4';
    }
    else if (zsco > 8 && zsco <= 10) {
      return 'sco5';
    }
  }

  // 打开影片详情
  openDetail = (id) => {
    console.log(id)
    this.props.history.push(`/detail/${id}`);
  }

  render() {
    const { imgSrc, score, title, id } = this.props
    return (
      <div className="hotbox"
        onClick={() => this.openDetail(id)}
      >
        <div className="hotb-img">
          <img alt={title}
            src={imgSrc}
          />
        </div>
        <h2 className="hotb-title tc">{title}</h2>
        {
          this.getscoreState(score) ?
            <div className={['hotb-score tc ' + this.getscroe(score)]}><i></i><i></i><i></i><i></i><i></i>{score}分</div>
            :
            <div className="hotb-score tc noscore">暂无评论</div>
        }
      </div>
    )
  }
}

// export default MoveItem
export default withRouter(MoveItem);