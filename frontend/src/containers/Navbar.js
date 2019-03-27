import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBContainer } from "mdbreact";
import NavbarLeft from '../components/Navbar/NavbarLeft';
import NavbarRight from '../components/Navbar/NavbarRight';
import NavbarBrand from '../components/Navbar/NavbarBrand';
import { Route} from 'react-router-dom';
import App from '../App.js';
class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <MDBContainer color="default-color" dark expand="md">   
      <MDBNavbar color="default-color" dark expand="md">
        <NavbarBrand/>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <NavbarLeft/>
          <NavbarRight/>
        </MDBCollapse>
      </MDBNavbar>
    </MDBContainer>
    );
  }
}

export default Navbar;
