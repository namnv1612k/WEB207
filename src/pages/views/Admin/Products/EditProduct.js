import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useHistory, useParams, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import ProductApi from '../../../../api/productApi'
import ReactFirebaseFileUpload from '../../../../firebase/uploadImage'
import {Editor} from '@tinymce/tinymce-react'
import categoryApi from '../../../../api/categoryApi'
import axios from 'axios'

const EditProduct = ({products}) => {
    const {id} = useParams();
    const [product, setProduct] = useState();
    console.log('ID: ', id)

    useEffect(() => {
        const getProductEdit = async () => {
            await axios.get(`http://localhost:8080/products/${id}`)
                .then(({data}) => {
                    setProduct(data)
                    console.log(data)
                })
                .catch(() => {
                    console.log('Api product edit fail !')
                })
        }
        getProductEdit()
    }, [])

    console.log('Product: ', product)

    const [urlImage, setUrlImage] = useState("");
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [intro, setIntro] = useState('')
    const [desc, setDesc] = useState('')

    const [cates, setCates] = useState([])

    // console.log('Categories in add product: ',categories)

    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();

    const onHandleSubmit = async (data) => {
        const updateData = {
            ...data
        }
        updateData.intro = intro
        updateData.desc = desc
        console.log(updateData)
        if (urlImage !== "") {
            updateData.image = urlImage;
        } else {
            updateData.image = product.image
        }
        await ProductApi.update(id, updateData);
        history.push('/admin/products')

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

    // console.log('Edit product: ',product)

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
                        // value={product.name}
                    />
                    <small id="nameHelp" className="form-text text-danger">
                        {errors.name && errors.name.type === "required" && <span>This field is required</span>}
                        {errors.name && errors.name.type === "minLength" && <span>Min Length 10</span>}
                    </small>
                </div>
                <div className="form-group">
                    <ReactFirebaseFileUpload register={register} errors={errors} urlImage={urlImage} progress={progress} image={image} setUrlImage={setUrlImage} setProgress={setProgress} setImage={setImage} />
                    <img src={urlImage || 'product.image'} height="300px" className="pt-3" alt="firebase-image" />
                </div>
                <div className="form-group row">
                    <div className="col-4">
                        <label htmlFor="productPrice">Giá sản phẩm</label>
                        <input
                            type="number"
                            name="price"
                            className="form-control"
                            id="productPrice"
                            ref={register({ required: true })}
                            aria-describedby="priceHelp"
                            // value={product.price}
                        />
                        <small id="priceHelp" className="form-text text-danger">{errors.price && <span>This field is required</span>}</small>
                    </div>
                    <div className="col-4">
                        <label htmlFor="productSalePrice">Giá bán</label>
                        <input
                            type="number"
                            name="sale_price"
                            className="form-control"
                            id="productSalePrice"
                            ref={register({ required: true })}
                            aria-describedby="priceSaleHelp"
                            // value={product.sale_price}
                        />
                        <small id="priceSaleHelp" className="form-text text-danger">{errors.price && <span>This field is required</span>}</small>
                    </div>
                    <div className="col-4">
                        <select name="cate_id" ref={register({required: true})} className="form-select">
                            {cates.map((cate, key) => (
                                <option key={key} selected={cate.id === product.cate_id} value={cate.id}>{cate.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="productDesc">Giới thiệu</label>
                    <Editor
                        // value={product.intro} 
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
                        // value={product.desc}
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
