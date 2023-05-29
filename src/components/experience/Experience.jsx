import React from 'react'
import "./Experience.css"
import {BsFillPatchCheckFill} from "react-icons/bs"

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontent">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <h4>Javascript</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <h4>Tailwind</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill/>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience