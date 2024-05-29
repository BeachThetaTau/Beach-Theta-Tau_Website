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
import './ThreeImgCarousel.css';


interface DisplayCarouselProps {
  firstImage: string;
  secondImage: string;
  thirdImage: string;
}

const DisplayCarousel: React.FC<DisplayCarouselProps> = ({
  firstImage,
  secondImage,
  thirdImage,
}) => {

  return (
    <Carousel fade className='carousel-img'>
      <Carousel.Item interval={1000}>
        <img src={firstImage} alt="First slide" className='carousel-img'/>
      </Carousel.Item>
      
      <Carousel.Item interval={1000}>
        <img src={secondImage} alt="Second slide" className='carousel-img'/>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img src={thirdImage} alt="Third slide" className='carousel-img'/>
      </Carousel.Item>
    </Carousel>
  );
};

export default DisplayCarousel;
