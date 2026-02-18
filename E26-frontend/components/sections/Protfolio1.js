

'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },

    breakpoints: {
        1199: {
            slidesPerView: 2,
        },
    },
}

export default function Protfolio1() {
    return (
        <>

            <section className="protfolio-solution pb-space  " style={{backgroundColor:'white',marginTop:'-30px',marginBottom:'-20px'}}>
                <div className="container">
                    <div className="swiper protfolio-solutionwrap">
                          <div className="pricing-title" >
                           
                            <h4 style={{color:'#004f39',textAlign:'start !important',marginBottom:'10px'}}>
                       Work That Speaks
                            </h4>
                        </div>
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                              <SwiperSlide>
                                <div className="protfolio-solution-item">
                                    <div className="thumb position-relative mb-xxl-7 mb-5">
                                        <img src="/assets/img/E26media/works/Tawakkal.png" alt="img" />
                                        <Link href="/" className="mission-v4-btn d-center">
                                            <span className="rot60">
                                               <i className="fa-solid fa-arrow-up " style={{color:"white"}}/>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="content bb-border pb-xxl-7 pb-5 d-flex align-items-center gap-xxl-7 gap-xl-5 gap-4">
                                         <img src="/assets/img/E26media/elements/arrow-right-storke.png"  alt="img" />
                                        <Link href="/" className="cont">
                                            <h4 className="white-clr">
                                                Tawakkal Muslim
                                                {/* <span className="d-block" style={{color:"#004f39"}}>
                                                    and Solutions
                                                </span> */}
                                            </h4>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>

                              <SwiperSlide>
                                <div className="protfolio-solution-item">
                                    <div className="thumb position-relative mb-xxl-7 mb-5">
                                        <img src="/assets/img/E26media/works/HEVN.png" alt="img" />
                                        <Link href="/" className="mission-v4-btn d-center">
                                            <span className="rot60">
                                               <i className="fa-solid fa-arrow-up " style={{color:"white"}}/>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="content bb-border pb-xxl-7 pb-5 d-flex align-items-center gap-xxl-7 gap-xl-5 gap-4">
                                         <img src="/assets/img/E26media/elements/arrow-right-storke.png"  alt="img" />
                                        <Link href="/" className="cont">
                                            <h4 className="white-clr">
                                                HEVN
                                                {/* <span className="d-block" style={{color:"#004f39"}}>
                                                    and Solutions
                                                </span> */}
                                            </h4>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>


                             <SwiperSlide>
                                <div className="protfolio-solution-item">
                                    <div className="thumb position-relative mb-xxl-7 mb-5">
                                      <img src="/assets/img/E26media/works/Nava.png" alt="img" />
                                        <Link href="/" className="mission-v4-btn d-center">
                                            <span className="rot60">
                                                <i className="fa-solid fa-arrow-up " style={{color:"white"}}/>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="content bb-border pb-xxl-7 pb-5 d-flex align-items-center gap-xxl-7 gap-xl-5 gap-4">
                                         <img src="/assets/img/E26media/elements/arrow-right-storke.png"  alt="img" />
                                        <Link href="/" className="cont">
                                            <h4 className="white-clr">
                                              Wafa Enterprises

                                              
                                            </h4>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>



                            <SwiperSlide>
                                <div className="protfolio-solution-item">
                                    <div className="thumb position-relative mb-xxl-7 mb-5">
                                        <img src="/assets/img/E26media/works/Nava.png" alt="img" />
                                        <Link href="/" className="mission-v4-btn d-center">
                                            <span className="rot60">
                                                <i className="fa-solid fa-arrow-up " style={{color:"white"}}/>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="content bb-border pb-xxl-7 pb-5 d-flex align-items-center gap-xxl-7 gap-xl-5 gap-4">
                                        <img src="/assets/img/E26media/elements/arrow-right-storke.png"  alt="img" />
                                        <Link href="/" className="cont">
                                            <h4 className="white-clr" >
                                               Tabiaa
                                                <span className="d-block" style={{color:"#004f39"}}>
                                                    Nature's Product
                                                </span>
                                            </h4>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                          
                            <SwiperSlide>
                                <div className="protfolio-solution-item">
                                    <div className="thumb position-relative mb-xxl-7 mb-5">
                                        <img src="/assets/img/E26media/works/Nava.png" alt="img" />
                                        <Link href="/" className="mission-v4-btn d-center">
                                            <span className="rot60">
                                                <i className="fa-solid fa-arrow-up " style={{color:"white"}}/>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="content bb-border pb-xxl-7 pb-5 d-flex align-items-center gap-xxl-7 gap-xl-5 gap-4">
                                        <img src="/assets/img/E26media/elements/arrow-right-storke.png"  alt="img" />
                                        <Link href="/" className="cont">
                                            <h4 className="white-clr">
                                               Nava Nirman
                                                {/* <span className="d-block" style={{color:"#004f39"}}>
                                                    and Solutions
                                                </span> */}
                                            </h4>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                           
                            <SwiperSlide>
                                <div className="protfolio-solution-item">
                                    <div className="thumb position-relative mb-xxl-7 mb-5">
                                      <img src="/assets/img/E26media/works/abhiruchi.png" alt="img" />
                                        <Link href="/" className="mission-v4-btn d-center">
                                            <span className="rot60">
                                                <i className="fa-solid fa-arrow-up " style={{color:"white"}}/>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="content bb-border pb-xxl-7 pb-5 d-flex align-items-center gap-xxl-7 gap-xl-5 gap-4">
                                         <img src="/assets/img/E26media/elements/arrow-right-storke.png"  alt="img" />
                                        <Link href="/" className="cont">
                                            <h4 className="white-clr">
                                            Abhiruchi 

                                                {/* <span className="d-block" style={{color:"#004f39"}}>
                                                    and Solutions
                                                </span> */}
                                            </h4>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="protfolio-solution-item">
                                    <div className="thumb position-relative mb-xxl-7 mb-5">
                                      <img src="/assets/img/E26media/works/Nava.png" alt="img" />
                                        <Link href="/" className="mission-v4-btn d-center">
                                            <span className="rot60">
                                                <i className="fa-solid fa-arrow-up " style={{color:"white"}}/>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="content bb-border pb-xxl-7 pb-5 d-flex align-items-center gap-xxl-7 gap-xl-5 gap-4">
                                         <img src="/assets/img/E26media/elements/arrow-right-storke.png"  alt="img" />
                                        <Link href="/" className="cont">
                                            <h4 className="white-clr">
                                            Al Mirath

                                                {/* <span className="d-block" style={{color:"#004f39"}}>
                                                    and Solutions
                                                </span> */}
                                            </h4>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="protfolio-solution-item">
                                    <div className="thumb position-relative mb-xxl-7 mb-5">
                                      <img src="/assets/img/E26media/works/Nava.png" alt="img" />
                                        <Link href="/" className="mission-v4-btn d-center">
                                            <span className="rot60">
                                                <i className="fa-solid fa-arrow-up " style={{color:"white"}}/>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="content bb-border pb-xxl-7 pb-5 d-flex align-items-center gap-xxl-7 gap-xl-5 gap-4">
                                         <img src="/assets/img/E26media/elements/arrow-right-storke.png"  alt="img" />
                                        <Link href="/" className="cont">
                                            <h4 className="white-clr">
                                           Chetanas

                                                {/* <span className="d-block" style={{color:"#004f39"}}>
                                                    and Solutions
                                                </span> */}
                                            </h4>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="protfolio-solution-item">
                                    <div className="thumb position-relative mb-xxl-7 mb-5">
                                      <img src="/assets/img/E26media/works/Nava.png" alt="img" />
                                        <Link href="/" className="mission-v4-btn d-center">
                                            <span className="rot60">
                                                <i className="fa-solid fa-arrow-up " style={{color:"white"}}/>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="content bb-border pb-xxl-7 pb-5 d-flex align-items-center gap-xxl-7 gap-xl-5 gap-4">
                                         <img src="/assets/img/E26media/elements/arrow-right-storke.png"  alt="img" />
                                        <Link href="/" className="cont">
                                            <h4 className="white-clr">
                                           Melkar

                                                <span className="d-block" style={{color:"#004f39"}}>
                                                    Builders & Developers Pvt.ltd
                                                </span>
                                            </h4>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="swiper-pagination" />
                    </div>
                </div>
            </section>
        </>
    )
}
