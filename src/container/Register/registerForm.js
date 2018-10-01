import React, { Component } from "react";
import { reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { validate } from "../../utils/validations/form_register"
import Register from "../../components/register"

const FORM_NAME = "REGISTER_FORM";
const RegisterForm = props => <Register {...props} />;
const selector = formValueSelector(FORM_NAME);

function mapStateToProps(state) {
    const values = selector(
        state,
        "sureName",
        "name"
    );
    return { values };
}

export default reduxForm({
    form: FORM_NAME,
    validate,
    initialValues: {
        "sureName": "",
        "name": ""
    }
})(connect(mapStateToProps, null)(RegisterForm));