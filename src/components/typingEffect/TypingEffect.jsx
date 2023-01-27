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
                'Developer',
                2000,
                'Designer',
                2000,
                'Life Long Learner',
                2000,
                'Creator',
                2000,
                'Critical Thinker',
                2000
            ]}
        />
        </p>
    </div>
  )
}

export default TypingEffect