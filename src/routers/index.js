import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'
import AddProduct from '../pages/views/Admin/Products/AddProduct'
import EditProduct from '../pages/views/Admin/Products/EditProduct'
import BlogManager from '../pages/views/Admin/Blog'

//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import DetailProduct from '../pages/views/Main/Product/Detail'
import Error404 from '../pages/views/Main/Error/404'
import Shop from '../pages/views/Main/Shop'
import Contact from '../pages/views/Main/Contact'
import CategoryManager from '../pages/views/Admin/Category'
import AddCategory from '../pages/views/Admin/Category/AddCategory'
import BlogList from '../pages/views/Main/Blog'
import AddBlog from '../pages/views/Admin/Blog/add'

const Routers = ({ 
        products, 
        onRemove, 
        onAdd, 
        setProducts, 
        category, 
        setCategory, 
        productDetail, 
        setProductDetail,
        categories,
        setCategories,
    }) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }

    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard />
                            </Route>

                            {/* Admin product */}
                            <Route path='/admin/products'>
                                <ProductsManager products={products} onRemove={onHandleRemove} setProducts={setProducts} categories={categories} />
                            </Route>
                            <Route path='/admin/product/add'>
                                <AddProduct onAdd={onAdd} categories={categories} />
                            </Route>
                            <Route path="/admin/product/:id" exact>
                                <EditProduct categories={categories} setProducts={setProducts} />
                            </Route>
                            {/* End admin product */}

                            {/* Admin category */}
                            <Route path='/admin/categories'>
                                <CategoryManager categories={categories} setCategories={setCategories} />
                            </Route>
                            <Route path='/admin/category/add'>
                                <AddCategory categories={categories} setCategories={setCategories} />
                            </Route>
                            {/* End admin category */}

                            {/* Blog admin */}
                            <Route path="/admin/blogs" exact>
                                <BlogManager />
                            </Route>
                            <Route path="/admin/blog/add" exact>
                                <AddBlog />
                            </Route>
                            {/* End blog admin */}

                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain category={category} product={productDetail}>
                        <Switch>
                            <Route path="/" exact>
                                <Home products={products} />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>

                            {/* Product */}
                            <Route path="/product/:id" exact>
                                <DetailProduct 
                                    product={productDetail} 
                                    setProduct={setProductDetail} 
                                    setCategory={setCategory} 
                                    category={category}
                                />
                            </Route>
                            <Route path="/shop" exact>
                                <Shop />
                            </Route>
                            <Route path="/category/:cate_id" exact>
                                <Shop />
                            </Route>
                            {/* End product */}

                            {/* About us */}
                            <Route path="/about-us" exact>
                                <About />
                            </Route>
                            {/* End about us */}

                            {/* Contact us */}
                            <Route path="/contact-us" exact>
                                <Contact />
                            </Route>
                            {/* End contact us */}

                            {/* Blog list */}
                            <Route path="/blog" exact>
                                <BlogList />
                            </Route>
                            <Route path="/blog/category/:category_id">
                                <BlogList />
                            </Route>
                            <Route path="/blog/:id">

                            </Route>
                            {/* End blog list */}

                            <Route path="/404-not-found">
                                <Error404 />
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
