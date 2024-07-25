import React from 'react'
import hero from '../assets/hero.svg'

const Hero = () => {
    return (
        <div className='background-light pt-5'>

            <div className='d-flex flex-column-reverse flex-md-row container pt-5 '>
                <div className=' flex-grow-1 w-full gap-2 d-flex flex-column justify-content-center '>
                    <h1 className=' ' style={{fontSize:'8ex'}}>Lessons and insights <br/><span className='text-green'>from 8 years</span></h1>
                    <p className='' style={{fontSize:'16px'}}>Where to grow your business as a photographer: site or social media?</p>
                    <button className='btn background-green text-white px-4' style={{width:'fit-content'}} >Register</button>
                </div>
                <div className=' flex-grow-1'><img style={{width:'100%'}} src={hero} alt="HERO Image"  /></div>
            </div>

        </div>
    )
}

export default Hero