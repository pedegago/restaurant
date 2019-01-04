import React, { Component } from "react";

import { connect } from "react-redux";

import Head from "next/head";

import Header from "../header/Header";
// import Footer from "../footer/Footer";

class Layout extends Component {
    render = () => {
        return (
            <div>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, shrink-to-fit=no, user-scalable=no" />
                    <link rel="icon" href="/static/images/favicon.png" />
                </Head>
                <Header />
                <main>
                    {this.props.children}
                </main>
                {/* <Footer /> */}
            </div>
        );
    };
}

export const mapStateToProps = (state) => {
    return {
        toggleNavigation: state.ui.toggleNavigation,
        breadcrumbPath: state.ui.breadcrumbPath
    };
}

export default connect(
    mapStateToProps
)(Layout);
