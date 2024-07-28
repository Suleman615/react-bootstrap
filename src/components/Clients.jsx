import React from 'react'
import LogoSlider from './LogoSlider'
import association from '../assets/association.svg'
import membership from '../assets/membership.svg'
import groups from '../assets/groups.svg'
import clientImage from '../assets/client.svg'


const Clients = () => {
  return (
    <>
      <div className='py-5'>
        <h1 className='text-center fw-bold text-dark-grey'>Our Clients</h1>
        <p className='text-grey text-center fw-semibold'>We have been working with some Fortune 500+ clients</p>
      </div>


      {/* Slider for sponcers and partners */}
      <LogoSlider />


      <div className='w-full py-5 '>
        <h1 className='text-center mx-auto text-dark-grey px-2' style={{ maxWidth: '600px' }}>Manage your entire community in a single system</h1>
        <p className='text-center text-grey fw-semibold'>Who is Nextcent suitable for?</p>
      </div>

      <div className='d-flex  justify-content-center gap-5  mb-5 flex-wrap  '>

        <div className=' rounded-3 px-4 shadow-sm d-flex gap-2 flex-column justify-content-center align-items-center py-4' style={{ width: '300px' }}>
          <div className='position-relative mx-auto background-tint alternate-rounded-border ' style={{ width: '50px', height: '50px' }}> <img className=' leftsided' src={membership} alt="membership" /> </div>
          <h1 className='text-center text-dark-grey'>Membership Organisations</h1>
          <p className='text-grey  text-center'>Our membership management software provides full automation of membership renewals and payments</p>
        </div>


        <div className=' rounded-3 px-4 mx-0 mx-lg-5 shadow-sm d-flex gap-2 flex-column justify-content-center align-items-center py-4' style={{ width: '300px' }}>
          <div className='position-relative mx-auto background-tint alternate-rounded-border ' style={{ width: '50px', height: '50px' }}> <img className=' leftsided' src={association} alt="association" /> </div>
          <h1 className='text-center text-dark-grey'>National Associations</h1>
          <p className='text-grey  text-center'>Our membership management software provides full automation of membership renewals and payments</p>
        </div>


        <div className=' rounded-3  px-4 shadow-sm d-flex gap-2 flex-column justify-content-center align-items-center py-4' style={{ width: '300px' }}>
          <div className='position-relative mx-auto background-tint alternate-rounded-border ' style={{ width: '50px', height: '50px' }}> <img className=' leftsided' src={groups} alt="groups" /> </div>
          <h1 className='text-center text-dark-grey px-3'>Clubs And Groups</h1>
          <p className='text-grey text-center'>Our membership management software provides full automation of membership renewals and payments</p>
        </div>



      </div>



      <div className='d-flex flex-column flex-md-row container pb-5 '>
        <div className=' flex-grow-1 flex-shrink-0'><img style={{ width: '100%' }} src={clientImage} alt="HERO Image" /></div>

        <div className=' flex-grow-1 w-full gap-4 d-flex flex-column justify-content-center  align-items-center align-items-md-start'>
          <h1 className=' text-dark-grey text-center text-md-start ' >The unseen of spending three years at Pixelgrade</h1>
          <p className=' text-grey text-center text-md-start px-2 px-md-0  ' style={{ fontSize: '16px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
          <button className='rounded border-0 background-green text-white px-4 py-2 ' style={{ width: 'fit-content' }} >Learn More</button>
        </div>
      </div>
    </>
  )
}

export default Clients