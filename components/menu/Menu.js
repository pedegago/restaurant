import React, { Component } from "react";

import { connect } from "react-redux";

class Menu extends Component {
    render = () => {
        return (
            <ul>
                {this.props.products.map((p) => (
                    <li key={p.id}>
                        <img
                            src={p.image}
                            alt={p.name}
                        />
                        <div className="menu-item-name">
                            {p.name}
                            <hr />
                            <span>${p.price}</span>
                        </div>
                        <button onClick={() => this.props.onSelect(p)}>
                            ADD
                        </button>
                    </li>
                ))}
            </ul>
        );
    };
}

export const mapStateToProps = (state) => {
    return {
        products: state.products.products
    };
}

export const mapDispatchToProps = (dispatch) => {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);
