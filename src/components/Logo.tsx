import './Logo.css';

const DisplayLogo = () => (
  <button type="button" className="btn">
    <div className="logo-container">
      <img src="./Logo.png" alt="Image" className="Logo" />
      <div className="text-container">
        <p id="ThetaTau">Theta Tau</p>
        <p id="LongBeach">LONG BEACH STATE • XI EPSILON</p>
      </div>
    </div>
  </button>
);

export default DisplayLogo;
