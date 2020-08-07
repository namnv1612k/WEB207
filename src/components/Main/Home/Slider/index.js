import React from 'react'

const Slider = props => {
    return (
        <div className="slider-area">
        {/* slider-area start */}
        <div className="slider-area-inner">
          {/* slider start */}
          <div className="slider-inner">
            <div id="mainSlider" className="nivoSlider nevo-slider">
              <img src="images/slider/home4-slider1.jpg" alt="main slider" title="#htmlcaption1" />
              <img src="images/slider/home4-slider2.jpg" alt="main slider" title="#htmlcaption2" />
            </div>
            <div id="htmlcaption1" className="nivo-html-caption slider-caption">
              <div className="slider-progress" />
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="slider-content slider-content-1 slider-animated-1">
                      <h1 className="hone">INNOVATIVE</h1>
                      <h1 className="htwo">SMARTER</h1>
                      <h1 className="hthree">BRIGHTER</h1>
                      <h3>40” SkyHi Smart Package</h3> 
                      <div className="button-1 hover-btn-2">
                        <a href="shop.html">SHOP NOW</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="htmlcaption2" className="nivo-html-caption slider-caption">
              <div className="slider-progress" />
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="slider-content slider-content-2 slider-animated-2">
                      <h1 className="hone">DRONE DIY</h1>
                      <h1 className="htwo">WORKSHOP</h1>
                      <h3 className="h3one">Build &amp; Fly</h3>
                      <h3 className="h3two">Your Own drone!</h3>
                      <div className="button-1 hover-btn-1">
                        <a href="shop.html">SHOP NOW</a>
                      </div>
                    </div>
                  </div>					
                </div>					
              </div>					
            </div>
          </div>
          {/* slider end */}
        </div>
        {/* slider-area end */}
      </div>
    )
}

export default Slider
