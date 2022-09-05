import React from 'react'
import CV from '../../assets/JP_Grineau_Resume.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">Download CV</a>
      <a href="mailto:jgrineau95@gmail.com" className="btn btn-primary">Let's talk</a>
    </div>
  )
}

export default CTA