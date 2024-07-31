import image from '../assets/mobile-login-panal.svg'
import Navbar from '../components/Navbar'
import SignUpForm from '../components/SignUpForm'

const SignUp = () => {
  return (
    <>
    <Navbar  signUp/>
    <div className='container  ' >
                <div className='  flex-column flex-md-row d-flex '>
                    <div className='flex-grow-1 flex-shrink-0  mt-5 pt-5'>
                        <img className='w-100 ' src={image} alt="" />
                    </div>
                    <div className='flex-grow-1 flex-shrink-0 mt-2 mt-md-5 pt-1 pt-md-3'>
                        <SignUpForm />
                    </div>
                </div>

            </div>
    </>
  )
}

export default SignUp