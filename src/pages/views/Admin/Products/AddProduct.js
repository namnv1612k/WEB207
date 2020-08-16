import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import firebase from '../../../../firebase'
import {Editor} from '@tinymce/tinymce-react'
import categoryApi from '../../../../api/categoryApi'

const AddProduct = ({ onAdd }) => {
    useEffect(() => {
        window.scroll({top: 0})
    }, [])
    const [intro, setIntro] = useState('')
    const [desc, setDesc] = useState('')

    const [cates, setCates] = useState([])

    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();

    const onHandleSubmit = (data) => {
        let file = data.image[0];
        // tạo reference chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                // Tạo object mới chứa toàn bộ thông tin từ input
                const newData = {
                    ...data,
                    desc,
                    intro,
                    image: url
                }
                axios.post('http://localhost:8080/products', newData)
                    .then(() => {
                        // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
                        history.push('/admin/products')
                        onAdd(newData)
                    })
                    .catch((error) => {
                        console.error('Add product failed: ', error)
                    })
            })
        });
    }



    useEffect(() => {
        const getCategories = async () => {
          try {
            const { data } = await categoryApi.getAll();
            setCates(data)
          } catch (error) {
            console.log('Fail to request API: ', error)
          }
        }
        getCategories();
      }, [])

    const handleEditorIntro = (content, editor) => {
        setIntro(content)
    }
    const handleEditorDesc = (content, editor) => {
        setDesc(content)
    }

    // setTimeout(() => {
    //     console.log('Categories: ',cates)
    // }, 5000);

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
                </div>
                <div className="form-group">
                    <div className="col-3">
                        <label htmlFor="productPrice">Giá sản phẩm</label>
                        <input
                            type="number"
                            name="price"
                            className="form-control"
                            id="productPrice"
                            ref={register({ required: true })}
                            aria-describedby="priceHelp"
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
                        />
                        <small id="priceSaleHelp" className="form-text text-danger">{errors.price && <span>This field is required</span>}</small>
                    </div>
                    <div className="col-3 form-select">
                        <select name="cate_id" ref={register({required: false})} className="form-select">
                            {cates.map(({name, id}, key) => (
                                <option key={key} value={id}>{name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-3">
                        <label htmlFor="productStock">Stock</label>
                            <input
                                type="number"
                                name="stock"
                                className="form-control"
                                id="productStock"
                                defaultValue="0"
                                ref={register({ required: true})}
                                aria-describedby="stockHelp"
                            />
                            <small id="stockHelp" className="form-text text-danger">{errors.price && <span>This field is required</span>}</small>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="productDesc">Giới thiệu</label>
                    <Editor 
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
                <button type="submit" className="btn btn-primary">Thêm sản phẩm</button>
            </form>
        </div>
    )
}

AddProduct.propTypes = {
    onAdd: PropTypes.func
}

export default AddProduct
