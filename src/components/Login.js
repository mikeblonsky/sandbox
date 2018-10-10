import React from "react";

class Login extends React.Component {
    constructor() {
        super();
    }
    componentWillMount() {
        this.props.xxx();
    }
    render() {
        console.log("LOGIN: ", this.props.sports);
        return (
            <h1>LOGIN PAGE</h1>
        );
    }
}

export default Login;