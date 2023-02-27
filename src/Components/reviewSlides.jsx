import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviewSlides = () => {
  return (
    <>
      <div className="App">
        <Slider>
          <div className="card">
            <div className="card-top"></div>
            <div className="card-bottom"></div>
          </div>
          <div className="card">
            <div className="card-top"></div>
            <div className="card-bottom"></div>
          </div>
          <div className="card">
            <div className="card-top"></div>
            <div className="card-bottom"></div>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default reviewSlides