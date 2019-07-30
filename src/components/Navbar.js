import React from "react";
import { Link } from "gatsby";
import logo1 from "../img/logo1.png";
import logo2 from "../img/logo2.jpg";


const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      > <img src={logo2} alt="cacLogo" style={{ width: "88px", height: "88px" }} />
        <div className="container">
        <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              {/* <img src={logo1} alt="cacLogo" style={{ width: "88px", height: "200px" }} /> */}
              {/* <img src={logo2} alt="cacLogo" style={{ width: "88px", height: "88px" }} /> */}
            </Link>
                   
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/">
                CAC - Heavenly Voyage
              </Link>
              <Link className="navbar-item" to="/about">
                About Us
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/library">
                Library
              </Link>
              <Link className="navbar-item" to="/contact">
                Join Us
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
            </div>
          </div>
        </div>
        <img src={logo1} alt="cacLogo" style={{ width: "88px", height: "88px" }} />
      </nav>
    );
  }
};

export default Navbar;
