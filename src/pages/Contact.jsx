import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer';

import { FiPhoneCall, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineLocationCity } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";



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
                    <FiMail size={34} color='#4CAF4F' /><h1 className='text-dark-grey fs-5 '>nexcent.info@gmail.com</h1>
                </div>

            </div>

            <div className='background-light '>
                <div className='d-flex flex-column flex-md-row gap-5 container'>
                    <div className='flex-grow-1 flex-shrink-0 me-0 me-md-5 pe-0   pt-5'>
                        <form action="" className='  my-5 border border-2 rounded-3 p-3'>
                            <h1 className='text-center text-green my-3 ' style={{ fontSize: '40px' }}>Send a Message</h1>
                            <section className='d-flex flex-column ' >
                                <div className=' p-2 rounded-2 d-flex flex-column  gap-2 bg-opacity-25  '>
                                    <label className='text-grey fw-semibold' htmlFor="name">Name</label>
                                    <input className='form-field  bg-opacity-25 border-0 rounded fs-5 ps-2' style={{ height: '40px' }} placeholder='Enter Your Complete Name' name="name" id="name" type="text" />
                                </div>
                            </section>

                            <section className='d-flex flex-column ' >
                                <div className=' p-2 rounded-2 d-flex flex-column  gap-2 bg-opacity-25  '>
                                    <label className='text-grey fw-semibold' htmlFor="mail">Email</label>
                                    <input className='form-field bg-opacity-25 border-0 rounded fs-5 ps-2' style={{ height: '40px' }} placeholder='Enter Your Email' name="mail" id="mail" type="email" />
                                </div>
                            </section>

                            <section className='d-flex flex-column ' >
                                <div className=' p-2 rounded-2 d-flex flex-column  gap-2 bg-opacity-25  '>
                                    <label className='text-grey fw-semibold' htmlFor="subject">Subject</label>
                                    <input className=' form-field bg-opacity-25 border-0 rounded fs-5 ps-2' style={{ height: '40px' }} placeholder='Subject' name="subject" id="subject" type="text" />
                                </div>
                            </section>

                            <section className='d-flex flex-column ' >
                                <div className=' p-2 rounded-2 d-flex flex-column  gap-2 bg-opacity-25  '>
                                    <label className='text-grey fw-semibold' htmlFor="message">Message</label>
                                    <textarea className=' form-field bg-opacity-25 border-0 rounded fs-5 ps-2' placeholder='Your Message' type="text" name="message" id="message" rows={6}></textarea>
                                </div>
                            </section>
                            <button className='background-green border-0 px-3 py-2 rounded-2 my-4 ms-2 text-white fw-semibold'>Submit</button>
                        </form>
                    </div>
                    <div className='me-0 me-md-5 pe-0 pe-md-5 my-5 py-5 d-flex flex-column justify-content-center gap-4'>

                        <div className='d-flex gap-4 align-items-center'>
                            <FiPhoneCall size={34} color='#4CAF4F' /><h1 className='text-dark-grey fs-5 '>+92 334 7865987</h1>
                        </div>
                        <div className='d-flex gap-4 align-items-center'>
                            <FaWhatsapp size={34} color='#4CAF4F' /><h1 className='text-dark-grey fs-5 '>+92 302 7628627</h1>
                        </div>
                        <div className='d-flex gap-4 align-items-center'>
                            <FiMail size={34} color='#4CAF4F' /><h1 className='text-dark-grey fs-5 '>nexcent.info@gmail.com</h1>
                        </div>
                        <div className='d-flex gap-4 align-items-center'>
                            <MdOutlineLocationCity size={34} color='#4CAF4F' /><h1 className='text-dark-grey fs-5  ' style={{maxWidth:'200px'}}>Al-Mustafa Towers, F10 , Islamabad</h1>
                        </div>
                        <div className='d-flex gap-4 align-items-center'>
                            <CiGlobe size={34} color='#4CAF4F' /><h1 className='text-dark-grey fs-5 '>nexcent.dev.io</h1>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className=' d-flex justify-content-center py-5 background-light' style={{ marginBottom: '330px' }} >
                <iframe className='container p-0 map-styles shadow ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1535.6535706447198!2d73.00792522617697!3d33.69957500567374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe6c20555555%3A0x8f6a6bbb957aa4b4!2sAl-Mustafa%20Towers!5e0!3m2!1sen!2s!4v1722314257609!5m2!1sen!2s" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Footer />
        </>
    )
}

export default Contact