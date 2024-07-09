import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import GenerateParallax from "../components/PillarsParallax";
import HamburgerMenu from "../components/HamburgerMenu";
import "./Service.css";

function Service() {
  return (
    <>
    <HamburgerMenu/>
      <NavBar />
      <GenerateParallax fileName="Service.png" title="Service" />

      <div className="service-container">
        <div className="service-body">
          <h2 className="service-headding">
            Strengthen Our Community Through Service
          </h2>
          <div className="service-txt">
            <p>
              Our organization brings together people from diverse backgrounds
              to work towards common goals, fostering unity and mutual
              understanding within our community. Through our community service
              projects, we help build a stronger, more cohesive community while
              also developing valuable life skills such as leadership, teamwork,
              and communication.
            </p>
            <p>
              Each action contributes to personal growth and self-reflection,
              creating a positive impact on both individuals and the community.
              Together, we are building a future where everyone feels connected
              and empowered. Let's make a difference—one project at a time.
            </p>
          </div>
        </div>

        <div className="img-container-verticle">
          <div className="img-container-horizontal">
            <img
              src="Food.png"
              alt="Donating at Food Drive"
              className="service-img-square"
            />
            <img
              src="Prepping.png"
              alt="Blank Square"
              className="service-img-square"
              id = "prepping-food"
            />
          </div>
          <img src="Cooking.png" alt="Cooking" id="cooking-img" />
        </div>
      </div>

      <div className="empower-container">
        <h2 className="empower-heading">
          Together We Can Empower Our Community
        </h2>

        <div className="empower-card-container">
          <div className="empower-card">
            <img src="Volunteering.png" alt="Blank Square" className="card-img" />
            <h2 className="empower-subheading">Volunteer</h2>
            <p className="empower-txt">
              Through our collaborative efforts with fellow volunteers, we
              directly impact and uplift the lives of those in our community who
              need support the most.
            </p>
          </div>

          <div className="empower-card">
            <img src="Donation.png" alt="Blank Square" className="card-img" />
            <h2 className="empower-subheading">Donating Meals</h2>
            <p className="empower-txt">
              Through our meal donation initiatives, we're making a tangible
              impact on the lives of individuals and families in need, fostering
              a healthier and more resilient community.
            </p>
          </div>

          <div className="empower-card">
            <img src="Conservation.png" alt="Blank Square" className="card-img" />
            <h2 className="empower-subheading">Conservation Efforts</h2>
            <p className="empower-txt">
              Through our dedicated conservation efforts alongside passionate
              volunteers, we directly contribute to preserving and protecting
              the environment for future generations.
            </p>
          </div>
        </div>
      </div>

      <div className="spotlights-container">
        <h2 className="spotlight-headding">Impact Spotlights</h2>

        <div className="spotlight-card-container">
          <div className="spotlight-card">
            <img src="BeachCleanUp.png" alt="" className="spotlight-img" />
            <h2 className="spotlight-subheading">Beach Clean-Up</h2>
            <p className="spotlight-txt">
              Teaming up with our local USC chapter, we embarked on a beach
              cleanup journey. Together, we combed the shores, restoring our
              coastline's beauty and showcasing the power of small actions in
              preserving nature.
            </p>
          </div>

          <div className="spotlight-card">
            <img src="MesaDay.png" alt="" className="spotlight-img" />
            <h2 className="spotlight-subheading">Mesa Day</h2>
            <p className="spotlight-txt">
              As part of Nu class's process, they fully engage in Mesa Day,
              supporting in logistics, mentoring, and cheering on teams,
              fostering a culture of academic excellence and collaboration.
            </p>
          </div>

          <div className="spotlight-card">
            <img src="SoupKitchen.png" alt="" className="spotlight-img" />
            <h2 className="spotlight-subheading">Soup Kitchen</h2>
            <p className="spotlight-txt">
              We volunteered at a soup kitchen as part of our commitment to
              community engagement and service, highlighting our values of
              compassion, dedication, and community impact.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Service;
