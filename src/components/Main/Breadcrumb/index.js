import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Breadcrumb = ({category, product, page}) => {

    return (
        <div className="breadcrumbs-container">
            <div className="container">
                <div className="row">
                <div className="col-sm-12">
                    <nav className="woocommerce-breadcrumb">
                        <Link to="/">Home</Link>
                        <span className="separator">/</span>
                        <Link to={`${page.url}`}>{page.name}</Link>
                        {!category.id ? <span className="separator">/</span> : ''}
                        {!category.id ? <Link to={`/category/${category.id}`}>{category.name}</Link> : ''}
                        <span className="separator">/</span> {product.name}
                    </nav>
                </div>
                </div>
            </div>
        </div>
    )
}

Breadcrumb.propTypes = {

}

export default Breadcrumb
