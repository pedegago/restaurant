import React, { Component } from "react";

import { connect } from "react-redux";
import { onChangeOrder } from "../../actions/DataActions";
import { onToggleCart } from "../../actions/UiActions";

import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input } from 'reactstrap';

class Product extends Component {
    constructor (props){
        super(props);

        this.state = {
            order: null
        };
    }

    static getDerivedStateFromProps = (nextProps, nextState) => {
        const order = nextProps.order.products;

        let state = {
            order: null
        };

        for (let i = 0; i < order.length; i++){
            if (order[i].id == nextProps.product.id) {
                state = {
                    order: order[i]
                };
                break;
            }
        }

        return state;
    };

    // updateOrder = (options, instructions) => {
    //     const order = {
    //         id: this.props.product.id,
    //         options,
    //         instructions
    //     };

    //     const products = this.props.order.products;
    //     const i = products.findIndex(
    //         (p) => p.id == this.props.product.id
    //     );

    //     this.props.onChangeOrder([
    //         ...products.slice(0, i),
    //         order,
    //         ...products.slice(i + 1)
    //     ]);
    // };

    getOptions = () => {
        let checks = this.options.querySelectorAll("input");
        let options = [];

        for (let i = 0; i < checks.length; i++){
            if (checks[i].checked){
                options.push(checks[i].value);
            }
        }

        return options;
    };

    // onChangeOptions = () => {
    //     if (this.state.order){
    //         this.updateOrder(this.getOptions(), this.state.order.instructions);
    //     }
    // };

    // onChangeInstructions = (e) => {
    //     const instructions = e.target.value;

    //     if (this.state.order){
    //         this.updateOrder(this.state.order.options, instructions);
    //     }
    // };

    addToOrder = () => {
        
console.log(this.state.order)
        if (!this.state.order){
            const order = {
                id: this.props.product.id,
                options: this.getOptions(),
                instructions: this.instructions.value
            };
    
            this.props.onChangeOrder([
                ...this.props.order.products,
                order
            ]).then(() => {
                this.props.onToggleCart(true).then(() => {
                    this.props.toggle();
                });
            });
        }
    };

    render = () => {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={this.props.toggle}
                className="product"
            >
                <ModalHeader>
                    <img
                        src={this.props.product.image}
                        alt={this.props.product.name}
                    />
                    <p>
                        {this.props.product.name}
                        <span>${this.props.product.price}</span>
                    </p>
                </ModalHeader>
                <ModalBody>
                    <p>{this.props.product.description}</p>
                    <FormGroup check>
                        <legend>Choose Item Options</legend>
                        <ul ref={(e) => { this.options = e }}>
                            {this.props.product.options.map((o) => (
                                <li key={o.label}>
                                    <label>
                                        <Input
                                            type="checkbox"
                                            value={o.value}
                                            onChange={this.onChangeOptions}
                                        />
                                        {o.label}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </FormGroup>
                    <textarea
                        placeholder="Special Instructions"
                        ref={(e) => { this.instructions = e }}
                    />
                </ModalBody>
                <ModalFooter>
                    <button onClick={this.addToOrder}>
                        Add to Bag:
                        ${this.props.product.price}
                    </button>
                </ModalFooter>
            </Modal>
        );
    };
}

export const mapStateToProps = (state) => {
    return {
        order: state.order
    };
}

export const mapDispatchToProps = (dispatch) => {
    return {
        onChangeOrder: (products) => dispatch(onChangeOrder(products)),
        onToggleCart: (expanded) => dispatch(onToggleCart(expanded))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Product);
