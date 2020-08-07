import React, {useState} from 'react'
import Header from '../../components/Main/Header'
import Footer from '../../components/Main/Footer'
import Breadcrumb from '../../components/Main/Breadcrumb'
import EntryHeader from '../../components/Main/Entry'
export default ({ children, page, category, product }) => {

    console.log('render Main')

    return (
        <div className="wrapper home-three home-four">
            <Header category={category} product={product} />
            <Breadcrumb page={page} category={category} product={product} />
            <EntryHeader product={product} />
            {children}
            <Footer />
        </div>
    )
}
