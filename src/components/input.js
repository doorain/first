import React, { Component } from 'react';
import axios from 'axios';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: [],
      locationToDisplay: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }
getWeather(){
  let promise = axios.get('')
}

handleChange(e){
  this.setState({
    location: e.target.value
  })
}

  render(){
    return(
      <div>
        <input placeholder={"City, State"} type="text" onChange={this.getWeather}/>
         <button onClick={this.handleClick}> Search </button>
      </div>
    )
  }
}
 export default Input
