import React, { useState, useEffect } from 'react'
import { useHistory, useParams, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {Editor} from '@tinymce/tinymce-react'
import categoryApi from '../../../../api/categoryApi'
import axios from 'axios'
import firebase from '../../../../firebase'

const EditProduct = ({setProducts}) => {
    const {id} = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        window.scroll({top: 0})
    }, [])
    useEffect(() => {
        const getEdit = async () => {
            axios.get(`http://localhost:8080/products/${id}`)
                .then(({data}) => {
                    setProduct(data)
                })
                .catch((error) => {
                    console.error('Get product edit fail: ', error)
                })
        }
        getEdit();
    }, [])

    const [intro, setIntro] = useState('')
    const [desc, setDesc] = useState('')
    const [cates, setCates] = useState([])

    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();

    const onHandleSubmit = async (data) => {
        console.log(data.image[0]);
        let file = data.image[0];
        if (file) {
            // tạo reference chứa ảnh trên firesbase
            let storageRef = firebase.storage().ref(`images/${file.name}`);
            // đẩy ảnh lên đường dẫn trên
            storageRef.put(file).then(function () {
                storageRef.getDownloadURL().then((url) => {
                    console.log(url);
                    // Tạo object mới chứa toàn bộ thông tin từ input
                    const newData = {
                        ...data,
                        desc,
                        intro,
                        image: url
                    }
                    console.log(newData);
                    axios.put(`http://localhost:8080/products/${id}`, newData)
                        .then(() => { // sau khi update fetch lai products
                            axios.get('http://localhost:8080/products')
                                .then(({data}) => {
                                    setProducts(data)
                                })
                                .catch((error) => {
                                    console.error('Get products after update failed: ', error)
                                })
                            // đẩy dữ liệu ra ngoài app.js
                            history.push('/admin/products')
                        })
                        .catch((error) => {
                            console.error('Update product failed: ', error)
                        })
                })
            });
        } else {
            const newData = {
                ...data,
                desc,
                intro,
                image: product.image
            }
            console.log(newData);
            axios.put(`http://localhost:8080/products/${id}`, newData)
                .then(() => {
                    axios.get('http://localhost:8080/products')
                        .then(({data}) => {
                            setProducts(data)
                        })
                        .catch((error) => {
                            console.error('Get products after update failed: ', error)
                        })
                    // đẩy dữ liệu ra ngoài app.js
                    history.push('/admin/products')
                })
                .catch((error) => {
                    console.error('Update product failed: ', error)
                })
        }
    }

    useEffect(() => {
        const getCategories = async () => {
          try {
            const { data } = await categoryApi.getAll();
            setCates(data)
            // console.log(data)
          } catch (error) {
            console.log('Fail to request API: ', error)
          }
        }
        getCategories();
      }, [product])

    const handleEditorIntro = (content, editor) => {
        setIntro(content)
    }
    const handleEditorDesc = (content, editor) => {
        setDesc(content)
    }

    return (
        <div>
            <form action="" className="w-50 p-3" onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group">
                    <label htmlFor="productName">Tên sản phẩm</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="productName"
                        ref={register({ required: true, minLength: 1 })}
                        aria-describedby="nameHelp"
                        defaultValue={product.name}
                    />
                    <small id="nameHelp" className="form-text text-danger">
                        {errors.name && errors.name.type === "required" && <span>This field is required</span>}
                        {errors.name && errors.name.type === "minLength" && <span>Min Length 10</span>}
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="productPrice">Ảnh sản phẩm</label>
                    <div className="input-group">
                        <div className="custom-file">
                            <input type="file"
                                className="custom-file-input"
                                id="inputGroupFile02"
                                name="image"
                                ref={register}
                            />
                            <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                        </div>
                    </div>
                    <img style={{height: 100}} src={product.image} />
                </div>
                <div className="form-group row">
                    <div className="col-3">
                        <label htmlFor="productPrice">Giá sản phẩm</label>
                        <input
                            type="number"
                            name="price"
                            className="form-control"
                            id="productPrice"
                            ref={register({ required: true })}
                            aria-describedby="priceHelp"
                            defaultValue={product.price}
                        />
                        <small id="priceHelp" className="form-text text-danger">{errors.price && <span>This field is required</span>}</small>
                    </div>
                    <div className="col-3">
                        <label htmlFor="productSalePrice">Giá bán</label>
                        <input
                            type="number"
                            name="sale_price"
                            className="form-control"
                            id="productSalePrice"
                            ref={register({ required: true })}
                            aria-describedby="priceSaleHelp"
                            defaultValue={product.sale_price}
                        />
                        <small id="priceSaleHelp" className="form-text text-danger">{errors.price && <span>This field is required</span>}</small>
                    </div>
                    <div className="col-3">
                        <select name="cate_id" ref={register({required: true})} className="form-select">
                            {cates.map((cate, key) => (
                                <option key={key} selected={cate.id === product.cate_id} defaultValue={cate.id}>{cate.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-3">
                        <label>Số lượng</label>
                        <input
                            type="number"
                            name="stock"
                            className="form-control"
                            id="stockHelp"
                            ref={register({ required: true })}
                            aria-describedby="priceSaleHelp"
                            defaultValue={product.stock}
                        />
                        <small id="stockHelp" className="form-text text-danger">{errors.price && <span>This field is required</span>}</small>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="productDesc">Giới thiệu</label>
                    <Editor
                        defaultValue={product.intro} 
                        init={{
                            height: 300,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic backcolor | \
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help'
                        }}
                        onEditorChange={handleEditorIntro}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="productDesc">Mô tả</label>
                    <Editor
                        defaultValue={product.desc}
                        init={{
                            height: 300,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic backcolor | \
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help'
                        }}
                        onEditorChange={handleEditorDesc}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
                <Link className="btn btn-cancel" to="/admin/products">Cancel</Link>
            </form>
        </div>
    )
}

EditProduct.propTypes = {

}

export default EditProduct
