import React, { forwardRef } from 'react'
import './Features.css'

const Features = (prop, ref) => {
  return (
    <div id={prop.t} className='sect' ref={ref}>
      <h2 >Features</h2>
      <section className='s1'>
        <img src="./ai.png" alt="ai" />
        <h3>AI-Powered Writing </h3>
        <p>Generate high-quality content with advanced AI technology. </p>
      </section>

      <section className='s2'>
        <img src="./custom.png" alt="custom" />
        <h3>Custom Genres </h3>
        <p> Create stories in any genre or blend multiple styles.</p>
      </section>

      <section className='s3'>
        <img src="./download.png" alt="download" />
        <h3>Instant Download </h3>
        <p> Get your completed book in various formats instantly.</p>
      </section>

      <section className='s4'>
        <img src="./languages.png" alt="languages" />
        <h3>Multilingual </h3>
        <p>Generate content in multiple languages effortlessly.</p>
      </section>


    </div>
  )
}

export default forwardRef(Features);
