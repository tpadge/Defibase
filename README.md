# Defibase 

![favicon-32x32](https://user-images.githubusercontent.com/65377724/114439707-242c4e00-9b7e-11eb-8487-53dd7aaa8ab2.png)

Defibase is a function Coinbase clone, allowing users to view, track, discover, and trade cryptocurrencies in the decentralized finance space.  Users can maintain their personal watchlist, view interactive price tracking of coins and gain important data on their favorite coins with the option to trade on live exchanges.

[Live site](https://defibase.herokuapp.com/#/)

### Technologies used:

  * Frontend
    * Vanilla Javascript
      * Frontend functionality 
    * jQuery
      * AJAX Requests to backend
    * React
      * Frontend structure
    * Redux
      * Frontend store
    * HTML
    * CSS
  * Backend
    * Ruby on rails
    * JBuilder
    * PostgreSQL
 
 ## Features
 
**Coin index**

Upon signing in, users are directed to their dashboard, showing all available coins with real-time data and response watch buttons that update based on whether the user is "watching" a coin or not. The coin details are retrieved from CoinGecko's API, which references the user's slice of sate, referencing their holdings and watched coins.

<img width="1440" alt="Screen Shot 2021-04-16 at 9 10 14 AM" src="https://user-images.githubusercontent.com/65377724/115053514-10d9f500-9e94-11eb-8eb6-7a0b8fae1409.png">

**Coin show**

When hitting the "view" button, users are sent to a unique url for the selected coin. The charts are rendered via the ReChart library, which relies on a function that feeds the correct correct data in the correct format in order to render a real-time chart for price over the past 30 days. The watchlist button responds based to whether a user is "watching" the coin, while the trade button sends users to a trusted exchange.
<img width="1440" alt="Screen Shot 2021-04-12 at 11 23 20 AM" src="https://user-images.githubusercontent.com/65377724/114442572-8a66a000-9b81-11eb-84ca-bb5b043d5e73.png">
 
**Coin search**

The search bar responds to the user's query, displaying all coins that match their input, sending them to the coin's show page onClick.
<img width="1440" alt="Screen Shot 2021-04-12 at 11 26 14 AM" src="https://user-images.githubusercontent.com/65377724/114442985-082aab80-9b82-11eb-8839-5c62e59d8b5a.png">

**User watchlist**

Users can watch and unwatch coins, updating the state of "watching" accross the app
<img width="1238" alt="Screen Shot 2021-04-16 at 9 10 29 AM" src="https://user-images.githubusercontent.com/65377724/115053481-07e92380-9e94-11eb-969e-39de6db50e1e.png">

### Code snippets

In order to render the correct coins owned by a user in their portfolio, three functions were tied into a mapping of the coins present in state. The get names function matches coins in state to coins owned by the user, which are then assigned the corrrect quantity based on the current user via getQuantity. Finally, in order to calculate the total value of a stack of particular coin owned by the user, multiply is called by mapping through the data in the quantity key within the holdings slice of state, picking out the correct value for the particular coin owned by the current user.

<img width="578" alt="Screen Shot 2021-04-16 at 9 39 57 AM" src="https://user-images.githubusercontent.com/65377724/115056482-c5294a80-9e97-11eb-8075-3e2a065ee159.png">

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
      if (num !== undefined) {
        newNum = num;
      }
    })
      return num1 * newNum;
    }

    getQuantity(ref) {

    return Object.values(this.props.holdings).map(hold => {
      if ((hold.userId === this.props.user_id) && (hold.name === ref)) {
        return (
          hold.quantity 
            )
      }
    })
    }

    {Object.keys(this.props.list).map((num, i) => {

      if ((this.getNames(this.props.holdings)).includes(list[num].id)) {     
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
         )}
       })


