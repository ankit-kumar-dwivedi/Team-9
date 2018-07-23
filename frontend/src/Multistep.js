import React from 'react';
import "./Welcome.css";
import StepThree from './Multistep/Step3';

// Figure out to add a step progess that will be in sync with steps

function Multistep() {
    return <div>
        <h1>Here comes the multistep form</h1>
        <StepThree />
    </div>;
}

export default Multistep;
