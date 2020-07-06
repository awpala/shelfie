import React, { Component } from 'react';

class Product extends Component {
    render() {
        const { img_url: imgURL, product_name: productName , price: productPrice } = this.props.product;
        
        return (
            <div className="product-card">
                <img alt={"Missing Image"} src={imgURL}/>
                <p>{productName}</p>
                <p>${productPrice.toFixed(2)}</p>
            </div>
        );
    }
}

export default Product;
