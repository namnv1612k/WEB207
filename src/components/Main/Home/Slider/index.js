import React, {useEffect, useState} from 'react'

import slideApi from '../../../../api/sliderApi'
import {Link} from 'react-router-dom'

const Slider = ({}) => {
  const [slides, setSlides] = useState([])

  useEffect(() => {
    try {
      const getSlides = async () => {
        const {data} = await slideApi.all()
        console.log(data)
        setSlides(data)
      }
      getSlides()
    } catch (error) {
      console.log(error)
    }
  }, [])
  console.log('Slide:',slides)
  
    return (
        <div className="slider-area">
        {/* slider-area start */}
        <div className="slider-area-inner">
          {/* slider start */}
          <div className="slider-inner">
            <div id="mainSlider" className="nivoSlider nevo-slider">
              {/* {slides.map(({image}, key) => (
                <img src={image} alt="main slider" key={key} title={`#htmlcaption${key}`} />
              ))} */}
            </div>
            {/* {slides.map(({title_1, title_2, title_3, content}, key) => (
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
            ))} */}
          </div>
          {/* slider end */}
        </div>
        {/* slider-area end */}
      </div>
    )
}

export default Slider
