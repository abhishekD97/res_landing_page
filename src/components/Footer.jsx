import React from "react";
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer(){

    const stylea = {
        color: "black"  
    }

    return (
        <div className="footer">
        <hr className="footerHR"/>
        <div className="parents">
        <div className="child">
        <div className="brand">
        <p className="res_name">RestaurantName</p>
        <p className="res_type">Bar|Restaurant</p>
        </div>
        </div>
        <div className="child copyrightStyle">
        <p className="">© Restaurant Name LTD. 2021</p>
        </div>
        <div className="child footerIcon pt-2">
        <a style={stylea} href="https://twitter.com/"><TwitterIcon className="mx-2" style={{ fontSize: 30 }}/></a>
        <a style={stylea} href="https://www.facebook.com/"><FacebookIcon className="mx-2" style={{ fontSize: 30 }}/></a>
        <a style={stylea} href="https://www.linkedin.com/"><LinkedInIcon className="mx-2" style={{ fontSize: 30 }}/></a>
        <a style={stylea} href="https://pinterest.com/"><PinterestIcon className="mx-2" style={{ fontSize: 30 }}/></a>
        <a style={stylea} href="https://www.instagram.com/"><InstagramIcon className="mx-2" style={{ fontSize: 30 }}/></a>
        </div>
        </div>
        <br/>
        </div>
    );
}

export default Footer;