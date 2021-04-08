import {getPrice} from '../../actions/coin_actions';
import React from 'react';
import {connect} from 'react-redux';

class CoinIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.getPrice('ETH');
  }

  render(){
    return (
      <div>
        <p>{this.props.priceETH}</p>
      </div>
    )
  }
}

const mDTP = dispatch => ({
  getPrice: symbol => dispatch(getPrice(symbol)),
});

const mSTP = ({entities}) => (
  { priceETH: entities.price.ETH }
);

export default connect(mSTP, mDTP)(CoinIndex)
