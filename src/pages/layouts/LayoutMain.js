import React, {useState} from 'react'
import Header from '../../components/Main/Header'
import Footer from '../../components/Main/Footer'
export default ({ children, page, category, product }) => {

    console.log('render Main')

    return (
        <div className="wrapper home-three home-four">
            <Header category={category} product={product}/>
            {children}
            <Footer />
        </div>
    )
}
