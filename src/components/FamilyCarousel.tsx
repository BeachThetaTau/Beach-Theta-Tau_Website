{/*
If captions are needed format like
"""
    <Carousel fade className='carousel-img'>
      <Carousel.Item interval={1000}>
        <img src={firstImage} alt="First slide" className='carousel-img'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
"""
*/}


import Carousel from 'react-bootstrap/Carousel';
import './FamilyCarousel.css'; 

const FamilyCarousel = () => {
  return (
    <Carousel fade className='family-carousel-img'>
      
      <Carousel.Item interval={1500}>
        <img src="Instigators.jpg" alt="Instigators" className='family-carousel-img'/>
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img src="RoyalTigers.jpg" alt="Royal Tigers" className='family-carousel-img'/>
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img src="Candela.jpg" alt="Candela" className='family-carousel-img'/>
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img src="B2.jpg" alt="B2" className='family-carousel-img'/>
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img src="Traitors.jpg" alt="Traitors" className='family-carousel-img'/>
      </Carousel.Item>

    </Carousel>
  );
};

export default FamilyCarousel;
