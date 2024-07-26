import React from 'react'
import hero from '../assets/hero.svg'

const Hero = () => {
    return (
        <div className='background-light p-5'>

            <div className='d-flex flex-column-reverse flex-md-row container py-5 '>
                <div className=' flex-grow-1 w-full gap-4 d-flex flex-column justify-content-center '>
                    <h1 className=' text-dark-grey' style={{fontSize:'8ex'}}>Lessons and insights <br/><span className='text-green'>from 8 years</span></h1>
                    <p className='fw-semibold text-grey' style={{fontSize:'16px'}}>Where to grow your business as a photographer: site or social media?</p>
                    <button className='btn background-green text-white px-4 py-2' style={{width:'fit-content'}} >Register</button>
                </div>
                <div className=' flex-grow-1'><img style={{width:'100%'}} src={hero} alt="HERO Image"  /></div>
            </div>

        </div>
    )
}

export default Hero