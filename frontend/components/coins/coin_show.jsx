import React from 'react';
import {useParams} from "react-router-dom";
import {connect} from 'react-redux';
import {getCoin} from '../../actions/coin_actions';

class CoinShow extends React.Component {

  constructor(props) {
    super(props);
    // this.identifyCoin = this.identifyCoin.bind(this);
  }
  
  // identifyCoin() {
  //   // const coin = useParams();
  //   // return coin
  //   const x = useParams();
  //   console.log(x);
  // }


  componentDidMount(){
    // this.identifyCoin();
    this.props.getCoin(this.props.match.params.id);
  }

  render(){
    return (
      <p> I am {this.props.match.params.id} </p>
    )
  }
}

// const CoinShow = () => {
//   const x = useParams();
//   console.log(x);
//   return (
//     <div></div>
//   )
// }

const mDTP = dispatch => ({
  getCoin: name => dispatch(getCoin(name))
});

const mSTP = state => ({
  coins: state.entities.coins
});

export default connect(mSTP, mDTP)(CoinShow);