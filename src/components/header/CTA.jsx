import React from 'react'
import CV from '../../assets/JP_Grineau_Resume.pdf'
import Button from '../button/Button'


const CTA = () => {
  return (
    <div className="cta">
  
     <a href={CV} download>
      <Button
      type="button"
      buttonStyle="btn--primary"
      buttonSize="btn--large"
      >Download CV</Button>
      </a>

      <a href="mailto:jgrineau95@gmail.com">
      <Button
      type="button"
      buttonStyle="btn--secondary"
      buttonSize="btn--large"
      >Email Me</Button>
      </a>
      
    </div>
  )
}

export default CTA