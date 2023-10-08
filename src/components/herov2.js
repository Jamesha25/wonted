import React, {useEffect,  useState} from "react";

import { BiPlayCircle } from "react-icons/bi";
import data from "../data/hero.json";
import "./herov2Cus.css";

const Herov2 = ({ isBg }) => {
  const { herov2 } = data;
  const [isMobileScreen, setIsMobileScreen]=useState(false);
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
    <section
      id="hero"
      className={`hero hero__padding overflow-hidden position-relative hero-cont-cus${
        isBg === "yes" ? "bg-one" : " "
      }`}
    >
      <div className="circle x1"></div>
      <div className="circle x2"></div>
      <div className="circle x3"></div>
      <div className="circle x4"></div>
      <div className="circle x5"></div>
      <div className="container">
        <div className="row align-items-center justify-content-between home-cont-cus">
          <div className="col-md-7 col-lg-6 m-0px-b md-m-40px-b">
            <div className="hero__content position-relative">
              {isMobileScreen &&
              <div>
                <a
                  href="#pricing"
                  className="smooth button button__primary me-3"
                >
                  <span>{herov2.buyBtn}</span>
                </a>
                <a
                  href="https://youtu.be/dkxiTpwm0hs"
                  className="glightbox3 btn__secondary"
                >
                  <BiPlayCircle /> {herov2.aboutBtn}
                </a>
              </div>}
              <h1 className="display-4 mb-4 text-capitalize">{herov2.title}</h1>
              <p className="text-muted mb-5 fs-5">{herov2.description}</p>
              {!isMobileScreen &&
              <div>
                <a
                  href="#pricing"
                  className="smooth button button__primary me-3"
                >
                  <span>{herov2.buyBtn}</span>
                </a>
                <a
                  href="https://youtu.be/dkxiTpwm0hs"
                  className="glightbox3 btn__secondary"
                >
                  <BiPlayCircle /> {herov2.aboutBtn}
                </a>
              </div>}
            </div>
          </div>
          <div className="col-md-5 text-center">
            {/* <div className="hero__images3"> */}
              {/* <img
                width="400"
                className="img-fluid"
                src={herov2.image}
                alt=""
              /> */}
            <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src="http://subsolardesigns.com/odrin/demo2/wp-content/uploads/sites/4/2017/08/cover_cosmos-468x700.png" />
                    <div className="ribbon-2">Read The Book</div>
                  </div>
                </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herov2;
