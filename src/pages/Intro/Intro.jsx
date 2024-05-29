import "./Intro.css";
import Navbar from "./Navbar/Navbar";
import { ICONS } from "../../icons";
// import "../../images/assets/Frame construction.svg";
import MoreDetailBtn from "../../components/moreDetailButton/MoreDetailButton";
import LoginButton from "../../components/loginButton/loginbutton";

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
                <div className="contentTextFooter">
                  <MoreDetailBtn
                    text="More Details"
                    backgroundcolor="linear-gradient(0deg, #FED462 0%, #FED462 100%), #000"
                    color="rgba(0, 0, 0, 1)"
                  />
                  <LoginButton backgroundColor="rgba(254, 212, 98, 0.10)" />
                </div>
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
                <div className="contentTextFooter">
                  <MoreDetailBtn
                    text="More Details"
                    backgroundcolor="linear-gradient(0deg, #FF847C 0%, #FF847C 100%), #FFF"
                    color="#FFF"
                  />
                  <LoginButton backgroundColor="rgba(255, 132, 124, 0.10)" />
                </div>
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
                src={require("../../images/assets/Frame event.svg").default}
                alt=""
                className="contentImage"
              />
              <div className="contentText">
                <div>
                  <p className="contentTextHeader">
                    Find the Best Teams and Vendors for Your Event construction
                  </p>
                </div>

                <p className="contentTextDetail">
                  Discover and hire top-rated teams and vendors effortlessly.
                  Whether you need caterers, entertainers, decorators, or
                  support staff, our platform connects you with the best
                  professionals in the industry.
                </p>
                <div className="contentTextFooter">
                  <MoreDetailBtn
                    text="More Details"
                    backgroundcolor="linear-gradient(0deg, #FED462 0%, #FED462 100%), #000"
                    color="rgba(0, 0, 0, 1)"
                  />
                  <LoginButton backgroundColor="rgba(255, 132, 124, 0.10)" />
                </div>
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
                <div className="contentTextFooter">
                  <MoreDetailBtn
                    text="More Details"
                    backgroundcolor="linear-gradient(0deg, #FF8A00 0%, #FF8A00 100%), #FFF"
                    color="#FFF"
                  />
                  <LoginButton backgroundColor="rgba(255, 132, 124, 0.10)" />
                </div>
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
                <div className="contentTextFooter">
                  <MoreDetailBtn
                    text="More Details"
                    backgroundcolor=" linear-gradient(0deg, #706EE6 0%, #706EE6 100%), #FFF"
                    color="#FFF"
                  />
                  <LoginButton backgroundColor="rgba(112, 110, 230, 0.10)" />
                </div>
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
                <div className="contentTextFooter">
                  <MoreDetailBtn
                    text="More Details"
                    backgroundcolor="linear-gradient(0deg, #CF76DD 0%, #CF76DD 100%), #FFF"
                    color="#FFF"
                  />
                  <LoginButton backgroundColor="rgba(207, 118, 221, 0.10)" />
                </div>
              </div>
              <img
                src={require("../../images/assets/frame petcare.svg").default}
                alt=""
                className="contentImage"
              />
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="footerHead"></div>
          <div className="footerComponent">
            <div className="footerComponentText">
              <p className="footerComponentHeader">
                Start Your Journey to Better Health Today!
              </p>
              <p className="footerComponentContent">
                Join us in revolutionizing healthcare with our personalized and
                convenient services. Whether you need home care, telemedicine,
                or specialist consultations, we're here to support your health
                and well-being. Get started now and experience top-quality care
                at your fingertips.
              </p>
              <p className="enquireBtn">Enqiry Now</p>
            </div>

            <div>
              <img src="../../images/assets/businessWomenImage.svg" />
            </div>
          </div>
          <div className="footerLower">
            <div className="footerContent">
              <div className="footerSection1">
                <img
                  src={
                    require("../../icons/assets/Connect logo LB 1.svg").default
                  }
                  alt=""
                  className="logofooter"
                />
                <p>
                  At Connect, we are dedicated to bridging the gap between
                  consumers and top-tier service providers across all sectors.
                </p>
                <div className="socialmediaLogosFooter">
                  <div className="socialMediaIcon">
                    {ICONS.facebookIconBlue}
                  </div>
                  <div className="socialMediaIcon">{ICONS.twitterIconBlue}</div>
                  <div className="socialMediaIcon">{ICONS.discordIconBlue}</div>
                  <div className="socialMediaIcon">
                    {ICONS.whatsappIconBlue}
                  </div>
                  <div className="socialMediaIcon">
                    {ICONS.linkedInIconBlue}
                  </div>
                  <div className="socialMediaIcon">{ICONS.instaIconBlue}</div>
                </div>
              </div>
              <div className="footerSection">
                <p>
                  <b>Company</b>
                </p>
                <p>About us</p>
                <p>Our Services</p>
                <p>Our Process</p>
                <p>opportunities</p>
                <p>FAQs</p>
              </div>
              <div className="footerSection">
                <p>
                  <b>Support</b>
                </p>
                <p>Help Center</p>
                <p>Feedback</p>
              </div>
              <div className="footerSection">
                <p>
                  <b>Other Sectors</b>
                </p>
                <p>Construction</p>
                <p>Pet Care</p>
                <p>Health Care</p>
                <p>Home Services</p>
                <p>Events</p>
                <p>Entertainment</p>
              </div>
              <div className="footerSection">
                <p>
                  <b>Contact Us</b>
                </p>
                <p>{ICONS.phonecallIcon} (91) 0123456789</p>
                <p>{ICONS.mailIcon} Connect123@gmail.com</p>
                <p>{ICONS.location} Mumbai landmark, name, office</p>
              </div>
            </div>
          </div>
          <div className="footerBottom">
            <p>Copyright by Connect pvt ltd. All right reserved</p>
            <div className="footerBottomOptions">
              <p>Privacy policy</p>
              <p>Terms of Use</p>
              <p>Legal</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Intro;
