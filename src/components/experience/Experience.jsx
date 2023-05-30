import React from 'react'
import "./Experience.css"
import {BsFillPatchCheckFill} from "react-icons/bs"

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontent">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Good</small>
              </div>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>CSS</h4>
              <small className='text-light'>Good</small>
            </div>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Good</small>
              </div>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Good</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__graphic-design">
          <h3>Graphic design</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Adobe Photoshop</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Adobe Illustrator</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>Clip Studio Paint</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Adobe Premier</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Adobe After Effects</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>

          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>Blender</h4>
              <small className='text-light'>Basic</small>
             </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience