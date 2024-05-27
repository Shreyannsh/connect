import "./Intro.css";
import Navbar from "./Navbar/Navbar";
import { ICONS } from "../../icons";
// import "../../images/assets/Frame construction.svg";
import MoreDetailBtn from "../../components/moreDetailButton/MoreDetailButton";

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
      <div className="section">
        <div className="container">
          <div className="childContainer">
            <div className="headingShadow">Construction</div>
            <div className="containerContent">
              <img
                src={
                  require("../../images/assets/Frame construction.svg").default
                }
                alt=""
                className="contentImage"
              />
              <div className="contentText">
                <div>
                  <p className="contentTextHeader">
                    Build Your Vision with Expert Construction Services
                  </p>
                </div>

                <p className="contentTextDetail">
                  Cementing Dreams, Crafting Futures": At Connect, our success
                  is built on the dedication of every member of our team, from
                  skilled labourers to seasoned professionals...
                </p>
                <MoreDetailBtn
                  text="More Details"
                  backgroundcolor="linear-gradient(0deg, #FED462 0%, #FED462 100%), #000"
                  color="rgba(0, 0, 0, 1)"
                />
                {/* <div className="moreDetailBtn">More details {ICONS.arrowKey}</div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="childContainer">
            <div className="headingShadow">Health Care</div>
            <div className="containerContent">
              <div className="contentText">
                <p className="contentTextHeader">
                  Your Health, Our Promise of Excellence and Care
                </p>
                <p className="contentTextDetail">
                  Connect offers personalized healthcare solutions, from home
                  care to telemedicine, ensuring top-notch care with innovation
                  and compassion. Trust us to enhance your health and quality of
                  life.
                </p>
                <MoreDetailBtn
                  text="More Details"
                  backgroundcolor="linear-gradient(0deg, #FF847C 0%, #FF847C 100%), #FFF"
                  color="#FFF"
                />
              </div>
              <img
                src={
                  require("../../images/assets/Frame healthcare.svg").default
                }
                alt=""
                className="contentImage"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="childContainer">
            <div className="headingShadow">Event</div>
            <div className="containerContent">
              <img
                src={require("../../images/assets/Frame neww.svg").default}
                alt=""
                className="contentImage"
              />
              <div className="contentText">
                <p className="contentTextHeader">
                  Find the Best Teams and Vendors for Your Event
                </p>
                <p className="contentTextDetail">
                  Discover and hire top-rated teams and vendors effortlessly.
                  Whether you need caterers, entertainers, decorators, or
                  support staff, our platform connects you with the best
                  professionals in the industry.
                </p>
                <MoreDetailBtn
                  text="More Details"
                  backgroundcolor=" linear-gradient(0deg, #FF8A00 0%, #FF8A00 100%), #FFF"
                  color="#FFF"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="childContainer">
            <div className="headingShadow">Entertainment</div>
            <div className="containerContent">
              <div className="contentText">
                <p className="contentTextHeader">
                  Your Gateway to the Entertainment World
                </p>
                <p className="contentTextDetail">
                  Join our vibrant community of entertainment professionals and
                  enthusiasts. Network, collaborate, and celebrate the arts in
                  music, film, theatre, and more.
                </p>
                <MoreDetailBtn
                  text="More Details"
                  backgroundcolor="linear-gradient(0deg, #FF8A00 0%, #FF8A00 100%), #FFF"
                  color="#FFF"
                />
              </div>
              <img
                src={
                  require("../../images/assets/frame entertainment.svg").default
                }
                alt=""
                className="contentImage"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="childContainer">
            <div className="headingShadow">Home Services</div>
            <div className="containerContent">
              <img
                src={require("../../images/assets/frame services.svg").default}
                alt=""
                className="contentImage"
              />
              <div className="contentText">
                <p className="contentTextHeader">
                  Experience Top-Notch Home Services with CONNECT
                </p>
                <p className="contentTextDetail">
                  Professional, Reliable, and Convenient Solutions Tailored to
                  Your Needs – All at Your Doorstep
                </p>
                <MoreDetailBtn
                  text="More Details"
                  backgroundcolor=" linear-gradient(0deg, #706EE6 0%, #706EE6 100%), #FFF"
                  color="#FFF"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="childContainer">
            <div className="headingShadow">Petcare</div>
            <div className="containerContent">
              <div className="contentText">
                <p className="contentTextHeader">
                  Join Our Network of Top-Tier Pet Care Professionals
                </p>
                <p className="contentTextDetail">
                  We're excited to introduce you to our company and the
                  wonderful world of pet care. Whether you're a pet owner
                  looking for top-notch services or a pet lover interested in
                  joining our community, you've come to the right place. Let's
                  dive in and explore what we have to offer!
                </p>
                <MoreDetailBtn
                  text="More Details"
                  backgroundcolor="linear-gradient(0deg, #CF76DD 0%, #CF76DD 100%), #FFF"
                  color="#FFF"
                />
              </div>
              <img
                src={require("../../images/assets/frame petcare.svg").default}
                alt=""
                className="contentImage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
