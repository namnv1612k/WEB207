import React from 'react'
import Welcome from '../Top/Welcome'
import MyAccount from '../Top/MyAccount'

const TopHeader = props => {
    return (
        <div className="header-top-area">
        <div className="container">
          <div className="row">
            <Welcome />
            <MyAccount />
          </div>
        </div>
      </div>
    )
}

TopHeader.propTypes = {

}

export default TopHeader
