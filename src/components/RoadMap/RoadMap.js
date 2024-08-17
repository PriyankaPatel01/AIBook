import React, { forwardRef } from 'react'
import './RoadMap.css'

const RoadMap = (prop, ref) => {
  return (
    <div ref={ref}>
        <div id={prop.t} className='road'>
      <h2>RoadMap</h2>
      <div className='s_1'>
        <img src="./answer.png" alt="choose_image" />
        <h3> Advanced Character Development</h3>
        <p>AI-powered tool for creating deep, complex characters. </p>
      </div>
      <div className='s_2'>
        <img src="./pencil.png" alt="pencil_image" />
        <h3>E-book Platform Integration</h3>
        <p>Seamless publishing to popular e-book platforms.</p>
      </div>
      <div className='s_3'>
        <img src="./settings.png" alt="settings_image" />
        <h3> Collaborative Writing</h3>
        <p>Co-create stories with other authors or AI assistants. </p>
      </div>
      <div className='s_4'>
        <img src="./correct.png" alt="correct_image" />
        <h3>AI Cover Art Generation </h3>
        <p>Create stunning book covers with AI-generated art.</p>
      </div>
      
    </div>
      
    </div>
  )
}

export default forwardRef(RoadMap);
