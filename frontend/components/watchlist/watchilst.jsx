import { getList } from '../../actions/coin_actions';
import { getTracks, newTrack, destroyTrack } from '../../actions/tracked_coin_actions';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import trackedCoinsReducer from '../../reducers/track_coins_reducer';

class WatchList extends React.Component {
  constructor(props) {
    super(props);
    this.getNames = this.getNames.bind(this);
    this.removeWatch = this.removeWatch.bind(this);
  }

  componentDidMount() {
    this.props.getList();
    this.props.getTracks();
    // debugger
  }

  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  removeWatch(name) {
    Object.values(this.props.tracks).map(title => {
      if (title.name === name) {
        this.props.destroyTrack(title.id)
      }
    })
  }

  getNames(obj) {
    let names = [];
    Object.values(obj).map(key => {
      if (key.userId === this.props.user_id)
      names.push(key.name)
    })
    return names;
  }

  render(){
// debugger

    const list = this.props.list;
    const tracks = this.props.tracks;
    // debugger
    return (
      // 1. Succesfully retreive names of coins owned by current user
      // <div>{
      //   Object.values(this.props.tracks).map(title => {
      //     if (title.userId === this.props.user_id) {
      //       return (
      //         <p>{title.name}</p>
      //       )
      //     }
      //   })
      //   }
      //   </div>
      // 2. Match name of tracked coin to name of list coin

      // <div>{
      //   Object.keys(this.props.list).map((num) => {
      //     if ((this.getNames(this.props.tracks)).includes(list[num].id)) {
      //     return (

      //     <p>{list[num].id}</p>
      //     ) 
      //       }
      //   })
      //   }</div>

      // 3. Do both at the same time

      <div className="user-watchlist">
        <div className="back"><Link to="/coins">&#8592; Back to list</Link></div>
        <h1 className="my-watch">Watchlist</h1>
        <table className="watch-table">

        {Object.keys(this.props.list).map((num, i) => {
          if ((this.getNames(this.props.tracks)).includes(list[num].id)) {
          return (
            <tbody key={`title=${i}`}>
              <tr className="watched-coin">
                <td className="watch-items"><img className="badge" src={list[num].image} />
                  <span className="watch-name">{list[num].name}</span>
                  <span className="watch-symbol">{list[num].symbol.toUpperCase()}</span></td>
                <td className="watch-price">${this.formatNumber(list[num].current_price.toFixed(2))}</td>
                  <td className={
                    list[num].price_change_percentage_24h < 0
                      ? "watch-change-down"
                      : "watch-change-up"
                  }>{list[num].price_change_percentage_24h.toFixed(2)}%
                </td>
                <td><button className="view-button"><Link to={`/coins/${list[num].id}`}>View</Link></button></td>
                <td><button className="unwatch" onClick={(e) => this.removeWatch(list[num].id)}>Unwatch</button></td>
              </tr>
            </tbody>
          ) 
          }})}

        </table>
  </div>
    )
  } 

}

const mDTP = dispatch => ({
  getList: () => dispatch(getList()),
  getTracks: () => dispatch(getTracks()),
  newTrack: coin => dispatch(newTrack(coin)),
  destroyTrack: id => dispatch(destroyTrack(id))
});

const mSTP = state => ({
  coins: state.entities.coins,
  list: state.entities.list,
  tracks: state.entities.tracks,
  user_id: state.session.id
})

export default connect(mSTP, mDTP)(WatchList)