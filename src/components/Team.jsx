import CEO from '../assets/ceo.webp'
import CTO from '../assets/cto.webp'
import HR from '../assets/hr.webp'

const Team = () => {
    return (
        <>
            <h1 className='text-dark-grey text-center mt-5' style={{ fontSize: '64px' }}>OUR TEAM</h1>
            <div>
                <div className='d-flex flex-wrap gap-5 justify-content-center my-5'>
                    <div>
                        <img className=' ' style={{ borderRadius: '50%', height: '300px', width: '300px' }} src={CEO} alt="" srcset="" />
                        <h1 className='text-center m-0 mt-3 text-dark-grey '>CEO</h1>
                        <p className='text-center font-monospace m-0 text-grey'>Mr Suleman</p>
                    </div>
                    <div>
                        <img className=' ' style={{ borderRadius: '50%', height: '300px', width: '300px' }} src={CTO} alt="" srcset="" />
                        <h1 className='text-center m-0 mt-3 text-dark-grey'>CTO</h1>
                        <p className='text-center font-monospace m-0 text-grey'>Mr Parakash</p>

                    </div>

                    <div>
                        <img className=' ' style={{ borderRadius: '50%', height: '300px', width: '300px' }} src={HR} alt="" srcset="" />
                        <h1 className='text-center m-0 mt-3 text-dark-grey'>HR</h1>
                        <p className='text-center font-monospace m-0 text-grey'>Mr Ali</p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Team