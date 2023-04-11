import Sec_three_bg from "../images/cokeSec3.jpg";
import "./SectionThree.css";

function SectionThree() {
  return (
    <div className="section-three-wrapper">
      <img className="coke-bg" src={Sec_three_bg} alt="coke-background"></img>
      <div className="caption-sec3">
        <h1>about us</h1>
      </div>
    </div>
  );
}

export default SectionThree;
