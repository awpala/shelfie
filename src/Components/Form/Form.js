import React, { Component } from 'react';

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
    
    render() {
        return (
            <section className="form">
                <input
                    type={"text"}
                    value={this.state.imgURL}
                    onChange={e => this.handleURL(e.target.value)}
                />
                <input
                    type={"text"}
                    value={this.state.productName}
                    onChange={e => this.handleName(e.target.value)}
                />
                <input
                    type={"text"}
                    value={this.state.productPrice}
                    onChange={e => this.handlePrice(e.target.value)}
                />
                <button onClick={this.handleCancel}>
                    Cancel
                </button>
                <button>Add to Inventory</button>
            </section>
        );
    }
}

export default Form;
