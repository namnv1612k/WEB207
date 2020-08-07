import React from 'react'
import {Link} from 'react-router-dom'

const LogoHeader = props => {
    return (
        <div className="col-xl-3 col-md-12">
            {/* site-logo */}
            <div className="site-logo">
                <Link to="/"><img src={process.env.PUBLIC_URL + '/images/logo/logo-black.png'} alt="Nikado" /></Link>
            </div>
        </div>
    )
}

LogoHeader.propTypes = {

}

export default LogoHeader
