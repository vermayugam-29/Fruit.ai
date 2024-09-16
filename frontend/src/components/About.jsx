import React, { useEffect } from 'react'
import toast from 'react-hot-toast'

const About = () => {

    return (
        <div className="fruit-ai-container">
      <div className="blurred-fruits">
        <div className="fruit fruit-1"></div>
        <div className="fruit fruit-2"></div>
        <div className="fruit fruit-3"></div>
      </div>
      <div className="content-card">
        <h1 className="title_about">Fruit.Ai</h1>
        <p className="description">
          Whether you're looking to discover new fruits,
           understand their nutritional values, or find the perfect
            fruit for your diet, our AI-driven chatbot is here to assist.
             We provide personalized fruit recommendations tailored to
              your health needs, making it easier for you to integrate
               the best fruits into your daily routine.
        </p>
        <button
        onClick={() => {
            toast.error('Feature not added yet')
        }}
         className="about-button">ABOUT</button>
      </div>
    </div>
    )
}

export default About
