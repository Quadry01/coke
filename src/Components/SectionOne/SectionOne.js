import intro_vid from "../images/intro-vid.mp4";
import "./SectionOne.css";
function SectionOne() {
  return (
    <div className="video-section">
      <video autoPlay muted loop>
        <source src={intro_vid} />{" "}
      </video>

      <div className="video-caption">
        <h1>about us</h1>
      </div>
    </div>
  );
}

export default SectionOne;
