import React from 'react';
import {Link} from 'react-router-dom'

function Footer(props){
    return(
        <div className="footer mt-5">
        <div className="container bg-pimary">
            <div className="offset-5">       
            <u><h5>Links</h5></u>
            <ul className="list-unstyled" >
                <li><Link to="/home"> Home</Link></li>
                <li><Link to="/aboutus">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/contactus">Contact</Link></li>
            </ul>
            </div>
        </div>
                
                
            
        </div>
    );
}

export default Footer;