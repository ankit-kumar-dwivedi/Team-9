import React from "react";
import { FormErrors } from './FormErrors';

//  Step for General user details
//  Age to be replaced with DOB

class StepOne extends React.Component {
    constructor() {
        super();
        this.state = {
            Firstname: "",
            Lastname: "",
            Gender: "",
            Age:"",
            formErrors: { Firstname: '', Lastname: '' ,Age:''},
            FirstnameValid: false,
            LastnameValid: false,
            AgeValid: false
        };

        // single handleChange can do all magic
        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({[name]: value},
        () => { this.validateField(name, value) });
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let FirstnameValid = this.state.FirstnameValid;
        let LastnameValid = this.state.LastnameValid;
        let AgeValid = this.state.AgeValid;

        switch (fieldName) {
          case "Firstname":
            FirstnameValid = !!value.trim();
            fieldValidationErrors.Firstname = FirstnameValid ? "" : " cannot be blank!";
            break;
          case "Lastname":
            LastnameValid = !!value.trim();
            fieldValidationErrors.Lastname = LastnameValid ? "" : " cannot be blank!";
            break;
          case "Age":
            AgeValid = !!value.trim();
            fieldValidationErrors.Lastname = LastnameValid ? "" : " cannot be blank!";
            break;
          default:
            break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            FirstnameValid: FirstnameValid,
            LastnameValid: LastnameValid,
            AgeValid: AgeValid
        });
    }
    handleSubmit(event) {
        alert("submit ");
        event.preventDefault();
    }
    

    render() {
        return <div className="container">
            <form className="form" onSubmit={this.handleSubmit}>
                <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
            <p>{this.state.handleError}</p>

              <label>Firstname :</label>
              <input name="Firstname" type="text"
               placeholder="Firstname" autoFocus 
               value={this.state.Firstname} 
               onChange={this.handleChange} />

              <label>Lastname :</label>
              <input name="Lastname" type="text"
               placeholder="Lastname"
                value={this.state.Lastname}
                 onChange={this.handleChange} />

              <label>
                Gender :
                <select name="Gender"
                 value={this.state.value}
                  onChange={this.handleChange}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                  
                </select>
            
                </label>
              <label>Age : </label>
              <input name="Age" type="number"
              value={this.state.Age}
                onChange={this.handleChange} />
              <p>  Click Next </p>
              <button type="submit" className="btn btn-primary" 
              disabled={!(this.state.Lastname && this.state.FirstnameValid && this.state.AgeValid)}>
                Next
              </button>
            </form>
          </div>;
    }
}

export default StepOne;