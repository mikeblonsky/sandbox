import React from "react";
import { Multiselect } from "react-widgets";

// export const RenderInputText = (field) => {
//     return <div className={field.meta.error && field.meta.touched ? "error form-group" : "form-group"}>
//         <label>{field.label}</label>
//         <input {...field.input} className={"form-control form-control-sm"} type={field.type ? field.type : "text"} id={"input_" + field.input.name} name={field.input.name} />
//         {field.meta.error && field.meta.touched && <small className="form-text text-red">{field.meta.error}</small>}
//     </div>
// }

export const RenderInputText = (field) => {
    return <div className="form-group row">
        <label htmlFor={"input_" + field.input.name} className="col-sm-4 col-form-label">{field.label}</label>
        <div className="col-sm-8">
            <input 
                {...field.input} 
                type={field.type ? field.type : "text"} 
                className="form-control form-control-sm" 
                id={"input_" + field.input.name} 
                name={field.input.name} 
            />
            {field.meta.error && field.meta.touched && (
                <small className="form-text text-red">{field.meta.error}</small>
            )}
        </div>
    </div>
}

export const RenderSelect = ({input, label, children}) => (
    <select {...input}>{children}</select>
)

export const RenderInputFile = (field) => {
    console.log("FILE: ", field.input);
    // delete field.input.value
    return <input 
        {...field.input}
        name={field.input.name}
        type="file"
        // onChange={adaptFileEventToValue(field.input.onChange)}
        // onBlur={adaptFileEventToValue(field.input.onBlur)}
    />
}

// const adaptFileEventToValue = delegate => e => delegate(e.target.files[0])

// export const RenderInputFile FileInput = ({
//     input: {
//         value: omitValue,
//         onChange,
//         onBlur,
//         ...inputProps,
//     },
//     meta: omitMeta,
//     ...props,
// }) =>
// <input
//   onChange={adaptFileEventToValue(onChange)}
//   onBlur={adaptFileEventToValue(onBlur)}
//   type="file"
//   {...inputProps}
//   {...props}
// />


export const MultiselectField = ({meta, input, label}) => {
    return <div className="form-group">
        <label>{label}</label>
        <Multiselect 
            data={["element","jablko","gruszka"]}
            {...input} 
            value={input.value || []}
            // valueField={valueField}
            // textField={textField}
            onBlur={() => input.onBlur()}
        />
    </div>;
}