/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { RiTimeFill } from "react-icons/ri";
import { FaComments } from "react-icons/fa";
import { HiShare } from "react-icons/hi";
import data from "../data/blog.json";
import { Link } from "react-router-dom";

const AllBlogs = ({ isBg }) => {
  const { blog } = data;
  return (
    <section
      id="blog"
      className={`section-padding blog ${isBg === "yes" ? "bg-one" : ""}`}
    >
      <div className="container">
        <div className="row">
          {blog.blogList.slice(0, 6).map((data, i) => (
            <div
              key={i}
              className="col-md-6 col-lg-4 mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={(i + 2) * 50}
            >
              <article className="blog__single-post h-100 translateEffect1">
                <div className="blog__single-post__image">
                  <Link to="/single-blog">
                    <img className="img-fluid" src={data.image} alt="Blog 01" />
                  </Link>
                </div>
                <div className="blog__single-post__body">
                  <div className="blog__single-post__content">
                    <h2 className="fs-4">
                      <Link to="/single-blog">{data.title}</Link>
                    </h2>
                    <p className="m-0">{data.description}</p>
                  </div>
                  <div className="blog__single-post__meta">
                    <div className="d-flex gap-2 align-items-center">
                      <RiTimeFill />
                      {data.date}
                    </div>
                    <ul>
                      <li>
                        <FaComments />
                      </li>
                      <li>
                        <HiShare />
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
        <div className="blog__pagination">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <Link className="page-link" to="/#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="/#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="/#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="/#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="/#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default AllBlogs;
