import React from 'react';
import {Link} from 'react-router-dom'

function Footer(props){
    return(
        <div className="footer mt-5">
        <div className="container bg-pimary">
            <div className="offset-5">       
            <u><h5>Links</h5></u>
            <ul className="list-unstyled" >
                <li><Link style={{color:'cyan'}} to="/"> Home</Link></li>
                <li><Link style={{color:'cyan'}} to="/login">Login</Link></li>
                <li><Link style={{color:'cyan'}} to="/create">Create</Link></li>
                <li><Link style={{color:'cyan'}} to="/manage">Manage</Link></li>
            </ul>
            </div>
            <div className="text-muted">Website currently in development.</div>
           
        </div>
                
                
            
        </div>
    );
}

export default Footer;