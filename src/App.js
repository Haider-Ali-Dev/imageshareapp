import React, { Component } from 'react' 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Input from './Components/Input/Input'
import NavBar from './Components/NavBar/NavBar'

import './App.css';
import ImageSuper from './Components/MapImage/MapImage';

class App extends Component {
  constructor() {
    super()
    this.state = {
        data: []
    }
}

  componentDidMount() {
    fetch('https://tranquil-lowlands-55499.herokuapp.com/')
      .then(data => data.json())
      .then(res => this.setState({data: res}))
    console.log(this.state.data)
  }
  render() {
    return (

        <div>
          <Router>
            <NavBar/>
            <Switch>
              <Route path="/gallery">
              <ImageSuper data={this.state.data}/>
              </Route>
              <Route path="/">
                <Input />
              </Route>
            </Switch>
          </Router>
        </div>
    );
  }
  
}

export default App;
