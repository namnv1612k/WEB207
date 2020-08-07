import React from 'react'
import PropTypes from 'prop-types'

const EntryHeader = ({product}) => {
    return (
        <div className="entry-header">
            <div className="container">
                <div className="row">
                <div className="col-sm-12">
                    <h1 className="entry-title">{product.name}</h1>
                </div>
                </div>
            </div>
        </div>
    )
}

EntryHeader.propTypes = {

}

export default EntryHeader
