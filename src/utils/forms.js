import React from "react";
import { Field } from "redux-form";
import { Multiselect } from "react-widgets";

export const RenderInputText = (field) => {
    return <div className={field.meta.error && field.meta.touched ? "error form-group" : "form-group"}>
        <label>{field.label}</label>
        <input {...field.input} className={"form-control"} type={field.type ? field.type : "text"} id={"input_" + field.input.name} name={field.input.name} />
        {field.meta.error && field.meta.touched && <small className="form-text text-red">{field.meta.error}</small>}
    </div>
}

export const RenderSelect = ({input, label, children}) => (
    <select {...input}>{children}</select>
)

export const MultiselectField = ({meta, input, label}) => {
    return <div className="form-group">
        <label>{label}</label>
        <Multiselect 
            data={["element","jablko","gruszka"]}
            {...input} 
            value={input.value !== '' ? input.value : []}
            onBlur={() => input.onBlur()}
        />
    </div>;
}

export const File = ({meta, input, label}) => {
    return <div>

    </div>
}