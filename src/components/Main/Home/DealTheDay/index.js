import React from 'react'

const DealTheDay = props => {
    return (
        <div className="deals-of-the-day-area">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="section-title">
                <h3>Deals Of The Day</h3>
              </div>
            </div>
          </div>
          <div className="big-product-area">
            <div className="row">
              <div className="carosel-next-prive product-carousel-active-home-four owl-carousel">
                <div className="col-sm-12">
                  {/* single product */}
                  <div className="single-product-area">
                    <div className="product-wrapper listview">
                      <div className="list-col4">
                        <div className="product-image">
                          <a href="#">
                            <img src="images/product/big/product4.jpg" alt="" />
                          </a>
                          <div className="quickviewbtn">
                            <a href="#" data-toggle="modal" data-target="#product_modal" data-original-title="Quick View"><i className="ion-eye" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="list-col8">
                        <div className="product-info">
                          <h2><a href="single-product.html">Sit voluptatem</a></h2>
                          <span className="price">
                            <del>$ 77.00</del> $ 66.00
                          </span>
                          <div className="product-rattings">
                            <span><i className="fa fa-star" /></span>
                            <span><i className="fa fa-star" /></span>
                            <span><i className="fa fa-star" /></span>
                            <span><i className="fa fa-star-half-o" /></span>
                            <span><i className="fa fa-star-o" /></span>
                          </div>
                          <div className="product-desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus</p>
                          </div>
                          <div className="deal-counter">
                            <div data-countdown="2019/08/02" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* single product end */}
                </div>
                <div className="col-sm-12">
                  {/* single product */}
                  <div className="single-product-area">
                    <div className="product-wrapper listview">
                      <div className="list-col4">
                        <div className="product-image">
                          <a href="#">
                            <span className="onsale">Sale!</span>
                            <img src="images/product/big/product5.jpg" alt="" />
                          </a>
                          <div className="quickviewbtn">
                            <a href="#" data-toggle="modal" data-target="#product_modal" data-original-title="Quick View"><i className="ion-eye" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="list-col8">
                        <div className="product-info">
                          <h2><a href="single-product.html">Consequuntur magni</a></h2>
                          <span className="price">
                            <del>$ 89.00</del> $ 80.00
                          </span>
                          <div className="product-rattings">
                            <span><i className="fa fa-star" /></span>
                            <span><i className="fa fa-star" /></span>
                            <span><i className="fa fa-star" /></span>
                            <span><i className="fa fa-star-half-o" /></span>
                            <span><i className="fa fa-star-o" /></span>
                          </div>
                          <div className="product-desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus</p>
                          </div>
                          <div className="deal-counter">
                            <div data-countdown="2019/08/02" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* single product end */}
                </div>
                <div className="col-sm-12">
                  {/* single product */}
                  <div className="single-product-area">
                    <div className="product-wrapper listview">
                      <div className="list-col4">
                        <div className="product-image">
                          <a href="#">
                            <img src="images/product/big/product6.jpg" alt="" />
                          </a>
                          <div className="quickviewbtn">
                            <a href="#" data-toggle="modal" data-target="#product_modal" data-original-title="Quick View"><i className="ion-eye" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="list-col8">
                        <div className="product-info">
                          <h2><a href="single-product.html">Epicuri per</a></h2>
                          <span className="price">
                            <del>$ 68.00</del> $ 62.00
                          </span>
                          <div className="product-rattings">
                            <span><i className="fa fa-star" /></span>
                            <span><i className="fa fa-star" /></span>
                            <span><i className="fa fa-star" /></span>
                            <span><i className="fa fa-star-half-o" /></span>
                            <span><i className="fa fa-star-o" /></span>
                          </div>
                          <div className="product-desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus</p>
                          </div>
                          <div className="deal-counter">
                            <div data-countdown="2019/08/02" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* single product end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

DealTheDay.propTypes = {

}

export default DealTheDay
