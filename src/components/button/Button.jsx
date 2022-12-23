import React from 'react'
import './button.css';

const STYLES = [
  "btn--primary",
  "btn--secondary"
]

const SIZES = ["btn--medium", "btn--small", "btn--large"];


export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {

  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button className={`btn ${checkButtonSize} ${checkButtonStyle}`} 
      onClick={onClick} 
      type={type}
    >
      {children}
    </button>
  )
}

export default Button