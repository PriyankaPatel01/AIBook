import React, { forwardRef } from 'react'
import './HowItWorks.css'

const HowItWorks = (prop, ref) => {
  return (
    <div className='work' id={prop.t}  ref={ref}>
      <h2>How It Works</h2>
      <section className='s_1'>
        <img src="./answer.png" alt="choose_image" />
        <h3> Choose Your Genre</h3>
        <p>Select from a wide range of genres or create a custom blend. </p>
      </section>
      <section className='s_2'>
        <img src="./pencil.png" alt="pencil_image" />
        <h3>Provide Key Details </h3>
        <p>Input main characters, plot points, or themes to guide the AI. </p>
      </section>
      <section className='s_3'>
        <img src="./settings.png" alt="settings_image" />
        <h3> AI Generation</h3>
        <p>Our advanced AI creates your book based on your inputs. </p>
      </section>
      <section className='s_4'>
        <img src="./correct.png" alt="correct_image" />
        <h3>Review and Download </h3>
        <p>Review your generated book and download in your preferred format. </p>
      </section>
      
    </div>
  )
}

export default forwardRef(HowItWorks);
