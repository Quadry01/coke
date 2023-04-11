import "./SectionFour.css";
import packaging from "../images/pkgd.jpg";
import partneship from "../images/partnership.jpg";
import collection from "../images/collection.jpg";
import economy from "../images/economy.jpg";
function SectionFour() {
  return (
    <div className="section-four-wrapper">
      <div className="box1">
        {" "}
        <img className="bg-sec4" src={packaging} alt="package"></img>
        <div className="grid-cont1"> About us1</div>
      </div>
      <div className="box2">
        <img className="bg-sec4" src={partneship} alt="parthners"></img>
        <div className="grid-cont2"> About us2</div>
      </div>
      <div className="box3">
        <img className="bg-sec4" src={collection} alt="collection"></img>
        <div className="grid-cont3"> About us3</div>
      </div>
      <div className="box4">
        <img className="bg-sec4" src={economy} alt="economy"></img>
        <div className="grid-cont4"> About us4</div>
      </div>
    </div>
  );
}

export default SectionFour;
