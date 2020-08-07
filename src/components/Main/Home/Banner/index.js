import React from 'react'

const Banner = props => {
    return (
        <div className="home-four-banner-area">
        <div className="container">
          <div className="row">
            <div className="four-fast col-sm-6 col-lg-3 col-md-6 col-xs-12">
              <div className="four-single-banner-text">
                <div className="four-banner-img">
                  <a href="#">
                    <img src="images/banner/home4-banner1-1.jpg" alt="" />
                  </a>
                </div>
                <div className="four-banner-text">
                  <h3>Best Camera Under $500</h3>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 col-md-6 col-xs-12">
              <div className="four-single-banner-text">
                <div className="four-banner-img">
                  <a href="#">
                    <img src="images/banner/home4-banner1-2.jpg" alt="" />
                  </a>
                </div>
                <div className="four-banner-text">
                  <h3>Best Smatwatch Under $100</h3>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 col-md-6 col-xs-12">
              <div className="four-single-banner-text">
                <div className="four-banner-img">
                  <a href="#">
                    <img src="images/banner/home4-banner1-3.jpg" alt="" />
                  </a>
                </div>
                <div className="four-banner-text">
                  <h3>Best Laptop Under $2000</h3>
                </div>
              </div>
            </div>
            <div className="four-last col-sm-6 col-lg-3 col-md-6 col-xs-12">
              <div className="four-single-banner-text">
                <div className="four-banner-img">
                  <a href="#">
                    <img src="images/banner/home4-banner1-4.jpg" alt="" />
                  </a>
                </div>
                <div className="four-banner-text">
                  <h3>Best TV Under $800</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

Banner.propTypes = {

}

export default Banner
