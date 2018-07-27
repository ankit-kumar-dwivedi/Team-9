import React from 'react';
import "./Welcome.css";
import StepThree from './Multistep/Step3';
import StepTwo from './Multistep/Step2';
import StepOne from './Multistep/Step1';
import {ProgressBar} from 'react-bootstrap';
// Figure out to add a step progess that will be in sync with steps

class Multistep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    };
    this.goToNext = this.goToNext.bind(this);
    this.goToPrev = this.goToPrev.bind(this);
  }

  // change the form step = step+1 and render next form step
  goToNext() {
    const { step } = this.state;

    if (step !== 3) {
      this.setState({
        step: step + 1
      });
    } else {
      alert("Submitting");
    }
    this.render();
  }

  // change the form step = step-1 and render prev form step
  goToPrev() {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
    this.render();
  }

    render() {
        return <div>
            <h2>Book an appointment</h2>

            <div className="container">
              <div className="container">
                <ProgressBar bsStyle="info" now={this.state.step*30} />
              </div>

              {this.state.step === 1 && <StepOne key="personal" onSubmit={this.goToNext} />}
              {this.state.step === 2 && <StepThree key="date" onBack={this.goToPrev} onSubmit={this.goToNext} />}
              {this.state.step === 3 && <StepThree key="confirmation" onBack={this.goToPrev} onSubmit={this.goToNext} />}
            </div>
          </div>;
  }
}

export default Multistep;
