import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const CategoryHeader = props => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const getCategories = () => {
        axios.get('http://localhost:8080/categories')
            .then(({data}) => {
                setCategories(data)
            })
            .catch(() => {
                console.log('Api categories fail !')
            })
    }
    getCategories()
  }, [])
    return (
        <div className="col-xl-3 col-lg-3 hidden-md hidden-sm pull-left category-wrapper">
        <div className="categori-menu">
          <span className="categorie-title">Categories</span>
          <nav>
            <ul className="categori-menu-list menu-hidden">
              {categories.map(({name, id, image}, key) => (
                <li key={key}><Link to={`/category/${id}`}><span><img src={image} alt="menu-icon" /></span>{name}</Link></li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    )
}

CategoryHeader.propTypes = {

}

export default CategoryHeader
