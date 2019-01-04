import React, { Component } from "react";

import Menu from "../components/menu/Menu";
import Product from "../components/product/Product";

class MenuPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isOpen: false,
          product: null
        };
    }

    onSelect = (product) => {
        this.setState({
            product,
            isOpen: true
        });
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render = () => {
        return (
            <section className="menu">
                <Menu onSelect={this.onSelect} />
                {this.state.product &&
                    <Product
                        isOpen={this.state.isOpen}
                        toggle={this.toggle}
                        product={this.state.product}
                    />
                }
            </section>
        );
    };
}

export default MenuPage;
