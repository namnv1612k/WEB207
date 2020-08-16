import React from 'react'
import htmlRequest from '../../../../api/productApi'
import { Link } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format'

const ProductsManager = ({ products, setProducts, categories }) => {
    const removeHandle = (id) => {
        htmlRequest.remove(id)
        const newProducts = products.filter(product => product.id !== id);
        setProducts(newProducts);
    }

    const showNameCate = cate_id => {
        let nameCate = 'Non category';
        let cate = categories.find(cate => cate.id == cate_id);
        if (cate) {
          nameCate = cate.name
        }
        return nameCate
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
                <Link to="/admin/product/add" className="mb-2 btn btn-primary">Add Product</Link>
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
                                    <th scope="col">Price</th>
                                    <th scope="col">Sale price</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(({ id, name, image, price, sale_price, stock, cate_id }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{id}</th>
                                        <td className="text-primary">{name}</td>
                                        <td><img src={image} alt="" width="50" /></td>
                                        <td><CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'₫'} /></td>
                                        <td><CurrencyFormat value={sale_price} displayType={'text'} thousandSeparator={true} prefix={'₫'} /></td>
                                        { stock > 0 ? <td><span className="badge badge-success">In stock</span></td> : <td><span className="badge badge-warning">Out stock</span></td>}
                                        <td className={ showNameCate(cate_id) !== 'Non category' ? 'text-info' : 'text-danger'}>{showNameCate(cate_id)}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => {if(window.confirm('Delete the item?')){removeHandle(id)};}}>Delete</button>
                                            <Link to={`/admin/product/${id}`} className="btn btn-info ml-2">Edit</Link>
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

ProductsManager.propTypes = {

}

export default ProductsManager
