import React from "react";
import { MDBNavbarNav, MDBNavItem, MDBNavLink, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,} from "mdbreact";


const NavbarLeft=()=>{
return (
    <MDBNavbarNav left>
        <MDBNavItem active>
          <MDBNavLink to="">Home</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
            <MDBNavLink to="#!">Features</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
            <MDBNavLink to="#!">Pricing</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <div className="d-none d-md-inline">Dropdown</div>
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default" right>
                <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
        </MDBNavItem>
    </MDBNavbarNav>
);
}

export default NavbarLeft;