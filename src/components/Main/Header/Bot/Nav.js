import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Nav = props => {
    return (
        <div className="col-lg-9">
        {/* main-menu */}
        <div className="main-menu">
          <nav>
            <ul>
            {/* className="current" */}
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/contact-us">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div className="mobile-menu-area">
          <div className="mobile-menu">
            <nav id="mobile-menu-active">
              <ul className="menu-overflow">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/contact-us">Contact</Link></li>
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
