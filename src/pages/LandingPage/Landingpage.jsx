import "./LandingPage.css";

import { ICONS } from "../../icons";

function LandingPage() {
  return (
    <div className="coverPage">
      <div className="logoDiv">
        <div className="logo">{ICONS.logo}</div>
      </div>

      <div className="coverPageBottom">
        <p className="coverPageTextDiv">
          <p className="coverPageText">
            scroll down to discover All in one app - Explore the click of world
            where dreams are fulfilled.
          </p>
        </p>
        <div className="mouseIcon">{ICONS.mouseScroll}</div>
      </div>
    </div>
  );
}

export default LandingPage;
