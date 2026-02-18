"use client"

import Layout from "@/components/layout/Layout"
import Faq from "../faq/page"
import { useState, useEffect } from "react"

export default function Contact() {
    const [isMounted, setIsMounted] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        subject: 'Services',
        specificService: '',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    // Subject options with categories
    const subjectOptions = {
        Services: [
            'Web Development',
            'Mobile App Development',
            'Digital Marketing',
            'UI/UX Design',
            'Automation'
        ],
        Internship: [
            'Data Science Internship',
            'Data Analytics Internship',
            'Digital Marketing Internship',
            'Full Stack Developer',
            'Devops',
            'Graphic Design',
            'Videography and Production'
        ], 
        Courses: [
            'Digital Marketing Course',
            'Data Science Course',
            'Data Analytics Course',
            'Full Stack Developer',
            'Videography and Production'
        ],
        "Academic Project": [
            'Data Science Projects',
            'Data Analytics Projects',
            'Machine Learning Projects',
            'Full Stack Projects',
        ],
        WorkShop: [
            'For Student',
            'For Corporates',
            'For Faculties',
        ],
        Other: ['General Inquiry', 'Career', 'Feedback', 'Others']
    }

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    // Handle subject change
    const handleSubjectChange = (e) => {
        setFormData(prev => ({
            ...prev,
            subject: e.target.value,
            specificService: ''
        }))
    }

    // Handle form submission to Google Sheets
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)

        try {
            // Google Apps Script Web App URL (you'll get this from Step 3)
            const scriptURL = 'https://script.google.com/macros/s/AKfycbzx7JNe9uRJFX0UA6GXbhr04mD4aeGXMxj0EiH236zA7sodlQqSSDf7k0jZrX4pCE6p/exec'
            
            // Prepare data for Google Sheets
            const formDataToSend = {
                timestamp: new Date().toLocaleString('en-IN', { 
                    timeZone: 'Asia/Kolkata',
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                }),
                name: formData.name,
                email: formData.email,
                contact: formData.contact,
                subject: formData.subject,
                specificService: formData.specificService || 'Not specified',
                message: formData.message
            }

            // Send data to Google Sheets
            const response = await fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors', // This is important for Google Apps Script
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formDataToSend)
            })

            // Since we're using no-cors, we can't check response status
            // Assume success if no error is thrown
            setSubmitStatus({
                type: 'success',
                message: 'Thank you! Your message has been sent successfully.'
            })
            
            // Reset form
            setFormData({
                name: '',
                email: '',
                contact: '',
                subject: 'Services',
                specificService: '',
                message: ''
            })

        } catch (error) {
            console.error('Form submission error:', error)
            setSubmitStatus({
                type: 'error',
                message: 'Failed to send message. Please try again later.'
            })
        } finally {
            setIsSubmitting(false)
            setTimeout(() => setSubmitStatus(null), 5000)
        }
    }

    // Get specific options based on selected subject
    const getSpecificOptions = () => {
        switch(formData.subject) {
            case 'Services':
                return subjectOptions.Services
            case 'Internship':
                return subjectOptions.Internship
            case 'Academic Project':
                return subjectOptions["Academic Project"]
            case 'Courses':
                return subjectOptions.Courses
            case 'WorkShop':
                return subjectOptions.WorkShop
            case 'Other':
                return subjectOptions.Other
            default:
                return subjectOptions.Services
        }
    }

    // Don't render until mounted on client
    if (!isMounted) {
        return (
            <Layout headerStyle={2} footerStyle={2}>
                <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div className="text-center">
                        <div className="spinner-border text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }

    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                {/* Hero Section */}
                <section 
                    className="contact-section position-relative d-flex align-items-center justify-content-center text-center" 
                    style={{
                        backgroundImage: "url('/assets/img/E26media/team/IMG_3285.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        minHeight: "70vh",
                        color: "#fff"
                    }}
                >
                    <div 
                        className="overlay position-absolute top-0 start-0 w-100 h-100" 
                        style={{
                            maskImage: "radial-gradient(80% 80%, rgb(0,0,0) 0%, rgba(0,0,0,0) 100%)",
                            WebkitMaskImage: "radial-gradient(80% 80%, rgb(0,0,0) 0%, rgba(0,0,0,0) 100%)",
                            backgroundColor: "rgba(0,79,57,0.6)",
                            opacity: 1
                        }}
                    ></div>

                    <div className="container position-relative">
                        <h2 className="mb-4" style={{color:"#fff", fontWeight:"700"}}>
                            Contact Us
                        </h2>
                        <p className="mb-4" style={{color:"#fff", maxWidth:"600px", margin:"0 auto"}}>
                            We'd love to hear from you. Reach out for collaborations, projects, or inquiries.
                        </p>
                        <a 
                            href="mailto:info@e26media.com" 
                            className="btn px-4 py-2" 
                            style={{
                                background:"#004f39", 
                                borderColor:"#004f39", 
                                color:"#fff", 
                                fontWeight:"600"
                            }}
                        >
                            Get in Touch
                        </a>
                    </div>
                </section>

                {/* Contact Info Cards Section */}
                <section className="contact-section pt-space pb-space" style={{background: "linear-gradient(to bottom, #ffffff 70%, #004f39 100%)"}}>
                    <div className="container">
                        {/* Contact Info Cards */}
                        <div className="row g-xl-7 g-4 mb-xxl-7 mb-6 justify-content-center">
                            {/* Phone Card */}
                            <div className="col-lg-3 col-md-6 col-sm-6" data-aos="zoom-in-right" data-aos-duration={1400}>
                                <div className="contact-sub-info text-center" style={{
                                    backgroundColor: '#004f39',
                                    color: '#ffff',
                                    borderRadius: '15px',
                                    padding: '2rem 1.5rem',
                                    height: '100%',
                                    boxShadow: '0 10px 30px rgba(0, 79, 57, 0.2)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    border: '1px solid rgba(255, 255, 255, 0.1)'
                                }}>
                                    <div style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto',
                                        marginBottom: '1.5rem'
                                    }}>
                                        <svg width={54} height={54} viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M51.925 42.825C51.925 43.725 51.725 44.65 51.3 45.55C50.875 46.45 50.325 47.3 49.6 48.1C48.375 49.45 47.025 50.425 45.5 51.05C44 51.675 42.375 52 40.625 52C38.075 52 35.35 51.4 32.475 50.175C29.6 48.95 26.725 47.3 23.875 45.225C21 43.125 18.275 40.8 15.675 38.225C13.1 35.625 10.775 32.9 8.7 30.05C6.65 27.2 5 24.35 3.8 21.525C2.6 18.675 2 15.95 2 13.35C2 11.65 2.3 10.025 2.9 8.525C3.5 7 4.45 5.6 5.775 4.35C7.375 2.775 9.125 2 10.975 2C11.675 2 12.375 2.15 13 2.45C13.65 2.75 14.225 3.2 14.675 3.85L20.475 12.025C20.925 12.65 21.25 13.225 21.475 13.775C21.7 14.3 21.825 14.825 21.825 15.3C21.825 15.9 21.65 16.5 21.3 17.075C20.975 17.65 20.5 18.25 19.9 18.85L18 20.825C17.725 21.1 17.6 21.425 17.6 21.825C17.6 22.025 17.625 22.2 17.675 22.4C17.75 22.6 17.825 22.75 17.875 22.9C18.325 23.725 19.1 24.8 20.2 26.1C21.325 27.4 22.525 28.725 23.825 30.05C25.175 31.375 26.475 32.6 27.8 33.725C29.1 34.825 30.175 35.575 31.025 36.025C31.15 36.075 31.3 36.15 31.475 36.225C31.675 36.3 31.875 36.325 32.1 36.325C32.525 36.325 32.85 36.175 33.125 35.9L35.025 34.025C35.65 33.4 36.25 32.925 36.825 32.625C37.4 32.275 37.975 32.1 38.6 32.1C39.075 32.1 39.575 32.2 40.125 32.425C40.675 32.65 41.25 32.975 41.875 33.4L50.15 39.275C50.8 39.725 51.25 40.25 51.525 40.875C51.775 41.5 51.925 42.125 51.925 42.825Z" stroke="#ffff" strokeWidth={4} strokeMiterlimit={10} />
                                            <path d="M37.5742 16.4252L46.4242 7.5752" stroke="#ffff" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M46.4242 16.4252L37.5742 7.5752" stroke="#ffff" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <h5 className="mt-4 mb-4" style={{
                                        color: '#ffff',
                                        fontWeight: '600',
                                        fontSize: '1.25rem'
                                    }}>
                                        Phone & Fax
                                    </h5>
                                    <div className="contact-details" style={{ lineHeight: '1.8' }}>
                                        <span className="d-block mb-2" style={{ fontSize: '0.95rem', opacity: '0.9' }}>
                                            <a href="https://wa.me/917337753124" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                                                +91 733 775 3124 
                                            </a>
                                        </span>
                                        <span className="d-block mb-2" style={{ fontSize: '0.95rem', opacity: '0.9' }}>
                                            <a href="tel:+918495901407" style={{ color: 'white', textDecoration: 'none' }}>
                                                +91 849 590 1407 
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Email Card */}
                            <div className="col-lg-3 col-md-6 col-sm-6" data-aos="zoom-in-right" data-aos-duration={1600}>
                                <div className="contact-sub-info text-center" style={{
                                    backgroundColor: '#004f39',
                                    color: '#ffff',
                                    borderRadius: '15px',
                                    padding: '2rem 1.5rem',
                                    height: '100%',
                                    boxShadow: '0 10px 30px rgba(0, 79, 57, 0.2)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    border: '1px solid rgba(255, 255, 255, 0.1)'
                                }}>
                                    <div style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto',
                                        marginBottom: '1.5rem'
                                    }}>
                                        <svg width={69} height={54} viewBox="0 0 69 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.04604 3.04604C3.69236 2.39975 4.58521 2 5.57143 2H62.7143C63.7004 2 64.5932 2.39975 65.2396 3.04604M3.04604 3.04604C2.39975 3.69236 2 4.58521 2 5.57143V48.4286C2 50.4011 3.599 52 5.57143 52H41.2857M3.04604 3.04604L9.14286 9.14307M65.2396 3.04604C65.8861 3.69236 66.2857 4.58521 66.2857 5.57143V48.4286C66.2857 50.4011 64.6868 52 62.7143 52H55.5714M65.2396 3.04604L39.1936 29.0918C36.4039 31.8814 31.8814 31.8814 29.0918 29.0918L19.8571 19.8571" stroke="#ffff" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <h5 className="mt-4 mb-4" style={{
                                        color: '#ffff',
                                        fontWeight: '600',
                                        fontSize: '1.25rem'
                                    }}>
                                        Mail Address
                                    </h5>
                                    <div className="contact-details" style={{ lineHeight: '1.8' }}>
                                        <span className="d-block mb-2" style={{ fontSize: '0.95rem', opacity: '0.9' }}>
                                            <a href="mailto:info@e26media.com" style={{ color: "inherit", textDecoration: "none" }}>
                                                info@e26media.com
                                            </a>
                                        </span>
                                        <span className="d-block" style={{ fontSize: '0.95rem', opacity: '0.9' }}>
                                            <a href="mailto:hr@e26media.com" style={{ color: "inherit", textDecoration: "none" }}>
                                                hr@e26media.com
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Location Card */}
                            <div className="col-lg-3 col-md-6 col-sm-6" data-aos="zoom-in-right" data-aos-duration={1800}>
                                <div className="contact-sub-info text-center" style={{
                                    backgroundColor: '#004f39',
                                    color: '#ffff',
                                    borderRadius: '15px',
                                    padding: '2rem 1.5rem',
                                    height: '100%',
                                    boxShadow: '0 10px 30px rgba(0, 79, 57, 0.2)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    border: '1px solid rgba(255, 255, 255, 0.1)'
                                }}>
                                    <div style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto',
                                        marginBottom: '1.5rem'
                                    }}>
                                        <svg width={38} height={50} viewBox="0 0 38 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.1781 -0.0175781C8.92969 -0.0175781 0.25 8.71211 0.25 19.0512C0.25 29.8793 10.3109 40.9527 17.0781 48.7355C17.1047 48.7668 18.1984 49.9809 19.5453 49.9809H19.6641C21.0125 49.9809 22.0984 48.7668 22.125 48.7355C28.475 41.4355 37.75 29.3965 37.75 19.0512C37.75 8.71055 30.9797 -0.0175781 19.1781 -0.0175781ZM19.8047 46.6387C19.75 46.6934 19.6703 46.7543 19.6 46.8059C19.5281 46.7559 19.45 46.6934 19.3922 46.6387L18.575 45.698C12.1594 38.3387 3.37344 28.259 3.37344 19.0496C3.37344 10.4059 10.6109 3.1043 19.1766 3.1043C29.8469 3.1043 34.6234 11.1121 34.6234 19.0496C34.6234 26.0402 29.6375 35.3246 19.8047 46.6387ZM19.0547 9.44336C13.8781 9.44336 9.67969 13.6402 9.67969 18.8184C9.67969 23.9965 13.8781 28.1934 19.0547 28.1934C24.2312 28.1934 28.4297 23.9949 28.4297 18.8184C28.4297 13.6418 24.2328 9.44336 19.0547 9.44336ZM19.0547 25.0684C15.6078 25.0684 12.7328 22.1965 12.7328 18.7496C12.7328 15.3027 15.5359 12.4996 18.9828 12.4996C22.4312 12.4996 25.2328 15.3027 25.2328 18.7496C25.2344 22.1965 22.5031 25.0684 19.0547 25.0684Z" fill="#ffff" />
                                        </svg>
                                    </div>
                                    <h5 className="mt-4 mb-4" style={{
                                        color: '#ffff',
                                        fontWeight: '600',
                                        fontSize: '1.25rem'
                                    }}>
                                        Our Location
                                    </h5>
                                    <div className="contact-details" style={{ lineHeight: '1.8' }}>
                                        <span className="d-block mb-2" style={{ fontSize: '0.95rem', opacity: '0.9' }}>
                                            5th Floor, Shalimar Complex,
                                        </span>
                                        <span className="d-block" style={{ fontSize: '0.95rem', opacity: '0.9' }}>
                                            Near Old Ganes Medical, <br/>
                                            Kankanady, Mangalore - 575002
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Hours Card */}
                            <div className="col-lg-3 col-md-6 col-sm-6" data-aos="zoom-in-right" data-aos-duration={2000}>
                                <div className="contact-sub-info text-center" style={{
                                    backgroundColor: '#004f39',
                                    color: '#ffff',
                                    borderRadius: '15px',
                                    padding: '2rem 1.5rem',
                                    height: '100%',
                                    boxShadow: '0 10px 30px rgba(0, 79, 57, 0.2)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    border: '1px solid rgba(255, 255, 255, 0.1)'
                                }}>
                                    <div style={{
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto',
                                        marginBottom: '1.5rem'
                                    }}>
                                        <svg width={54} height={54} viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M27 13.1111V27H40.8889M27 52C13.1929 52 2 40.8072 2 27C2 13.1929 13.1929 2 27 2C40.8072 2 52 13.1929 52 27C52 40.8072 40.8072 52 27 52Z" stroke="#ffff" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <h5 className="mt-4 mb-4" style={{
                                        color: '#ffff',
                                        fontWeight: '600',
                                        fontSize: '1.25rem'
                                    }}>
                                        Office Hours
                                    </h5>
                                    <div className="contact-details" style={{ lineHeight: '1.8' }}>
                                        <span className="d-block mb-2" style={{ fontSize: '0.95rem', opacity: '0.9' }}>
                                            Monday - Friday : 9AM - 6PM
                                        </span>
                                        <span className="d-block" style={{ fontSize: '0.95rem', opacity: '0.9' }}>
                                            Saturday : 9AM - 4PM
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Section */}
                        <div className="row g-xxl-7 g-4 align-items-center">
                            {/* Form */}
                            <div className="col-lg-6" data-aos="zoom-in" data-aos-duration={2000}>
                                <div 
                                    className="contact-content"
                                    style={{
                                        background: "linear-gradient(to bottom, #ffffff 80%, rgba(0,79,57,0.2) 100%)",
                                        borderRadius: "15px",
                                        padding: "30px",
                                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                                    }}
                                >
                                    <h3 style={{ color: "#004f39" }} className="mb-4">
                                        Leave A Message
                                    </h3>

                                    {submitStatus && (
                                        <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'} mb-4`} role="alert">
                                            {submitStatus.message}
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit}>
                                        <div className="row g-4">
                                            <div className="col-lg-6">
                                                <input 
                                                    type="text" 
                                                    name="name"
                                                    placeholder="Name *" 
                                                    className="form-control custom-input"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>

                                            <div className="col-lg-6">
                                                <input 
                                                    type="email" 
                                                    name="email"
                                                    placeholder="Email *" 
                                                    className="form-control custom-input"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>

                                            <div className="col-lg-12">
                                                <input 
                                                    type="tel" 
                                                    name="contact"
                                                    placeholder="Contact Number *" 
                                                    className="form-control custom-input"
                                                    value={formData.contact}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>

                                            <div className="col-lg-12">
                                                <select 
                                                    className="form-select custom-input"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleSubjectChange}
                                                >
                                                    <option value="Services">Services</option>
                                                    <option value="Internship">Internship</option>
                                                    <option value="Academic Project">Academic Project</option>
                                                    <option value="Courses">Courses</option>
                                                    <option value="WorkShop">Workshop</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>

                                            {/* Dynamic Specific Options based on Subject */}
                                            <div className="col-lg-12">
                                                <select 
                                                    className="form-select custom-input"
                                                    name="specificService"
                                                    value={formData.specificService}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="">Select {formData.subject === 'Services' ? 'Service' : 
                                                        formData.subject === 'Internship' ? 'Internship Type' :
                                                        formData.subject === 'Academic Project' ? 'Project Type' :
                                                        formData.subject === 'Courses' ? 'Course' :
                                                        formData.subject === 'WorkShop' ? 'Workshop Type' : 'Option'}</option>
                                                    {getSpecificOptions().map((option, index) => (
                                                        <option key={index} value={option}>
                                                            {option}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="col-lg-12">
                                                <textarea 
                                                    name="message"
                                                    rows={5} 
                                                    placeholder="Your Message *"
                                                    className="form-control custom-input"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </div>

                                            <div className="col-lg-5" >
                                                <button 
                                                    type="submit" 
                                                    className="submit-btn"
                                                    disabled={isSubmitting}
                                                    id='submit-btn'
                                                >
                                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="col-lg-6" data-aos="zoom-in" data-aos-duration={2000}>
                                <div className="contact-image">
                                    <img 
                                        src="/assets/img/E26media/Contact us.png" 
                                        alt="Contact Us" 
                                        className="img-fluid rounded"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Maps Section */}
                        <div className="row g-xxl-7 g-4 mt-5">
                            <div className="col-lg-6" data-aos="zoom-in" data-aos-duration={2000}>
                                <div className="contact-map">
                                    <h5 style={{ color: "#004f39", marginBottom: "10px", textAlign: 'center' }}>
                                        E26 Media Private Limited – Head Office
                                    </h5>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.123456789!2d74.8456789!3d12.863665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDUxJzQ5LjIiTiA3NMKwNTAnMTQuMSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        style={{
                                            height: "400px",
                                            width: "100%",
                                            borderRadius: "10px",
                                            border: "2px solid #004f39"
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="col-lg-6" data-aos="zoom-in" data-aos-duration={2000}>
                                <div className="contact-map">
                                    <h5 style={{ color: "#004f39", marginBottom: "10px", textAlign: 'center' }}>
                                        E26 Media Private Limited – Branch Office
                                    </h5>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.987654321!2d74.8357185!3d12.863665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDUxJzQ5LjIiTiA3NMKwNTAnMTQuMSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        style={{
                                            height: "400px",
                                            width: "100%",
                                            borderRadius: "10px",
                                            border: "2px solid #004f39"
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Faq/>
            </Layout>

            <style>{`
                .contact-sub-info:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 15px 40px rgba(0, 79, 57, 0.3) !important;
                    background-color: #00382a !important;
                }
                
                @media (max-width: 768px) {
                    .contact-sub-info {
                        margin-bottom: 1.5rem;
                    }
                }
                
                h5 {
                    letter-spacing: 0.5px;
                }
                
                .contact-details span {
                    transition: opacity 0.3s ease;
                }
                
                .contact-sub-info:hover .contact-details span {
                    opacity: 1 !important;
                }
                
                .custom-input {
                    background-color: #ffffff;
                    border: 1px solid #004f39;
                    padding: 12px;
                    border-radius: 10px;
                    outline: none;
                    width: 100%;
                }

                .custom-input:focus {
                    outline: none;
                    border-color: #004f39;
                    box-shadow: 0 0 0 0 rgba(0,79,57,0.2);
                }

                .custom-input::placeholder {
                    color: #6c757d;
                    opacity: 0.8;
                }

                select.custom-input {
                    cursor: pointer;
                    appearance: none;
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23004f39' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
                    background-repeat: no-repeat;
                    background-position: right 12px center;
                    background-size: 16px;
                }

                .submit-btn {
                    background-color: #004f39;
                    color: white;
                    border: none;
                    padding: 12px 25px;
                    border-radius: 10px;
                    transition: 0.3s;
                    font-weight: 600;
                    width: 100%;
                    cursor: pointer;
                }

                .submit-btn:hover:not(:disabled) {
                    background-color: #002f22;
                    transform: translateY(-2px);
                }

                .submit-btn:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }

                .alert {
                    padding: 12px;
                    border-radius: 8px;
                    font-size: 14px;
                }

                .alert-success {
                    background-color: #d4edda;
                    border: 1px solid #c3e6cb;
                    color: #155724;
                }

                .alert-danger {
                    background-color: #f8d7da;
                    border: 1px solid #f5c6cb;
                    color: #721c24;
                }

                .spinner-border {
                    width: 3rem;
                    height: 3rem;
                }
                    #submit-btn:hover{
                    color:white
            }
                    }
            
            `}</style>
        </>
    )
}