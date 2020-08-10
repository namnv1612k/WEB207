import React, {useEffect} from 'react'
import Slider from '../../../../components/Main/Home/Slider'
import Banner from '../../../../components/Main/Home/Banner'
import ProductArea from '../../../../components/Main/Home/ProductArea'
import DealTheDay from '../../../../components/Main/Home/DealTheDay'
import BannerFullWidth from '../../../../components/Main/Home/BannerFullWidth'
import BrandLogoArea from '../BrandLogoArea'

const Home = ({products}) => {

    return (
        <div>
          <Slider />
          <Banner />
          <DealTheDay />
          <BannerFullWidth />
          <ProductArea />
          <BrandLogoArea />
        </div>
    )
}

Home.propTypes = {

}

export default Home
