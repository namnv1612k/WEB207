import React from 'react'
import PropTypes from 'prop-types'
import CategoryHeader from './Category'
import Nav from './Nav'

const BotHeader = props => {
    return (
        <div className="header-bottom-area">
            <div className="container">
                <div className="row">
                    <CategoryHeader />
                    <Nav />
                </div>
            </div>
        </div>
    )
}

BotHeader.propTypes = {

}

export default BotHeader
