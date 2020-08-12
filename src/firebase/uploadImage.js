import React from "react";
import { storage } from "./index";

const ReactFirebaseFileUpload = ({image,setImage,urlImage,setUrlImage,progress,setProgress, register, errors}) => {

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (image) {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      await uploadTask.on(
        "state_changed",
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        error => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              setUrlImage(url);
            });
        }
      );
    }
  };

  return (
    <div className="form-group">
      <progress value={progress} max="100" className="col-12" />
      <label htmlFor="productPrice">Image upload</label>
      <div className="input-group">
        <div className="custom-file">
          <input ref={register({required: true})}  type="file" className="custom-file-input" onChange={handleChange} id="inputGroupFile02" name="image"/>
          <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
        </div>
        <button type="button" className="btn btn-info" disabled={!image} onClick={handleUpload}>Upload</button>
      </div>
      <small id="imageHelp" className="form-text text-danger">{errors.image && <span>This field is required</span>}</small>
    </div>
  );
};

export default ReactFirebaseFileUpload