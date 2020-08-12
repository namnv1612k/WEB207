import React from 'react'

const About = props => {
    return (
        <div>
        <div className="breadcrumbs-container">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <nav className="woocommerce-breadcrumb">
                  <a href="index.html">Home</a>
                  <span className="separator">/</span> About
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* Breadcrumbs End */}
        {/* About page area */}
        <div className="about-page-area">
          <div className="about__us_page_area">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 col-lg-6 col-xs-12">
                  <div className="banner_h2__left_image">
                    <img alt="" src="images/banner/about-us-img1.jpg" />
                  </div>
                </div>
                <div className="col-md-12 col-lg-6  col-xs-12">
                  <div className="banner_h2_Right_text">
                    <div className="wpb_wrapper">
                      <h3>WE SELL <br /> PRODUCTS.</h3>
                      <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla
                        facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore
                        te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim
                        placerat facer possim assum. Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem.</p>
                      <p className="text-center">
                        <a href="#"> view work </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="funfact-area bg--white" id="funfact-area">
            <div className="funfacts">
              <div className="row no-gutters">
                {/*  Single Funfact */}
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="funfact">
                    <div className="fun__fact_img">
                      <img src="images/icon-img/about-us-icon1.png" alt="" />
                    </div>
                    <div className="fun_fact_info">
                      <h1>
                        <span className="counter">2169</span>
                      </h1>
                      <h5>HAPPY CUSTOMERS</h5>
                    </div>
                  </div>
                </div>
                {/*//  Single Funfact */}
                {/*  Single Funfact */}
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="funfact">
                    <div className="fun__fact_img">
                      <img src="images/icon-img/about-us-icon2.png" alt="" />
                    </div>
                    <div className="fun_fact_info">
                      <h1>
                        <span className="counter">369</span>
                      </h1>
                      <h5>AWARDS WINNED</h5>
                    </div>
                  </div>
                </div>
                {/*//  Single Funfact */}
                {/*  Single Funfact */}
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="funfact">
                    <div className="fun__fact_img">
                      <img src="images/icon-img/about-us-icon3.png" alt="" />
                    </div>
                    <div className="fun_fact_info">
                      <h1>
                        <span className="counter">689</span>
                      </h1>
                      <h5>HOURS WORKED</h5>
                    </div>
                  </div>
                </div>
                {/*//  Single Funfact */}
                {/*  Single Funfact */}
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                  <div className="funfact">
                    <div className="fun__fact_img">
                      <img src="images/icon-img/about-us-icon4.png" alt="" />
                    </div>
                    <div className="fun_fact_info">
                      <h1>
                        <span className="counter">169</span>
                      </h1>
                      <h5>PRODUCTS</h5>
                    </div>
                  </div>
                </div>
                {/*//  Single Funfact */}
              </div>
            </div>
          </div>
          <div className="abou_skrill__area">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 col-lg-6 col-xs-12">
                  <div className="skrill_here">
                    <h3>WE HAVE SKILLS TO SHOW</h3>
                    <div className="ht-single-about">
                      <div className="skill-bar">
                        <div className="skill-bar-item">
                          <span>products on the market</span>
                          <div className="progress">
                            <div className="progress-bar wow fadeInLeft width80" data-progress="80%" data-wow-duration="1.5s" data-wow-delay="1.2s">
                              <span className="text-top">80%</span>
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar-item">
                          <span>genuine certification</span>
                          <div className="progress">
                            <div className="progress-bar wow fadeInLeft width90" data-progress="90%" data-wow-duration="1.5s" data-wow-delay="1.2s">
                              <span className="text-top">90%</span>
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar-item">
                          <span>quick payment</span>
                          <div className="progress">
                            <div className="progress-bar wow fadeInLeft width70" data-progress="70%" data-wow-duration="1.5s" data-wow-delay="1.2s">
                              <span className="text-top">70%</span>
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar-item">
                          <span>user rating</span>
                          <div className="progress">
                            <div className="progress-bar wow fadeInLeft width95" data-progress="95%" data-wow-duration="1.5s" data-wow-delay="1.2s">
                              <span className="text-top">95%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xs-12">
                  <div className="banner_h2__left_image lft_to_right">
                    <img alt="" src="images/banner/about-us-img2.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

About.propTypes = {

}

export default About
