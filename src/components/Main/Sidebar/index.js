import React from 'react'
import PropTypes from 'prop-types'

const index = props => {
    return (
        <div classname="col-12 col-sm-3">
          <div classname="card bg-light mb-3">
            <div classname="card-header bg-primary text-white text-uppercase"><i classname="fa fa-list"> Categories</i></div><i classname="fa fa-list">
              <ul classname="list-group category_block">
                <li classname="list-group-item"><a href="#">Cras justo odio</a></li>
                <li classname="list-group-item"><a href="#">Dapibus ac facilisis in</a></li>
                <li classname="list-group-item"><a href="#">Morbi leo risus</a></li>
                <li classname="list-group-item"><a href="#">Porta ac consectetur ac</a></li>
                <li classname="list-group-item"><a href="#">Vestibulum at eros</a></li>
              </ul>
            </i></div><i classname="fa fa-list">
            <div classname="card bg-light mb-3">
              <div classname="card-header bg-success text-white text-uppercase">Last product</div>
              <div classname="card-body">
                <img classname="img-fluid" src="https://dummyimage.com/600x400/55595c/fff" />
                <h5 classname="card-title">Product title</h5>
                <p classname="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p classname="bloc_left_price">99.00 $</p>
              </div>
            </div>
          </i>
        </div>
        
    )
}

index.propTypes = {

}

export default index
