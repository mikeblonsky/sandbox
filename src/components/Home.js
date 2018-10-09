import React from "react";

class Home extends React.Component {
    constructor() {
        super();
    }
    componentWillReceiveProps() {
        this.props.xxx();
    }
    render() {
        console.log("HOME: ", this.props.sports);
        return (
            <h1>HOME PAGE</h1>
        );
    }
}

export default Home;