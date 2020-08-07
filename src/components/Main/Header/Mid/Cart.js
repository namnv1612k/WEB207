import React from 'react'

const CartHeader = props => {
    return (
        <div className="col-xl-3 col-md-12">
        {/* shop-cart-menu */}
        <div className="shop-cart-menu pull-right">
          <ul>
            <li><a href="#">
                <span className="cart-icon">
                  <i className="ion-bag" /><sup>3</sup>
                </span>
                <span className="cart-text">
                  <span className="cart-text-title">My cart <br /> <strong>$ 145.00</strong> </span>
                </span>
              </a>
              <ul>
                <li>
                  {/* single-shop-cart-wrapper */}
                  <div className="single-shop-cart-wrapper">
                    <div className="shop-cart-img">
                      <a href="#"><img src="images/product/1.jpg" alt="Image of Product" /></a>
                    </div>
                    <div className="shop-cart-info">
                      <h5><a href="cart.html">sport t-shirt men</a></h5>
                      <span className="price">£515.00</span>
                      <span className="quantaty">Qty: 1</span>
                      <span className="cart-remove"><a href="#"><i className="fa fa-times" /></a></span>
                    </div>
                  </div>
                </li>
                <li>
                  {/* single-shop-cart-wrapper */}
                  <div className="single-shop-cart-wrapper">
                    <div className="shop-cart-img">
                      <a href="#"><img src="images/product/2.jpg" alt="Image of Product" /></a>
                    </div>
                    <div className="shop-cart-info">
                      <h5><a href="cart.html">sport coat amet</a></h5>
                      <span className="price">£100.00</span>
                      <span className="quantaty">Qty: 1</span>
                      <span className="cart-remove"><a href="#"><i className="fa fa-times" /></a></span>
                    </div>
                  </div>
                </li>
                <li>
                  {/* single-shop-cart-wrapper */}
                  <div className="single-shop-cart-wrapper">
                    <div className="shop-cart-img">
                      <a href="#"><img src="images/product/3.jpg" alt="Image of Product" /></a>
                    </div>
                    <div className="shop-cart-info">
                      <h5><a href="cart.html">Pellentesque men</a></h5>
                      <span className="price">£265.00</span>
                      <span className="quantaty">Qty: 1</span>
                      <span className="cart-remove"><a href="#"><i className="fa fa-times" /></a></span>
                    </div>
                  </div>
                </li>
                <li>
                  {/* shop-cart-total */}
                  <div className="shop-cart-total">
                    <p>Subtotal: <span className="pull-right">£880.00</span></p>
                  </div>
                </li>
                <li>
                  <div className="shop-cart-btn">
                    <a href="checkout.html">Checkout</a>
                    <a href="cart.html" className="pull-right">View Cart</a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    )
}

CartHeader.propTypes = {

}

export default CartHeader
