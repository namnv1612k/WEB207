import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = props => {
    return (
        <div>
            <div className="breadcrumbs-container">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                        <nav className="woocommerce-breadcrumb">
                            <Link to="/">Home</Link>
                            <span className="separator">/</span> 404
                        </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="error_page_start">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <h2>OOPS! PAGE NOT BE FOUND</h2>
                        <p>Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarity unavailable.</p>
                        <div className="search__sidbar">
                            <div className="input_form">
                            <input type="text" className="input_text" defaultValue="Search..." name="s" id="search_input" />
                            <button className="button" type="submit" id="blogsearchsubmit">
                                <i className="fa fa-search" />
                            </button>
                            </div>
                        </div>
                        <div className="hom_btn">
                            <Link to="/">Back to home page</Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Error404.propTypes = {

}

export default Error404
