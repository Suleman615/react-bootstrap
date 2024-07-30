import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import about_image from '../assets/banner.png'
import Footer from '../components/Footer'
import Team from '../components/Team'

const About = () => {
  return (
    <>
      <Navbar />
      <Banner page='About Us' />
      <div className='d-flex flex-column-reverse flex-md-row container  '>
        <div className=' flex-grow-1 flex-shrink-0  mt-5 pt-5'>
          <p className='fw-semibold text-grey  mt-3' style={{ fontSize: '16px', maxWidth: '600px' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede.
            Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy. Fusce aliquet pede non pede.
            Suspendisse dapibus lorem pellentesque magna. Integer nulla. Donec blandit feugiat ligula. Donec hendrerit, felis et imperdiet euismod, purus ipsum pretium metus, in lacinia nulla nisl eget sapien. Donec ut est in lectus consequat consequat. Etiam eget dui. Aliquam erat volutpat. Sed at lorem in nunc porta tristique.
          </p>
        </div>
        <div className=' flex-grow-1 '><img style={{ width: '100%' }} src={about_image} alt=" Image" /></div>
      </div>
      <Team/>
      <Footer/>
    </>
  )
}

export default About