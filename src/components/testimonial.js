/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useRef} from "react";
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import testimonialData from "../data/testimonial.json";
import "./testimonialCus.css";

const Testimonial = ({ isBg }) => {
  const { testimonial } = testimonialData;
  const swiperRef = useRef(null);
  const changeSlide = (pos) => {
    if (swiperRef.current) {
      if(pos==="next")
      swiperRef.current.swiper.slideNext();
      else
      swiperRef.current.swiper.slidePrev()
    }
  };
  return (
    // <!-- ========== Testimonial section start ========== -->
    <section
      id="reviews"
      className={`section-padding testimonial ${
        isBg === "yes" ? "bg-one" : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-10 offset-lg-1">
            <div className="section-title-center text-center">
              <span>{testimonial.subtitle}</span>
              <h2 className="display-6">{testimonial.title}</h2>
              <div className="section-divider divider-traingle"></div>
            </div>
          </div>
        </div>
        <div className="row testi-row">
          <div className="col-12">
            <Swiper ref={swiperRef}
              modules={[Pagination, Autoplay, Navigation]}
              pagination={{ clickable: true }}
              breakpoints={{
                768: {
                  slidesPerView: 1,
                  // spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 1,
                  // spaceBetween: 20,
                },
              }}
            >
              {testimonial.testimonialItem?.map((data) => (
                <SwiperSlide key={data.id}>
                  <div className="cus-swiper-container">
                    <img src={data.image} alt={data.title} />
                    <div className="content-container">
                      <div onClick={()=>changeSlide("prev")} className="fs-1">&lt;</div>
                      <div className="content">
                        <h4>{data.name}</h4>
                        <p>{data.title}</p>
                        <p>{data.description}</p>
                      </div>
                      <div onClick={()=>changeSlide("next")} className="fs-1">&gt;</div>
                    </div>
                  </div>
                  {/* <div className="swiper-slide p-5px-lr">
                    <div className="testi-card card h-100 translateEffect1">
                      <div className="card-body p-4">
                        <div className="testi-card__quotation">
                          <i className="icofont-quote-right"></i>
                        </div>
                        <p className="my-4">{data.description}</p>
                        <div className="testi-card__user-info pt-4">
                          <div className="testimonial__user-info__image">
                            <img src={data.image} alt={data.title} />
                          </div>
                          <div className="testimonial__user-info__content">
                            <h4 className="mb-0">{data.name}</h4>
                            <p className="mb-0">{data.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
    // <!-- ========== Testimonial section end ========== -->
  );
};

export default Testimonial;
