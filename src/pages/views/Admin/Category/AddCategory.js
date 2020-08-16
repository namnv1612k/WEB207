import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useHistory, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import ReactFirebaseFileUpload from '../../../../firebase/uploadImage'
import axios from 'axios'

const AddCategory = ({categories, setCategories}) => {
    // console.log('Cates :', categories)
    const [urlImage, setUrlImage] = useState("");
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);

    // console.log('Categories in add product: ',categories)

    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();

    const onHandleSubmit = async (data) => {
        const newData = {
            ...data
        }
        console.log(newData)
        
        if (urlImage !== "") {
            newData.image = urlImage;
            let newCate = newData
            axios.post('http://localhost:8080/categories', newData)
                .then(() => {
                    setCategories([
                        ...categories,
                        newCate
                    ])
                    history.push('/admin/categories')
                })
                .catch((error) => {
                    console.log('Add category fail !', error)
                })
        }

    }

    return (
        <div>
            <form action="" className="w-50 p-3" onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group">
                    <label htmlFor="productName">Name</label>
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
                        {errors.name && errors.name.type === "minLength" && <span>Min Length 1</span>}
                    </small>
                </div>
                <div className="form-group">
                    <ReactFirebaseFileUpload register={register} errors={errors} urlImage={urlImage} progress={progress} image={image} setUrlImage={setUrlImage} setProgress={setProgress} setImage={setImage} />
                    <img src={urlImage || "http://via.placeholder.com/300"} height="300px" className="pt-3" alt="firebase-image" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link className="btn btn-cancel" to="/admin/categories">Cancel</Link>
            </form>
        </div>
    )
}

AddCategory.propTypes = {
    onAdd: PropTypes.func
}

export default AddCategory
