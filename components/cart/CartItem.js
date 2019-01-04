import React, { Component } from "react";

import { connect } from "react-redux";
import { onChangeOrder } from "../../actions/DataActions";

class CartItem extends Component {
    componentWillMount = () => {
        for (let i = 0; i < this.props.products.length; i++){
            const p = this.props.products[i];

            if (p.id == this.props.id) {
                this.product = p;
                break;
            }
        }
    };

    onRemove = () => {
        const newCart = this.props.order.products.filter(
            (c) => c.id != this.props.id
        );

        this.props.onChangeOrder(newCart);
    };

    render = () => {
        return (
            <li>
                <a>
                    <img
                        src={this.product.image}
                        alt={this.product.name}
                    />
                </a>
                <div>
                    <div className="product-name-container">
                        <a className="product-name">{this.product.name}</a>
                        <p className="product-price">${this.product.price}</p>
                    </div>

                    {/* Qty: */}
                    {/* <Counter
                        id={this.product.id}
                        hideAddButton
                        readonly={this.props.checkout}
                    /> */}

                    {/* <a className="icon-pencil" /> */}
                    {!this.props.checkout &&
                        <a onClick={this.onRemove} style={{
                            cursor: "pointer"
                        }}>
                            <img src="/static/images/remove-icon.svg" alt="" style={{
                                width: "16px"
                            }} />
                        </a>
                    }
                </div>
            </li>
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
    return {
        onChangeOrder: (products) => dispatch(onChangeOrder(products))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartItem);
