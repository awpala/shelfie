import React, { Component } from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';

import Header from './Components/Header/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: []
    }

    this.getInventory = this.getInventory.bind(this);
  }

  componentDidMount(){
    this.getInventory();
  }

  getInventory = () => {
    axios.get('/api/inventory')
    .then(res => this.setState({inventory: res.data}))
    .catch(err => console.log(err));
  }

  addProduct = () => {

  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Dashboard
            inventory={this.state.inventory}
            getFn={this.getInventory}
          />
          <Form
            getFn={this.getInventory}
          />
        </main>
      </div>
    );
  }
}

export default App;
