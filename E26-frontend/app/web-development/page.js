
'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Testimonial3 from "@/components/sections/Testimonial3"

  const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 5,
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
            slidesPerView: 3,
        },
        767: {
            slidesPerView: 3,
        },
        575: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    },
}
 

export default function StudyGrid() {



 
    return (
        <>

            <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="web development">

<br/>
              <div className="mainbox-pages">

            <section className="home-blog-version4 pb-space pt-space  position-relative" id='mainbox-pages' >
                <div className="container zindex position-relative">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-15 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
                        <div className="pricing-title">
                            {/* <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5" >
                                BLOG &amp; News
                            </div> */}
                            <h2 className="stitle" >
                                Check Our <span className="fw-400" >Company</span>
                                <span className="d-block fw-semibold" >
                                    Inside Story
                                </span>
                            </h2>
                        </div>
                        {/* <Link href="/blog-grid"  className="radius-btn d-inline-flex radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5 style-1">
                            View all Artcile
                            <span className="rot60 d-inline-block" >
                                <i className="fas fa-arrow-up" />
                            </span>
                        </Link> */}
                    </div>
                    <div className="row g-xxl-7 g-xl-6 g-4">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-widget-itemv4">
                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4 position-relative">
                                    <img src="https://xstarnextjs.vercel.app/assets/img/blog/blogv4-2.png" alt="img" className="w-100 overflow-hidden" />
                                    <Link href="/business-website" className="blog-v4-btn d-center">
                                        <span className="rot60">
                                            <i className="fa-solid fa-arrow-up" />
                                        </span>
                                    </Link>
                                </div>
                                <div className="blog-cont">
                                    {/* <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                        <Link href="/blog-details" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-1">
                                            Creative
                                            <span className="rot60 d-inline-block ml-10">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link>
                                        <span className="bspan-clr">
                                            MARCH 24, 2024
                                        </span>
                                    </div> */}
                                    <h5>
                                        <Link href="/business-website" id="white-clr">
                                           Business & corporate websites

                                        </Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-widget-itemv4">
                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4 position-relative">
                                    <img src="https://xstarnextjs.vercel.app/assets/img/blog/blogv4-3.png" alt="img" className="w-100 overflow-hidden" />
                                    <Link href="/blog-details" className="blog-v4-btn d-center" >
                                        <span className="rot60" >
                                            <i className="fa-solid fa-arrow-up" />
                                        </span>
                                    </Link>
                                </div>
                                <div className="blog-cont">
                                    {/* <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                        <Link href="/blog-details" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-1">
                                            Creative
                                            <span className="rot60 d-inline-block ml-10">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link>
                                        <span className="bspan-clr">
                                            MARCH 24, 2024
                                        </span>
                                    </div> */}
                                    <h5>
                                        <Link href="/blog-details" id="white-clr">
                                            E-commerce websites

                                        </Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-widget-itemv4">
                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4 position-relative">
                                    <img src="https://xstarnextjs.vercel.app/assets/img/blog/blogv4-2.png" alt="img" className="w-100 overflow-hidden" />
                                    <Link href="/blog-details" className="blog-v4-btn d-center">
                                        <span className="rot60">
                                            <i className="fa-solid fa-arrow-up" />
                                        </span>
                                    </Link>
                                </div>
                                <div className="blog-cont">
                                    {/* <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                        <Link href="/blog-details" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-1">
                                            Creative
                                            <span className="rot60 d-inline-block ml-10">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link>
                                        <span className="bspan-clr">
                                            MARCH 24, 2024
                                        </span>
                                    </div> */}
                                    <h5>
                                        <Link href="/blog-details" id="white-clr">
                                         Portfolio & landing pages
                                        </Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-widget-itemv4">
                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4 position-relative">
                                    <img src="https://xstarnextjs.vercel.app/assets/img/blog/blogv4-2.png" alt="img" className="w-100 overflow-hidden" />
                                    <Link href="/blog-details" className="blog-v4-btn d-center">
                                        <span className="rot60">
                                            <i className="fa-solid fa-arrow-up" />
                                        </span>
                                    </Link>
                                </div>
                                <div className="blog-cont">
                                    {/* <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                        <Link href="/blog-details" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-1">
                                            Creative
                                            <span className="rot60 d-inline-block ml-10">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link>
                                        <span className="bspan-clr">
                                            MARCH 24, 2024
                                        </span>
                                    </div> */}
                                    <h5>
                                        <Link href="/blog-details" id="white-clr">
                                           Custom CMS development

                                        </Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-widget-itemv4">
                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4 position-relative">
                                    <img src="https://xstarnextjs.vercel.app/assets/img/blog/blogv4-2.png" alt="img" className="w-100 overflow-hidden" />
                                    <Link href="/blog-details" className="blog-v4-btn d-center">
                                        <span className="rot60">
                                            <i className="fa-solid fa-arrow-up" />
                                        </span>
                                    </Link>
                                </div>
                                <div className="blog-cont">
                                    {/* <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                        <Link href="/blog-details" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-1">
                                            Creative
                                            <span className="rot60 d-inline-block ml-10">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link>
                                        <span className="bspan-clr">
                                            MARCH 24, 2024
                                        </span>
                                    </div> */}
                                    <h5>
                                        <Link href="/blog-details" id="white-clr">
                                           Website maintenance & support

                                        </Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>




                {/* <section className="case-study pt-space pb-space">
                    <div className="container">
                        <div className="row g-xxl-7 g-xl-6 g-6">
                            <div className="col-lg-6 col-md-6" data-aos="zoom-in-left" data-aos-duration={1400}>
                                <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                        <img src="/assets/img/case/study-grid1.png" alt="img" className="w-100 overflow-hidden" />
                                    </div>
                                    <div className="blog-cont">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                            <Link href="/study-details" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2">
                                                Creative
                                                <span className="rot60 d-inline-block ml-10">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </div>
                                        <h5>
                                            <Link href="/study-details" className="white-clr d-flex align-items-center justify-content-between gap-3">
                                                A Simple Social Media Marketing Checklist
                                                <span className="rot60">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6" data-aos="zoom-in-left" data-aos-duration={1600}>
                                <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                        <img src="/assets/img/case/study-grid2.png" alt="img" className="w-100 overflow-hidden" />
                                    </div>
                                    <div className="blog-cont">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                            <Link href="/study-details" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2">
                                                Branding
                                                <span className="rot60 d-inline-block ml-10">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </div>
                                        <h5>
                                            <Link href="/study-details" className="white-clr d-flex align-items-center justify-content-between gap-3">
                                                Transforming Challenges into Opportunities
                                                <span className="rot60">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6" data-aos="zoom-in-left" data-aos-duration={1800}>
                                <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                        <img src="/assets/img/case/study-grid3.png" alt="img" className="w-100 overflow-hidden" />
                                    </div>
                                    <div className="blog-cont">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                            <Link href="/study-details" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2">
                                                Creative
                                                <span className="rot60 d-inline-block ml-10">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </div>
                                        <h5>
                                            <Link href="/study-details" className="white-clr d-flex align-items-center justify-content-between gap-3">
                                                varius suscipit lectus. Suspendisse
                                                <span className="rot60">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6" data-aos="zoom-in-left" data-aos-duration={1900}>
                                <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                        <img src="/assets/img/case/study-grid4.png" alt="img" className="w-100 overflow-hidden" />
                                    </div>
                                    <div className="blog-cont">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                            <Link href="/study-details" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2">
                                                Branding
                                                <span className="rot60 d-inline-block ml-10">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </div>
                                        <h5>
                                            <Link href="/study-details" className="white-clr d-flex align-items-center justify-content-between gap-3">
                                                Internet tend to repeat predefined
                                                <span className="rot60">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6" data-aos="zoom-in-left" data-aos-duration={2100}>
                                <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                        <img src="/assets/img/case/study-grid5.png" alt="img" className="w-100 overflow-hidden" />
                                    </div>
                                    <div className="blog-cont">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                            <Link href="/study-details" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2">
                                                Creative
                                                <span className="rot60 d-inline-block ml-10">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </div>
                                        <h5>
                                            <Link href="/study-details" className="white-clr d-flex align-items-center justify-content-between gap-3">
                                                available, but the majority have
                                                <span className="rot60">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6" data-aos="zoom-in-left" data-aos-duration={2200}>
                                <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                        <img src="/assets/img/case/study-grid6.png" alt="img" className="w-100 overflow-hidden" />
                                    </div>
                                    <div className="blog-cont">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                            <Link href="/study-details" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2">
                                                Branding
                                                <span className="rot60 d-inline-block ml-10">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </div>
                                        <h5>
                                            <Link href="/study-details" className="white-clr d-flex align-items-center justify-content-between gap-3">
                                                Transforming Challenges into Opportunities
                                                <span className="rot60">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
               
    <section className="case-study  pb-space" style={{backgroundColor:'white'}}>
                    <div className="container">
                      
                        <div className="case-study-detials-inner">
                            
                           
                          
                            
                            <div className="swiper study-slidewrap py-xxl-15 py-xl-10 py-9">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="study-thumb-slide w-100">
                                            <img src="https://xstarnextjs.vercel.app/assets/img/blog/blogv3-big.png" alt="img" className="w-100" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="study-thumb-slide w-100">
                                            <img src="https://xstarnextjs.vercel.app/assets/img/blog/blogv3-big.png" alt="img" className="w-100" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="study-thumb-slide w-100">
                                            <img src="https://xstarnextjs.vercel.app/assets/img/blog/blogv3-big.png" alt="img" className="w-100" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="study-thumb-slide w-100">
                                            <img src="https://xstarnextjs.vercel.app/assets/img/blog/blogv3-big.png" alt="img" className="w-100" />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="slider-button d-flex align-items-center justify-content-between py-xxl-6 py-xl-5 py-4">
                                <div className="d-flex align-items-center gap-xxl-5 gap-3 gap-2">
                                    <button className="cmn-prev cmn-border d-center">
                                        <i className="fas fa-chevron-left" />
                                    </button>
                                    <span className="fw-bold white-clr previus-text text-capitalize">
                                        previous
                                    </span>
                                </div>
                                <h3 className="project-storke">
                                    Projects
                                </h3>
                                <div className="d-flex align-items-center gap-xxl-5 gap-3 gap-2">
                                    <span className="fw-bold white-clr previus-text text-capitalize">
                                        Next
                                    </span>
                                    <button className="cmn-next cmn-border d-center">
                                        <i className="fas fa-chevron-right" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                  {/* <Testimonial3 /> */}
                

            </Layout>
        </>
    )
}