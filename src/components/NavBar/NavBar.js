import React, { Component } from "react"
import "./NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"
import logo from "./images/logo.png"

class Nav_bar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hider: true,
      hiderFalse: false,
      size: "",
      sort: "",
    }
  }

  showNavBar() {
    this.setState({
      hider: !this.state.hider,
      hiderFalse: !this.state.hiderFalse,
    })
  }

  render() {
    return (
      <div className="nav_body">
        <div className="logo">
          <Link to="/" className="link-img">
            <img src={logo} alt="Logo" width="auto" height="auto" />
          </Link>
        </div>

        <div className="new-notifications-container">
          <div className="new-success">
            <div className="new-flex">
              <div className="new-flex-shrink-0">
                <svg
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="new-succes-svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="new-success-prompt-wrap">
                <p className="new-success-prompt-heading">
                  Te aștept în noul meu cabinet online
                </p>
                <div className="new-success-button-container">
                  <a href="https://alexandrateleman.ro/" className="new-success-button-main">
                    Descoperă noul site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
                      
        <div>
          {this.state.hider ? (
            <div className="nav-bar ">
              <ul className="nav-bar">
                <li>
                  <Link to="/" className="link" activeClassName="activeNav">
                    {" "}
                    Acasă{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/despre/"
                    className="link"
                    activeClassName="activeNav"
                  >
                    {" "}
                    Despre{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/servicii/"
                    className="link"
                    activeClassName="activeNav"
                  >
                    {" "}
                    Servicii{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/articole/"
                    className="link"
                    activeClassName="activeNav"
                  >
                    {" "}
                    Articole{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="link"
                    activeClassName="activeNav"
                  >
                    {" "}
                    Contact{" "}
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/Cabinet-Psihologic-Teleman-662227117527601"
                    target="_blank"
                    rel="noreferrer"
                    className="logoFacebookNav"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faFacebook} />{" "}
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="nav-barBack ">
              <ul className="nav-bar">
                <li>
                  <Link to="/" className="link" activeClassName="activeNav">
                    {" "}
                    Acasă{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/despre/"
                    className="link"
                    activeClassName="activeNav"
                  >
                    {" "}
                    Despre{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/servicii/"
                    className="link"
                    activeClassName="activeNav"
                  >
                    {" "}
                    Servicii{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/articole/"
                    className="link"
                    activeClassName="activeNav"
                  >
                    {" "}
                    Articole{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact/"
                    className="link"
                    activeClassName="active"
                  >
                    {" "}
                    Contact{" "}
                  </Link>
                </li>
                {/* <li><a href="https://www.linkedin.com/in/ionu%C5%A3-prilipceanu-20534ab0/" target="_blank" rel="noreferrer" className="logoLinkedin"> <FontAwesomeIcon icon={faLinkedin} /> </a></li>
                <li><a href="https://github.com/ionutprilipceanu" target="_blank" rel="noreferrer" className="logoGithub"> <FontAwesomeIcon icon={faGithub} /> </a></li> */}
                <li>
                  <a
                    href="https://www.facebook.com/Cabinet-Psihologic-Teleman-662227117527601"
                    target="_blank"
                    rel="noreferrer"
                    className="logoFacebook"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faFacebook} />{" "}
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {this.state.hiderFalse ? (
          <div className="backgroundSide">
            <ul className="navSide">
              <li>
                <Link to="/" className="link" activeClassName="activeNav">
                  {" "}
                  Acasă{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/despre/"
                  className="link"
                  activeClassName="activeNav"
                >
                  {" "}
                  Despre{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/servicii/"
                  className="link"
                  activeClassName="activeNav"
                >
                  {" "}
                  Servicii{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/articole/"
                  className="link"
                  activeClassName="activeNav"
                >
                  {" "}
                  Articole{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact/"
                  className="link"
                  activeClassName="activeNav"
                >
                  {" "}
                  Contact{" "}
                </Link>
              </li>
              <li>
                <div className="logoItems">
                  {/* <a href="https://www.linkedin.com/in/ionu%C5%A3-prilipceanu-20534ab0/" target="_blank" rel="noreferrer" className="logoLinkedin"> <FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/ionutprilipceanu" target="_blank" rel="noreferrer" className="logoGithub"> <FontAwesomeIcon icon={faGithub} /></a> */}
                  <a
                    href="https://www.facebook.com/Cabinet-Psihologic-Teleman-662227117527601"
                    target="_blank"
                    rel="noreferrer"
                    className="logoFacebook"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </div>
              </li>
            </ul>
            <ul className="navSideSecond">
              <li>Alexandra Teleman</li>
              <li>(+40) 756 660 085</li>
              <li>cabinetteleman@gmail.com</li>
            </ul>

            <button
              className="burger"
              onClick={() => this.showNavBar()}
              onKeyDown={() => this.showNavBar()}
            >
              <div className="toggle" id="toggle1backgroundSide"></div>
              <div className="toggle" id="toggle2backgroundSide"></div>
              <div className="toggle" id="toggle3backgroundSide"></div>
            </button>
          </div>
        ) : (
          <div className="backgroundSideBack">
            <ul className="navSide">
              <li>
                <Link to="/" className="link" activeClassName="activeNav">
                  {" "}
                  Acasă{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/despre/"
                  className="link"
                  activeClassName="activeNav"
                >
                  {" "}
                  Despre{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/servicii/"
                  className="link"
                  activeClassName="activeNav"
                >
                  {" "}
                  Servicii{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/articole/"
                  className="link"
                  activeClassName="activeNav"
                >
                  {" "}
                  Articole{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact/"
                  className="link"
                  activeClassName="activeNav"
                >
                  {" "}
                  Contact{" "}
                </Link>
              </li>
            </ul>
            <ul className="navSideSecond">
              <li>Alexandra Teleman</li>
              <li>(+40) 756 660 085</li>
              <li>cabinetteleman@gmail.com</li>
            </ul>
            <button
              className="burger"
              onClick={() => this.showNavBar()}
              onKeyDown={() => this.showNavBar()}
            >
              <div className="toggle" id="toggle1"></div>
              <div className="toggle" id="toggle2"></div>
              <div className="toggle" id="toggle3"></div>
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default Nav_bar
