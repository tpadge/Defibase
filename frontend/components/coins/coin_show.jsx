import React from 'react';
import {useParams} from "react-router-dom";
import {connect} from 'react-redux';
import {getCoin} from '../../actions/coin_actions';

class CoinShow extends React.Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount(){
    this.props.getCoin(this.props.match.params.id);
  }

  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }


  render(){
    return (
      <div className="show-page">
        <div className="show-top">
          <div className="show-names">
            <img className="show-badge" src={this.props.coins.image} />
            <h1>{this.props.coins.name} price</h1>
            <h2>({this.props.coins.symbol})</h2>
          </div>
          <div className="show-buttons">
            <button className="show-watch-button">Add to watchlist</button>
          </div>
        </div>

        <div className="show-tracking">
          <div className="show-tracking-price">
          <div className="chart-box">

          </div>
          <div className="show-price-details">
            <div className="show-market-cap">
              <p className="show-price-static">Market cap</p>
              <h3 className="show-price-dynamic">${this.props.coins.marketCap} </h3>
            </div>
            <div className="show-volume">
              <p className="show-price-static">Volume (24 hours)</p>
              <h3 className="show-price-dynamic">${this.props.coins.volume}</h3>
            </div> 
            <div className="show-sup">
              <p className="show-price-static">Circulating supply</p>
              <h3 className="show-price-dynamic">{this.props.coins.circulatingSup}</h3>
            </div>
          </div>

            <div className="show-resources">
              <div className="show-ath">
                <p className="show-price-static">All time high</p>
                <h3 className="show-price-dynamic">${this.props.coins.ath}</h3>
              </div>
              <div className="show-website">
                <p className="show-price-static">Website</p>
                <h3 className="show-price-dynamic"><a href={this.props.coins.website} target="_blank">{this.props.coins.website}</a></h3>
              </div>
            </div>
          </div>
          <div className="show-reading">
            <h1> About {this.props.coins.name}</h1>
            <div dangerouslySetInnerHTML={{ __html: `<p>${this.props.coins.writeup}</p>` }}/>
          </div>
        </div>
      </div>





















    )
  }
}


const mDTP = dispatch => ({
  getCoin: name => dispatch(getCoin(name))
});

const mSTP = state => ({
  coins: state.entities.coins
});

export default connect(mSTP, mDTP)(CoinShow);