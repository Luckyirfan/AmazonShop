import React, { Component } from 'react';
import "./Title.css"

export class Title extends Component {
  render() {
    return ( 
    <div className='Bord'>
        {/* <img className='logo' src="Lucky logo.png" alt="" /> */}
        <h1 className='Mall'>SHOPPING MALL</h1>
        <p className='Ims'>Owner Irfan IMS</p>
        <img className='gif1' src="run-shopping.gif" alt="run-shopping" />

    </div>
    );
  }
}

export default Title;
