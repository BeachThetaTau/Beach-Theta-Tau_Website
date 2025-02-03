import "./ResumeButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons"; // Correct import for regular file icon

interface resumeButtonProps {
  resumeUrl: string;
}

const ResumeButton: React.FC<resumeButtonProps> = ({ resumeUrl }) => {
  return (
    <div className="resume-button">
      <a
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="resume-link"
      >
        <span className="resume-text">Resume</span>
        <FontAwesomeIcon icon={faFile} className="resume-icon" />
      </a>
    </div>
  );
};

export default ResumeButton;
