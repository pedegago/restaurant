import React, { Component } from "react";

import { connect } from "react-redux";

import { PopoverHeader } from 'reactstrap';

class CartHeader extends Component {
    subTotal = () => {
        let subtotal = 0;

        this.props.order.products.map((c) => {
            for (let i = 0; i < this.props.products.length; i++){
                const p = this.props.products[i];

                if (p.id == c.id) {
                    subtotal += p.price;
                    break;
                }
            }
        });

        return subtotal.toFixed(2);
    };

    render = () => {
        return (
            <PopoverHeader>
                <p>
                    <span>{this.props.order.products.length} </span>
                    Items in Bag
                </p>
                <p className="cart-subtotal">
                    Bag Subtotal:
                    <span>${this.subTotal()}</span>
                </p>
                <a href="/checkout">Proceed to Checkout</a>
            </PopoverHeader>
        );
    };
}

export const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        order: state.order
    };
}

export const mapDispatchToProps = (dispatch) => {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartHeader);
