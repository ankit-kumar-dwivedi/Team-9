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
            DateValid: true,
            TimeValid: false,
            FormValid: false
        };

        // single handleChange can do all magic
        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
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
                <label>Time :</label>
                <select name="Time"
                        value={this.state.value}
                        onChange={this.handleChange}>

                            <option value=""></option>
                    <option value="11:00AM">11:00AM</option>
                    <option value="11:30AM">11:30AM</option>
                        </select>
                <label>Speciality :</label>
                    
                <select name="Speciality"
                        value={this.state.value}
                        onChange={this.handleChange}>
                        
                        <option value="Physician">Physician</option>
                        <option value="Dentist">Dentist</option>
                        <option value="Dermatologist">Dermatologist</option>
                        <option value="Ent">EnT</option>
                        <option value="Cancer Specialist">Cancer</option>

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