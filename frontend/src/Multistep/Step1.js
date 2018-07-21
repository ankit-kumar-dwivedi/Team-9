import React from "react";
import { FormErrors } from './FormErrors';

// this step user Name details and department

class StepOne extends React.Component {
    constructor() {
        super();
        this.state = {
            Firstname: "",
            Lastname: "",
            department: "",
            formErrors: { Firstname: '', Lastname: '' },
            FirstnameValid: false,
            LastnameValid: false
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

        switch (fieldName) {
            case 'Firstname':
                FirstnameValid = !!value.trim();
                fieldValidationErrors.Firstname = FirstnameValid ? '' : ' cannot be blank!';
                break;
            case 'Lastname':
                LastnameValid = !!value.trim();
                fieldValidationErrors.Lastname = LastnameValid ? '' : ' cannot be blank!';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            FirstnameValid: FirstnameValid,
            LastnameValid: LastnameValid
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
                Select Department:
                <select name="department"
                 value={this.state.value}
                  onChange={this.handleChange}>
                  <option value="Dental">Dental</option>
                  <option value="EnT">EnT</option>
                  <option value="Physician">Physician</option>
                  <option value="Dermatologist">Dermatologist</option>
                </select>
              </label>
              <p>  Click Next </p>
              <button type="submit" className="btn btn-primary" 
              disabled={!(this.state.Lastname && this.state.FirstnameValid)}>
                Next
              </button>
            </form>
          </div>;
    }
}

export default StepOne;