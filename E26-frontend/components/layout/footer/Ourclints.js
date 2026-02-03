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
    { id: 1, img: "/assets/img/client/c1.png" },
    { id: 2, img: "/assets/img/client/c2.png" },
    { id: 3, img: "/assets/img/client/c3.png" },
    { id: 4, img: "/assets/img/client/c4.png" },
    { id: 5, img: "/assets/img/client/c5.png" },
    { id: 6, img: "/assets/img/client/c1.png" },
    { id: 7, img: "/assets/img/client/c2.png" },
    { id: 8, img: "/assets/img/client/c3.png" },
    { id: 9, img: "/assets/img/client/c4.png" },
    { id: 10, img: "/assets/img/client/c5.png" },
]

export default function Ourclints() {
    return (
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


              <section className="pt-space pb-space section-bg">
                        <div className="container">
                            <div className="row g-6 justify-content-between">
                                <div className="col-lg-6 pe-lg-14">
                                    <div className="d-flex gap-xxl-7 gap-xl-5 gap-4 position-relative z-index-1">
                                        <div className="about-small-thumb w-100" data-aos="zoom-in" data-aos-duration={1500}>
                                            <img src="/assets/img/about/about-s1.png" alt="img" className="w-100" />
                                        </div>
                                        <div className="about-small-thumb w-100 mt-xxl-10 mt-xl-7 mt-lg-5 mt-3" data-aos="zoom-in" data-aos-duration={1800}>
                                            <img src="/assets/img/about/about-s2.png" alt="img" className="w-100" />
                                        </div>
                                        {/*- About Arrow */}
                                        <img src="/assets/img/element/arrow-right-storke.png" alt="img" className="about-tumb-arrow" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-samll-content">
                                        <div className="pricing-title">
                                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5" data-aos="zoom-in-left" data-aos-duration={1400}>
                                                ABOUT XSTAR
                                            </div>
                                            <h2 className="stitle d-flex align-items-center mb-xxl-8 mb-xl-7 mb-lg-6 mb-5 gap-xxl-7 gap-xl-5 gap-3" data-aos="zoom-in-left" data-aos-duration={1700}>
                                                <img src="/assets/img/element/arrow-right-storke.png" alt="img" data-aos="zoom-in-up" data-aos-duration={2000} />
                                                To Create Artistic &amp; Creative Design
                                            </h2>
                                            <p className="white-clr mb-xxl-8 mb-xl-8 mb-5" data-aos="zoom-in-up" data-aos-duration={1400}>
                                                Bring to the table win-win survival strategies to ensure proactive domination. At
                                                the end of the day, going forward, a
                                                new normal that has evolved from generation on the runway heading towards a
                                                streamlined cloud.
                                            </p>
                                            <div className="result-progress-wrap" data-aos="zoom-in-up" data-aos-duration={1800}>
                                                <div className="progres-item mb-xxl-6 mb-xl-5 mb-4">
                                                    <div className="d-flex align-items-center justify-content-between mb-xxl-4 mb-3">
                                                        <span className="conssub">
                                                            Branding Design
                                                        </span>
                                                        <span className="cons">88%</span>
                                                    </div>
                                                    <div className="progress-solving">
                                                        <div className="progress-bar" />
                                                    </div>
                                                </div>
                                                <div className="progres-item">
                                                    <div className="d-flex align-items-center justify-content-between mb-xxl-4 mb-3">
                                                        <span className="conssub">
                                                            Business
                                                        </span>
                                                        <span className="cons">96%</span>
                                                    </div>
                                                    <div className="progress-solving">
                                                        <div className="progress-bar" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

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
    )
}