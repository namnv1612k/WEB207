import React from 'react'

const MyAccount = props => {
    return (
        <div className="col-lg-6 col-sm-6">
        <div className="topbar-nav">
          <div className="wpb_wrapper">
            {/* my account */}
            <div className="menu-my-account-container">
              <a href="#">My Account <i className="ion-ios-arrow-down" /></a>
              <ul>
                <li><a href="my-account.html">My Account</a></li>
                <li><a href="login.html">Login</a></li>
                <li><a href="register.html">Register</a></li>
                <li><a href="checkout.html">Checkout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}

MyAccount.propTypes = {

}

export default MyAccount
