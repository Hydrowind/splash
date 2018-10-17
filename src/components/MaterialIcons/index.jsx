import React from "react"
import './style.scss'

const MaterialIcons = ({icon, size}) => (
    <span className='MaterialIcons' style={{fontSize: `${size}rem`}}>{icon}</span>
)

export default MaterialIcons