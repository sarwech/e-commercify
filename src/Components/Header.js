import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button, Row, Col } from 'react-bootstrap';
import '../App.css';

const navBarInstance = (
	<div>
		<Navbar inverse className="mainNav">
	    <Row className="show-grid">
	      <Col xs={8} md={8}>
				  <Navbar.Header>
				    <Navbar.Brand>
				      <a href="#">fashion</a>
				    </Navbar.Brand>
				  </Navbar.Header>
	      </Col>
	    	<Nav pullRight>
	      	<Col xs={4} md={4}>  
			      <FormGroup id="demo-2">
			      	<input type="search" placeholder="Search" />
			      </FormGroup>
	      	</Col>
	    	</Nav>
	    </Row>	
		</Navbar>
		<Navbar className="itemsNav" inverse collapseOnSelect>
		  <Navbar.Header>
		    <Navbar.Toggle />
		  </Navbar.Header>
		  <Navbar.Collapse>
		    <Nav>
		      <NavDropdown eventKey={3} title="MEN" id="basic-nav-dropdown">
		        <MenuItem eventKey={3.1}>Action</MenuItem>
		        <MenuItem eventKey={3.2}>Another action</MenuItem>
		        <MenuItem eventKey={3.3}>Something else here</MenuItem>
		        <MenuItem divider />
		        <MenuItem eventKey={3.4}>Separated link</MenuItem>
		      </NavDropdown>
		      <NavDropdown eventKey={4} title="WOMEN" id="basic-nav-dropdown">
		        <MenuItem eventKey={4.1}>Action</MenuItem>
		        <MenuItem eventKey={4.2}>Another action</MenuItem>
		        <MenuItem eventKey={4.3}>Something else here</MenuItem>
		        <MenuItem divider />
		        <MenuItem eventKey={4.4}>Separated link</MenuItem>
		      </NavDropdown>
		      <NavItem eventKey={5} href="#">ACCESSORIES</NavItem>
		    </Nav>
		    <Nav pullRight>
			    <NavItem eventKey={3} href="#">MY ACCOUNT</NavItem>
		    </Nav>
		  </Navbar.Collapse>
		</Navbar>
	</div>
);

class Header extends Component {

	render() {
		return (
	    <div className="App">
	      <div className="App-header">
	      	{navBarInstance}
	      </div>
	      <p className="App-intro">
	      </p>
	    </div>
	    )
	}
}

export default Header;