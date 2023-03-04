import React from 'react'
import Slider from "react-slick";
import "./../App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviewSlides = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,

  };
  return (
    <>
      <div className="blurEffect mt-5 px-5">
        <div className="App">
          <Slider {...settings}>
            <div className="card">
              <div className="card-top">
                <p>
                  "We've been using Untitled to kick
                  start every new project and can't
                  imagine working without it."
                </p>
                <div className="text-end">⭐⭐⭐⭐⭐</div>
              </div>
              <div className="card-bottom">
                <h4>Andi Lane</h4>
                <h5>Founder, Catalog</h5>
                <h6>Web Design Agency</h6>
              </div>
            </div>
            <div className="card">
              <div className="card-top">
                <p>
                  "We've been using Untitled to kick
                  start every new project and can't
                  imagine working without it."
                </p>
                <div className="text-end">⭐⭐⭐⭐⭐</div>
              </div>
              <div className="card-bottom">
                <h4>Andi Lane</h4>
                <h5>Founder, Catalog</h5>
                <h6>Web Design Agency</h6>
              </div>
            </div>
            <div className="card">
              <div className="card-top">
                <p>
                  "We've been using Untitled to kick
                  start every new project and can't
                  imagine working without it."
                </p>
                <div className="text-end">⭐⭐⭐⭐⭐</div>
              </div>
              <div className="card-bottom">
                <h4>Andi Lane</h4>
                <h5>Founder, Catalog</h5>
                <h6>Web Design Agency</h6>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  )
}

export default reviewSlides;