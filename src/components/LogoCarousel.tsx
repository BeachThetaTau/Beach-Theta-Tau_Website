import React, { useEffect, useRef } from "react";
import "./LogoCarousel.css";
const Logos: React.FC = () => {
  const logosRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const logosElement = logosRef.current;
    if (logosElement) {
      const logosSlide =
        logosElement.querySelector<HTMLDivElement>(".logos-slide");
      if (logosSlide) {
        const copy = logosSlide.cloneNode(true) as HTMLDivElement;
        logosElement.appendChild(copy);
      }
    }
  }, []);

  return (
    <div className="logos" ref={logosRef}>
      <div className="logos-slide">
        <img src="Divergent.png" alt="Divergent" className="destination-logo" />
        <img
          src="NorthropGrumman.png"
          alt="Northrop Grumman"
          className="destination-logo"
        />
        <img src="Boeing.png" alt="Boeing" className="destination-logo" />
        <img
          src="Benchmark.png"
          alt="Benchmark Electronics"
          className="destination-logo"
        />
        <img src="SpaceX.png" alt="SpaceX" className="destination-logo" />
        <img src="Microsoft.png" alt="Microsoft" className="destination-logo" />
        <img src="Tesla.png" alt="Tesla" className="destination-logo" />
        <img
          src="J&J.png"
          alt="Johnson & Johnson"
          className="destination-logo"
        />
        <img src="NASA.png" alt="NASA" className="destination-logo" />
        <img src="Belkin.png" alt="Belkin" className="destination-logo" />
        <img src="Google.png" alt="Google" className="destination-logo" />
        <img src="Meta.png" alt="Meta" className="destination-logo" />
        <img src="Raytheon.png" alt="Raytheon" className="destination-logo" />
        <img
          src="Kaiser.png"
          alt="Kaiser Permanente"
          className="destination-logo"
        />
        <img src="Amazon.png" alt="Amazon" className="destination-logo" />
        <img src="SCE.png" alt="SoCal Edison" className="destination-logo" />
      </div>
    </div>
  );
};

export default Logos;
