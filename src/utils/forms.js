import React from "react";
import { Field } from "redux-form";
import { Multiselect } from "react-widgets";

export const RenderInputText = ({input, meta, label}) => {
    return <div className={meta.error && meta.touched ? "error" : ""}>
        <label>{label}</label>
        <input {...input} type="text" placeholder={label} name="" />
        {meta.error && meta.touched && <span>{meta.error}</span>}
    </div>
}

export const RenderSelect = ({input, label, children}) => (
    <select {...input}>{children}</select>
)

export const MultiselectField = ({meta, input, label}) => {
    return <div>
        <label>{label}</label>
        <Multiselect 
            data={["element","jablko","gruszka"]}
            {...input} 
            value={input.value !== '' ? input.value : []}
            onBlur={() => input.onBlur()}
            busy
        />
    </div>;
}