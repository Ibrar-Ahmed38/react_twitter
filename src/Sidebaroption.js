import React from 'react'
import './sidebaroption.css'

const Sidebaroption = ({active, text, Icon}) => {
    return (
        <div className={`sidebaroption  ${active} && 'sidebaroption--active'` }>
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}

export default Sidebaroption
