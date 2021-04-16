import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { getList } from '../../actions/coin_actions';
import {getHoldings, newHolding, destroyHolding, updateQuantity} from '../../actions/holdings_actions';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.getNames = this.getNames.bind(this);
    this.getQuantity = this.getQuantity.bind(this);
    this.multiply = this.multiply.bind(this);
  }

  componentDidMount() {
    this.props.getList();
    this.props.getHoldings();
  }

  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  getNames(obj) {
    let names = [];
    Object.values(obj).map(key => {
      if (key.userId === this.props.user_id)
        names.push(key.name)
    })
    return names;
  }

  multiply(num1, num2) {
   var newNum = 1;
    num2.map(num => {
      // debugger
      if (num !== undefined) {
        newNum = num;
      }
    })
    return num1 * newNum;
  }

  getQuantity(ref) {
    // let holdings = this.props.holdings;
    // return holdings[4].quantity
    // debugger
    return Object.values(this.props.holdings).map(hold => {
      if ((hold.userId === this.props.user_id) && (hold.name === ref)) {
        return (
          hold.quantity //returning? undefined so far, same without p tags+curlies
            )
      }
    })
    //parseFloat((list[num].current_price.toFixed(2))) * parseInt(quantity)

    
  }

  //CURRENT -> user has many holdings, holdings are accessible thru state with a name of coin, userid, and quantity, key=> holding_id
      //actions have been tested, so far so good, all desired information is available in state

  //DESTINATION -> Render coin name, quantity owned, total value (quantity * current price) IF holding.user_id === session id AND hold holding.name === current coin name (via map)
  // ex. Ethereum 2 5000
      //TO FIX -> quantity rendering 'undefined'
  //THEN give each user a couple bonus coins when signing up to view in their portfolio (1BTC, 32ETH)
      //TO FIX -> free coins after initialize doesnt allow user to log out ..? bad request error in server


  render(){
    // debugger
    const holdings = this.props.holdings;
    const list = this.props.list;
    // let quantity = this.getQuantity(this.props.holdings, list[num].id)
    // debugger
    return (
      <div className="portfolio-main">
        <div className="back"><Link to="/coins">&#8592; Back to list</Link></div>
        <h1 className="my-watch">Portfolio</h1>
        <table className="portfolio-table">
          <tbody >
            <tr className="portfolio-headers">
              <td className="portfolio-coin">Coin</td>
              <td classname="portfolio-quantity">Quantity</td>
              <td className= "portfolio-value">Value</td>
              <td className="portfolio-button"></td>
            </tr>
          </tbody>
          
            
          {Object.keys(this.props.list).map((num, i) => {
            // debugger
            if ((this.getNames(this.props.holdings)).includes(list[num].id)) {
              let price = list[num].current_price.toFixed(2);
              let quantity = this.getQuantity(list[num].id);
               
              return (
                  <tbody className="portfolio-ul" key={`num=${i}`}>
                    <tr className="portfolio-items">
                    <td className="portfolio-coin">{list[num].name}</td>
                      <td className="portfolio-quantity">{quantity}</td>
                    <td className="portfolio-value">${this.formatNumber(this.multiply(parseFloat((list[num].current_price)), quantity))}</td>
                      <td className="portfolio-button"><button className="portfolio-view-button"><Link to={`/coins/${list[num].id}`}>View</Link></button></td>
                  </tr>
                </tbody>
              )
            }
          })
        }
   
     
       </table>
      </div>
    )
  }
}









const mDTP = dispatch => ({
  getList: () => dispatch(getList()),
  getHoldings: () => dispatch(getHoldings()),
  newHolding: (name, userId, quantity) =>  dispatch(newHolding(name, userId, quantity)),
  destroyHolding: id => dispatch(destroyHolding(id)),
  updateQuantity: (id, nextQuantity) => dispatch(updateQuantity(id, nextQuantity))
})

const mSTP = state => ({
  list: state.entities.list,
  user_id: state.session.id,
  holdings: state.entities.holdings
})

export default connect(mSTP, mDTP)(Portfolio)