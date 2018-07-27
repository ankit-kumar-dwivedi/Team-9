import React from "react";
import { FormErrors } from './FormErrors';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";


// step to take appointment time and date as input

function Next() {
  return (
    <div>
      <p> Click Next </p>
      <button type="submit" className="btn btn-primary">
        Next
      </button>
    </div>
  );
}

class StepTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Date: moment(),
            Time: '',
            Speciality: '',
            formErrors: { Time: '', Date: ''},
            DateValid: false,
            TimeValid: false,
            FormValid: false
        };

        // single handleChange can do all magic
        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    
    
    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit();

    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let DateValid = this.state.DateValid;
        let TimeValid = this.state.TimeValid;

        // to be implemented as per the database

        switch (fieldName) {
            case "Date":
                DateValid = true;
                fieldValidationErrors.Date = DateValid ? "" : " is invalid";
                break;
            case "Time":
                TimeValid = true;
                fieldValidationErrors.Time = TimeValid ? "" : " is invalid";
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            DateValid: DateValid,
            TimeValid: TimeValid,
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ FormValid: this.state.DateValid && this.state.TimeValid});
    }


    render() {
        return <div className="container">
            <form className="form" onSubmit={this.handleSubmit}>
                <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
                <p>{this.state.handleError}</p>
                <label>Date :</label>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                                   
                />;
                
                <label>Speciality :</label>
                    
                <select name="Gender"
                        value={this.state.value}
                        onChange={this.handleChange}>
                        
                        <option value="Physician">Male</option>
                        <option value="Dentist">Male</option>
                        <option value="Dermatologist">Male</option>
                        <option value="Ent">Female</option>
                        <option value="Cancer Specialist">Others</option>

                    </select>
                
                
                <button onClick={this.props.onBack} className="btn btn-primary" >
                    Back
            </button>
                {this.state.FormValid && <Next />}
             
            </form>
        </div>;
    }
}

export default StepTwo;