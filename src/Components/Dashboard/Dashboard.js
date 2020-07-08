import React, { Component } from 'react';
import './Dashboard.css';
import axios from 'axios';

import Product from '../Product/Product';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct = (id) => {
        axios.delete(`/api/product/${id}`)
        .then(() => this.props.getFn())
        .catch(err => console.log(err));
    }

    render() {
        const mappedInventory = this.props.inventory.map( product => (
            <Product
                key={product.product_id}
                product={product}
                deleteFn={this.deleteProduct}
                setFn={this.props.setFn}
            />
        ));

        return (
            <section className="inventory-list">
                {mappedInventory}
            </section>
        );
    }
}

export default Dashboard;
