import React from 'react';
import "./Nav.css";
import {Link} from "react-router-dom";
import { Button } from 'react-bootstrap';

const Navigation = () => {
    return (
        <div>
              <Link to="/Home">
                 <Button className='m-2'>Home</Button>
              </Link> 
             <Link to="/Services">
                 <Button className='m-1'>Services</Button>
             </Link> 
             <Link to="/Category">
                 <Button className='m-1'>Category</Button>
             </Link> 
             <Link to="/ContectUs">
                 <Button className= 'm-1'>ContectUs</Button>
             </Link> 
             <Link to="/Carts" className='/Cart'> Cart </Link> 
        </div>
    );
};

export default Navigation;