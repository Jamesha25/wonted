/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import data from "../data/author.json";

const Authorv3 = ({isBg}) => {
  const { authorv3 } = data;
  return (
    <section id="author" className={`section-padding authorv3 ${isBg === "yes" ? "bg-one": "" }`}>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="author-image">
              <img className="img-fluid" src={authorv3.image} alt="" />
            </div>
          </div>
          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="authorv3__content">
              <div className="authorv3__content--badge">
                {authorv3.subtitle}
              </div>
              <h3 className="display-5 mb-0">{authorv3.title}</h3>
              <p className="m-30px-b text-muted fs-5">{authorv3.text}</p>
              <p className="m-30px-b">{authorv3.description}</p>
              <ul className="social-icon mt-0 mb-0">
                {authorv3.social?.map((data, i) => (
                  <li key={i}>
                    {data.link === "" ? (
                      ""
                    ) : (
                      <a href={data.link}>
                        <img
                          className="img-fluid"
                          src={data.icon}
                          alt="icon"
                          width="25"
                          height="25"
                        />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authorv3;
