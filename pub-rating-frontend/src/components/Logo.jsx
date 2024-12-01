import logo from "../assets/logo.jpeg"; // Ensure correct import pat

const Logo = () => {
  return (
    <img
      src={logo}
      alt="Logo"
      style={{
        width: "50px",  //  Adjust as needed
        height: "auto",  //  Maintain aspect ratio
        display: "block",
        margin: "auto",
        objectFit: "contain",
      }}
    />
  );
};

export default Logo;
