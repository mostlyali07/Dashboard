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
            <div className="card-top">
              <p>
                "We've been using Untitled to kick
                start every new project and can't
                imagine working without it."
              </p>
              <div>⭐⭐⭐⭐⭐</div>
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
              <div>⭐⭐⭐⭐⭐</div>
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
              <div>⭐⭐⭐⭐⭐</div>
            </div>
            <div className="card-bottom">
              <h4>Andi Lane</h4>
              <h5>Founder, Catalog</h5>
              <h6>Web Design Agency</h6>
            </div>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default reviewSlides;