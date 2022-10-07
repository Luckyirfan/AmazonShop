import React from 'react';
import "./Carousel.css"
import { useSelector } from 'react-redux';
import { Carousel } from "react-bootstrap";
import { MyCarouselData } from "./MyCarouselData"
// import{ Nav} from "../ANavigationBar/Nav"
// import { Cards } from '../BCards/Cards';



const Carousels = () => {
  const CarouData =  useSelector((state)=>state.MyCarouselData.CarouselData);
    return (
        <div className='homeMain'>
          
       {/* <Nav/> */}
       <Carousel className='Carousel'>
        {CarouData.map((elements) => {
          return (
            <Carousel.Item interval={2000} key={elements.id}>
              <img
                className="d-block w-100 m-2"
                src={elements.carouselImg}
                alt="First slide"
                style={{ height: "250px" }}
              />
              <Carousel.Caption>
                <h3>{elements.carouselTitle}</h3>
                <p>{elements.carouselDescription}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
        
      </Carousel>
      {/* <Cards/>     */}
        </div>
    );
};


export default Carousels;