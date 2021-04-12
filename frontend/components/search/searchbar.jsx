import React, {useState} from 'react';
import { connect } from 'react-redux';
import {getList} from '../../actions/coin_actions'


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

  // includest(input){
    
  //   const list = Object.keys(this.props.list);
  //   list.map(coin => {
 

  //     return (
        
  //         <button className="search-list-button">
  //           <img className="search-image" src={list[coin].image} />
  //           <span className="search-name">{list[coin].name}</span>
  //           <span className="search-symbol">{list[coin].symbol.toUpperCase()}</span>
  //         </button>

  //     )
  //   }  
  // )
  // }

  render(){
  const list = this.props.list;

  return (
    <div className="search-main">
      <input className="search-box" placeholder="Search for coins" ref={input => this.search = input} onChange={this.handleInputChange}></input>
        

      {/* <ul className="search-list">
        {this.includest(`${this.state.query}`)}
      </ul> */} 

        {/* <p>{this.state.query}</p> */}
        
         <ul className="search-list">

           {Object.keys(this.props.list).map(coin => {
             if(list[coin].id.includes(this.state.query) && (this.state.query).length !== 0){
            return (
              <button className="search-list-button">
                <img className="search-image" src={list[coin].image}/>
                <span className="search-name">{list[coin].name}</span>
                <span className="search-symbol">{list[coin].symbol.toUpperCase()}</span>
                </button>
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




















  // find(input) {
  //   return e => this.setState({
  //     [input]: e.currentTarget.value
  //   });

  // }

  // searchChange(){
  //   // console.log(event.target.value)
  //   const list = Object.values(this.props.list);

  //   return event => this.setState({
  //     searchOptions: (
  //       list.filter((coin) => (list[coin].name).includes(event.target.value) )
  //     )
  //   })





    // const list = Object.values(this.props.list);
    // // console.log(list);

    // for (let i = 0; i < list.length; i++) {
    // // list.forEach(coin => {

    //   if ((list[i].name).includes(event.target.value) || 
    //       (list[i].id).includes(event.target.value) ||
    //       (list[i].symbol).includes(event.target.value)) {
    //     return (
    //       <ul className="search-list">
    //       <button className="search-list-button">
    //         <img className="search-image" src={list[i].image} />
    //         <span className="search-name">{list[i].name}</span>
    //         <span className="search-symbol">{list[i].symbol.toUpperCase()}</span>
    //       </button>
    //       </ul>
    //     )
    //   }
    // }
  // }