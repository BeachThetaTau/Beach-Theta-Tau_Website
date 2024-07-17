import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GenerateParallax from "../components/PillarsParallax";
import FamilyCarousel from "../components/FamilyCarousel";
import "./Social.css";

function Social() {
  return (
    <>
      <NavBar />
      <GenerateParallax fileName="Social.jpg" title="Social" />

      <div className="social-heading-container">
        <div className="social-heading">
          <h2 id="social-heading">
            Fosters Lasting Friendships and Lifelong Connections
          </h2>
          <p id="social-subtxt">
            Tap into a thriving community that fosters lifelong friendships and
            connections. Our supportive environment ensures lasting
            relationships that enrich both personal and professional journeys.
          </p>
        </div>
      </div>

      <div className="social">
        <div className="social-body-container">
          <div className="social-txt-container">
            <h2 className="social-subheadding">Retreats</h2>
            <p className="social-txt">
              At our fraternity, we prioritize connections and growth outside
              campus. Each semester, we organize transformative retreats focused
              on deepening bonds, broadening horizons, and honing life skills.
              Through team-building and meaningful discussions, our retreats
              create lasting memories, strengthen friendships, and embrace new
              perspectives.
            </p>
          </div>
          <img
            src="Retreat.jpg"
            alt="Retreat Image"
            className="social-img-landscape"
          />
        </div>

        <div className="social-body-container">
          <img
            src="Regionals.jpg"
            alt="Regionals Image"
            className="social-img-landscape"
          />
          <div className="social-txt-container">
            <h2 className="social-subheadding">Regionals</h2>
            <p className="social-txt">
              We cherish connections that go beyond our chapter. Regionals are
              the pulse of our regional network, bringing chapters together for
              a weekend of camaraderie, fun, and meaningful connections. Hosted
              by different chapters, Regionals offer a chance to meet new
              people, build lasting friendships, and grow professional networks.
              With workshops and competitions, Regionals celebrate our values,
              strengthen bonds, and create lifelong memories.
            </p>
          </div>
        </div>

        <div className="social-body-container">
          <div className="social-txt-container">
            <h2 className="social-subheadding">Intramural Sports</h2>
            <p className="social-txt">
              We believe in the spirit of healthy competition and teamwork.
              That's why we actively participate in Intramural Sports, where we
              come together as a brotherhood to showcase our athletic prowess
              and sportsmanship. Whether it's on the field, court, or track, we
              give our all, supporting each other every step of the way.
              Intramural Sports aren't just about winning; they're about
              bonding, having fun, and creating unforgettable memories.
            </p>
          </div>
          <img
            src="IMSports.jpg"
            alt="Intramural Sports Image"
            className="social-img-portrate"
          />
        </div>

        <div className="social-body-container">
          <FamilyCarousel/>

          <div className="social-txt-container">
            <h2 className="social-subheadding">Big-Littles</h2>
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
        </div>
      </div>

      <div className="social-mob">
        <div className="social-body-container">
          <div className="social-txt-container">
            <h2 className="social-subheadding">Retreats</h2>
            <img
              src="Retreat.jpg"
              alt="Retreat Image"
              className="social-img-landscape"
            />
            <p className="social-txt">
              At our fraternity, we prioritize connections and growth outside
              campus. Each semester, we organize transformative retreats focused
              on deepening bonds, broadening horizons, and honing life skills.
              Through team-building and meaningful discussions, our retreats
              create lasting memories, strengthen friendships, and embrace new
              perspectives.
            </p>
          </div>
        </div>

        <div className="social-body-container">
          <div className="social-txt-container">
            <h2 className="social-subheadding">Regionals</h2>
            <img
              src="Regionals.jpg"
              alt="Regionals Image"
              className="social-img-landscape"
            />
            <p className="social-txt">
              We cherish connections that go beyond our chapter. Regionals are
              the pulse of our regional network, bringing chapters together for
              a weekend of camaraderie, fun, and meaningful connections. Hosted
              by different chapters, Regionals offer a chance to meet new
              people, build lasting friendships, and grow professional networks.
              With workshops and competitions, Regionals celebrate our values,
              strengthen bonds, and create lifelong memories.
            </p>
          </div>
        </div>

        <div className="social-body-container">
          <div className="social-txt-container">
            <h2 className="social-subheadding">Intramural Sports</h2>
            <img
              src="IMSports.jpg"
              alt="Intramural Sports Image"
              className="social-img-portrate"
            />
            <p className="social-txt">
              We believe in the spirit of healthy competition and teamwork.
              That's why we actively participate in Intramural Sports, where we
              come together as a brotherhood to showcase our athletic prowess
              and sportsmanship. Whether it's on the field, court, or track, we
              give our all, supporting each other every step of the way.
              Intramural Sports aren't just about winning; they're about
              bonding, having fun, and creating unforgettable memories.
            </p>
          </div>
        </div>

        <div className="social-body-container">
          <div className="social-txt-container">
            <h2 className="social-subheadding">Big-Littles</h2>

            <FamilyCarousel/>
            <p className="social-txt" style={{ paddingBottom: '5vh' }}>
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
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Social;
