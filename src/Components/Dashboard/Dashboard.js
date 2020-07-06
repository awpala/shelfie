import React, { Component } from 'react';

import Product from '../Product/Product';

class Dashboard extends Component {
    render() {
        const mappedInventory = this.props.inventory.map( (product) => (
            <Product
                key={product.product_id}
                product={product}
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
