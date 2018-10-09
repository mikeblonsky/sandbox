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
        this.state = {
            "ageRange": 0
        }
    }
    componentWillMount() {
        this.props.xxx();
    }
    showResults = (values) => {
        console.log("showResults: ", values);
        this.props.addUser(values);
    }
    handleRangeAge = (event) => {
        this.setState({
            "ageRange": Math.floor(event.target.value)
        });
    }
	render() {

        const {
            submitting, 
            values, 
            handleSubmit
        } = this.props;
        console.log("RENDER", this.props);
        return (
			<div className="register">
                <form onSubmit={handleSubmit(this.showResults)}>
                <br /><br /><br />

                {/* <label htmlFor="customRange1">Example range {this.state.ageRange}</label>
                <input 
                    list="tickmarks" 
                    className="custom-range" 
                    id="customRange1" 
                    type="range" 
                    onChange={this.handleRangeAge}  
                    min="0" 
                    max="100" 
                />

                <div className="progress">
                    <div
                        className="progress-bar progress-bar-animated progress-bar-striped bg-warning"
                        role="progressbar"
                        style={{"width": "75%"}}
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    >
                        75%
                    </div>
                </div> */}
                    
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
                
                    {/* <Field 
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
                    </Field> */}
                    <button type="submit" className="btn btn-primary" disabled={submitting}>Zapisz</button>
                </form>
            </div>
		);
	}
}

export default Register;
