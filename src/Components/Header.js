import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button, Row, Col } from 'react-bootstrap';
import '../App.css';

class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
	    <div className="App">
	      <div className="App-header">
			<div>
				<Navbar inverse className="mainNav">
			    <Row className="show-grid">
			      <Col xs={8} md={8}>
						  <Navbar.Header>
						    <Navbar.Brand>
						      <a style={{color: 'black'}} href="." >depop</a>
						    </Navbar.Brand>
						  </Navbar.Header>
			      </Col>
			    	<Nav pullRight>
			      	<Col xs={4} md={4}>  
					      <FormGroup id="searchBox">
					      	<input items={this.props.images} type="search" placeholder="Search" />
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
				      <NavDropdown onClick={this.props.handleClickMen} eventKey={3} title="MEN" id="basic-nav-dropdown1">
				        <MenuItem eventKey={3.1}>Tops</MenuItem>
				        <MenuItem eventKey={3.2}>Bottoms</MenuItem>
				        <MenuItem eventKey={3.3}>Shoes</MenuItem>
				      </NavDropdown>
				      <NavDropdown onClick={this.props.handleClickWomen} eventKey={4} title="WOMEN" id="basic-nav-dropdown2">
				        <MenuItem eventKey={4.1}>Tops</MenuItem>
				        <MenuItem eventKey={4.2}>Bottoms</MenuItem>
				        <MenuItem eventKey={4.3}>Shoes</MenuItem>
				      </NavDropdown>
				      <NavItem eventKey={5} href="#" id="basic-nav">ACCESSORIES</NavItem>
				    </Nav>
				    <Nav pullRight>
					    <NavItem eventKey={3} href="#">MY ACCOUNT</NavItem>
				    </Nav>
				  </Navbar.Collapse>
				</Navbar>
			</div>
	      </div>
	      <p className="App-intro">
	      </p>
	    </div>
	    )
	}
}

export default Header;