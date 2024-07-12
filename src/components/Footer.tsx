import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="signature">
          <div className="logo-footer">
            <img src="Logo.png" alt="Theta Tau logo" className="tt-logo" />
            <div className="tt-info">
              <p className="tt-info-txt">Theta Tau</p>
              <p className="tt-info-txt">Xi Epsilon Chapter</p>
              <p className="tt-info-txt">
                California State University, Long Beach
              </p>
            </div>
          </div>

          <div className="tt-copyright">
            <p>© Theta Tau is an SLD sponsored student organization</p>
          </div>
        </div>

        <div className="social-media-container">
          <a href="https://www.instagram.com/beachthetatau/" target = "blank">
            <div className="social-media">
              <img src="ig.png" alt="Instagram" className="social-media-img" />
              <p className="social-media-txt">@beachthetatau</p>
            </div>
          </a>

          <a href="https://www.facebook.com/beachthetatau/" target = "_blank">
          <div className="social-media">
            <img src="fb.png" alt="Facebook" className="social-media-img" />
            <p className="social-media-txt">CSULB Theta Tau </p>
          </div>
          </a>

          <a href="mailto:beachthetatau@gmail.com">
          <div className="social-media">
            <img src="mail.png" alt="E-mail" className="social-media-img" />
            <p className="social-media-txt">beachthetatau@gmail.com</p>
          </div>
          </a>
    
        </div>
      </div>
    </>
  );
};

export default Footer;
