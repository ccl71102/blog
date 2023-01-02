import React from "react";
import { NavbarContainer, NavbarLink } from "./styles";

const Navbar = () => {
    return(
        <NavbarContainer>
            <NavbarLink to="/">
                Home
            </NavbarLink>
            <NavbarLink to="/">
                About
            </NavbarLink>
            <NavbarLink to="/">
                Categories
            </NavbarLink>
        </NavbarContainer>        
    );
}

export default Navbar;