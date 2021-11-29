import Esports from '../../images/esportspage.jpg'
import Wastenomore from '../../images/wastenomore.jpg'
import Midnightpage from '../../images/midnightpage.jpg'
import WeatherPage from '../../images/weatherpage.jpg'
import Notetaker from '../../images/notetakerpage.jpg'
import Quizpage from '../../images/quizpage.jpg'
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
    <a href='https://ernie2021.github.io/teamprojectone/' target='https://ernie2021.github.io/teamprojectone/' ><img
      className="d-block w-100"
      src={Esports}
      alt="First slide"
      width='200px'
      height="400px"
      
    /></a>
    <Carousel.Caption>
    
     </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <a href='https://wastenomore.herokuapp.com/' target='https://wastenomore.herokuapp.com/'><img
      className="d-block w-100"
      src={Wastenomore}
      alt="Second slide"
      width='200px'
      height="400px"
    /></a>
    <Carousel.Caption>
    
    
     </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <a href='https://midnight-motorsports.herokuapp.com/' target='https://midnight-motorsports.herokuapp.com/'><img
      className="d-block w-100"
      src={Midnightpage}
      alt="Second slide"
      width='200px'
      height="400px"
    /></a>
    <Carousel.Caption>
     
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <a href='https://codesforjenuel.github.io/codingquiz/' target='https://codesforjenuel.github.io/codingquiz/'><img
      className="d-block w-100"
      src={Quizpage}
      alt="Second slide"
      width='200px'
      height="400px"
    /></a>
    <Carousel.Caption>

   



    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <a href='https://codesforjenuel.github.io/weatherDashboard/' target='https://codesforjenuel.github.io/weatherDashboard/'><img
      className="d-block w-100"
      src={WeatherPage}
      alt="Second slide"
      width='200px'
      height="400px"
    /></a>
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <a href='https://desolate-forest-61704.herokuapp.com/' target='https://desolate-forest-61704.herokuapp.com/'><img
      className="d-block w-100"
      src={Notetaker}
      alt="Third slide"
      width='200px'
      height="400px"
    /></a>
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>

            </div>
        )
    }
}