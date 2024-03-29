import React from 'react'




const Link = ({ className, href, children }) => {
   

    const handleClick = (e) => {
        e.preventDefault()
        window.history.pushState({},'',href)
        
        const navEvent = new PopStateEvent('popstate')
        window.dispatchEvent(navEvent)
    }
    return <a 
            onClick={(e) => handleClick(e)} 
            className ={className} 
            href={href}>
            {children}
        </a>
}

export default Link

