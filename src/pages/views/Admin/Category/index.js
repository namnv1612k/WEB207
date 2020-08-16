import React from 'react'
import htmlRequest from '../../../../api/categoryApi'
import { Link } from 'react-router-dom';

const CategoryManager = ({ categories, setCategories }) => {
    const removeHandle = (id) => {
        htmlRequest.remove(id)
        const newCategory = categories.filter(category => category.id !== id);
        setCategories(newCategory);
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
                <Link to="/admin/category/add" className="mb-2 btn btn-primary">Add category</Link>
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
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map(({ id, name, image }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{id}</th>
                                        <td className="text-primary">{name}</td>
                                        <td><img src={image} alt="" width="50" /></td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => {if(window.confirm('Delete the item?')){removeHandle(id)};}}>Delete</button>
                                            <Link to={`/admin/category/${id}`} className="btn btn-info ml-2">Edit</Link>
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

CategoryManager.propTypes = {

}

export default CategoryManager
