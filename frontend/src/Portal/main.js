import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Header from '../Welcome/Header';

const divStyle = {
  margin: "40px",
  border: "5px solid pink"
};

function Portal(){
    return <div><Header />
        <div style={divStyle} className="container">
        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Home">
                Tab 1 content
          </Tab>
            <Tab eventKey={2} title="My Doctor">
                Tab 2 content
          </Tab>
            <Tab eventKey={3} title="Medical Tests">
                Tab 3 content
          </Tab>
            <Tab eventKey={4} title="Payments">
                Tab 4 content
          </Tab>
        </Tabs>
    </div> </div>
        ;
}

export default Portal;