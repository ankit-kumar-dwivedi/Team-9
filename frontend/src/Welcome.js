import React, { Component } from 'react';
import logo from './logo.svg';
import { Nav, MenuItem, Navbar,Image, NavItem, NavDropdown, Carousel,Grid,Row,Col,Button} from 'react-bootstrap';
import './Welcome.css';

function Header(){
  return <div className="row header">
      <div className="column">
        <img src="images\logo.png" className="logo" alt="Actor" />
      </div>
      <div className="column" />
      <div className="column" />

      <div className="column info">
        <h3>Call us:</h3>
        <p>+0 123-456-789</p>
      </div>
      <div className="column info">
        <h3>Send us a Mail:</h3>
      <a href="mailto: medico@example.com">medico@example.com</a>
      </div>
    </div>;
}

function Navi(){
  return <Navbar className="sticky-nav" collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#brand">Home</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">
            <strong>Link</strong>
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link
          </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Link Right
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link Right
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>;
}
function Carosal() {
  return <Carousel>
      <Carousel.Item>
        <img alt="900x500" src="images\slide-1.jpg" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt="900x500" src="images\slide-2.jpg" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img alt="900x500" src="images\slide-3.jpg" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>;
}

function WhatCanWeDo(){
  return <div className="container">
      <h1>How can we help you today?</h1>

      <div className="container">
        <div className="span4">
          <p className="content-img">
            <img src="images/ico-sth.svg" alt="icon" />
          </p>
          <div>
            <h4>
              <a href="/find-a-doctor/" title="Book an Appointment" data-id="1552">
                BOOK AN APPOINTMENT
              </a>
            </h4>
            <p>Find a Doctor for any of your specific health needs.</p>
            <p> </p>
          </div>
        </div>

        <div className="span4">
          <p className="content-img">
            <img src="images/ico-hrt.svg" alt="icon" />
          </p>
          <div>
            <h4>
              <a href="/thank-an-employee/" title="Thank an Employee" data-id="1542">
                THANK AN EMPLOYEE
              </a>
            </h4>
            <p>
              Recognize an employee who went above and beyond to provide
              exemplary patient care.
            </p>
          </div>
        </div>
        <div className="span4">
          <p className="content-img">
            <img src="images/ico-clp.svg" alt="icon" />
          </p>
          <div>
            <h4>
              <a href="/patient-portal/" title="Patient Portal">
                PATIENT PORTAL
              </a>
            </h4>
            <p>
              Visit our secure, web-based system to make an appointment,
              access your medical records and more.
            </p>
          </div>
        </div>
      </div>
    </div>;
}

function Clinics(){
  return <Grid>
      <Row>
        <Col xs={4} md={3}>
        <Image src="images\physician.jpg" circle thumbnail responsive/>
          <Button bsStyle="info" bsSize="small" block>
            Physician
          </Button>
        </Col>
        <Col xs={4} md={3}>
        <Image src="images\ent.jpg" circle thumbnail responsive/>
        <Button bsStyle="info" bsSize="small" block>
          ENT
          </Button>
        </Col>
        <Col xs={4} md={3}>
        <Image src="images\dental.png" circle thumbnail responsive/>
        <Button bsStyle="info" bsSize="small" block>
          Dental
          </Button>
        </Col>
        <Col xs={4} md={3}>
        <Image src="images\Knowmore.png" circle thumbnail responsive/>
        <Button bsStyle="info" bsSize="small" block>
          Know more
          </Button>
        </Col>
      </Row>
    </Grid>;
}
class Welcome extends Component {
  render() {
    return <div>
        <Header />
        <Navi />
        <Carosal />
        <WhatCanWeDo/>
        <div>
          <h2>Clinical Specialities</h2>
        </div>
        <Clinics />
      </div>;
  }
}

export default Welcome;
