import NavBar from "../components/NavBar";
import DisplayCarousel from "../components/ThreeImgCarousel";
import Footer from "../components/Footer";
import GenerateParallax from "../components/PillarsParallax";
import "./Service.css";

function Service() {
  return (
    <>
      <NavBar />


      <GenerateParallax 
      fileName="Service.png" 
      title="Service" />

      {/* RESUME WORKSHOP */}
      <div className="service-container">
        <div className="service-info">
          <p className="service-heading">BEACH CLEAN UP</p>
          <p className="service-txt">
            In our fraternity, service isn't just a commitment—it's a core value
            we live by. One of our impactful service activities is beach
            cleanup, where we join hands to protect our environment and
            contribute to the community. Together, we comb the shores, picking
            up litter and debris, making a tangible difference in preserving our
            natural beauty. What makes our efforts even more meaningful is that
            we often collaborate with other local chapters, amplifying our
            impact and fostering unity within the Greek community.
          </p>
        </div>

        <div className="service-img">
          <DisplayCarousel
            firstImage="BeachCleanUp.png"
            secondImage="BlankImg.png"
            thirdImage="BlankImg.png"
          />
        </div>
      </div>

      <div className="service-container-grey">
        <div className="service-info">
          <p className="service-heading">SOUP KITCHEN</p>
          <p className="service-txt">
            We also prioritize volunteering at soup kitchens as a key aspect of
            our fraternity's commitment to service and community engagement.
            This meaningful service allows us to make a direct impact on the
            lives of those in need, providing warm meals and a sense of support
            to individuals facing food insecurity. We often organize group
            volunteer sessions at local soup kitchens, where brothers come
            together to prepare and serve meals with compassion and dedication.
          </p>
        </div>

        <div className="service-img">
          <DisplayCarousel
            firstImage="BlankImg.png"
            secondImage="BlankImg.png"
            thirdImage="BlankImg.png"
          />
        </div>
      </div>

      <div className="service-container">
        <div className="service-info">
          <p className="service-heading">MESA DAY</p>
          <p className="service-txt">
            We even extend our service efforts to our school community by
            volunteering at events like Mesa Day, an annual tradition that
            showcases our commitment to academics, innovation, and teamwork. At
            Mesa Day, we immerse ourselves in a celebration of learning and
            creativity, offering our support in various capacities. Whether
            we're assisting with logistics, mentoring participants, or cheering
            on teams, our fraternity stands at the forefront of fostering a
            culture of academic excellence and collaboration. excellence.
          </p>
        </div>

        <div className="service-img">
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

export default Service;
