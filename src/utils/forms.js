import React from "react";
import { Field } from "redux-form";

export const RenderInputText = ({input, meta, label}) => {
    // console.log("Input: ", input);
    // console.log("Meta", meta);
    return <div className={meta.error && meta.touched ? "error" : ""}>
        <label>{label}</label>
        <input {...input} type="text" placeholder={label} name="" />
        {meta.error && meta.touched && <span>{meta.error}</span>}
    </div>
}

export const RenderSelect = ({input, label, children}) => (
    <select {...input}>{children}</select>
)