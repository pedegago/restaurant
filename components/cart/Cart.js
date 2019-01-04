import React, { Component } from "react";

import { connect } from "react-redux";
import { onToggleCart } from "../../actions/UiActions";

import { Popover, PopoverBody } from 'reactstrap';

import CartHeader from "./CartHeader";
import CartBody from "./CartBody";

class Cart extends Component {
    render = () => {
        const hasProducts = !!this.props.order.products.length;

        return (
            <Popover
                className="shopping-cart"
                placement="bottom"
                isOpen={this.props.toggleCart}
                target="icon-cart"
                toggle={this.props.toggle}
                offset={-115}
            >
                <a className="icon-close" onClick={() => this.props.onToggleCart(false)}/>

                {hasProducts && <CartHeader />}
                {hasProducts && <CartBody />}

                <PopoverBody className={`cart-footer ${hasProducts ? "border-top" : ""}`}>
                    {hasProducts
                        ? <a href="#">View and Edit Bag</a>
                        : <p>You have no items in the shopping bag.</p>
                    }
                </PopoverBody>
            </Popover>
        );
    };
}

export const mapStateToProps = (state) => {
    return {
        toggleCart: state.ui.toggleCart,
        order: state.order
    };
}

export const mapDispatchToProps = (dispatch) => {
    return {
        onToggleCart: (expanded) => dispatch(onToggleCart(expanded))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
