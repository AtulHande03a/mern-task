import React from "react";
import { useNavigate } from "react-router";
// import { Navigate } from "react-router";

const Navbar = () => {
  // const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const navigateUser = () => {
    navigate("/users");
  };

  // const toggleSidebar = () => {
  //   setShow((prev) => !prev);
  // };
  return (
    <header className="header-container">
      <div className="header-desktop">
        <div className="side-padding">
          <div className="logo-container">
            <h3 className="logo">
              <span>Brand</span>
              <span>Name</span>
            </h3>
          </div>
          <div className="nav-links">
            <ul className="nav-links-ul">
              <li className="px-2 links">What we do</li>
              <li className="px-2 links">How we do it</li>
              <li className="px-2 links">Resources</li>
              <li className="px-2 links">Plan</li>
            </ul>
          </div>
          <div className="btn-container">
            <ul className="btn-links">
              <li className="links">Login</li>
              <li>
                <button className="btn-start" onClick={navigateUser}>
                  Get Details
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="header-mobile">
        <div className="header-menu-icon">
          <button className="menu">
            <i className="fa fa-bars"></i>
          </button>
        </div>
        <div className="logo-container">
          <h3 className="logo">
            <span>Brand</span>
            <span>Name</span>
          </h3>
        </div>
      </div>
      <aside className="sidebar hide">
        <div>
          <button className="close">
            <i className="fa fa-times"></i>
          </button>
        </div>
        <div className="sidebar-list">
          <ul>
            <li>What we do</li>
            <li>How we do it</li>
            <li>Resources</li>
            <li>Plans</li>
            <li>Login</li>
            <li>Get Details</li>
          </ul>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
