import "./loginButton.css";

const LoginButton = ({ backgroundColor }) => {
  return (
    <div style={{ backgroundColor: backgroundColor }} className="loginBtn">
      Login
    </div>
  );
};

export default LoginButton;
