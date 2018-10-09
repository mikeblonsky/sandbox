import React, { Component } from "react";
import { reduxForm, formValueSelector } from "redux-form";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { validate } from "../../utils/validations/form_register";
import Register from "../../components/register";
import { xxx } from "../../actions/actions_index";

const FORM_NAME = "REGISTER_FORM";
const RegisterForm = props => <Register {...props} />;
const selector = formValueSelector(FORM_NAME);

function mapStateToProps(state) {
    const values = selector(
        state,
        "userName",
        "userSureName",
        "userNick",
        "userEmail",
        "userEmailConfirm",
        "userPassword",
        "userPasswordConfirm",
        "userCity",
        "sports"
    );
    return { values };
}

function mapDispatchToProps(dispatch) { 
    return bindActionCreators({ 
        xxx 
    }, dispatch);
}



export default reduxForm({
    form: FORM_NAME,
    validate,
    initialValues: {
        "userName": "",
        "userSureName": "",
        "userNick": "",
        "userEmail": "",
        "userEmailConfirm": "",
        "userPassword": "",
        "userPasswordConfirm": "",
        "userCity": ""
    }
})(connect(mapStateToProps, mapDispatchToProps)(RegisterForm));

// RegisterForm = reduxForm({
//     form: FORM_NAME
// })(RegisterForm);

// RegisterForm = connect(state => {
//     const values = selector(
//         state,
//         "userName",
//         "userSureName",
//         "userNick",
//         "userEmail",
//         "userEmailConfirm",
//         "userPassword",
//         "userPasswordConfirm",
//         "userCity"
//     );
//     return {
//         values
//     }
// });
