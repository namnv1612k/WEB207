import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import CurrencyFormat from 'react-currency-format';
import axios from 'axios'

const Shop = ({}) => {

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const {cate_id} = useParams()

    useEffect(() => {
        const getCategories = () => {
            axios.get('http://localhost:8080/categories')
                .then(({data}) => {
                    setCategories(data)
                })
                .catch(() => {
                    console.log('Api categories fail !')
                })
        }
        getCategories()
    }, [])
    useEffect(() => {
        const getProducts = () => {
            let urlGetProducts = 'http://localhost:8080/products'
            if (cate_id !== undefined) {
                urlGetProducts += `?cate_id=${cate_id}`
            }
            axios.get(urlGetProducts)
                .then(({data}) => {
                    setProducts(data)
                })
                .catch(() => {
                    console.log('Api products fail !')
                })
        }
        getProducts()
    }, [products])

    return (
        <div>
            <div className="breadcrumbs-container">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-12">
                        <nav className="woocommerce-breadcrumb">
                        <Link to="/">Home</Link>
                        <span className="separator">/</span> Shop
                        </nav>
                    </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumbs End */}
            {/* Shop page wraper */}
            <div className="shop-page-wraper">
            <div className="container">
                <div className="row">
                <div className="col-xs-12 col-md-3 sidebar-shop">
                    <div className="sidebar-product-categori">
                    <div className="widget-title">
                        <h3>PRODUCT CATEGORIES</h3>
                    </div>
                    <div className="widget-content">
                        <ul className="product-categories">
                            {categories.map(({id, name}, key) => (
                                <li className="cat-item" key={key}>
                                    <Link to={`/category/${id}`}>{name}</Link>
                                    {/* <span className="count">(5)</span> */}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="product-filter mb-30">
                        <div className="widget-title">
                        <h3>Filter by price</h3>
                        </div>
                        <div className="widget-content">
                        <div id="price-range" />
                        <div className="price-values">
                            <div className="price_text_btn">
                            <span>Price:</span>
                            <input type="text" className="price-amount" />
                            </div>
                            <button className="button" type="submit">Filter</button>
                        </div>
                        </div>
                    </div>
                    <div className="widget-title">
                        <h3>SELECT BY COLOR</h3>
                    </div>
                    <div className="widget-content">
                        <ul className="product-categories">
                        <li className="cat-item">
                            <a href="#">Gold</a>
                            <span className="count">(1)</span>
                        </li>
                        <li className="cat-item">
                            <a href="#">Green</a>
                            <span className="count">(1)</span>
                        </li>
                        <li className="cat-item">
                            <a href="#">White</a>
                            <span className="count">(1)</span>
                        </li>
                        </ul>
                    </div>
                    <div className="product-filter mb-30">
                        <div className="widget-title">
                        <h3>TOP RATED PRODUCTS</h3>
                        </div>
                        <div className="widget-content">
                        <ul className="product_list_widget">
                            <li className="widget-mini-product">
                            <div className="product-image">
                                <a title="Phasellus vel hendrerit" href="#">
                                <img alt="" src="images/product/2.jpg" />
                                </a>
                            </div>
                            <div className="product-info">
                                <a title="Phasellus vel hendrerit" href="#">
                                <span className="product-title">Consequuntur magni</span>
                                </a>
                                <div className="star-rating">
                                <div className="rating-box">
                                    <span><i className="fa fa-star" /></span>
                                    <span><i className="fa fa-star" /></span>
                                    <span><i className="fa fa-star" /></span>
                                    <span><i className="fa fa-star" /></span>
                                    <span><i className="fa fa-star" /></span>
                                </div>
                                </div>
                                <span className="woocommerce-Price-amount amount">
                                <span className="woocommerce-Price-currencySymbol">$</span>55.00</span>
                            </div>
                            </li>
                            <li className="widget-mini-product">
                            <div className="product-image">
                                <a title="Phasellus vel hendrerit" href="#">
                                <img alt="" src="images/product/3.jpg" />
                                </a>
                            </div>
                            <div className="product-info">
                                <a title="Phasellus vel hendrerit" href="#">
                                <span className="product-title">Aliquam lobortis</span>
                                </a>
                                <div className="star-rating">
                                <div className="rating-box">
                                    <span><i className="fa fa-star" /></span>
                                    <span><i className="fa fa-star" /></span>
                                    <span><i className="fa fa-star" /></span>
                                    <span><i className="fa fa-star" /></span>
                                    <span><i className="fa fa-star" /></span>
                                </div>
                                </div>
                                <span className="woocommerce-Price-amount amount">
                                <span className="woocommerce-Price-currencySymbol">$</span>55.00</span>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="sidebar-single-banner">
                        <a href="#">
                        <img src="images/banner/shop-sidebar.jpg" alt="Banner" />
                        </a>
                    </div>
                    <div className="sidebar-tag">
                        <div className="widget-title">
                        <h3>PRODUCT TAGS</h3>
                        </div>
                        <div className="widget-content">
                        <div className="product-tags">
                            <a href="#">New </a>
                            <a href="#">brand</a>
                            <a href="#">black</a>
                            <a href="#">white</a>
                            <a href="#">chire</a>
                            <a href="#">table</a>
                            <a href="#">Lorem</a>
                            <a href="#">ipsum</a>
                            <a href="#">dolor</a>
                            <a href="#">sit</a>
                            <a href="#">amet</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-9 shop-content">
                    {/* <div className="shop-banner">
                        <img src="images/banner/shop-category.jpg" alt="" />
                    </div> */}
                    <div className="product-toolbar">
                    <div className="topbar-title">
                        <h1>Shop</h1>
                    </div>
                    <div className="product-toolbar-inner">
                        <div className="product-view-mode">
                        <ul className="nav nav-tabs">
                            <li className="active"><a data-toggle="tab" href="#grid"><i className="ion-grid" /></a></li>
                            <li><a data-toggle="tab" href="#list"><i className="ion-navicon" /></a></li>
                        </ul>
                        </div>
                        <p className="woocommerce-result-count">Showing 1–12 of 42 results</p>
                        <div className="woocommerce-ordering">
                        <form method="get" className="woocommerce-ordering hidden-xs">
                            <div className="orderby-wrapper">
                            <label>Sort By :</label>
                            <select className="nice-select-menu orderby">
                                <option dara-display="Select">Default sorting</option>
                                <option value="popularity">Sort by popularity</option>
                                <option value="rating">Sort by average rating</option>
                                <option value="date">Sort by newness</option>
                                <option value="price">Sort by price: low to high</option>
                                <option value="price-desc">Sort by price: high to low</option>
                            </select>
                            </div>
                        </form>
                        </div>
                    </div>
                    <div className="shop-page-product-area tab-content">
                        <div id="grid" className="tab-pane fade in show active">
                        <div className="row">

                            {products.map(({id, name, price, sale_price, image}, key) => (
                                <div className="col-sm-6 col-md-4 col-xl-3" key={key}>
                                    <div className="single-product-area">
                                        <div className="product-wrapper gridview">
                                            <div className="list-col4">
                                                <div className="product-image">
                                                <Link to={`/product/${id}`}>
                                                    <img src={image} alt="" />
                                                </Link>
                                                <div className="quickviewbtn">
                                                    <Link to="#" data-toggle="modal" data-target="#product_modal" data-original-title="Quick View"><i className="ion-eye" /></Link>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="list-col8">
                                                <div className="product-info">
                                                    <h2><Link to={`/product/${id}`}>{name}</Link></h2>
                                                    <span className="price">
                                                        <del><CurrencyFormat value={sale_price} displayType={'text'} thousandSeparator={true} prefix={'đ'} /></del> <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'đ'} />
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
                                </div>
                            ))}
                            
                        </div>
                        </div>
                        <div id="list" className="tab-pane fade">
                        <div className="row">
                            {products.map(({id, name, price, sale_price, image, desc}, key) => (
                                <div className="col-sm-12" key={key}>
                                    <div className="single-product-area">
                                        <div className="product-wrapper listview">
                                            <div className="list-col4">
                                                <div className="product-image">
                                                    <Link to="#">
                                                        {(<span className="onsale">Sale!</span>) ? sale_price < price : ''}
                                                        <img src={image} alt="" />
                                                    </Link>
                                                    <div className="quickviewbtn">
                                                        <Link to="#" data-toggle="modal" data-target="#product_modal" data-original-title="Quick View"><i className="ion-eye" /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="list-col8">
                                                <div className="product-info">
                                                    <h2><Link to={`/product/${id}`}>{name}</Link></h2>
                                                    <span className="price">
                                                        <del><CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'đ'} /></del> <CurrencyFormat value={sale_price} displayType={'text'} thousandSeparator={true} prefix={'đ'} />
                                                    </span>
                                                    <div className="product-rattings">
                                                        <span><i className="fa fa-star" /></span>
                                                        <span><i className="fa fa-star" /></span>
                                                        <span><i className="fa fa-star" /></span>
                                                        <span><i className="fa fa-star-half-o" /></span>
                                                        <span><i className="fa fa-star-o" /></span>
                                                    </div>
                                                    <div dangerouslySetInnerHTML={{__html: desc}} className="product-desc">
                                                        
                                                    </div>
                                                </div>
                                                <div className="actions-wrapper">
                                                    <div className="add-to-cart">
                                                        <Link to="#">Add to cart</Link>
                                                    </div>
                                                    <div className="star-actions">
                                                        <ul className="actions">
                                                            <li><a href="#"><i className="ion-android-favorite-outline" />Add to Wishlist</a></li>
                                                            <li><a href="#"><i className="ion-ios-shuffle-strong" />Compare</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                           </div>
                        </div>
                    </div>
                    </div>
                    <nav className="woocommerce-pagination">
                    <ul className="page-numbers">
                        <li><span aria-current="page" className="page-numbers current">1</span></li>
                        <li><a className="page-numbers" href="#">2</a></li>
                        <li><a className="page-numbers" href="#">3</a></li>
                        <li><a className="page-numbers" href="#">4</a></li>
                        <li><a className="next page-numbers" href="#">→</a></li>
                    </ul>
                    </nav>
                </div>
                </div>
            </div> 
        </div>
    </div>
    )
}

Shop.propTypes = {

}

export default Shop
