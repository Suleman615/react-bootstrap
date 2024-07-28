import member from '../assets/member.png'
import club from '../assets/groups.svg'
import event_booking from '../assets/event-booking.svg'
import payments from '../assets/payments.svg'

const Achievements = () => {
    return (
        <div className='background-light '>

            <div className='d-flex flex-column flex-md-row container py-5 '>
                <div className=' flex-grow-1 flex-shrink-0 w-full gap-3 d-flex flex-column justify-content-center '>
                    <h1 className=' text-dark-grey text-center text-md-start' >Helping a local<br /><span className='text-green'>business reinvent itself</span></h1>
                    <p className='fw-semibold text-grey text-center text-md-start' style={{ fontSize: '16px' }}>We reached here with our hard work and dedication</p>
                </div>
                <div className=' flex-grow-1 flex-shrink-0 my-3 '>
                    <div className='d-flex flex-wrap gap-2 align-items-center align-items-md-start  justify-content-around '>
                        <div className='d-flex align-items-center h-fit gap-2 my-2'><img className='mb-3' src={member} alt="member icon"  /> <div> <h2 className='fw-semibold text-dark-grey m-0'>2,245,341</h2> <p className='text-grey'>members</p></div></div>
                        <div className='d-flex align-items-center h-fit gap-2 my-2'><img className='mb-3' src={club} alt="club icon"  /> <div> <h2 className='fw-semibold text-dark-grey m-0'>2,245,341</h2> <p className='text-grey'>members</p></div></div>

                    </div>
                    <div className='d-flex align-items-center flex-wrap gap-2 justify-content-around '>
                        <div className='d-flex align-items-center h-fit gap-2 my-2'><img className='mb-3' src={event_booking} alt="booking icon"  /> <div> <h2 className='fw-semibold text-dark-grey m-0'>2,245,341</h2> <p className='text-grey'>members</p></div></div>
                        <div className='d-flex align-items-center h-fit gap-2 my-2'><img className='mb-3' src={payments} alt="payment icon"  /> <div> <h2 className='fw-semibold text-dark-grey m-0'>2,245,341</h2> <p className='text-grey'>members</p></div></div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Achievements