validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let firstnameValid = this.state.firstnameValid;
    let lastnameValid = this.state.lastnameValid;

    switch (fieldName) {
        case 'firstname':
            firstnameValid = !!value.trim();
            fieldValidationErrors.firstname = firstnameValid ? '' : ' is mandatory';
            break;
        case 'lastname':
            lastnameValid = !!value.trim();
            fieldValidationErrors.lastname = lastnameValid ? '' : ' is mandatory';
            break;
        default:
            break;
    }
    this.setState({
        formErrors: fieldValidationErrors,
        firstnameValid: firstnameValid,
        lastnameValid: lastnameValid
    });
}





class StepOne extends React.Component {
    constructor() {
        super();
        this.state = {
            firstname: "",
            lastname: "",
            department: "",
            formErrors: { firstname: '', lastname: '' },
            firstnameValid: false,
            lastnameValid: false
        };

        // single handleChange can do all magic
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }
    handleChange(e) {

        // If you are using babel, you can use ES 6 dictionary syntax
        // let change = { [e.target.name] = e.target.value }
        let change = {}
        change[e.target.name] = e.target.value
        this.setState(change)
    }



    handleOptionChange(event) {
        this.setState({ department: event.target.value });
    }
    handleSubmit(event) {
        alert("submit ");
        event.preventDefault();
    }
    handleError() {

        if (!(this.state.lastname && this.state.firstnameValid)) {
            return "All fields are mandatory.";
        }
        else {
            return "";
        }
    }

    render() {
        return <div className="container">
            <form className="form" onSubmit={this.handleSubmit}>
                <p>{this.state.handleError}</p>
                <label>Firstname :</label>
                <input type="firstname" placeholder="firstname" autoFocus value={this.state.firstname} onChange={this.handleChange} />

                <label>Lastname :</label>
                <input type="lastname" placeholder="lastname" value={this.state.lastname} onChange={this.handleChange} />

                <label>
                    Select Department:
                <select value={this.state.value} onChange={this.handleOptionChange}>
                        <option value="Dental">Dental</option>
                        <option value="EnT">EnT</option>
                        <option value="Physician">Physician</option>
                        <option value="Dermatologist">Dermatologist</option>
                    </select>
                </label>
                <p>  Click Next </p>
                <button type="submit" className="btn btn-primary" disabled={!(this.state.lastname && this.state.firstnameValid)}>
                    Next
              </button>
            </form>
        </div>;
    }
}
