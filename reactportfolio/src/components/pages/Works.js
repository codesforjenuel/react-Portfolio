import Esports from '../../images/esportspage.jpg'
import Passwordpage from '../../images/passwordpage.jpg'
import Notetaker from '../../images/notetakerpage.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import React, { Component } from 'react';

export default class Works extends Component {
    render() {
        return (
            <div className='carouselbox'>
            <div className='carousel'>
              <h1 className='workstitle'>Works</h1>
                <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={Esports}
      alt="First slide"
      width='200px'
      height="400px"
      
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={Passwordpage}
      alt="Second slide"
      width='200px'
      height="400px"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Notetaker}
      alt="Third slide"
      width='200px'
      height="400px"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>

            </div>
        )
    }
}