import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

import { FiPhoneCall, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Footer from '../components/Footer';


const Contact = () => {
    return (
        <>
            <Navbar />
            <Banner page='Contact Us' />
            <div className='d-flex gap-5 my-5 py-0 py-md-5 justify-content-center flex-wrap'>
                <div className='background-light  p-3 rounded-3 d-flex justify-content-center align-items-center gap-3 '>
                    <FiPhoneCall size={34} color='#4CAF4F' /><h1 className='text-dark-grey'>+92 305 6967543</h1>
                </div>
                <div className='background-light  p-3 rounded-3 d-flex justify-content-center align-items-center gap-3 '>
                    <FaWhatsapp size={34} color='#4CAF4F' /><h1 className='text-dark-grey'>+92 332 6617619</h1>
                </div>
                <div className='background-light  p-3 rounded-3 d-flex justify-content-center align-items-center gap-3 '>
                    <FiMail size={34} color='#4CAF4F' /><h1 className='text-dark-grey fs-5 '>ghlmsuleman@gmail.com</h1>
                </div>

            </div>

            <div className='background-light'>
                <div className='d-flex flex-column flex-md-row gap-5'>
                    <div className='flex-grow-1 flex-shrink-0 me-0 me-md-5 pe-0  pe-md-5'>
                        <form action="" className=' mx-1 mx-md-5 my-5 border border-2 rounded-3 p-3'>

                            <section className='d-flex flex-column ' >
                                <div className=' p-2 rounded-2 d-flex flex-column  gap-2 bg-opacity-25  '>
                                    <label className='text-grey fw-semibold' htmlFor="name">Name</label>
                                    <input className='form-field  bg-opacity-25 border-0 rounded fs-5 ps-2' style={{  height:'40px' }} placeholder='Enter Your Complete Name'  name="name" id="name" type="text" />
                                </div>
                            </section>

                            <section className='d-flex flex-column ' >
                                <div className=' p-2 rounded-2 d-flex flex-column  gap-2 bg-opacity-25  '>
                                    <label className='text-grey fw-semibold' htmlFor="mail">Email</label>
                                    <input className='form-field bg-opacity-25 border-0 rounded fs-5 ps-2' style={{  height:'40px' }} placeholder='Enter Your Email'  name="mail" id="mail" type="email" />
                                </div>
                            </section>

                            <section className='d-flex flex-column ' >
                                <div className=' p-2 rounded-2 d-flex flex-column  gap-2 bg-opacity-25  '>
                                    <label className='text-grey fw-semibold' htmlFor="subject">Subject</label>
                                    <input className=' form-field bg-opacity-25 border-0 rounded fs-5 ps-2' style={{  height:'40px' }} placeholder='Subject'  name="subject" id="subject" type="text" />
                                </div>
                            </section>

                            <section className='d-flex flex-column ' >
                                <div className=' p-2 rounded-2 d-flex flex-column  gap-2 bg-opacity-25  '>
                                    <label className='text-grey fw-semibold' htmlFor="message">Message</label>
                               <textarea className=' form-field bg-opacity-25 border-0 rounded fs-5 ps-2'  placeholder='Your Message' type="text"  name="message" id="message" rows={6}></textarea>
                                </div>
                            </section>

                        </form>
                    </div>
                    <div className='flex-grow-1 flex-shrink-0'></div>
                </div>
            </div>

            <div className=' d-flex justify-content-center py-5 background-light' style={{ marginBottom: '330px' }} >
                <iframe className='map-styles shadow ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1535.6535706447198!2d73.00792522617697!3d33.69957500567374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe6c20555555%3A0x8f6a6bbb957aa4b4!2sAl-Mustafa%20Towers!5e0!3m2!1sen!2s!4v1722314257609!5m2!1sen!2s" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Footer />
        </>
    )
}

export default Contact