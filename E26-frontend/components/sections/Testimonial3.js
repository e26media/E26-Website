

'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 20,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".cmn-prev",
        prevEl: ".cmn-next",
    },

    breakpoints: {
        1199: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
    },
}

export default function Testimonial3() {
    return (
        <div style={{ background: "linear-gradient(to top, #ffffff2e 1%, #ddeae657 100%);"}}>
        {/* <div style={{ background: "linear-gradient(to top, #ffffff 1%, #004f39 100%)"}}> */}

            <section className="testimonial-version02-section  position-relative "  style={{ background: "linear-gradient(to bottom, #ffffff 1%, #004f39 100%),"}}>
                
                <div className="container position-relative">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-15 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
                        <div className="pricing-title">
                           
                            <h2 className="stitle mt-10"   style={{color:'#004f39'}}>
                              Success Stories <span className="fw-400"  style={{color:'#004f39'}}></span>
                                <span className="d-block fw-semibold"   style={{color:'#004f39'}}>
                                   & Testimonials
                                </span>
                            </h2>
                        </div>
                       
                    </div>
                    <div className="swiper testimonial-version03 position-relative" style={{marginTop:'-60px'}}>
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                            <SwiperSlide>
                                <div className="testimonial-zero-oneitem testimonial-zero-oneitemv3 d-flex align-items-center gap-xxl-6 gap-xl-4 gap-3">
                                    <img src="/assets/img/E26media/elements/line.png" alt="arrow" className="testi-arrow" />
                                    <div className="content">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-3">
                                            {/* <div className="savannah">
                                                <img src="https://xstarnextjs.vercel.app/assets/img/testimonial/testiv3-2.png" alt="img" />
                                            </div> */}
                                            <div className="desig">
                                                <h6 className="white-clr mb-1">
                                                   Rameeza Banu
                                                </h6>
                                                {/* <span className="pra-clr mb-2 d-block">
                                                    Marketing Coordinator
                                                </span> */}
                                                <div className="ratting-area d-flex align-items-center gap-2">
                                                    <i className="fa-solid fa-star theme-clr"  style={{color:'#004f39'}}/>
                                                    <i className="fa-solid fa-star theme-clr" style={{color:'#004f39'}}/>
                                                    <i className="fa-solid fa-star theme-clr" style={{color:'#004f39'}}/>
                                                    <i className="fa-solid fa-star theme-clr" style={{color:'#004f39'}}/>
                                                    <i className="fa-solid fa-star theme-clr" style={{color:'#004f39'}}/>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="pra-clr mt-xxl-8 mt-xl-6 mt-lg-5 mt-4"  style={{color:'#004f39!important'}}>
                                            I have been there for training and the mentors there where super good and supportive that we couldn’t even thought that it would get us a great impact came as beginner and left as a industry expert
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                           
                            <SwiperSlide>
                                <div className="testimonial-zero-oneitem testimonial-zero-oneitemv3 d-flex align-items-center gap-xxl-6 gap-xl-4 gap-3">
                                    <img src="/assets/img/E26media/elements/line.png" alt="arrow" className="testi-arrow" />
                                    <div className="content">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-3">
                                            {/* <div className="savannah">
                                               <img src="https://xstarnextjs.vercel.app/assets/img/testimonial/testiv3-2.png" alt="img" />
                                            </div> */}
                                            <div className="desig">
                                                <h6 className="white-clr mb-1">
                                                Zulfa
                                                </h6>
                                                {/* <span className="pra-clr mb-2 d-block">
                                                    Nursing Assistant
                                                </span> */}
                                                <div className="ratting-area d-flex align-items-center gap-2">
                                                    <i className="fa-solid fa-star theme-clr" style={{color:'#004f39'}}/>
                                                    <i className="fa-solid fa-star theme-clr" style={{color:'#004f39'}}/>
                                                    <i className="fa-solid fa-star theme-clr" style={{color:'#004f39'}}/>
                                                    <i className="fa-solid fa-star theme-clr" style={{color:'#004f39'}}/>
                                                    <i className="fa-solid fa-star theme-clr" style={{color:'#004f39'}}/>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="pra-clr mt-xxl-8 mt-xl-6 mt-lg-5 mt-4" style={{color:'#004f39 !important'}}>
                                            As a beginner in Data Science, the course at E26 Media helped me understand complex concepts easily. Live sessions + hands-on tasks = perfect combination.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-zero-oneitem testimonial-zero-oneitemv3 d-flex align-items-center gap-xxl-6 gap-xl-4 gap-3">
                                     <img src="/assets/img/E26media/elements/line.png" alt="arrow" className="testi-arrow" />
                                    <div className="content">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-3">
                                            {/* <div className="savannah">
                                             <img src="https://xstarnextjs.vercel.app/assets/img/testimonial/testiv3-2.png" alt="img" />
                                            </div> */}
                                            <div className="desig">
                                                <h6 className="white-clr mb-1">
                                                   Ibrahim Kaleel
                                                </h6>
                                                {/* <span className="pra-clr mb-2 d-block">
                                                    Web Designer
                                                </span> */}
                                                <div className="ratting-area d-flex align-items-center gap-2">
                                                    <i className="fa-solid fa-star theme-clr" style={{color:'#004f39'}}/>
                                                    <i className="fa-solid fa-star theme-clr" style={{color:'#004f39'}}/>
                                                    <i className="fa-solid fa-star theme-clr" style={{color:'#004f39'}}/>
                                                    <i className="fa-solid fa-star theme-clr" style={{color:'#004f39'}}/>
                                                    <i className="fa-solid fa-star theme-clr" style={{color:'#004f39'}}/>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="pra-clr mt-xxl-8 mt-xl-6 mt-lg-5 mt-4" style={{color:'#004f39 !important'}}>
                                           This is the first institute where I saw genuine mentorship. They motivate you, correct you, and push you to become better. Loved the experience
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                             <SwiperSlide>
                                <div className="testimonial-zero-oneitem testimonial-zero-oneitemv3 d-flex align-items-center gap-xxl-6 gap-xl-4 gap-3">
                                    <img src="/assets/img/E26media/elements/line.png" alt="arrow" className="testi-arrow" />
                                    <div className="content">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-3">
                                            {/* <div className="savannah">
                                                <img src="https://xstarnextjs.vercel.app/assets/img/testimonial/testiv3-2.png" alt="img" />
                                            </div> */}
                                            <div className="desig">
                                                <h6 className="white-clr mb-1">
                                                    
Mohammed Safwan
                                                </h6>
                                                {/* <span className="pra-clr mb-2 d-block">
                                                   Intern
                                                </span> */}
                                                <div className="ratting-area d-flex align-items-center gap-2">
                                                    <i className="fa-solid fa-star theme-clr" style={{color:'#004f39'}}/>
                                                    <i className="fa-solid fa-star theme-clr" style={{color:'#004f39'}}/>
                                                    <i className="fa-solid fa-star theme-clr" style={{color:'#004f39'}}/>
                                                    <i className="fa-solid fa-star theme-clr" style={{color:'#004f39'}}/>
                                                    <i className="fa-solid fa-star theme-clr" style={{color:'#004f39'}}/>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="pra-clr mt-xxl-8 mt-xl-6 mt-lg-5 mt-4"  style={{color:'#004f39 !important'}}>
                                            I had a great experience learning Digital Marketing here. The course structure is well-organized, and concepts like SEO, social media marketing, and Google Ads were explained clearly with practical examples. Trainers are supportive and knowledgeable. Highly recommended for beginners and professionals looking to upgrade their skills
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
            <style>
                {`
                p{
                color:#004f39 !important
                }`}
            </style>
        </div>
    )
}
