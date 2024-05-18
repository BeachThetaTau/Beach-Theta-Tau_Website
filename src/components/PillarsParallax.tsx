import React from 'react';
import { Parallax, ParallaxProps } from 'react-parallax';
import './PillarsParallax.css';

interface GenerateParallaxProps {
  fileName: string;
  title: string;
}

const GenerateParallax: React.FC<GenerateParallaxProps> = ({ fileName, title }) => {
  const parallaxProps: ParallaxProps = {
    bgImage: fileName,
    strength: 500,
    style: { height: '100vh' },
  };

  return (
    <Parallax {...parallaxProps}>
      <p className="parallax-txt">{title}</p>
    </Parallax>
  );
}

export default GenerateParallax;
