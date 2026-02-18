import Link from "next/link"
import { useEffect, useState } from "react"

export default function Footer2() {
    
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



    return (
        <section style={{backgroundColor:'white'}}>

            <footer className="footer-version-two " style={{backgroundColor:'#004f39' ,cornerShape:"round",borderRadius:'60px 60px 0 0',}}>
                <div className="footer-topversion-two pt-20 pb-20">
                    <div className="container">
                        <div className="row gy-lg-0 gy-10 mt-xxl-5 mb-xxl-5 justify-content-between">
                            <div className="col-xxl-6 col-xl-6 col-lg-7">
                                <div className="footer-widget">
                                    <div className="footer-lets-title mb-xxl-20 mb-xl-15 mb-lg-10 mb-8">
                                        <span className="fdisplay-title d-flex gap-2 align-items-center mb-xxl-10 mb-xl-8 mb-lg-6 mb-6" data-aos="zoom-in-right" data-aos-duration={1400}>
                                            Let’s <span className="talk" data-aos="zoom-in-up" data-aos-duration={1800}>talk!</span>
                                        </span>
                                        <p className="pra-clr" data-aos="zoom-in" data-aos-duration={1800}>
                                            Bring to the table win-win survival strategies to ensure proactive domination. At
                                            the end of the day, going forward, a
                                            new normal that has evolved
                                        </p>
                                    </div>
                                    <div className="d-flex footer-widger-inner align-items-center">
                                        <div className="box">
                                            <h5 className="footer-title mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-down" data-aos-duration={1900}>
                                                Quick Links
                                                <svg className="d-block mt-xxl-4 mt-3" width={83} height={2} viewBox="0 0 83 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <line y1={-1} x2={83} y2={-1} transform="matrix(1 0 0 -1 0 0)" stroke="url(#paint0_linear_6308_43042)" strokeWidth={2} />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_6308_43042" x1="4.02912" y1="0.000277584" x2={80} y2="0.000110496" gradientUnits="userSpaceOnUse">
                                                            <stop offset={0} stopColor="white" />
                                                            <stop offset={1} stopColor="#fbf7ce" stopOpacity={0} />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </h5>
                                            <ul className="link-footer d-grid gap-xxl-5 gap-4" data-aos="zoom-in" data-aos-duration={1400}>
                                                <li>
                                                    <Link href="/" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                        <span className="ani-icons">
                                                            <i className="fas fa-angle-double-right pra-clr" />
                                                        </span>
                                                        Home
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/about" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                        <span className="ani-icons">
                                                            <i className="fas fa-angle-double-right pra-clr" />
                                                        </span>
                                                       About us
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/Courses" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                        <span className="ani-icons">
                                                            <i className="fas fa-angle-double-right pra-clr" />
                                                        </span>
                                                       Courses
                                                    </Link>
                                                </li>
                                               
                                                <li>
                                                    <Link href="/contact" className="d-flex align-items-center gap-2 flink-items pra-clr">
                                                        <span className="ani-icons">
                                                            <i className="fas fa-angle-double-right pra-clr" />
                                                        </span>
                                                        Contact Us
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="box2">
                                            <h5 className="footer-title mb-xxl-7 mb-xl-6 mb-5" data-aos="zoom-in-down" data-aos-duration={1900}>
                                                Contact Us
                                                <svg className="d-block mt-xxl-4 mt-3" width={83} height={2} viewBox="0 0 83 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <line y1={-1} x2={83} y2={-1} transform="matrix(1 0 0 -1 0 0)" stroke="url(#paint0_linear_6308_43)" strokeWidth={2} />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_6308_43" x1="4.02912" y1="0.000277584" x2={80} y2="0.000110496" gradientUnits="userSpaceOnUse">
                                                             <stop offset={0} stopColor="white" />
                                                            <stop offset={1} stopColor="#fbf7ce" stopOpacity={0} />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </h5>
                                            <p className="pra-clr mb-xxl-7 mb-xl-6 mb-6" data-aos="zoom-in" data-aos-duration={1400}>
                                                5th Floor, Shalimar Complex,
                                                Near Old Ganes Medical,
                                                Kankanady, Mangalore - 575002
                                            </p>
                                            <span className="d-block" data-aos="zoom-in" data-aos-duration={1600}>
                                                <span className="fw-bold white-clr mb-xxl-3 mb-2 d-block" style={{color:"white"}}>
                                                    Phone Call:
                                                </span>
                                                <span className="pra-clr">
                                                 <a href="https://wa.me/917337753124" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                                                +91 733 775 3124 
                                            </a><br/>
                                                 <a href="https://wa.me/918495901407" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                                                +91 849 590 1407
                                            </a>
                                                </span>
                                            </span>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                <ul className="common-social d-flex align-items-center gap-3 mt-10 ">
                                        
                                       <li data-aos="zoom-in-right" data-aos-duration={1600} style={{backgroundColor:'white'}} >
    <Link href="https://www.instagram.com/e26media/?hl=en" className="d-center" style={{backgroundColor:'white'}} target="blank">
        <svg width={16} height={16} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.75 2H16.25C19.65 2 22 4.35 22 7.75V16.25C22 19.65 19.65 22 16.25 22H7.75C4.35 22 2 19.65 2 16.25V7.75C2 4.35 4.35 2 7.75 2Z" stroke="#004f39" strokeWidth="2"/>
            <path d="M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8Z" stroke="#004f39" strokeWidth="2"/>
            <path d="M17.5 6.5H17.51" stroke="#004f39" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    </Link>
</li>

                                        <li data-aos="zoom-in-right" data-aos-duration={1800} style={{backgroundColor:'white'}}>
                                            <Link href="https://www.linkedin.com/company/e26-media-production-private-limited/posts/?feedView=all" className="d-center" style={{backgroundColor:'white'}}>
                                                <svg width={14} height={16} viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.8">
                                                        <path d="M3.13375 13.9997H0.23125V4.65281H3.13375V13.9997ZM1.68094 3.37781C0.752813 3.37781 0 2.60906 0 1.68094C6.64312e-09 1.23513 0.177098 0.807572 0.492335 0.492335C0.807572 0.177098 1.23513 0 1.68094 0C2.12675 0 2.5543 0.177098 2.86954 0.492335C3.18478 0.807572 3.36188 1.23513 3.36188 1.68094C3.36188 2.60906 2.60875 3.37781 1.68094 3.37781ZM13.9969 13.9997H11.1006V9.44969C11.1006 8.36531 11.0787 6.97469 9.59156 6.97469C8.0825 6.97469 7.85125 8.15281 7.85125 9.37156V13.9997H4.95188V4.65281H7.73562V5.92781H7.77625C8.16375 5.19344 9.11031 4.41844 10.5225 4.41844C13.46 4.41844 14 6.35281 14 8.86531V13.9997H13.9969Z" fill="#004f39" />
                                                    </g>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li data-aos="zoom-in-right" data-aos-duration={1400} >
                                            <Link href="https://www.facebook.com/people/E26-Media-Production/61565034466150/" className="d-center" style={{backgroundColor:'white'}} target="black">
                                                <svg width={10} height={16} viewBox="0 0 10 16" fill="#004f39" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.8" clipPath="url(#clip0_6308_28)">
                                                        <path d="M8.72266 9L9.16703 6.10437H6.38859V4.22531C6.38859 3.43313 6.77672 2.66094 8.02109 2.66094H9.28422V0.195625C9.28422 0.195625 8.13797 0 7.04203 0C4.75391 0 3.25828 1.38688 3.25828 3.8975V6.10437H0.714844V9H3.25828V16H6.38859V9H8.72266Z" fill="#004f39" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_6308_28">
                                                            <rect width={10} height={16} fill="#004f39" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </Link>
                                        </li>
                                      <li data-aos="zoom-in-right" data-aos-duration={1900} style={{backgroundColor:'white'}}>
    <Link href="https://wa.me/918495901407" target="_blank" className="d-center" style={{backgroundColor:'white'}}>
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 13.85 2.5 15.64 3.45 17.21L2 22L6.89 20.58C8.41 21.5 10.16 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#004f39"/>
            <path d="M16.45 14.34C16.21 14.22 15.02 13.64 14.8 13.56C14.57 13.47 14.41 13.44 14.25 13.67C14.09 13.89 13.63 14.43 13.5 14.58C13.36 14.73 13.22 14.75 12.98 14.63C12.74 14.51 12.02 14.29 11.18 13.55C10.52 12.96 10.09 12.25 9.96 12.01C9.83 11.77 9.95 11.64 10.06 11.53C10.17 11.42 10.3 11.24 10.42 11.1C10.54 10.96 10.58 10.86 10.66 10.71C10.74 10.56 10.7 10.43 10.64 10.31C10.58 10.19 10.09 9 9.88 8.52C9.67 8.04 9.46 8.1 9.32 8.1C9.18 8.1 9.02 8.1 8.86 8.1C8.7 8.1 8.44 8.16 8.22 8.4C8 8.64 7.4 9.2 7.4 10.34C7.4 11.48 8.24 12.58 8.36 12.74C8.48 12.9 9.96 15.17 12.17 16.14C14.38 17.11 14.38 16.81 15.01 16.75C15.64 16.69 17.03 16.17 17.29 15.46C17.55 14.75 17.55 14.14 17.47 14C17.39 13.86 17.23 13.82 16.99 13.7L16.45 14.34Z" fill="white"/>
        </svg>
    </Link>
</li>

                                    </ul>
                            </div>
                            <div className="col-xxl-5 col-xl-6 col-lg-5">
                                <form action="#" className="common-form">
                                    <div className="row g-xxl-8 g-xl-7 g-6">
                                        <div className="col-xl-6" data-aos="zoom-in-right" data-aos-duration={1400}>
                                            <div className="gorm-grp">
                                                <label className="fw-medium white mb-xxl-5 mb-xl-4 mb-3" htmlFor="name">Your
                                                    Name*</label>
                                                <input id="name" type="text" placeholder="Your Name" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6" data-aos="zoom-in-right" data-aos-duration={1400}>
                                            <div className="gorm-grp">
                                                <label className="fw-medium white mb-xxl-5 mb-xl-4 mb-3" htmlFor="emails">Your
                                                    Email*</label>
                                                <input id="emails" type="text" placeholder="Your Email" />
                                            </div>
                                        </div>
                                        <div className="col-xl-12" data-aos="zoom-in-right" data-aos-duration={1400}>
                                            <div className="gorm-grp">
                                                <label htmlFor="mess" className="fw-medium white mb-xxl-5 mb-xl-4 mb-3">Your
                                                    Message*</label>
                                                <textarea name="write" id="mess" rows={5} placeholder="Write Message" />
                                            </div>
                                        </div>
                                        <div className="col-xl-12" data-aos="zoom-in-right" data-aos-duration={1400}>
                                            <div className="gorm-grp">
                                                <button type="submit" className="getin-touch d-flex align-items-center justify-content-center gap-3  p-xxl-4 p-xl-3 p-lg-2 p-2 w-100 text-semibold" style={{color:"white"}}>
                                                    <span className="icons">
                                                        <i className="fas fa-arrow-up theme-clr" style={{color:"white"}}/>
                                                    </span>
                                                    Get In Touch
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-version-two px-xxl-6 px-6 py-xxl-6 py-xl-6 py-6" style={{backgroundColor:"#004f39"}} >
                    <div className="container">
                        <div className="d-md-flex gap-md-0 gap-4 d-grid align-items-center justify-content-md-between justify-content-center">
                            <p className="pra-clr">
                                © All Copyright {new Date().getFullYear()} by <Link href="/" className="theme-clr"  style={{fontWeight:'bold'}}>E26 Media</Link>
                            </p>
                            <Link href="/" className="footer-logov1 m-md-0 m-auto">
                                <img src="/assets/img/E26media/footerlogo1.png" alt="img" />
                            </Link>
                            <Link href="/#" className="pra-clr">
                                Terms &amp; Conditions Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>

        </section>
    )
}
