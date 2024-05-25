import "./Intro.css";
import Navbar from "./Navbar/Navbar";
import { ICONS } from "../../icons";

const Intro = () => {
  return (
    <div className="introPage">
      <div className="topSection">
        <div>{ICONS.connectLogoWhite}</div>
        <p className="introTagline">
          Discover Your Next Adventure: Connect Across Industries!
        </p>
        <p className="introText">
          Welcome to Main Connect! Whether you're into building, pet care, home
          services, events, entertainment, or healthcare, we've got something
          exciting for you. Join our community of passionate individuals and
          explore endless opportunities. From shaping skylines to nurturing
          pets, creating memorable events, and improving lives, your next
          adventure starts here. Sign up now and let's connect industries,
          connect lives!
        </p>
        <div className="getStartedBtn">Get started</div>
      </div>
      <div className="socialmediaLinks">
        <div>{ICONS.whatsappIcon}</div>
        <div>{ICONS.discordIcon}</div>
        <div>{ICONS.facebookIcon}</div>
        <div>{ICONS.linkedInIcon}</div>
        <div>{ICONS.twitterIcon}</div>
        <div>{ICONS.instaIcon}</div>
      </div>
      <div className="">
        <Navbar />
      </div>
    </div>
  );
};

export default Intro;
