import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'
import AddProduct from '../pages/views/Admin/Products/AddProduct'

//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import DetailProduct from '../pages/views/Main/Product/Detail'
import Error404 from '../pages/views/Main/Error/404'


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
        setCategories
    }) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }

    // console.log('categories in router', categories)

    const [page, setPage] = useState({})

    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard />
                            </Route>
                            <Route path='/admin/products'>
                                <ProductsManager products={products} onRemove={onHandleRemove} setProducts={setProducts} />
                            </Route>
                            <Route path='/admin/product/add'>
                                <AddProduct onAdd={onAdd} categories={categories} />
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain category={category} product={productDetail} page={page}>
                        <Switch>
                            <Route path="/" exact>
                                <Home products={products} setPage={setPage} />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/product/:id" exact>
                                <DetailProduct setPage={setPage} product={productDetail} setProduct={setProductDetail} setCategory={setCategory} category={category} />
                            </Route>
                            <Route path="/404-not-found">
                                <Error404 setPage={setPage} />
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
