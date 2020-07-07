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
      inventory: [],
      selectedProductId: null
    }

    this.getInventory = this.getInventory.bind(this);
    this.setSelected = this.setSelected.bind(this);
  }

  componentDidMount(){
    this.getInventory();
  }

  getInventory = () => {
    axios.get('/api/inventory')
    .then(res => this.setState({inventory: res.data}))
    .catch(err => console.log(err));
  }

  setSelected = (id) => {
    this.setState({ selectedProductId: id });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Dashboard
            inventory={this.state.inventory}
            getFn={this.getInventory}
            setFn={this.setSelected}
          />
          <Form
            getFn={this.getInventory}
            selectedProductId={this.state.selectedProductId}
          />
        </main>
      </div>
    );
  }
}

export default App;
