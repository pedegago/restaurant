import React, { Component } from "react";

class Index extends Component {
    render = () => {
        return (
            <section className="banner">
                <div className="d-flex w-100 align-items-center justify-content-center flex-wrap py-5">
                    <p className="w-100 text-center">Home page content.</p>

                    <a
                        href="/menu" 
                        className="btn btn-primary text-white mt-4"
                        style={{
                            borderRadius: "23px"
                        }}
                    >
                        Go to Menu
                    </a>
                </div>
            </section>
        );
    };
}

export default Index;
