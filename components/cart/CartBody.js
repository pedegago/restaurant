import React, { Component } from "react";

import { connect } from "react-redux";

import { PopoverBody } from 'reactstrap';

import CartItem from "./CartItem";

class CartBody extends Component {
    render = () => {
        return (
            <PopoverBody tag="ul" className="cart-list">
                {this.props.order.products.map((c) => (
                    <CartItem
                        key={c.id}
                        id={c.id}
                        checkout={this.props.checkout}
                    />
                ))}
            </PopoverBody>
        );
    };
}

export const mapStateToProps = (state) => {
    return {
        order: state.order
    };
}

export const mapDispatchToProps = (dispatch) => {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartBody);
