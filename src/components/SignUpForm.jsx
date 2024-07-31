import React from 'react';
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



    if (!values.checkPassword) {
        errors.checkPassword = "Check password can't be empty *";
    } else if (values.checkPassword !== values.password) {
        errors.checkPassword = 'Passwords Not similar *';
    }


    
    if (!values.termsAndPolicies) {
        errors.termsAndPolicies = "Terms And Policies are required *";
    } 

    return errors;
};

const SignUpForm = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            checkPassword: '',
            termsAndPolicies : false
        },
        validate,
        onSubmit: values => {
            console.log(values);
        },
    });
    return (

        <form onSubmit={formik.handleSubmit} className='background-light  my-5 border border-2 rounded-3 p-3'>
            <h1 className='text-center text-green my-3 ' style={{ fontSize: '40px' }}>Sign Up</h1>
           

            <section className='d-flex flex-column ' >
                <div className=' p-2 rounded-2 d-flex flex-column  gap-2 bg-opacity-25  '>
                    <label className='text-grey fw-semibold' htmlFor="email">Email</label>
                    <input

                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className='form-field bg-opacity-25 border-0 rounded fs-5 ps-2'
                        style={{ height: '40px' }}
                        placeholder='Enter Your Email Here'
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
                        style={{ height: '40px' }}
                        placeholder='Enter Password here'
                    />
                    {formik.errors.password ? <div className='error-message'>{formik.errors.password}</div> : null}

                </div>
            </section>

            <section className='d-flex flex-column ' >
                <div className=' p-2 rounded-2 d-flex flex-column  gap-2 bg-opacity-25  '>
                    <label className='text-grey fw-semibold' htmlFor="checkpassword">ReEnter Password</label>
                    <input
                        id="checkPassword"
                        name="checkPassword"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.checkPassword}
                        className=' form-field bg-opacity-25 border-0 rounded fs-5 ps-2'
                        placeholder='Enter Password Again'
                        style={{ height: '40px' }}

                        />


                    {formik.errors.checkPassword ? <div className='error-message'>{formik.errors.checkPassword}</div> : null}

                </div>
            </section>

            <section className='d-flex flex-column ' >
                <div className=' p-2 rounded-2 d-flex flex-row-reverse justify-content-end align-items-center  gap-2 bg-opacity-25  '>
                    <label className='text-green fw-semibold' htmlFor="termsAndPolicies">Terms And Policies</label>
                    <input
                        id="termsAndPolicies"
                        name="termsAndPolicies"
                        type="checkbox"
                        onChange={formik.handleChange}
                        value={formik.values.termsAndPolicies}
                        className='  border-0 rounded fs-5 ps-2'
                        style={{outline:'none'}}
                    />

                </div>
                {formik.errors.termsAndPolicies ? <div className='error-message'>{formik.errors.termsAndPolicies}</div> : null}

            </section>


            <button type='submit' className='background-green border-0 px-3 py-2 rounded-2 my-4 ms-2 text-white fw-semibold w-100'>Sign Up</button>
        </form>




    );
};


export default SignUpForm