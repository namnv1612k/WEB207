import React from 'react'
import PropTypes from 'prop-types'

const Nav = props => {
    return (
        <div className="col-lg-9">
        {/* main-menu */}
        <div className="main-menu">
          <nav>
            <ul>
              <li className="current"><a href="index.html">Home <i className="fa fa-angle-down" /></a>
                <ul className="submenu">
                  <li><a href="index.html">Home Shop 1</a></li>
                  <li><a href="index-2.html">Home Shop 2</a></li>
                  <li><a href="index-3.html">Home Shop 3</a></li>
                  <li><a href="index-4.html">Home Shop 4</a></li>
                </ul>
              </li>
              <li><a href="shop.html">Shop</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="about-us.html">About Us</a></li>
              <li><a href="contact-us.html">Contact</a></li>
              <li><a href="#">Features <i className="fa fa-angle-down" /></a>
                <ul className="megamenu-3-column">
                  <li><a href="#">Pages</a>
                    <ul>
                      <li><a href="about-us.html">About Us</a></li>
                      <li><a href="contact-us.html">Contact Us</a></li>
                      <li><a href="service.html">Services</a></li>
                      <li><a href="portfolio.html">Portfolio</a></li>
                      <li><a href="faq.html">Frequently Questins</a></li>
                      <li><a href="404.html">Error 404</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Blog</a>
                    <ul>
                      <li><a href="blog-no-sidebar.html">None Sidebar</a></li>
                      <li><a href="blog.html">Sidebar right</a></li>
                      <li><a href="single-blog.html">Image Format</a></li>
                      <li><a href="single-blog-gallery.html">Gallery Format</a></li>
                      <li><a href="single-blog-audio.html">Audio Format</a></li>
                      <li><a href="single-blog-video.html">Video Format</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Shop</a>
                    <ul>
                      <li><a href="shop.html">Shop</a></li>
                      <li><a href="shop-list.html">Shop List View</a></li>
                      <li><a href="shop-right.html">Shop Right</a></li>
                      <li><a href="single-product.html">Shop Single</a></li>
                      <li><a href="cart.html">Shoping Cart</a></li>
                      <li><a href="checkout.html">Checkout</a></li>
                      <li><a href="my-account.html">My Account</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mobile-menu-area">
          <div className="mobile-menu">
            <nav id="mobile-menu-active">
              <ul className="menu-overflow">
                <li><a href="#">HOME</a>
                  <ul>
                    <li><a href="index.html">Home Shop 1</a></li>
                    <li><a href="index-2.html">Home Shop 2</a></li>
                    <li><a href="index-3.html">Home Shop 3</a></li>
                    <li><a href="index-4.html">Home Shop 4</a></li>
                  </ul>
                </li>
                <li><a href="shop.html">Shop</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="about-us.html">About Us</a></li>
                <li><a href="contact-us.html">Contact</a></li>
                <li><a href="#">Features</a>
                  <ul>
                    <li><a href="#">Pages</a>
                      <ul>
                        <li><a href="about-us.html">About Us</a></li>
                        <li><a href="service.html">Services</a></li>
                        <li><a href="service-2.html">Services Two</a></li>
                        <li><a href="portfolio.html">Portfolio</a></li>
                        <li><a href="faq.html">Frequently Questins</a></li>
                        <li><a href="404.html">Error 404</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Blog</a>
                      <ul>
                        <li><a href="blog-no-sidebar.html">None Sidebar</a></li>
                        <li><a href="blog.html">Sidebar right</a></li>
                        <li><a href="single-blog.html">Image Format</a></li>
                        <li><a href="single-blog-gallery.html">Gallery Format</a></li>
                        <li><a href="single-blog-audio.html">Audio Format</a></li>
                        <li><a href="single-blog-video.html">Video Format</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Shop</a>
                      <ul>
                        <li><a href="shop.html">Shop</a></li>
                        <li><a href="shop-list.html">Shop List View</a></li>
                        <li><a href="shop-right.html">Shop Right</a></li>
                        <li><a href="single-product.html">Shop Single</a></li>
                        <li><a href="cart.html">Shoping Cart</a></li>
                        <li><a href="checkout.html">Checkout</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>                          
          </div>
        </div>
      </div>
    )
}

Nav.propTypes = {

}

export default Nav
