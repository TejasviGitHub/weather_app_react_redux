import React, { Component } from 'react';
import Search from '../Containers/search_bar';
import Weather from '../Containers/weather_list';

class App extends Component {
  render(){
      return(
          <div className="m-5">
              <Search />
              <br />
              <Weather />
          </div>
         
      );
  }
}

export default App;
