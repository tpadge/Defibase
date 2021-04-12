import React, {useState} from 'react';
import { connect } from 'react-redux';
import {getList} from '../../actions/coin_actions';
import { Link } from 'react-router-dom';


class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(){
    this.setState({
      query: this.search.value
    });
  }

  componentDidMount() {
    this.props.getList();
  }

  render(){
  const list = this.props.list;

  return (
    <div className="search-main">      
      <input type="text" className="search-box" placeholder="Search all coins..." ref={input => this.search = input} onChange={this.handleInputChange}></input>               
         <ul className="search-list">

           {Object.keys(this.props.list).map((coin, i) => {
             if(list[coin].id.includes(this.state.query) && (this.state.query).length !== 0){
            return (
              <div key={`coin=${i}`}>
              <Link to={`/coins/${list[coin].id}`}><button className="search-list-button">
                <img className="search-image" src={list[coin].image}/>
                <span className="search-name">{list[coin].name}</span>
                <span className="search-symbol">{list[coin].symbol.toUpperCase()}</span>
            
                </button>
                </Link>
              </div>
            )
             }
          })} 
          
        </ul> 
    </div>
  )
  }
}




const mDTP = dispatch => ({
  getList: () => dispatch(getList())
});

const mSTP = state => ({
  list: state.entities.list
})

export default connect(mSTP, mDTP)(SearchBar);