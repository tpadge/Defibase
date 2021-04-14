import React from 'react';
import {connect} from 'react-redux';
import {getCoin, getChart} from '../../actions/coin_actions';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { Link } from 'react-router-dom';
import { getTracks, newTrack, destroyTrack } from '../../actions/tracked_coin_actions';

class CoinShow extends React.Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount(){
    this.props.getCoin(this.props.match.params.id);
    this.props.getChart(this.props.match.params.id);
    this.props.getTracks();
  }

  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  feed(response){
    // debugger
    var arr = response.split(",")
    // debugger
    const result = [];
    var rv = {};
    let x = "x";
    for (var i = 0; i < arr.length; i++) {
      if (i % 2 !== 0) {
      result.push({"price": arr[i]});
      }
    }
    // debugger
    return result;
  }

  render(){

    return (
      
      <div className="show-page">
        <div className="back"><Link to="/coins">&#8592; Back to list</Link></div>
        <div className="show-top">
          <div className="show-names">
            <img className="show-badge" src={this.props.coins.image} />
            <h1>{this.props.coins.name} price</h1>
            <h2>({this.props.coins.symbol})</h2>
          </div>
          <div className="show-buttons">
            <button className="show-watch-button">Add to watchlist</button>
            <button className="show-trade-button"><a href={this.props.coins.trade} target="_blank">Trade {this.props.coins.name}</a></button>
            <button className="show-watch-button"><Link to="/watchlist">View watchlist</Link></button>
          </div>
        </div>

        <div className="show-tracking">
          <div className="show-tracking-price">
          <div className="chart-box">
            <div className="chart-strings">
              <div className="chart-string-nums">
                  <h1>${this.formatNumber(parseFloat(this.props.coins.price).toFixed(2))}</h1>
                  <div className={
                     parseFloat(this.props.coins.change) < 0
                      ? "chart-string-nums-down"
                      : "chart-string-nums-up"
                  }>{parseFloat(this.props.coins.change).toFixed(2)}%</div>
              </div>
                <div className="chart-string-words">
                  <h2>PAST 30 DAYS</h2>
                </div>
            </div>
            <div className="line">
                <LineChart width={720} height={300} data={this.feed(`${this.props.chart["chart"]}`)} margin={{ top: 30, right: 0, bottom: 0, left: 0 }} >
                <Line type="monotone" dataKey="price" stroke="rgb(22, 82, 240)" strokeWidth={2.5} />
                <Tooltip />
              </LineChart> 
            </div>
          </div>
          <div className="show-price-details">
            <div className="show-market-cap">
              <p className="show-price-static">Market cap</p>
                <h3 className="show-price-dynamic">${this.formatNumber(parseFloat(this.props.coins.marketCap))} <span className="daily">24h</span></h3>
            </div>
            <div className="show-volume">
              <p className="show-price-static">Volume (24 hours)</p>
                <h3 className="show-price-dynamic">${this.formatNumber(parseFloat(this.props.coins.volume))}</h3>
            </div> 
            <div className="show-sup">
              <p className="show-price-static">Circulating supply</p>
                <h3 className="show-price-dynamic">{this.formatNumber(parseFloat(this.props.coins.circulatingSup))}</h3>
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
  getCoin: name => dispatch(getCoin(name)),
  getChart: name => dispatch(getChart(name)),
  getTracks: () => dispatch(getTracks()),
  newTrack: coin => dispatch(newTrack(coin)),
  destroyTrack: id => dispatch(destroyTrack(id))
});

const mSTP = state => ({
  coins: state.entities.coins,
  chart: state.entities.chart,
  tracks: state.entities.tracks
});

export default connect(mSTP, mDTP)(CoinShow);