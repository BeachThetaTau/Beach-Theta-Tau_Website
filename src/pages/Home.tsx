import "./Home.css"; // Correct import for Home.css
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import ParallaxScenery from "../components/ParallaxScenery";
import ResponsiveButton from "../components/ResponsiveButton";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <NavBar />
      <ParallaxScenery />
      <div className="gray-background">
        <div className="purpose">
          <h4>OUR PURPOSE</h4>
          <p>
            The purpose of Theta Tau is to develop and maintain a high standard
            of professional interest among its members, and to unite them in a
            <span id="yellow"> strong bond of fraternal fellowship</span>.
          </p>
        </div>
      </div>

      <div className="who-are-we-container">
        <div className="who-are-we-txt-container">
          <h4>WHO ARE WE</h4>
          <p>
            Welcome to Theta Tau at Long Beach, a co-ed professional engineering
            fraternity committed to building a strong community of engineers and
            students across the nation. Through unity, diversity, and
            dedication, we foster fraternal fellowship, support professional
            growth, and serve our communities.
          </p>
          <Link to="/about">
            <ResponsiveButton />
          </Link>
        </div>
        <img src="WhoAreWe.jpg" alt="Who Are We" className="who-are-we-img" />
      </div>

      <div className="achievements-container">
        <h6 className="achievements-heading">OUR ACHIEVEMENTS</h6>
        <ul className="achievements">
          <li className="achievements-elements">
            <h1 className="achievements-subheading">1ST</h1>
            <p className="achievements-txt">Engineering fraternity in CSULB</p>
          </li>

          <li className="achievements-elements">
            <h1 className="achievements-subheading">1ST</h1>
            <p className="achievements-txt">
              Chapter in a California State University
            </p>
          </li>

          <li className="achievements-elements">
            <h1 className="achievements-subheading">1 YEAR</h1>
            <p className="achievements-txt">To install Xi Epsilon Chapter</p>
          </li>
        </ul>
      </div>

      <div className="our-pillars">
        <div className="pillars-intro">
          <div className="pillars-intro-txt-container">
          <h5 className="pillars-subtitle">OUR PILLARS</h5>
          <h2 className="pillars-intro-txt">
            We have three pillars that represent the core values and principles
            of the organization
          </h2>

          </div>
          
        </div>

        <div className="pillars-container">
          <div className="pillars">
            <img
              src="PhilanthrophyIcon.png"
              alt="Philanthrophy Icon"
              className="pillars-img"
            />
            <h3 className="pillars-title">Philanthrophy</h3>
            <p className="pillars-txt">
              We encourage members to give back to their communities and make a
              positive impact. This pillar involves engaging in volunteer
              activities, philanthropic initiatives, and projects that benefit
              society and promote the welfare of others.
            </p>
            <Link to="/service">
              <Button text="Learn More" />
            </Link>
          </div>

          <div className="pillars">
            <img
              src="ProfessionalismIcon.png"
              alt="Professionalism Icon"
              className="pillars-img"
            />
            <h3 className="pillars-title">Professionalism</h3>
            <p className="pillars-txt">
              We emphasize professionalism as the cornerstone of our
              organization. Our members are committed to upholding the highest
              standards of ethics, integrity, and responsibility in every facet
              of their academic, personal, and professional endeavors.
            </p>
            <Link to="/professionalism">
              <Button text="Learn More" />
            </Link>
          </div>

          <div className="pillars">
            <img
              src="BrotherhoodIcon.png"
              alt="Brotherhood Icon"
              className="pillars-img"
            />
            <h3 className="pillars-title">Brotherhood</h3>
            <p className="pillars-txt">
              We cultivate strong bonds of friendship and support among our
              members. Within our community, we provide a supportive environment
              where we can connect, collaborate, and grow together, both
              personally and professionally.
            </p>
            <Link to="/social">
              <Button text="Learn More" />
            </Link>
          </div>
        </div>
      </div>

      <div><img src="FillerPic.jpg" alt="Theta Tau Members Having Fun" className="end-pic" />
      <Footer /></div>
      
    </>
  );
}

export default Home;
