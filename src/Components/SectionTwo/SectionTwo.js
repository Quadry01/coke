import red_can from "../images/can-coke-red.jpg";
import "./SectionTwo.css";
function SectionTwo() {
  return (
    <div className="section2-section">
      <div className="red-can-container">
        <img className="red-can" src={red_can} alt="backgroun"></img>
      </div>

      <div className="caption-section1">
        <h1>about us</h1>
      </div>
    </div>
  );
}

export default SectionTwo;
