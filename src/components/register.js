import React, { Component } from "react";
import { Field } from "redux-form";
import { 
    RenderInputText,
    RenderSelect,
    MultiselectField,
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

		return (
			<div className="register">
                <form onSubmit={handleSubmit(this.showResults)}>
                    <Field 
                        name="multi"
                        label="Wybierz ulubione góry"
                        component={MultiselectField}
                    />
                    <Field 
                        name="userName" 
                        label="Podaj imie"
                        component={RenderInputText} 
                    />
                
                    <Field 
                        name="userSureName" 
                        label="Podaj nazwisko"
                        component={RenderInputText} 
                    />
                    <Field 
                        name="userNick" 
                        label="Nick"
                        component={RenderInputText} 
                    />
                    <Field 
                        name="userEmail"
                        type="email"
                        props={{
                            "type": "email"
                        }}
                        label="Podaj email"
                        component={RenderInputText} 
                    />
                    <Field 
                        name="userEmailConfirm"
                        type="email"
                        props={{
                            "type": "email"
                        }}
                        label="Powtórz email"
                        component={RenderInputText} 
                    />
                    <Field 
                        name="userPassword" 
                        label="Podaj hasło"
                        type="password"
                        props={{
                            "type": "password"
                        }}
                        component={RenderInputText} 
                    />
                    <Field 
                        name="userPasswordConfirm" 
                        label="Powtórz hasło"
                        type="password"
                        props={{
                            "type": "password"
                        }}
                        component={RenderInputText} 
                    />
                    <Field 
                        name="userCity" 
                        label="Miasto"
                        component={RenderInputText} 
                    />
                    <Field 
                        name="select" 
                        label="Your select:"
                        component={RenderSelect} 
                    >
                        <option value="1">1111</option>
                        <option value="2">2222</option>
                        <option value="3">3333</option>
                    </Field>
                    <button type="submit" className="btn btn-primary" disabled={submitting}>Zapisz</button>
                </form>
            </div>
		);
	}
}

export default Register;
