import NavBar from "../components/NavBar";
import DisplayCarousel from "../components/ThreeImgCarousel";
import Footer from "../components/Footer";
import GenerateParallax from "../components/PillarsParallax";
import "./Professionalism.css";

function Professionalism() {
  return (
    <>
      <NavBar />
      <GenerateParallax 
      fileName="Professionalism.png" 
      title="Professionalism" />

      {/* RESUME WORKSHOP */}
      <div className="professionalism-container-grey">
        <div className="professionalism-info">
          <p className="professionalism-heading">RESUME WORKSHOP</p>
          <p className="professionalism-txt">
            In our fraternity, we prioritize professional development and
            success, which is why we host resume workshops to equip our members
            with essential career-building skills. These workshops are designed
            to help brothers craft impressive resumes that highlight their
            strengths, experiences, and ambitions. We provide guidance on
            formatting, content, and tailoring resumes for specific industries
            or roles. Additionally, we invite guest speakers and alumni to share
            valuable insights and tips for navigating the job market
            successfully.
          </p>
        </div>

        <div className="professionalism-img">
          <DisplayCarousel
            firstImage="BlankImg.png"
            secondImage="BlankImg.png"
            thirdImage="BlankImg.png"
          />
        </div>
      </div>

      <div className="professionalism-container">
        <div className="professionalism-info">
          <p className="professionalism-heading">MOCK INTERVIEW</p>
          <p className="professionalism-txt">
            With our brothers' diverse work experiences and dedication to
            professional growth, we conduct mock interviews to sharpen our
            skills and prepare for real-world career opportunities. These mock
            interviews simulate real interview scenarios, allowing us to
            practice answering common questions, showcase our strengths, and
            improve our communication and presentation skills. We also receive
            valuable feedback and guidance from experienced members and alumni,
            helping us refine our interview techniques and build confidence.
            Participating in mock interviews is a valuable step in our journey
            towards securing internships, jobs, and advancing our careers.
          </p>
        </div>

        <div className="professionalism-img">
          <DisplayCarousel
            firstImage="BlankImg.png"
            secondImage="BlankImg.png"
            thirdImage="BlankImg.png"
          />
        </div>
      </div>

      <div className="professionalism-container-grey">
        <div className="professionalism-info">
          <p className="professionalism-heading">ON-SITE TOURS</p>
          <p className="professionalism-txt">
            With our extensive alumni network, we are fortunate to have numerous
            opportunities to participate in on-site tours of various offices and
            workplaces. These tours provide invaluable insights into different
            industries, company cultures, and day-to-day operations. Through
            these firsthand experiences, we gain a deeper understanding of
            potential career paths, network with professionals in our fields of
            interest, and broaden our perspectives on the professional world.
            Whether it's visiting tech startups, corporate headquarters, or
            non-profit organizations, these on-site tours offer a glimpse into
            our potential future careers and inspire us to strive for
            excellence.
          </p>
        </div>

        <div className="professionalism-img">
          <DisplayCarousel
            firstImage="BlankImg.png"
            secondImage="BlankImg.png"
            thirdImage="BlankImg.png"
          />
        </div>
      </div>

      <div className="job-container">
        <p className="job-heading">WHERE TT CAN TAKE YOU</p>
        <img src="Jobs.png" alt="" className="job" />
      </div>
    
      <Footer />
    </>
  );
}

export default Professionalism;
