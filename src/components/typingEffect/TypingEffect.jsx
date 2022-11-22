import React from 'react';
import './typingEffect.css';
import Typical from 'react-typical';




const TypingEffect = () => {



  return (
    <div className='typing__container'>
        <p>I am a {' '} 
        <Typical 
            loop={Infinity}
            wrapper = "b" 
            steps={[
                'developer',
                2000,
                'designer',
                2000,
                'Life Long Learner',
                2000,
                'Youtuber wanna be',
                2000,
                'critical thinker',
                2000
            ]}
        />
        </p>
    </div>
  )
}

export default TypingEffect