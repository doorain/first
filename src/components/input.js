import React, { Component } from 'react';
import axios from 'axios';
import config from './../config.js'

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: []

    }
    this.handleChange = this.handleChange.bind(this);
    this.getWeather = this.getWeather.bind(this);
  }
getWeather(){

  let promise = axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.location}&APPID=${config.Open_Weather_Map_Key}&units=imperial`)
  promise.then(res => {
    this.setState({
      x:res.data,
      cityName:res.data.city.name,
      currentTemp:res.data
    })
  })
}

handleChange(e){
  this.setState({
    location: e.target.value
  })
}

handleClick(){

}
  render(){
console.log(this.state.x);
    return(
      <div>
        <input placeholder={"City, Country"} type="text" onChange={this.handleChange}/>
         <button onClick={this.getWeather}> Search </button><br/>
         {this.state.cityName}

      </div>
    )
  }
}
 export default Input
