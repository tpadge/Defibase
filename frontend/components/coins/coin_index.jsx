import {getCoins, getCoin, getList} from '../../actions/coin_actions';
import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class CoinIndex extends React.Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    //1. get list
    //3. display details below -> use index? use key?
    this.props.getList();
    // this.props.getCoins('ethereum')
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
        <section className="index-welcome">
        <div classname="index-copy">
        <h1>The future of finance is <span className="blue">decentralized.</span></h1>
        <h3>View coins to learn more about defi</h3>
        <h3>If you like a coin, add it to your watchlist</h3>
                <div className="index-buttons">
          <button className="watchlist">View your watchlist</button>
        </div>
        </div>
        </section>

      <div className="labels">
        <div className="name-label">Name</div>
        <div className="price">Price</div>
        <div className="change">Change</div>
        <div className="volume">Volume (24h)</div>
        <div className="market-cap">Market cap</div>
      </div>

      <div className="index-main">
        <ul>
          {Object.keys(this.props.list).map(title => {
            return (  
              <div>

              <section className="coins">
              <li className="index-list">
              <div className="index-item">
                <div className="basic-info">
                  <div><img className="badge" src={list[title].image}/></div>
                  <div className="full-name">{list[title].name}</div> 
                  <div className="short-name">{list[title].symbol.toUpperCase()}</div>
                </div>
                <div className="price-info">
                  <div className="price">${this.formatNumber(list[title].current_price.toFixed(2))}</div>
                  <div className={
                      list[title].price_change_percentage_24h < 0
                            ? "change-down"
                            : "change-up"
                  }>{list[title].price_change_percentage_24h.toFixed(2)}%</div>
                  <div className="volume">${this.formatNumber(list[title].total_volume)}</div>
                  <div className="market-cap">${this.formatNumber(list[title].market_cap)}</div>
                  <button className="view-button"><Link to={`/coins/${list[title].id}`}>View</Link></button>
                  <button className="watch-button">Watch</button>
                </div>
                </div>
              </li>
              </section>
              </div>
              
            )
          })}
        </ul>
      </div>
      </div>
    )
  }
}



const mDTP = dispatch => ({
  getCoin: name => dispatch(getCoin(name)),
  getCoins: name => dispatch(getCoins(name)),
  getList: () => dispatch(getList())
});

const mSTP = state => ({
  coins: state.entities.coins,
  list: state.entities.list 
})

export default connect(mSTP, mDTP)(CoinIndex)
