import {getCoins, getCoin, getList} from '../../actions/coin_actions';
import {getTracks, newTrack, destroyTrack} from '../../actions/tracked_coin_actions';
import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import SearchBar from '../search/searchbar';


class CoinIndex extends React.Component {
  
  constructor(props) {
    super(props);
    this.getNames = this.getNames.bind(this);
    this.removeWatch = this.removeWatch.bind(this);
    this.checkWatch = this.checkWatch.bind(this);
  }

  componentDidMount(){
    this.props.getList();
    this.props.getTracks();
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

  checkWatch(name){
    const list = this.props.list;
    const tracks = this.props.tracks;

      if ((this.getNames(this.props.tracks)).includes(name)) {
        return (
          <button className="unwatch" onClick={(e) => this.removeWatch(name)}>Unwatch</button>
        )
      } else {
        return (
          <button className="watch-button" onClick={(e) => this.addWatch(name, this.props.user_id)}>Watch</button>
        )
      }
    
  }

  addWatch(coinId, user) {
    this.props.newTrack({name: coinId, user_id: user})
  }

  capitalize(string) {

  return string.charAt(0).toUpperCase() + string.slice(1);
  }

  formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  render(){
    if (Object.keys(this.props.list).length === 0) return null ;
    const list = this.props.list
    return (
      <div>
        <SearchBar />
        <section className="index-welcome">
        <div className="index-copy">
        <h1>The future of finance is <span className="blue">decentralized.</span></h1>
        <h3>View coins to learn more about defi</h3>
        <h3>If you like a coin, add it to your watchlist</h3>
                <div className="index-buttons">
              <button className="watchlist"><Link to="/watchlist">View your watchlist</Link></button>
        </div>
        </div>
        </section>

      <div className="index-main">
          <table>
                  <tbody>
                <tr className="labels">
                      <th className="name-label">Name</th>
                      <th className="price">Price</th>
                      <th className="change">Change</th>
                      <th className="volume">Volume (24h)</th>
                      <th className="market-cap">Market cap</th>
     
                  </tr>
              </tbody>
              {Object.keys(this.props.list).map((title, i) => {
                return (
                    <tbody className="coins" key={`title=${i}`}>
                  
                    <tr className="index-item">
                    <td className="name-label"><img className="badge" src={list[title].image} />
                    <span className="full-name">{list[title].name}</span>
                        <span className="short-name">{list[title].symbol.toUpperCase()}</span></td>

                    <td className="price">${this.formatNumber(list[title].current_price.toFixed(2))}</td>
                    <td className={
                      list[title].price_change_percentage_24h < 0
                        ? "change-down"
                        : "change-up"
                    }>{list[title].price_change_percentage_24h.toFixed(2)}%</td>
                    <td className="volume">${this.formatNumber(list[title].total_volume)}</td>
                    <td className="market-cap">${this.formatNumber(list[title].market_cap)}</td>
                    <td><button className="view-button"><Link to={`/coins/${list[title].id}`}>View</Link></button></td>
                    {/* <td><button className="watch-button" onClick={(e) => this.addWatch(list[title].id, this.props.user_id)}>Watch</button></td> */}
                      <td>{this.checkWatch(list[title].id)}</td>
                  </tr>

                  </tbody>
            
                  )})}
                  
                </table>
              
              </div>
      </div>
    )
  }
}



const mDTP = dispatch => ({
  getCoin: name => dispatch(getCoin(name)),
  getCoins: name => dispatch(getCoins(name)),
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

export default connect(mSTP, mDTP)(CoinIndex)
