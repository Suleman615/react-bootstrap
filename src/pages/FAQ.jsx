import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const FAQ = () => {
    const faqs = [

        {
            q: 'What services does your company offer?',
            a: 'We provide a wide range of software development services including custom software development, mobile app development, web development, cloud computing, and IT consulting.'
        },
        {
            q: 'Where is your company located?',
            a: 'Our headquarters are located in Islamabad , Pakistan, but we serve clients globally through our remote services.'
        },
        {
            q: 'How long has your company been in business?',
            a: 'we provide all tech solutionsWe have been providing top-notch software solutions for over 5 years, since 2019.'
        },
        {
            q: 'What is your software development process?',
            a: 'We follow an Agile development methodology, which includes planning, designing, developing, testing, and deploying software solutions in iterative cycles.'
        },
        {
            q: 'How do you ensure the security of our data?',
            a: 'We implement stringent security measures, including data encryption, secure coding practices, and regular security audits, to protect your data.'
        },
        {
            q: ' Do you sign NDAs?',
            a: 'Yes, we sign Non-Disclosure Agreements to ensure the confidentiality of your project and data.'
        },
        {
            q: 'How do you charge for your services?',
            a: ' Our pricing model can be based on either a fixed price, time and material, or dedicated team basis, depending on the project requirements.'
        },
        {
            q: 'What payment methods do you accept?',
            a: 'We accept various payment methods including bank transfers, credit cards, and PayPal.'
        },
        {
            q: 'Do you provide post-development support?',
            a: 'Yes, we offer comprehensive post-development support and maintenance packages to ensure your software remains up-to-date and runs smoothly.'
        },
        {
            q: 'How can we reach your support team?',
            a: 'You can reach our support team via email, phone, or our online support portal, available 24/7 for any assistance you may need.'
        },
        {
            q: 'How do you handle changes or revisions during a project?',
            a: 'We accommodate changes through a change request process, ensuring that all revisions are documented, evaluated, and implemented effectively.'
        },
    ]

    return (
        <>
            <Navbar />
            <Banner page='FAQ' />
            <div className='my-5'>
                <h1 className='text-dark-grey text-center'>Frequently Asked Questions</h1>
                <div className="accordion accordion-flush container my-5" id="accordionFlushExample">

                    {faqs.map((quest, index) => (
                        <div key={index} className="accordion-item ">
                            <h2 className="accordion-header " id={`flush-heading_${index}`}>
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse_${index}`} aria-expanded="false" aria-controls={`flush-collapse_${index}`}>
                                    {quest.q}
                                </button>
                            </h2>
                            <div id={`flush-collapse_${index}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading_${index}`} data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">{quest.a}</div>
                            </div>
                        </div>
                    ))}

<p className='text-grey my-5'>If you have a new question. <Link to='/contact' className='text-green '>Contact Us</Link></p>
                    {/*                 
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div> */}

                    {/* <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div> */}

                </div>
            </div>

            <Footer />
        </>
    )
}

export default FAQ