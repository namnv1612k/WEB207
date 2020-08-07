import React from 'react'
import {Link} from 'react-router-dom'
import TopHeader from './Top/index'
import MidHeader from './Mid/index'
import BotHeader from './Bot'

const Header = props => {
    return (
      <header className="header-area">
      <TopHeader />
      <MidHeader />
      <BotHeader />
    </header>
    )
}

Header.propTypes = {

}

export default Header
