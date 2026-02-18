'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 10,
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
        575: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
}
export default function Tawakkalmuslim() {

    return (
        <>

            <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Case Study Details" >
                <section className="case-study pt-space pb-space">
                    <div className="container">
                        <div className="row g-xxl-7 g-xl-6 g-5 mb-xxl-13 mb-10">
                            <div className="col-lg-8">
                                <div className="case-thumb1 w-100" data-aos="zoom-in" data-aos-duration={1500}>
                                    <img src="/assets/img/E26media/works/Tawakkal.png" alt="img" className="w-100 custom-img-border" />
                                </div>
                            </div>
                            <div className="col-lg-4" data-aos="zoom-in-left" data-aos-duration={1600}>
                                <div className="case-content-box bg1-clr py-xxl-10 py-xl-9 py-lg-8 py-6 px-xxl-10 px-xl-8 px-lg-6 px-5">
                                      <Link href="/#" download="#" className="d-flex align-items-center justify-content-center w-100 fw-semibold py-xxl-4 py-xl-3 py-2 px-3 gap-2 themebg text-whites">
                                        <h5>Branding</h5>
                                    </Link>
                                    <br/>
                                    <ul className="case-infobox mb-xxl-12 mb-xl-10 mb-lg-8 mb-7">
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                Industry:
                                            </span>
                                            <span className="white-clr">
                                                Organic Health Products


                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                Platform:
                                            </span>
                                            <span className="white-clr">
                                               Brand Identity Development

                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                               Service:
                                            </span>
                                            <span className="white-clr">
                                              Branding Strategy & Identity Design

                                            </span>
                                        </li>
                                        
                                        
                                    </ul>
                                    {/* <Link href="/#" download="#" className="d-flex align-items-center justify-content-center w-100 fw-semibold py-xxl-4 py-xl-3 py-2 px-3 gap-2 themebg text-whitess">
                                        <i className="fas fa-file-alt" style={{color:'white  !important '}} />
                                        <span className="text-whitess"  style={{color:'white  !important '}}>
                                            Download Docs
                                        </span>
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                        <div className="case-study-detials-inner">
                            <div className="interesting-fact">
                                <h2 className="white-clr mb-6" >
                                  Tabiaa Organic – Brand Identity & Design
                                </h2>
                               
                                 <div 
  className="d-flex flex-wrap align-items-center gap-xxl-5 gap-xl-3 gap-2" 
  data-aos="zoom-in-left" 
  data-aos-duration={1800}
>
  <Link 
    href="/service-details" 
    className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3"
    style={{ color: "#004f39", borderColor: "#004f39" }}
  >
   Branding
  </Link>

  <Link 
    href="/service-details" 
    className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3"
    style={{ color: "#004f39", borderColor: "#004f39" }}
  >
     Graphic Design

  </Link>

  
                                </div>
                                <h3 className="mt-3"></h3>

                                
                                
                            </div>
                            
                            <h4 className="mb-xxl-7 mb-4 white-clr mt-2">
                               Project Overview
                            </h4>
                            <div className="d-flex flex-md-nowrap flex-wrap justify-content-between gap-xxl-15 gap-xl-10 gap-lg-7 gap-sm-5 gap-3 ">
                                <p className="pra-clr " style={{color:'#004f39 !important '}}>
                                   Tabiaa Organic Health Products is a health-focused brand offering organic and natural products aimed at promoting wellness and a chemical-free lifestyle. The objective of the branding project was to create a clean, trustworthy, and nature-inspired identity that reflects purity, authenticity, and quality. The brand needed to visually communicate its commitment to organic living while building strong recognition in a competitive health market.


                                </p>
                                {/* <p  style={{color:'#004f39 !important '}}>
                                    Fusce egestas nisi vel ipsum vehicula facilisis. In pulvinar imperdiet venenatis. Class
                                    aptent taciti sociosqu ad litora
                                    torquent per conubia nostra, per inceptos himenaeos. Donec eu pulvinar lorem. Etiam
                                    vestibulum ligula quis nisl feugiat,
                                    consectetur placerat augue vestibulum.
                                </p> */}
                            </div>
                            <div className="row g-xxl-7 g-4 py-xxl-15 py-9">
                                <div className="col-sm-6">
                                    <div className="challenge-thumb w-100" >
                                        <img src="/assets/img/E26media/works/abhiruchi.png" alt="img" className="w-100"  id='challenge-thumb'/>
                                    </div>
                                </div>
                                <div className="col-sm-6" >
                                    <div className="challenge-thumb w-100" >
                                        <img src="/assets/img/E26media/works/Nava.png" alt="img" className="w-100" id='challenge-thumb' />
                                    </div>
                                </div>
                            </div>


<h4 className="mb-xxl-7 mb-4 white-clr mt-2">
                              Our Development Approach
                            </h4>
                                 <div className="d-flex flex-md-nowrap flex-wrap justify-content-between gap-xxl-15 gap-xl-10 gap-lg-7 gap-sm-5 gap-3 ">
                                <p className="pra-clr " style={{color:'#004f39 !important '}}>
                                 Tabiaa Organic Health Products developed a strong and nature-inspired brand identity supported by strategic branding and packaging design. The project focused on creating a clean, trustworthy, and premium visual system that reflects purity, authenticity, and organic living. From logo development and earthy color selection to structured packaging layouts and promotional creatives, every element was designed to maintain consistency across digital and physical platforms. The cohesive branding and graphic design approach strengthened product presentation, improved market recognition, and positioned the brand competitively within the organic health industry.



                                </p>
                                {/* <p  style={{color:'#004f39 !important '}}>
                                    Fusce egestas nisi vel ipsum vehicula facilisis. In pulvinar imperdiet venenatis. Class
                                    aptent taciti sociosqu ad litora
                                    torquent per conubia nostra, per inceptos himenaeos. Donec eu pulvinar lorem. Etiam
                                    vestibulum ligula quis nisl feugiat,
                                    consectetur placerat augue vestibulum.
                                </p> */}
                            </div>
                            {/* <div className="finul-result">
                                <h4 className="mb-xxl-7 mb-4 white-clr">
                                    Finial Results Of the Project
                                </h4>
                                <div className="d-md-flex flex-grid align-items-center gap-xxl-20 gap-xl-10 gap-lg-7 gap-md-6 gap-10">
                                    <div className="fiial-result-list mb-md-0 mb-4">
                                        <ul>
                                            <li>
                                                consectetur placerat augue vestibulum
                                            </li>
                                            <li>
                                                consectetur placerat augue vestibulum
                                            </li>
                                            <li>
                                                consectetur placerat augue vestibulum
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                consectetur placerat augue vestibulum
                                            </li>
                                            <li>
                                                consectetur placerat augue vestibulum
                                            </li>
                                            <li>
                                                consectetur placerat augue vestibulum
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="result-progress-wrap">
                                        <div className="progres-item mb-xxl-8 mb-xl-7 mb-6">
                                            <div className="d-flex align-items-center justify-content-between mb-xxl-5 mb-3">
                                                <span className="conssub">
                                                    Problem Solving
                                                </span>
                                                <span className="cons">98%</span>
                                            </div>
                                            <div className="progress-solving">
                                                <div className="progress-bar" />
                                            </div>
                                        </div>
                                        <div className="progres-item">
                                            <div className="d-flex align-items-center justify-content-between mb-xxl-5 mb-3">
                                                <span className="conssub">
                                                    Development
                                                </span>
                                                <span className="cons">100%</span>
                                            </div>
                                            <div className="progress-solving">
                                                <div className="progress-bar" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                          <div className="swiper study-slidewrap py-xxl-15 py-xl-10 py-9">
  <Swiper {...swiperOptions} className="swiper-wrapper">
    <SwiperSlide>
      <div className="study-thumb-slide custom-img-border">
        <img 
          src="/assets/img/E26media/works/abhiruchi.png" 
          alt="Abhiruchi Project"
          className="w-100"
        />
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="study-thumb-slide custom-img-border">
        <img 
          src="/assets/img/E26media/works/Tawakkal.png" 
          alt="Tawakkal Muslim App"
          className="w-100"
        />
      </div>
    </SwiperSlide>
     <SwiperSlide>
      <div className="study-thumb-slide custom-img-border">
        <img 
          src="/assets/img/E26media/works/abhiruchi.png" 
          alt="Abhiruchi Project"
          className="w-100"
        />
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
<style>
    {
        `
        .custom-img-border {
  border: 2px solid #004f39;
  border-radius: 15px;
  overflow: hidden; /* Important for rounded image */
}

.custom-img-border img {
  border-radius: 15px;
}
`
    }
</style>
            </Layout>
        </>
    )
}