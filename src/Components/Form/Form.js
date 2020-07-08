import React, { Component } from 'react';
import './Form.css';
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imgURL: "",
            productName: "",
            productPrice: 0,
            editProductId: null
        }
    }

    componentDidUpdate(prevProps) {
        const { selectedProductId } = this.props;
        
        if(selectedProductId !== prevProps.selectedProductId) {
            this.setState({ editProductId: selectedProductId });

            if(selectedProductId) {
                this.getProduct(selectedProductId);
            }
        }
    }
    
    getProduct = (id) => {
        axios.get(`api/product/${id}`)
        .then(res => {
            const{ img_url: imgURL, product_name: productName, price: productPrice } = res.data[0];
            
            this.setState({ imgURL, productName, productPrice })
        })
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
            productPrice: 0,
            editProductId: null
        })

        this.props.setFn(null);
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

    handleSave = () => {
        axios.put(`/api/product/${this.state.editProductId}`, {
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
                <img alt={this.state.productName} src={this.state.imgURL}/>
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
                <div className="form-buttons">
                    <button onClick={this.handleCancel}>
                        Cancel
                    </button>
                    {!this.state.editProductId
                        ? (
                            <button onClick={this.handleAdd}>
                                Add to Inventory
                            </button>
                        )
                        : (
                            <button onClick={this.handleSave}>
                                Save Changes
                            </button>
                        )
                    }
                </div>
            </section>
        );
    }
}

export default Form;
