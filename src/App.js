import "./App.css";
import LandingPage from "./pages/LandingPage/Landingpage";
import SignupPage from "./pages/SignupPage/SignupPage";
import Intro from "./pages/Intro/Intro";
import ChatButton from "./components/chatButton/chatButton";

function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      {/* <SignupPage /> */}
      <Intro />
      <ChatButton />
    </div>
  );
}

export default App;
