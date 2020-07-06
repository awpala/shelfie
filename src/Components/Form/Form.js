import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imgURL: "",
            productName: "",
            productPrice: 0
        }
    }

    // event handler functions
    handleURL = (val) => {
        this.setState({ imgURL: val} );
    }

    handleName = (val) => {
        this.setState({ productName: val} );
    }

    handlePrice = (val) => {
        this.setState({ productPrice: val} );
    }

    handleCancel = () => {
        this.setState({
            imgURL: "",
            productName: "",
            productPrice: 0
        })
    }

    handleAdd = () => {
        axios.post('/api/product', {
            product_name: this.state.productName,
            price: this.state.productPrice,
            img_url: this.state.imgURL 
        })
        .then(() => this.props.getFn())
        .catch(err => console.log(err));

        this.handleCancel(); // clear inputs
    }
    
    render() {
        return (
            <section className="form">
                <p className="form-field">Image URL</p>
                <input
                    type={"text"}
                    value={this.state.imgURL}
                    onChange={e => this.handleURL(e.target.value)}
                />
                <p className="form-field">Product Name</p>
                <input
                    type={"text"}
                    value={this.state.productName}
                    onChange={e => this.handleName(e.target.value)}
                />
                <p className="form-field">Price</p>
                <input
                    type={"text"}
                    value={this.state.productPrice}
                    onChange={e => this.handlePrice(e.target.value)}
                />
                <button onClick={this.handleCancel}>
                    Cancel
                </button>
                <button onClick={this.handleAdd}>
                Add to Inventory
                </button>
            </section>
        );
    }
}

export default Form;
