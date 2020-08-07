import React from 'react'

const SearchHeader = props => {
    return (
        <div className="col-xl-6 col-md-12">
            {/* header-search */}
            <div className="header-search clearfix">
            <div className="category-select pull-right">
                <select className="nice-select-menu">
                <option data-display="All Categories">All Categories</option>
                <option value={1}>Decor &amp; Furniture</option>
                <option value={2}>Electronics</option>
                <option value={3}>Fashion &amp; clothings</option>
                <option value={4} disabled>Sport &amp; Outdoors</option>
                <option value={5}>Toy, Kids &amp; Baby</option>
                </select> 
            </div> 
            <div className="header-search-form">
                <form action="#">
                <input type="text" name="search" placeholder="Search product..." />
                <input type="submit" name="submit" defaultValue="Search" />
                </form>                                    
            </div>
            </div>
        </div>
    )
}

SearchHeader.propTypes = {

}

export default SearchHeader
