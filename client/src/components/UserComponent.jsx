import React from 'react';

class UserComponent extends React.Component {
	constructor(props){
		super(props)
    this.state = {
      currentBookings: this.props.currentBookings,
      pastBookings: this.props.pastBookings,
      viewCanelPolicy: false
    }
	}

  cancelHandler(index, boolean){
    this.setState({
      viewCanelPolicy: boolean
    })
  }

	render(){
		return(
            <div>
              <div>
                <h3>Current Bookings</h3>
                <div>
                  {this.props.currentBookings.map(function(each, i){
                  	return (
                  		<div key={i}>
                  		  <div>{each.name}</div>
                  		  <div>{each.description}</div>
                        {this.state.viewCanelPolicy ? <div>
                          <div>{each.cancellation_policy} - Are you sure?</div>
                           <button onClick={() => this.cancelHandler(i, false)}>YES CANCEL</button>
                           <button onClick={() => this.cancelHandler(i, false)}>NO</button>
                         </div>
                         : <button onClick={() => this.cancelHandler(i, true)}>Cancel</button>}
                  		</div>
                  	  )
                  }.bind(this))}
                </div>
                <h3>Past Bookings</h3>
                <div>
                  {this.props.pastBookings.map(function(each, i){
                    return (
                      <div key={i}>
                        <div>{each.name}</div>
                        <div>{each.description}</div>
                      </div>
                      )
                  })}
                </div>
              </div>
            </div>
			)
	}
}

export default UserComponent;

