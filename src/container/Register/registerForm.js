import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
let showResults = (value) => {
    console.log("Results", value);
}
let RenderInputText = ({input, meta, label}) => {
    console.log("Input: ", input);
    console.log("Meta", meta);
    return <div className={meta.error && meta.touched ? "error" : ""}>
        <label>{label}</label>
        <input {...input} type="text" placeholder={label} name="" />
        {meta.error && meta.touched && <span>{meta.error}</span>}
    </div>
}
const RenderSelect = ({input, label, children}) => (
    <select {...input}>{children}</select>
)
let RegisterForm = ({handleSubmit, submitting}) => {
    return <form onSubmit={handleSubmit(showResults)}>
        <div>
            <Field 
                name="name" 
                label="Your name:"
                component={RenderInputText} 
            />
            <Field 
                name="sureName" 
                label="Your surename:"
                component={RenderInputText} 
            />
            <Field 
                name="email" 
                label="Your email:"
                component={RenderSelect} 
            >
                <option value="1">1111</option>
                <option value="2">2222</option>
                <option value="3">3333</option>
            </Field>
            <button type="submit" disabled={submitting}>Zapisz</button>
        </div>
    </form>;
};

const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = "Wymagane";
    if (!values.sureName) errors.sureName = "Wymagane";
    if (!values.email) errors.email = "Wymagane";
    return errors;
}


export default reduxForm({
    form: "REGISTER_FORM",
    validate
})(RegisterForm)