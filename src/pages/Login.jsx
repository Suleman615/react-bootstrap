import image from '../assets/client.svg'
import LoginForm from '../components/LoginForm'
import Navbar from '../components/Navbar'

const Login = () => {
    return (
        <>
            <Navbar login />
            <div className='container pt-4 ' >
                <div className=' flex-column flex-md-row d-flex '>
                    <div className='flex-grow-1 flex-shrink-0 mx-5'>
                        <img className='w-100 ' src={image} alt="" />
                    </div>
                    <div className='flex-grow-1 flex-shrink-0 mt-2 mt-md-5 pt-1 pt-md-3'>
                        <LoginForm />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login