import React, { Component } from 'react';

class Input extends Component {
  constructor() {
    super();

    this.state = {
      location: []
    }
  }

  render(){
    return(
      <div>
        <form onSubmit={this.fetchData}>
            <input
              placeholder={"City, State"}
              type="text"
              value={this.state.location}
              onChange={this.changeLocation}
            />
        </form>
      </div>
    )
  }
}
 export default Input
