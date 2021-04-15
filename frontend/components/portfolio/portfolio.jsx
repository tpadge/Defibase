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
  }

  componentDidMount() {
    this.props.getList();
    this.props.getHoldings();
  }

  getNames(obj) {
    let names = [];
    Object.values(obj).map(key => {
      if (key.userId === this.props.user_id)
        names.push(key.name)
    })
    return names;
  }

  getQuantity(obj, ref) {
    let holdings = this.props.holdings;
    // return holdings[4].quantity
    // debugger
    Object.values(obj).map(hold => {
      if ((hold.userId === this.props.user_id) && (hold.name === ref)) {
        return (
          <p>{hold.quantity}</p>
            )
      }
    })
    
    // Object.keys(obj).map(num => {
    //   if ((obj[num].userId === this.props.user_id) && (obj[num].name === ref)){
    //     let good = num;
    //     return (
    //     <p>{obj[good].quantity}</p>
    //     )
    //   } 
    // })
    
  }



  render(){
    // debugger
    const holdings = this.props.holdings;
    const list = this.props.list;
    // debugger
    return (
      <div className="portfolio-main">
        <div className="back"><Link to="/coins">&#8592; Back to list</Link></div>
        <h1 className="my-watch">Portfolio</h1>
        <table className="portfolio-table">
          <tr className="coin-row">
            <td className="coin-row-name">
          {Object.keys(this.props.list).map((num, i) => {
            // debugger
            if ((this.getNames(this.props.holdings)).includes(list[num].id)) {
              let price = list[num].current_price.toFixed(2);
               this.getQuantity(this.props.holdings, list[num].id)
              return (
              <span className="far-left">
              <img className="coin-row-badge" src={list[num].image}/>
                  <h1 className="coin-row-name">{list[num].name}</h1>
                  <span>{`${this.getQuantity(this.props.holdings, list[num].id)}`}</span>
                  <span>{list[num].current_price.toFixed(2)}</span>
              </span>
              )
            }
          })
        }

            </td>
            </tr>
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