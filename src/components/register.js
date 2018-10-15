import React, { Component } from "react";
import Dropzone from 'react-dropzone';
import { Field } from "redux-form";
import { 
    RenderInputText,
    RenderSelect,
    RenderInputFile,
    MultiselectField,
} from  "../utils/forms";

class Register extends Component {
	constructor() {
        super();
        this.state = {
            "ageRange": 0,
            "file": null
        }
    }
    componentWillMount() {
        this.props.xxx();
    }
    sendFormData = (values) => {
        const formData = new FormData();
        const dataFromForm = {
            "userName": values.userName,
            "sureName": values.multi
        }
        formData.append('productImage', this.state.file);
        formData.append("data", JSON.stringify(dataFromForm));
        for (var key of formData.entries()) {
			console.log("XXXXXXXXXXXX", key[0] + ', ' + key[1])
		}
        this.props.addSport(formData);
        //https://stackoverflow.com/questions/40773641/how-to-send-data-along-with-file-in-http-post-angularjs-expressjs
    }
    handleRangeAge = (event) => {
        this.setState({
            "ageRange": Math.floor(event.target.value)
        });
    }
    updateElement = (event, sport) => {
        event.preventDefault();
        const data = {
            name: this.state.sportName,
            sureName: this.state.sportSureName
        };
        this.props.updateSport(sport._id, data);
    }
    handleSport = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    removeSport = (e, id) => {
        e.preventDefault();
        this.props.removeSport(id, () => {
            this.props.xxx();
        });
    }
    onChangeFile = (event) => {
        console.log("FILES: ", event.target.files[0]);
        this.setState({
            "file": event.target.files[0]
        }, () => {
            console.log("STATE", this.state.file);
        })
    }
	render() {

        const {
            submitting, 
            values, 
            handleSubmit
        } = this.props;
        console.log("111", this.props.sports);
        return (
			<div className="register">

                <form onSubmit={handleSubmit(this.sendFormData)}>
                <br /><br /><br />
            {/* <Dropzone
                onDrop={this.onDrop}
            >
                <p>Drop some files here ...</p>
            </Dropzone> */}
                <input type="file" onChange={this.onChangeFile} />
                {/* <Field 
                    name="productImage"
                    label="Wybierz Plik"
                    component={RenderInputFile} 
                /> */}
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

                <div>
                    {this.props.sports && this.props.sports.map(sport => {
                        return <div key={sport._id}>
                            <span>name</span><br />
                            <input type="text" name="sportName" onChange={this.handleSport} defaultValue={sport.name} /><br />
                            <span>surName</span><br />
                            <input type="text" name="sportSureName" onChange={this.handleSport} defaultValue={sport.sureName} />
                            <br />
                            <button onClick={(e) => this.updateElement(e, sport)}>Update</button>
                            <button onClick={(e) => this.removeSport(e, sport._id)}>Remove</button>
                            <hr />
                        </div>
                    })}
                </div>

            </div>
		);
	}
}

export default Register;
