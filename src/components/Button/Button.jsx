import "./button.css";
export default function Button({ text }) {
  return (
    <div className="center-container">
      <button id="button-action">{text}</button>
    </div>
  );
}
