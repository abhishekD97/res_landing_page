import React, { useState } from "react";
import {NavLink, Link} from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import FastfoodIcon from '@material-ui/icons/Fastfood';

function Header(){
    const navlinksArray = ["home","menu","contact"];
    const [navlinks, setNavlinks] = useState(navlinksArray[0]);

    function setnav(e){
        console.log(e.target);
    }

    const stylea = {
        color: "white",
        textDecoration:"none",
        fontWeight:"600"   
    }
    return(
        <div>
            <ReactBootStrap.Navbar className="py-2" bg="transparent" fixed="top" expand="sm" variant="light">
            <ReactBootStrap.Navbar.Brand className="ml-2">
            <NavLink 
            style={{textDecoration:"none", color:"white"}} 
            to="/"> 
            <div className="brand">
            <p className="res_name">RestaurantName</p>
            <p className="res_type">Bar|Restaurant</p>
            </div>
            </NavLink>
            </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootStrap.Nav className="ml-auto mr-4">
            <ReactBootStrap.Nav.Link className="ml-4"><NavLink style={stylea} activeStyle={{color: "#ff005c"}} exact to="/">Home</NavLink></ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link className="ml-4"><NavLink style={stylea} activeStyle={{color: "#ff005c"}} exact to="/order">Order Now</NavLink></ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link className="ml-4"><NavLink style={stylea} activeStyle={{color: "#ff005c"}} exact to="/about">About</NavLink></ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link className="ml-4"><NavLink style={stylea} activeStyle={{color: "#ff005c"}} exact to="/contact">Contact</NavLink></ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Form inline>
            </ReactBootStrap.Form>
            </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        </div>
    );
}

export default Header;