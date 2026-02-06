'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

const swiperOptionsLeft = {
    modules: [Autoplay],
    spaceBetween: 30,
    speed: 2000,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: false,
    },
    allowTouchMove: false,
    freeMode: true,
    freeModeMomentum: false,
    slidesPerView: 'auto',
    breakpoints: {
        1199: {
            slidesPerView: 5,
        },
        991: {
            slidesPerView: 4,
        },
        767: {
            slidesPerView: 2,
        },
        500: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 2,
        },
    },
}

const swiperOptionsRight = {
    modules: [Autoplay],
    spaceBetween: 30,
    speed: 2000,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
    },
    allowTouchMove: false,
    freeMode: true,
    freeModeMomentum: false,
    slidesPerView: 'auto',
    breakpoints: {
        1199: {
            slidesPerView: 5,
        },
        991: {
            slidesPerView: 4,
        },
        767: {
            slidesPerView: 4,
        },
        500: {
            slidesPerView: 3,
        },
        320: {
            slidesPerView: 3,
        },
    },
}

const clients = [
    { id: 1, img: "/assets/img/E26media/clints/clints-logo1.png" },
    { id: 2, img: "/assets/img/E26media/clints/clints-logo1.png" },
    { id: 3, img: "/assets/img/E26media/clints/clints-logo1.png" },
    { id: 4, img: "/assets/img/E26media/clints/clints-logo1.png" },
    { id: 5, img: "/assets/img/E26media/clints/clints-logo1.png" },
    { id: 6, img: "/assets/img/E26media/clints/clints-logo1.png" },
    { id: 7, img: "/assets/img/E26media/clints/clints-logo1.png" },
    { id: 8, img: "/assets/img/E26media/clints/clints-logo1.png" },
    { id: 9, img: "/assets/img/E26media/clints/clints-logo1.png" },
    { id: 10, img: "/assets/img/E26media/clints/clints-logo1.png" },
]

export default function Ourclints() {
    return (
        <>
       <div className="home-blog-version4   bg1-clr position-relative">
                       <div className="container zindex position-relative">
                           <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-15 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
                               <div className="pricing-title">
                                  
                                   <h2 className="stitle">
                                       Check Our <span className="fw-400">Company</span>
                                       <span className="d-block fw-semibold">
                                           Inside Story
                                       </span>
                                   </h2>
                               </div>
                              
                           </div>
                           </div>
                           </div>



        <section className="footer-version-four bg2-clr overflow-hidden ">

            <div className="container position-relative py-20">
                {/* First Swiper - Moves Left to Right */}
                
                <div className="footer-client mb-10">
                    
                    <div className="swiper trusted-inner">
                        <Swiper {...swiperOptionsLeft} className="swiper-wrapper">
                            {clients.map((client) => (
                                <SwiperSlide key={`left-${client.id}`} className="swiper-slide">
                                    <Link href="javascript:void(0)">
                                        <img 
                                            src={client.img} 
                                            alt="client logo" 
                                            className="max-w-full h-auto object-contain"
                                        />
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                {/* Second Swiper - Moves Right to Left */}
                <div className="footer-client">
                    <div className="swiper trusted-inner">
                        <Swiper {...swiperOptionsRight} className="swiper-wrapper">
                            {clients.map((client) => (
                                <SwiperSlide key={`right-${client.id}`} className="swiper-slide">
                                    <Link href="javascript:void(0)">
                                        <img 
                                            src={client.img} 
                                            alt="client logo" 
                                            className="max-w-full h-auto object-contain"
                                        />
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>


             

            <style jsx>{`
                .swiper {
                    overflow: visible;
                }
                
                .swiper-wrapper {
                    transition-timing-function: linear !important;
                }
                
                .swiper-slide {
                    width: auto !important;
                }
            `}</style>
        </section>
        </>
    )
}