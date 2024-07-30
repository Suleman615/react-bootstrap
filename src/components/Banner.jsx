
const Banner = ({page}) => {
  return (
    <div  className=' pt-5 ' >
        <div className=' background-light   py-5   d-flex justify-content-center align-items-baseline '>
        <h1 className='  text-center my-5 text-green ' style={{fontSize:"64px"}}>{page}</h1>
        </div>
    
    </div>
  )
}

export default Banner