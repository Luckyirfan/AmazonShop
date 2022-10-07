import React from 'react';
import "./Footer.css"
import { Table } from 'react-bootstrap';

const Footers = () => {
    return (
        <div className='Footer'>
            <div className='Footin'>
                <div className='Foot'>
                    <div className='data'>
                    <input type="search" placeholder='Your Email' className='input'/>
                    <label htmlFor="" className='input1'>Subscribe Now!</label>
                 <div className='tab'>
                    <table >
                      <thead >
                      <tr>
                      <th>Patnership</th> 
                      </tr>
                      <tr>
                      <td> <a href=""> Websites </a></td>
                      </tr>
                      <tr>
                      <td> <a href=""> Social Media </a> </td>
                      </tr>
                      <tr>
                      <td><a href=""> Branding </a></td>
                      </tr>
                      </thead>
                      </table>
                      <div className='tab1' >
                    <table >
                      <thead >
                      <tr>
                      <th>About</th> 
                      </tr>
                      <tr>
                      <td> <a href=""> Our Project </a></td>
                      </tr>
                      <tr>
                      <td> <a href=""> Careear </a></td>
                      </tr>
                      </thead>
                      </table>
                      </div>
                      <div className='tab2' >
                    <table >
                      <thead >
                      <tr>
                      <th>Support</th> 
                      </tr>
                      <tr>
                      <td> <a href=""> Our Project </a> </td>
                      </tr>
                      <tr>
                      <td> <a href=""> Support Requst </a></td>
                      </tr>
                      <tr>
                      <td> <a href=""> Contect </a></td>
                      </tr>
                      </thead>
                      </table>
                      </div>
             </div>
                      <div className='FaFa'>
                      <p>All Right Resurved 2022</p>
                      
                      </div>


                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default Footers;