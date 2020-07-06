import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
    render() {
        const { product_id: id, img_url: imgURL, product_name: productName , price: productPrice } = this.props.product;
        
        return (
            <div className="product-card">
                <img alt={productName} src={imgURL}/>
                <div className="product-attr">
                    <p>{productName}</p>
                    <p>${productPrice.toFixed(2)}</p>
                    <div className="product-btn">
                        <button onClick={this.props.deleteFn(id)}>
                            Delete
                        </button>
                        <button>
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
