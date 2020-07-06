import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: [
        {
          imgURL: "tinyURL 1",
          productName: "product 1",
          productPrice: 10.99
        },
        {
          imgURL: "tinyURL 2",
          productName: "product 2",
          productPrice: 13.99
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard
          inventory={this.state.inventory}
        />
        <Form />
      </div>
    );
  }
}

export default App;
