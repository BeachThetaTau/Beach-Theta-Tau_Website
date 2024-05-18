import NavBar from "../components/NavBar";
import DisplayCarousel from "../components/ThreeImgCarousel";
import Footer from "../components/Footer";
import GenerateParallax from "../components/PillarsParallax";
import "./Social.css";

function Social() {
  return (
    <>
      <NavBar />
      <GenerateParallax 
      fileName="Social.png" 
      title="Social" />

      {/* RETREATS */}
      <div className="social-container">
        <div className="social-info">
          <p className="social-heading">RETREATS</p>
          <p className="social-txt">
            At our fraternity, we believe in the power of connection and growth
            beyond the walls of campus. That's why, at the end of every
            semester, we embark on retreats that transcend the ordinary. These
            retreats are not just about relaxation; they're about fostering
            deeper bonds, expanding our horizons, and honing the skills that
            will serve us well in life. From team-building activities to
            meaningful discussions, our retreats are where memories are made,
            friendships are strengthened, and new perspectives are embraced.
          </p>
        </div>

        <div className="social-img">
          <DisplayCarousel
            firstImage="BlankImg.png"
            secondImage="BlankImg.png"
            thirdImage="BlankImg.png"
          />
        </div>
      </div>

      {/* REGIONALS */}
      <div className="social-container-grey">
        <div className="social-info">
          <p className="social-heading">REGIONALS</p>
          <p className="social-txt">
            We thrive on connections that extend beyond our chapter walls.
            Regionals are the heartbeat of our regional network, where chapters
            converge for a weekend of camaraderie, fun, and meaningful
            connections. Hosted by a different chapter each time, Regionals
            offer a unique opportunity to meet new faces, forge lasting
            friendships, and expand our professional networks. From engaging
            workshops to friendly competitions, Regionals are where we come
            together to celebrate our shared values, strengthen our bonds, and
            create memories that last a lifetime.
          </p>
        </div>

        <div className="social-img">
          <DisplayCarousel
            firstImage="BlankImg.png"
            secondImage="BlankImg.png"
            thirdImage="BlankImg.png"
          />
        </div>
      </div>

      {/* INTRAMURAL SPORTS */}
      <div className="social-container">
        <div className="social-info">
          <p className="social-heading">INTRAMURAL SPORTS</p>
          <p className="social-txt">
            We believe in the spirit of healthy competition and teamwork. That's
            why we actively participate in Intramural Sports, where we come
            together as a brotherhood to showcase our athletic prowess and
            sportsmanship. Whether it's on the field, court, or track, we give
            our all, supporting each other every step of the way. Intramural
            Sports aren't just about winning; they're about bonding, having fun,
            and creating unforgettable memories.
          </p>
        </div>

        <div className="social-img">
          <DisplayCarousel
            firstImage="BlankImg.png"
            secondImage="BlankImg.png"
            thirdImage="BlankImg.png"
          />
        </div>
      </div>

      {/* BIG-LITTLE */}
      <div className="social-container-grey">
        <div className="social-info">
          <p className="social-heading">BIG-LITTLE</p>
          <p className="social-txt">
            In our fraternity, we cherish the concept of frat families, where
            bonds are not just formed but strengthened for a lifetime. Each
            member is part of a unique frat family, fostering a sense of
            belonging, support, and brotherhood. From big brothers guiding the
            way to little brothers bringing fresh perspectives, frat families
            are the heart of our fraternity experience. Through shared
            experiences, traditions, and meaningful connections, we create a
            strong network that extends beyond our college years.
          </p>
        </div>

        <div className="social-img">
          <DisplayCarousel
            firstImage="BlankImg.png"
            secondImage="BlankImg.png"
            thirdImage="BlankImg.png"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Social;
