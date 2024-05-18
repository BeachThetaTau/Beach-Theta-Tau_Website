
import './ParallaxScenery.css';
import { Parallax, ParallaxProps } from "react-parallax";

const ParallaxScenery = () => {
  const parallaxProps: ParallaxProps = {
    bgImage: 'Scenery.png',
    strength: 500,
    style: { height: '100vh' },
  };

  return (
    <Parallax {...parallaxProps}>
      <div className='content'>
        <p className='img-txt'>THETA TAU AT LONG BEACH</p>
        <h1 className='img-txt'>We are the first & foremost professional engineering fraternity at Long Beach.</h1>
      </div>
    </Parallax>
  );
};

export default ParallaxScenery;
