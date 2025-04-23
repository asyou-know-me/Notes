import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#ffd60a" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <img
              src="icon.png"
              alt=""
              className="d-inline-block align-text-top"
              style={{
                width: "4vmin",
                height: "4vmin",
                boxShadow: "0px 0px 20px 1px rgba(0, 0, 0, 0.5)",
                borderRadius: "0.5vmin",
              }}
            />
            <span
              style={{
                marginLeft: "1vmin",
                fontWeight: "bold",
                fontSize: "4vmin",
                width: "max-content",
                height: "max-content",
              }}
            >
              Notes
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
