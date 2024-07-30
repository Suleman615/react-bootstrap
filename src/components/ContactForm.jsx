import React from 'react';
import { useFormik } from 'formik';


const validate = values => {
    const errors = {};
    if (!values.fullName) {
        errors.fullName = 'Full Name is Required *';
    } else if (values.fullName.length > 15) {
        errors.fullName = 'Must be 15 characters or less *';
    }

    if (!values.email) {
        errors.email = 'Email is Required *';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address *';
    }

    if (!values.subject) {
        errors.subject = 'Subject is Required *';
    } else if (values.subject.length > 20) {
        errors.subject = 'Must be 20 characters or less *';
    }


    if (!values.message) {
        errors.message = 'Message is Required *';
    } else if (values.message.length > 200) {
        errors.message = 'Must be 200 characters or less *';
    }





    return errors;
};

const ContactForm = () => {
    
    const formik = useFormik({
        initialValues: {
            fullName: '',
            subject: '',
            email: '',
            message: ''
        },
        validate,
        onSubmit: values => {
            console.log(values, null, 2);
        },
    });
    return (

        <form onSubmit={formik.handleSubmit} className='  my-5 border border-2 rounded-3 p-3'>
            <h1 className='text-center text-green my-3 ' style={{ fontSize: '40px' }}>Send a Message</h1>
            <section className='d-flex flex-column ' >
                <div className=' p-2 rounded-2 d-flex flex-column  gap-2 bg-opacity-25  '>
                    <label className='text-grey fw-semibold' htmlFor="fullName">Full Name</label>
                    <input

                        id="fullName"
                        name="fullName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.fullName}
                        className='form-field  bg-opacity-25 border-0 rounded fs-5 ps-2'
                        style={{ height: '40px' }}
                        placeholder='Enter Your Complete Name'
                    />
                               {formik.errors.fullName ? <div  className='error-message'>{formik.errors.fullName}</div> : null}

                </div>
            </section>

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
                        placeholder='Enter Your Email'
                    />
          {formik.errors.email ? <div className='error-message'>{formik.errors.email}</div> : null}

                </div>
            </section>

            <section className='d-flex flex-column ' >
                <div className=' p-2 rounded-2 d-flex flex-column  gap-2 bg-opacity-25  '>
                    <label className='text-grey fw-semibold' htmlFor="subject">Subject</label>
                    <input
                        id="subject"
                        name="subject"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.subject}
                        className=' form-field bg-opacity-25 border-0 rounded fs-5 ps-2'
                        style={{ height: '40px' }}
                        placeholder='Subject'
                    />
                               {formik.errors.subject ? <div  className='error-message'>{formik.errors.subject}</div> : null}

                </div>
            </section>

            <section className='d-flex flex-column ' >
                <div className=' p-2 rounded-2 d-flex flex-column  gap-2 bg-opacity-25  '>
                    <label className='text-grey fw-semibold' htmlFor="message">Message</label>
                    <textarea 
                    id="message"
                    name="message"
                    type="text"  
                    onChange={formik.handleChange}
                        value={formik.values.message}
                    className=' form-field bg-opacity-25 border-0 rounded fs-5 ps-2'
                     placeholder='Your Message'  
                     rows={6}>

                     </textarea>

                        {formik.errors.message ? <div  className='error-message'>{formik.errors.message}</div> : null}

                </div>
            </section>
            <button type='submit' className='background-green border-0 px-3 py-2 rounded-2 my-4 ms-2 text-white fw-semibold'>Submit</button>
        </form>




        // <form onSubmit={formik.handleSubmit}>
        //   <label htmlFor="fullName">First Name</label>
        //   <input
        //     id="fullName"
        //     name="fullName"
        //     type="text"
        //     onChange={formik.handleChange}
        //     value={formik.values.fullName}
        //   />
        //   {formik.errors.fullName ? <div>{formik.errors.fullName}</div> : null}

        //   <label htmlFor="subject">Last Name</label>
        //   <input
        //     id="subject"
        //     name="subject"
        //     type="text"
        //     onChange={formik.handleChange}
        //     value={formik.values.subject}
        //   />
        //   {formik.errors.subject ? <div>{formik.errors.subject}</div> : null}

        //   <label htmlFor="email">Email Address</label>
        //   <input
        //     id="email"
        //     name="email"
        //     type="email"
        //     onChange={formik.handleChange}
        //     value={formik.values.email}
        //   />
        //   {formik.errors.email ? <div>{formik.errors.email}</div> : null}

        //   <button type="submit">Submit</button>
        // </form>
    );
};


export default ContactForm