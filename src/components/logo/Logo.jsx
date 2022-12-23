import React from 'react'
import './logo.css'
import logo from '../../assets/JPG.png'

const LOGOSIZES = ["logo--medium", "logo--large"];

export const Logo = ({
    children,
    type,
    onClick,
    logoSize
  }) => {

    const checkLogoSize = LOGOSIZES.includes(logoSize) ? logoSize : LOGOSIZES[0];

  return (
    <img className={`logo ${checkLogoSize}`}
    src={logo} alt="Logo" 
    onClick={onClick} 
    type={type}
  >
    {children}

    </img>
  )
}

export default Logo