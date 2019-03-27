import React from "react";
import { MDBIcon,MDBNavbarNav, MDBNavItem, MDBNavLink, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,} from "mdbreact";


function NavbarRight(){
return (
    <MDBNavbarNav right>
        <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
            <MDBIcon fab icon="twitter" />
        </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
              <MDBIcon fab icon="google-plus-g" />
            </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
            <MDBDropdown>
                <MDBDropdownToggle nav caret>
                    <MDBIcon icon="user" />
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

export default NavbarRight;