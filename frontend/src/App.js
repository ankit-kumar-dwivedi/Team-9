import React, { Component } from 'react';
import logo from './logo.svg';
import { Nav, MenuItem, Navbar,Image, NavItem, NavDropdown, Carousel,Grid,Row,Col,Thumbnail} from 'react-bootstrap';
import './App.css';

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
        <p>medico@example.com</p>
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
  return (
    <Carousel>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="images\carousel.png" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="images\carousel.png" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="images\carousel.png" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

function Clinics(){
  return <Grid>
      <Row>
        <Col xs={4} md={3}>
        <Image src="images\Knowmore.png" circle thumbnail/>
        yryryrf
        </Col>
        <Col xs={4} md={3}>
        <Image src="images\Knowmore.png" circle thumbnail />
        fhghjgf
        </Col>
        <Col xs={4} md={3}>
          <Image src="images\Knowmore.png" circle thumbnail />
          yrfyfhdf
        </Col>
      <Col xs={4} md={3}>
        <Image src="images\Knowmore.png" circle thumbnail />
      </Col>
      <Col xs={4} md={3}>
        <Image src="images\Knowmore.png" circle thumbnail />
      </Col>
      </Row>
    </Grid>;
}
class App extends Component {
  render() {
    return <div>
        <Header />
        <Navi />
        <Carosal />
        <div>
          <h2 className="intendation">Clinical Specialities</h2>
        </div>
        <Clinics />
      </div>;
  }
}

export default App;
