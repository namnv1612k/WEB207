import React from 'react'
import LogoHeader from './Logo'
import SearchHeader from './Search'
import CartHeader from './Cart'

const MidHeader = props => {
    return (
        <div className="header-middle-area">
        <div className="container">
          <div className="row">
            <LogoHeader />
            <SearchHeader />
            <CartHeader />
          </div>
        </div>
      </div>
    )
}

MidHeader.propTypes = {

}

export default MidHeader
