import React from "react";
import { FormErrors } from './FormErrors';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";


// step to take appointment time and date as input

class StepTwo extends React.Component {
    constructor() {
        super();
        this.state = {
            startDate: moment(),
            Time: moment(),
            
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
                <label>Date :</label>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    showTimeSelect

                
                />;
                <DatePicker
                    selected={this.state.Time}
                    onChange={this.handleChange}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    timeCaption="Time"
                    dateFormat="LT"
                    withPortal />
                <label>Lastname :</label>
                <input name="Lastname" type="text"
                    placeholder="Lastname"
                    value={this.state.Lastname}
                    onChange={this.handleChange} />

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
                
                
                <p>  Click Next </p>
                <button type="submit" className="btn btn-primary"
                    disabled={!(this.state.Lastname && this.state.FirstnameValid && this.state.AgeValid)}>
                    Next
              </button>
             
            </form>
        </div>;
    }
}

export default StepTwo;