import React, { useEffect, useRef, useState } from "react";
import "./FadeInList.css";

const FadeInList: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="FadeInList">
        <div
          className={`fade-in-section ${isInView ? "fade-in-active" : ""}`}
          ref={sectionRef}
        >
          <ul
            className={`image-list fade-in-list ${isInView ? "fade-in-active" : ""}`}
          >
            <li>
              <img
                src="Divergent.png"
                alt="Divergent"
                className="company-logo"
              />
            </li>
            <li>
              <img
                src="NorthropGrumman.png"
                alt="Northrop Grumman"
                className="company-logo"
              />
            </li>
            <li>
              <img src="Boeing.png" alt="Boeing" className="company-logo" />
            </li>
            <li>
              <img
                src="Benchmark.png"
                alt="Benchmark Electronics"
                className="company-logo"
              />
            </li>
          </ul>

          <ul
            className={`image-list fade-in-list ${isInView ? "fade-in-active" : ""}`}
          >
            <li>
              <img src="SpaceX.png" alt="SpaceX" className="company-logo" />
            </li>
            <li>
              <img
                src="Microsoft.png"
                alt="Microsoft"
                className="company-logo"
              />
            </li>
            <li>
              <img src="Tesla.png" alt="Tesla" className="company-logo" />
            </li>
            <li>
              <img
                src="J&J.png"
                alt="Johnson & Johnson"
                className="company-logo"
              />
            </li>
          </ul>

          <ul
            className={`image-list fade-in-list ${isInView ? "fade-in-active" : ""}`}
          >
            <li>
              <img src="NASA.png" alt="NASA" className="company-logo" />
            </li>
            <li>
              <img src="Belkin.png" alt="Belkin" className="company-logo" />
            </li>
            <li>
              <img src="Google.png" alt="Google" className="company-logo" />
            </li>
            <li>
              <img src="Meta.png" alt="Meta" className="company-logo" />
            </li>
          </ul>

          <ul
            className={`image-list fade-in-list ${isInView ? "fade-in-active" : ""}`}
          >
            <li>
              <img src="Raytheon.png" alt="Raytheon" className="company-logo" />
            </li>
            <li>
              <img
                src="Kaiser.png"
                alt="Kaiser Permanente"
                className="company-logo"
              />
            </li>
            <li>
              <img src="Amazon.png" alt="Amazon" className="company-logo" />
            </li>
            <li>
              <img src="SCE.png" alt="SoCal Edison" className="company-logo" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FadeInList;
