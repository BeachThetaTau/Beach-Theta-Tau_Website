import React, { useState, useEffect } from 'react';
import { Parallax, ParallaxProps } from 'react-parallax';
import './PillarsParallax.css';

interface GenerateParallaxProps {
  fileName: string;
  title: string;
}

const GenerateParallax: React.FC<GenerateParallaxProps> = ({ fileName, title }) => {
  const [parallaxHeight, setParallaxHeight] = useState('100vh');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setParallaxHeight('40vh');
      } else if (window.innerWidth <= 800) {
        setParallaxHeight('60vh');
      } else if (window.innerWidth <= 1200) {
        setParallaxHeight('80vh');
      } else {
        setParallaxHeight('100vh');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set the initial height based on the current window size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const parallaxProps: ParallaxProps = {
    bgImage: fileName,
    strength: 500,
    style: { height: parallaxHeight, width: '100%', position: 'relative' },
    bgStyle: { height: '100%', width: '100%', objectFit: 'cover' },
  };

  return (
    <Parallax {...parallaxProps}>
      <p className="parallax-txt">{title}</p>
    </Parallax>
  );
}

export default GenerateParallax;
