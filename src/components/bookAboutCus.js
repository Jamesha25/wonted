import React from "react";
import data from "../data/bookAbout.json";

// import { FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./bookAboutCus.css";

const BookAbout = ({ isBg }) => {
  const { content } = data;
  return (
    // <!-- ========== Book About section starts ========== -->
    <section
      id="events"
      className={`section-padding event bookAbout-cont-cus ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span>{content.title}</span>
              <h2 className="display-6">{content.subtitle}</h2>
              {/* <div className="section-divider divider-traingle"></div> */}
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {content.singleContent.slice(0, 3).map((data, i) => (
            <div
              key={i}
              className="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={(i + 2) * 50}
            >
              <article className="events__single-event h-100 translateEffect1">
                {/* <div className="events__single-event__image">
                  <Link to="/single-event">
                    <img className="img-fluid" src={data.image} alt="" />
                  </Link>
                </div> */}
                <div className="events__single-event__body">
                  <div className="events__single-event__content">
                    <h2 className="fs-4 text-center">
                      <Link to="/single-event">{data.title}</Link>
                    </h2>
                    <p className="m-0 text-center">{data.description}</p>
                  </div>
                  {/* <div className="events__single-event__meta">
                    <div>
                      <FaRegCalendarAlt /> {data.date} {data.month}, {data.year}
                    </div>
                    <div>
                      <FaMapMarkerAlt /> {data.location}
                    </div>
                  </div> */}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
    // <!-- ========== Book about section end ========== -->
  );
};

export default BookAbout;
