import React, { Component } from "react";

import { connect } from "react-redux";
import { onToggleCart } from "../../actions/UiActions";

import Cart from "../cart/Cart";

class Header extends Component {
    toggleCart = () => {
        this.props.onToggleCart(!this.props.toggleCart);
    };

    render = () => {
        return (
            <header>
                <div className="header-main">
                    <a href="/" className="logo">Logo Here</a>
                    <a
                        id="icon-cart"
                        onClick={this.toggleCart}
                        style={{
                            cursor: "pointer"
                        }}
                    >
                        Shopping Bag{" "}
                        <span className="bg-primary p-1 rounded text-white">
                            {this.props.order.products.length}
                        </span>
                    </a>
                </div>
                <Cart toggle={this.toggleCart} />
            </header>
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
)(Header);
