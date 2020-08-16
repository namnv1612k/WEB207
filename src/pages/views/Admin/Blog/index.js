import React, {useState, useEffect} from 'react'
import htmlRequest from '../../../../api/productApi'
import { Link } from 'react-router-dom';
import axios from 'axios'

const BlogManager = ({}) => {
    const [posts, setPosts] = useState([])
    const [cates, setCates] = useState([])
    const [users, setUsers] = useState([])

    const removeHandle = (id) => {
        axios.delete(`http://localhost:8080/posts/${id}`)
            .catch(() => {
                console.error('Delete post failed!')
            })
        const newBlogs = posts.filter(post => post.id !== id);
        setPosts(newBlogs);
    }

    useEffect(() => {
        const getPosts = async () => {
        await axios.get(`http://localhost:8080/posts`)
        .then(({data}) => {
            setPosts(data)
        })
        .catch(() => {
            console.error('Api post failed !')
        })
      }
      getPosts()
    }, [])

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

    const showNameCate = cate_id => {
      let nameCate = 'Non category';
      let cate = cates.find(cate => cate.id == cate_id);
      if (cate) {
        nameCate = cate.name
      }
      return nameCate
    }

    const showNameAuthor = user_id => {
      let nameAuthor = 'No author';
      let user = users.find(user => user.id == user_id);
      if (user) {
        nameAuthor = user.fullname
      }
      return nameAuthor
    }

    return (
        <div>
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
            <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more
          information about DataTables, please visit the <a href="https://datatables.net">official
            DataTables documentation</a>.</p>
            {/* DataTales Example */}
            <div>
                <Link to="/admin/blog/add" className="mb-2 btn btn-primary">Add blog</Link>
            </div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Created at</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map(({ id, name, image, user_id, created_at, cate_id }, key) => (
                                    <tr key={key}>
                                        <th scope="row">{id}</th>
                                        <td className="text-primary">{name}</td>
                                        <td><img src={image} alt="" width="50" /></td>
                                        <td className={ showNameAuthor(user_id) !== 'Non category' ? 'text-info' : 'text-danger'}>{showNameAuthor(user_id)}</td>
                                        <td>{created_at}</td>
                                        <td className={ showNameCate(cate_id) !== 'Non category' ? 'text-info' : 'text-danger'}>{showNameCate(cate_id)}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => {if(window.confirm('Delete the item?')){removeHandle(id)};}}>Delete</button>
                                            <Link to={`/admin/blog/${id}`} className="btn btn-info ml-2">Edit</Link>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

BlogManager.propTypes = {

}

export default BlogManager
