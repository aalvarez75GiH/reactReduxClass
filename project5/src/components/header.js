import React from 'react'
import Link from './link'

const Header = () => {
    return(
        <div className="ui secondary pointing menu">
            <Link className="item" href="/">Accordion</Link>
            <Link className="item" href="/dropdown">Search on Wiki</Link>
            <Link className="item" href="/search">DropDown Color List</Link>
            <Link className="item" href="/translate">Translate</Link>
        </div>
    ) 
}

export default Header