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
      <div className="index-main">
        <ul>
          {Object.keys(this.props.list).map(title => {
            return (  
              <li className="index-list">
                <div className="basic-info">
                  <div><img className="badge" src={list[title].image}/></div>
                  <div>{list[title].name}</div> 
                  <div>{list[title].symbol.toUpperCase()}</div>
                </div>
                <div className="price-info">
                  <div className="price">${this.formatNumber(list[title].current_price)}</div>
                  <div className="change">{list[title].price_change_percentage_24h.toFixed(2)}%</div>
                  <div className="volume">${this.formatNumber(list[title].total_volume)}</div>
                  <div className="market-cap">${this.formatNumber(list[title].market_cap)}</div>
                </div>
              </li>
              // <p>{list[title].id}</p>
            )
          })}
        </ul>
      </div>
      // <div className="index-main">
      //   <ul>
      //    {Object.keys(this.props.list).map(title => {
          
      //      return (
      //      <li className="index-list">
      //        <div className="index-item">
      //         <div>{this.capitalize(title)}</div>
      //         <div>{this.formatNumber(list[title].usd)}</div>
      //         <div>{ this.formatNumber(list[title].usd_market_cap.toFixed(2)) }</div>
      //         <div>{this.formatNumber(list[title].usd_24h_vol.toFixed(2))}</div>
      //         <div>{ list[title].usd_24h_change.toFixed(2) }</div >
      //         <button className="view-button"><Link to={`/coins/${title}`}>View</Link></button>
      //         <button className="watch-button">Watch</button>
      //        </div>
      //      </li>
           
      //      )
      //    })}
      //   </ul>
      // </div>
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
