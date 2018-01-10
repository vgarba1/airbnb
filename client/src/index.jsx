import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx'
import UserComponent from './components/UserComponent.jsx'

 export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listings: [],
      bookings: [],
      viewBooking: false
    }

    this.search = this.search.bind(this);
    this.currentBookings = [{name: 'Booking 1', description: 'A fake booking', cancellation_policy: 'Early Cancelation results in a 500$ fee'}]
    this.pastBookings = [{name: 'Old Booking', description: 'An old booking'}]
  }

  search() {
    
  }
  viewBookings(){
    this.setState({
      viewBookings: true
    })
  }
  getCurrentBookings() {

  }

  render() {
    return (
      <div>
        <Search search={this.search} />
        <button onClick={() => this.viewBookings()}>Bookings</button>
        {this.state.viewBookings ? <UserComponent currentBookings={this.currentBookings} pastBookings={this.pastBookings} /> : ''}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
