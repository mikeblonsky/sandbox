import React, { Component } from "react";
import { Field } from "redux-form";
import { 
    RenderInputText,
    RenderSelect 
} from  "../utils/forms";

class Register extends Component {
	constructor() {
		super();
    }
    showResults = (values) => {
        console.log(values);
    }
	render() {
        const { 
            submitting, 
            values, 
            handleSubmit
        } = this.props;
        console.log("VALUES: ", this.props.values, this.props.values.sureName);
		return (
			<div className="register">
                <form onSubmit={handleSubmit(this.showResults)}>
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
                </form>
            </div>
		);
	}
}

export default Register;
