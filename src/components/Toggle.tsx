import "./Toggle.css";

interface ToggleProps {
  isChecked: boolean;
  onToggle: (checked: boolean) => void;
}

const Toggle = ({ isChecked, onToggle }: ToggleProps) => {
  return (
    <div className="toggle">
      <input
        type="checkbox"
        id="toggle"
        className="toggleCheckbox"
        checked={isChecked}
        onChange={(e) => onToggle(e.target.checked)}
      />
      <label
        htmlFor="toggle"
        className={`toggleContainer ${isChecked ? "checked" : ""}`}
      >
        <div>Actives</div>
        <div>Officers</div>
      </label>
    </div>
  );
};

export default Toggle;
