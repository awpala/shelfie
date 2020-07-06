import React, { Component } from 'react';

class Product extends Component {
    render() {
        const { imgURL, productName, productPrice } = this.props.product;
        
        return (
            <div className="product-card">
                <img alt={"Missing Image"} src={imgURL}/>
                <p>{productName}</p>
                <p>${productPrice}</p>
            </div>
        );
    }
}

export default Product;
