import "./LinkedInButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface LinkedInButtonProps {
  linkedinUrl: string;
}

const ResumeButton: React.FC<LinkedInButtonProps> = ({ linkedinUrl }) => {
  return (
    <div className="linkedin-button">
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-link"
      >
        <span className="linkedin-text">LinkedIn</span>
        <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon" />
      </a>
    </div>
  );
};

export default ResumeButton;
