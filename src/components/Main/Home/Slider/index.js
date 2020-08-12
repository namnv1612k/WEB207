import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Slider = ({}) => {
  const [slides, setSlides] = useState([
    {
      "id": 1,
      "title_1": "Giá rẻ",
      "title_2": "Uy tín",
      "title_3": "Chất lượng",
      "content": "Phù hợp mọi khách hàng",
      "image": "https://firebasestorage.googleapis.com/v0/b/storage-2ebad.appspot.com/o/images%2Fslide%2Fhome4-slider1.jpg?alt=media&token=a35c1962-981b-473b-b79a-d1ee539afcc5"
    },
    {
      "id": 2,
      "title_1": "Giá rẻ",
      "title_2": "Uy tín",
      "title_3": "Chất lượng",
      "content": "Phù hợp mọi khách hàng",
      "image": "https://firebasestorage.googleapis.com/v0/b/storage-2ebad.appspot.com/o/images%2Fslide%2Fhome4-slider2.jpg?alt=media&token=8e18adaa-3189-4a2e-9b10-391df9af70f6"
    },
    {
      "id": 3,
      "title_1": "Giá rẻ",
      "title_2": "Uy tín",
      "title_3": "Chất lượng",
      "content": "Phù hợp mọi khách hàng",
      "image": "https://firebasestorage.googleapis.com/v0/b/storage-2ebad.appspot.com/o/images%2Fslide%2Fhome3-slider1.jpg?alt=media&token=518642f6-611d-4a40-b69e-c8917de140c1"
    },
    {
      "id": 4,
      "title_1": "Giá rẻ",
      "title_2": "Uy tín",
      "title_3": "Chất lượng",
      "content": "Phù hợp mọi khách hàng",
      "image": "https://firebasestorage.googleapis.com/v0/b/storage-2ebad.appspot.com/o/images%2Fslide%2Fhome3-slider2.jpg?alt=media&token=0b9b5e69-a37f-4115-b33d-4be4f1f0f4b6"
    },
    {
      "id": 5,
      "title_1": "Giá rẻ",
      "title_2": "Uy tín",
      "title_3": "Chất lượng",
      "content": "Phù hợp mọi khách hàng",
      "image": "https://firebasestorage.googleapis.com/v0/b/storage-2ebad.appspot.com/o/images%2Fslide%2F1.jpg?alt=media&token=3e60d3db-a156-435d-9c1f-d8756827b370"
    },
    {
      "title_1": "Giá rẻ",
      "title_2": "Uy tín",
      "title_3": "Chất lượng",
      "content": "Phù hợp mọi khách hàng",
      "image": "https://firebasestorage.googleapis.com/v0/b/storage-2ebad.appspot.com/o/images%2Fslide%2F3.jpg?alt=media&token=79d9adde-108d-4c0e-a6b3-e595db259156",
      "id": 6
    }
  ])

  useEffect(() => {
    axios.get('http://localhost:8080/slides')
      .then(({data}) => {
        setSlides(data)
      })
      .catch(() => {
        console.log('Api slide failed !')
      })
  }, [])

    return (
        <div className="slider-area">
        {/* slider-area start */}
        <div className="slider-area-inner">
          {/* slider start */}
          <div className="slider-inner">
            <div id="mainSlider" className="nivoSlider nevo-slider">
              {slides.map(({image}, key) => (
                <img src={image} alt="main slider" key={key} title={`#htmlcaption${key}`} />
              ))}
            </div>
            {slides.map(({title_1, title_2, title_3, content}, key) => (
              <div id={`htmlcaption${key}`} key={key} className="nivo-html-caption slider-caption">
                <div className="slider-progress" />
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="slider-content slider-content-1 slider-animated-1">
                        <h1 className="hone">{title_1}</h1>
                        <h1 className="htwo">{title_2}</h1>
                        <h1 className="hthree">{title_3}</h1>
                        <h3>{content}</h3> 
                        <div className="button-1 hover-btn-2">
                          <Link to="/shop">SHOP NOW</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* slider end */}
        </div>
        {/* slider-area end */}
      </div>
    )
}

export default Slider
