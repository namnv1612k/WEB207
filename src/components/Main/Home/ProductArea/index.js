import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import CurrencyFormat from 'react-currency-format'


const ProductArea = props => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = () => {
        let urlGetProducts = 'http://localhost:8080/products'
        axios.get(urlGetProducts)
            .then(({data}) => {
                setProducts(data)
            })
            .catch(() => {
                console.log('Api products fail !')
            })
    }
    getProducts()
  }, [])

    return (
        <div className="product-area">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="section-title">
                <h3>TOP PRODUCTS</h3>
              </div>
            </div>
          </div>
          <div className="product-area-inner">
            <div className="row">
              <div className="home-two-product-carousel-active owl-carousel">
                {/* single product */}
                {products.map(({name, id, price, sale_price, image}, key) => (
                  <div className="col-sm-3" style={{float: "left"}} key={key}>
                    <div className="single-product-area">
                      <div className="product-wrapper gridview">
                        <div className="list-col4">
                          <div className="product-image">
                            <Link to={`/product/${id}`}>
                              <img src={image} alt="" />
                            </Link>
                            <div className="quickviewbtn">
                              <a href="#" data-toggle="modal" data-target="#product_modal" data-original-title="Quick View"><i className="ion-eye" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="list-col8">
                          <div className="product-info">
                            <h2><Link to={`/product/${id}`}>{name}</Link></h2>
                            <span className="price">
                              <del><CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'đ'} /></del> <CurrencyFormat value={sale_price} displayType={'text'} thousandSeparator={true} prefix={'đ'} />
                            </span>
                          </div>
                          <div className="product-hidden">
                            <div className="add-to-cart">
                              <a href="cart.html">Add to cart</a>
                            </div>
                            <div className="star-actions">
                              <div className="product-rattings">
                                <span><i className="fa fa-star" /></span>
                                <span><i className="fa fa-star" /></span>
                                <span><i className="fa fa-star" /></span>
                                <span><i className="fa fa-star-half-o" /></span>
                                <span><i className="fa fa-star-o" /></span>
                              </div>
                              <ul className="actions">
                                <li><a href="#"><i className="ion-android-favorite-outline" /></a></li>
                                <li><a href="#"><i className="ion-ios-shuffle-strong" /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* single product end */}
                  </div>
                ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    )
}

ProductArea.propTypes = {

}

export default ProductArea
