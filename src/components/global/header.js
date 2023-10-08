import { default as React, useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";
// import { GoChevronDown } from "react-icons/go";
// import { Link as PageLink } from "react-router-dom";
import { Link } from "react-scroll";
import { siteLogo } from "../../global";


const Header = ({ header }) => {
  // const [isActive, setActive] = useState(false);
  const [fix, setFix] = useState(false);
  const [isMobileScreen, setIsMobileScreen]=useState(false);
  // const handleToggle = () => {
  //   setActive(!isActive);
  // };
  function setFixed() {
    if (window.scrollY >= 100) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);

  const handleResize = () => {
    // Update window.innerWidth when the window is resized
    if (window.innerWidth < 992) {
      setIsMobileScreen(true); // Reset fix state when window width is greater than 992
    }else{
      setIsMobileScreen(false);
    }
  };
  useEffect(() => {
    if(window.innerWidth<992){
      setIsMobileScreen(true)
    }else{
      setIsMobileScreen(false)
    }
    // Add event listeners when the component mounts
    window.addEventListener("resize", handleResize);

    // Clean up event listeners when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect only runs once when the component mounts

  return (
    <header className={fix ? "header navbar_fixed" : "header"}>
      <div className="container">
        <div className="row">
          <Navbar bg="none" expand="lg">
            {isMobileScreen && <a className="navbar-brand" href="/">
              {/* <!-- <h1 className="m-0">WONTED</h1> --> */}
              <img src={siteLogo.logo} alt={siteLogo.alt} />
            </a>}
            <Navbar.Toggle aria-controls="navbarSupportedContent">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarSupportedContent" className="justify-content-center">
            <ul className="navbar-nav menu">
              {header.menu?.map((data, i) => {
                if (data?.title === "LOGO" && !isMobileScreen) {
                  return (
                    <li className="nav-item flex-sm-grow-1 me-3 ms-5" key={i} >
                      <a className="navbar-brand" href="/">
                        {/* <!-- <h1 className="m-0">WONTED</h1> --> */}
                        <img src={siteLogo.logo} alt={siteLogo.alt} />
                      </a>
                    </li>
                  );
                } else if(data.title!=="LOGO"){
                  return (
                    <li className="nav-item flex-grow-1" key={i}>
                      <Link
                        activeClass="active"
                        className="benefits nav-link"
                        to={`${data.link}`}
                        spy={true}
                        isDynamic={false}
                        hashSpy={false}
                        spyThrottle={500}
                        smooth={true}
                        duration={500}
                        offset={-60}
                      >
                        {data.title}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </header>
  );
};

export default Header;
