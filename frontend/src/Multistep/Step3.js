import React from "react";
import { FormErrors } from "./FormErrors";


function Next() {
    return (
        <div>
            <p>  Click Next </p>
            <button type="submit" className="btn btn-primary" >
                Next
        </button>
        </div>
    );
}

class StepThree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: '',
            Password: '',
            ConfirmPassword:'',
            formErrors: { Email: '', Password: '', ConfirmPassword: '' },
            EmailValid: false,
            PasswordValid: false,
            ConfirmPasswordValid: false,
            FormValid: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit();
        
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let EmailValid = this.state.EmailValid;
        let PasswordValid = this.state.PasswordValid;
        let ConfirmPasswordValid = this.state.ConfirmPasswordValid;

        switch (fieldName) {
          case "Email":
            EmailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.Email = EmailValid ? "" : " is invalid";
            break;
          case "Password":
            PasswordValid = value.length >= 6;
            fieldValidationErrors.Password = PasswordValid ? "" : " is too short";
            break;
          case "ConfirmPassword":
            ConfirmPasswordValid = (value===this.state.Password) ? true : false;
            fieldValidationErrors.ConfirmPassword = ConfirmPasswordValid ? "" : " is Incorrect";
            break;
          default:
            break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            EmailValid: EmailValid,
            PasswordValid: PasswordValid,
            ConfirmPasswordValid: ConfirmPasswordValid,
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ FormValid: this.state.EmailValid && this.state.PasswordValid && this.state.ConfirmPasswordValid});
    }
    render() {
        return <div className="container">
            <form className="form" onSubmit={this.handleSubmit}>
              <div className="panel panel-default">
                <FormErrors formErrors={this.state.formErrors} />
              </div>
              <p>{this.state.handleError}</p>

              <label>Email :</label>
              <input name="Email" type="text" placeholder="Email" autoFocus value={this.state.Email} onChange={this.handleChange} />

              <label>Password :</label>
              <input name="Password" type="password" placeholder="Password" value={this.state.Password} onChange={this.handleChange} />

              <label>Confirm Password :</label>
              <input name="ConfirmPassword" type="password" placeholder="ConfirmPassword" value={this.state.ConfirmPassword} onChange={this.handleChange} />
                <button onClick={this.props.onBack} className="btn btn-primary" >
                    Back
            </button>
              {this.state.FormValid && <Next />}
            </form>
          </div>;
    }
}

export default StepThree;