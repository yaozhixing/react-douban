import React from 'react'

class Detail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      detailInfo: { // 详情
        rating: {
          average: 0
        },
        images: {
          small: '',
          large: '',
          medium: ''
        }
      },

      otherData: {
        directors: '',
        genres: '',
        casts: '',
        countries: ''
      }
    }
  }

  // componentWillMount()
  componentDidMount() {
    this.getSoonMoves()
  }

  // api
  getSoonMoves() {
    const { id } = this.props.match.params

    fetch(`https://douban.uieee.com/v2/movie/subject/${id}`, { method: 'get' })
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        this.setState({
          detailInfo: data
        })
        this.setState({
          otherData: {
            directors: this.getcarts(data.directors) + '(导演)',
            genres: this.getgenres(data.genres),
            casts: this.getcarts(data.casts),
            countries: this.getgenres(data.countries)
          }

        })
      })
      .catch((error) => {
        console.log(error)
      });
  }

  getgenres(arr) {
    let str = '';
    arr.forEach(function (v) {
      str += ' ' + v;
    })
    return str;
  }

  getcarts(arr) {
    let str = '';
    arr.forEach(function (n, i, arr) {
      str += ' / ' + arr[i]['name'];
    })
    return str;
  }

  render() {
    const { title, images, rating, reviews_count, wish_count, collect_count, summary } = this.state.detailInfo;
    const { genres, directors, casts, countries } = this.state.otherData;

    return (
      <div>
        <div className="suject">
          <h2 className="movie-title">{title}</h2>
          <section className="mov-main">
            <div className="mov-cs">
              <div className="score-ctn">评分：{rating.average}</div>
              <p className="pl">{reviews_count}人评价</p>
              <div className="mov-des"> {genres} {directors} {casts} / {countries} 上映</div>
            </div>
            <div className="mov-img">
              <img alt={title}
                src={images.medium}
              />
            </div>
          </section>
          <div className="movie-looknumber">
            <span className="want-n">想看<i>（{wish_count}）</i></span>
            <span className="review-n">看过<i>（{collect_count}）</i></span>
          </div>
          <div className="movie-descript">
            <h2 className="title">{title}剧情简介</h2>
            <div className="content">{summary}</div>
          </div>
        </div>
        <p className="p-space"></p>

      </div>
    )
  }
}

export default Detail