import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from '../C-Navigation/Home';
import Services from '../C-Navigation/Services';
import ContectUs from '../C-Navigation/ContectUs';
import Carts from '../C-Navigation/Carts';
import Navigation from '../C-Navigation/Navigation';
import Category from "../C-Navigation/Category"


const Routers = () => {
    return (
        <div>
            <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path ="/" element={<Home/>}/>
                <Route path ="/Services" element={<Services/>}/>
                <Route path ="/Category" element={<Category/>}/>
                <Route path ="/ContectUs" element={<ContectUs/>}/>
                <Route path ="/Carts" element={<Carts/>}/>
                
            </Routes>
            </BrowserRouter>
            
        </div>
    );
};

export default Routers;