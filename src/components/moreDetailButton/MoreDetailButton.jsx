import { ICONS } from "../../icons";
import "./MoreDetailButton.css";

import "../../icons/assets/arrowKey.svg";

const MoreDetailBtn = ({ text, backgroundcolor, color }) => {
  console.log(color);
  return (
    <div
      style={{
        background: backgroundcolor,
        color: color,
      }}
      className="moreDetailBtn"
    >
      {text} {color === "#FFF" ? ICONS.arrowKeyWhite : ICONS.arrowKeyBlack}
    </div>
  );
};

export default MoreDetailBtn;
