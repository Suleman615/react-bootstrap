 import { useFormik } from 'formik';


const validate = values => {
    const errors = {};


    if (!values.email) {
        errors.email = 'Email is Required *';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address *';
    }



    if (!values.password) {
        errors.password = 'password is Required *';
    } else if (values.password.length > 30 || values.password.length < 8) {
        errors.password = 'Must be minimum 8  characters or maximum 30 *';
    }



  

    return errors;
};


const handleReset=()=>{

}

const LoginForm = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            Stay_logged_in: false,
        },
        validate,
        onSubmit: values => {
            console.log(values);
        },
    });
    return (

        <form onSubmit={formik.handleSubmit} className='   border border-2 background-light rounded-3 p-3'>
            <h1 className='text-center text-green my-3 ' style={{ fontSize: '40px' }}>Log In</h1>
           

            <section className='d-flex flex-column ' >
                <div className=' p-2 rounded-2 d-flex flex-column  gap-2 bg-opacity-25  '>
                    <label className='text-grey fw-semibold ' htmlFor="email">Email</label>
                    <input

                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className='form-field bg-opacity-25 border-0 rounded fs-5 ps-2'
                        style={{ height: '40px' }}
                        placeholder='Enter Your Email'
                    />
                    {formik.errors.email ? <div className='error-message'>{formik.errors.email}</div> : null}

                </div>
            </section>

           

            <section className='d-flex flex-column ' >
                <div className=' p-2 rounded-2 d-flex flex-column  gap-2 bg-opacity-25  '>
                    <label className='text-grey fw-semibold' htmlFor="password">password</label>
                    <input
                        id="password"
                        name="password"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        className=' form-field bg-opacity-25 border-0 rounded fs-5 ps-2'
                        placeholder='Your password'
                        style={{ height: '40px' }}

                        />

                   

                    {formik.errors.password ? <div className='error-message'>{formik.errors.password}</div> : null}

                </div>
            </section>

            <section className='d-flex flex-column ' >
                <div className=' p-2 rounded-2 d-flex flex-row-reverse justify-content-end align-items-center  gap-2 bg-opacity-25  '>
                    <label className='text-grey fw-semibold' htmlFor="Stay_logged_in">Stay Logged In</label>
                    <input
                        id="Stay_logged_in"
                        name="Stay_logged_in"
                        type="checkbox"
                        onChange={formik.handleChange}
                        value={formik.values.Stay_logged_in}
                        className='  border-0 rounded fs-5 ps-2'
                        style={{outline:'none'}}
                    />

                </div>

            </section>

            <button type='submit' className='background-green border-0 px-3 py-2 w-100 rounded-2 my-4 ms-2 text-white fw-semibold'>Log In</button>
            <p onClick={handleReset} className='text-green  fw-semibold text-decoration-underline mx-2 my-0 ' style={{cursor:'pointer'}} > Forgot Password</p>
        </form>




    );
};


export default LoginForm