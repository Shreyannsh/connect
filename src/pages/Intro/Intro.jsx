import "./Intro.css";
import Navbar from "./Navbar/Navbar";
import { ICONS } from "../../icons";

const Intro = () => {
  return (
    <div className="introPage">
      <div className="topSection">
        <div className="leftSection">
          <h1>LOGO</h1>
          <h2>Loreum ipsum solo et Loreum ipsum solo et.</h2>
          <p className="text">
            Egohet kaplatuna. Ana. Id. Psykotyp nötigt. Nenat. Isam. Teleligt
            supravanade. Antere dekas. Reangar. Snackis but. Dekang trejon.
            Virad. Diar naning. Donera avis. Lånegarderob nede. Deepfake
            reaform. Tetisävis e-learning. Kroviling nyvis. Gardinhängarjobb
            kyhet. Spement.
          </p>
        </div>
        <div className="rightSection"></div>
      </div>
      <Navbar />
      <div className="line">{ICONS.line}</div>
      <div className="container">
        <div>
          <h2>Construction Section</h2>
          <p>
            Cementing Dreams, Crafting Futures": At Connect, our success is
            built on the dedication of every member of our team, from skilled
            labourers to seasoned professionals...
          </p>
          <div>{ICONS.scrollCursor} More details</div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Intro;
