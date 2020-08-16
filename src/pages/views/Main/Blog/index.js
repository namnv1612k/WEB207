import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

const BlogList = props => {
    let {category_id} = useParams();
    const [posts, setPosts] = useState([])
    const [cates, setCates] = useState([])
    const [users, setUsers] = useState([])
    const [recentPost, setRecentPost] = useState([])
    useEffect(() => {
      const getPosts = async () => {
        if(category_id) {
          await axios.get(`http://localhost:8080/posts?cate_id=${category_id}`)
            .then(({data}) => {
                setPosts(data)
            })
            .catch(() => {
                console.error('Api post fiter category failed !')
            })
        } else {
          await axios.get('http://localhost:8080/posts')
            .then(({data}) => {
                setPosts(data)
            })
            .catch(() => {
                console.error('Api post failed !')
            })
        }
      }
      getPosts()
    }, [posts])

    useEffect(() => {
        axios.get(`http://localhost:8080/post_cates`)
            .then(({data}) => {
                setCates(data)
            })
            .catch(() => {
                console.error('Api post cates failed !')
            })
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:8080/users`)
            .then(({data}) => {
                setUsers(data)
            })
            .catch(() => {
                console.error('Api post users failed !')
            })
    }, [])

    useEffect(() => {
      axios.get('http://localhost:8080/posts?_sort=id&order=ASC')
        .then(({data}) => {
          setRecentPost(data)
        })
        .catch(() => {
          console.error('Api recent post failed !')
        })
    }, [])

    const showNameCate = cate_id => {
      let nameCate = 'No category';
      let cate = cates.find(cate => cate.id === cate_id);
      if (cate) {
        nameCate = cate.name
      }
      return nameCate
    }

    const showNameAuthor = user_id => {
      let nameAuthor = 'No author';
      let user = users.find(user => user.id === user_id);
      if (user) {
        nameAuthor = user.fullname
      }
      return nameAuthor
    }

    return (
        <div>
        <div className="breadcrumbs-container">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <nav className="woocommerce-breadcrumb">
                  <Link to="/">Home</Link>
                  <span className="separator">/</span> Blog
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* Breadcrumbs End */}
        {/* Page title */}
        <div className="entry-header">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1 className="entry-title">Blog</h1>
              </div>
            </div>
          </div>
        </div>
        {/* Page title end */}
        {/* cart page content */}
        <div className="blog-page-area">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-9">
                <div className="page-content blog-page blog-sidebar right-sidebar blog-text-align">
                    {/* blog post */}
                    {posts.map(({id, name, image, content, created_at, user_id, cate_id}, key) => (
                        <article className="text-center" key={key}>
                            <div className="blog-entry-header">
                                <div className="post-category">
                                    <Link to={`/blog/category/${cate_id}`}>{showNameCate(cate_id)}</Link>
                                </div>
                                <h1><Link to={`/blog/${id}`}>{name}</Link></h1>
                                <div className="post-meta">
                                    <a href="#" className="post-author"><i className="fa fa-user" />Posted by {showNameAuthor(user_id)}</a>
                                    <a href="#" className="post-date"><i className="fa fa-calendar" /> {created_at} </a>
                                </div>
                            </div>
                            <div className="post-thumbnail">
                                <Link to={`/blog/${id}`}><img src={image} alt="blog images" /></Link>
                            </div>
                            <div className="postinfo-wrapper">
                                <div dangerouslySetInnerHTML={{__html: content}}></div>
                                <Link className="readmore button" to={`/blog/${id}`}>Read more</Link>
                                <div className="social-sharing">
                                    <h3>Share this post</h3>
                                    <div className="social-sharie">
                                        <ul className="social-icons">
                                            <li><a className="facebook social-icon" href="#"><i className="fa fa-facebook" /></a></li>
                                            <li><a className="twitter social-icon" href="#"><i className="fa fa-twitter" /></a></li>
                                            <li><a className="pinterest social-icon" href="#"><i className="fa fa-pinterest" /></a></li>
                                            <li><a className="gplus social-icon" href="#"><i className="fa fa-google-plus" /></a></li>
                                            <li><a className="linkedin social-icon" href="#"><i className="fa fa-linkedin" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                  
                    {/* blog post end */}
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="pagination">
                      <span aria-current="page" className="page-numbers current">1</span>
                      <a className="page-numbers" href="#">2</a>
                      <a className="next page-numbers" href="#">Next</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-md-3">
                <div className="blog_sidebar">
                  <div className="row_products_side">
                    <div className="product_left_sidbar">
                      <div className="product-filter  mb-30">
                        <h5>Search </h5>
                        <div className="search__sidbar">
                          <div className="input_form">
                            <input type="text" id="search_input" name="s" defaultValue="Search..." className="input_text" />
                            <button id="blogsearchsubmit" type="submit" className="button">
                              <i className="fa fa-search" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="product-filter  mb-30">
                        <h5>Blog Category </h5>
                        <div className="blog_Archives__sidbar">
                          <ul>
                            {cates.map(({id, name}, key) => (
                              <li key={key}><Link to={`/blog/category/${id}`}>{name}</Link></li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="product-filter  mb-30">
                        <h5>Recent Posts</h5>
                        <div className="blog_Archives__sidbar">
                          <ul>
                            {recentPost.map(({id, name}, key) => (
                              <li key={key}><Link to={`/blog/${id}`}>{name}</Link></li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="sidebar-single-banner">
                        <a href="#">
                          <img src="images/banner/shop-sidebar.jpg" alt="Banner" />
                        </a>
                      </div>
                      <div className="product-filter mb-30">
                        <h5>product tags</h5>
                        <div className="blog-tags">
                          <a href="#">brand</a>
                          <a href="#">black</a>
                          <a href="#">white</a>
                          <a href="#">chire</a>
                          <a href="#">table</a>
                          <a href="#">Lorem</a>
                          <a href="#">ipsum</a>
                          <a href="#">dolor</a>
                          <a href="#">sit</a>
                          <a href="#">amet</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

BlogList.propTypes = {

}

export default BlogList
