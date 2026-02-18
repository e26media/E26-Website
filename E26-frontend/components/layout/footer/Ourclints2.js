'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"


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


export default function Ourclints2() {
    return (
        <>
       <div className="home-blog-version4   bg1-clr position-relative " style={{backgroundColor:'#004F39'}}>
                       <div className="container zindex position-relative ">


  <div className="pricing-title" >
                           
                            <h4  style={{color:'#004f39',textAlign:'center !important',marginBottom:'10px',color:'white'}}>
                                <br/>   
                              Our Valued Partners
                            </h4>
                        </div>
  <div className="footer-client ">
                            {/* <h5 className="trusted white">
                               Our Trust Partner 
                            </h5> */}
                            <div className="swiper trusted-inner mb-10">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <Link href="/javascript:void(0)">
                                            <img src="/assets/img/E26media/clints/1.png" alt="img" />
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link href="/javascript:void(0)">
                                            <img src="/assets/img/E26media/clints/2.png" alt="img" />
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link href="/javascript:void(0)">
                                            <img src="/assets/img/E26media/clints/3.png" alt="img" />
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link href="/javascript:void(0)">
                                            <img src="/assets/img/E26media/clints/4.png" alt="img" />
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link href="/javascript:void(0)">
                                            <img src="/assets/img/E26media/clints/5.png" alt="img" />
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link href="/javascript:void(0)">
                                            <img src="/assets/img/E26media/clints/6.png" alt="img" />
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link href="/javascript:void(0)">
                                            <img src="/assets/img/E26media/clints/7.png" alt="img" />
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link href="/javascript:void(0)">
                                            <img src="/assets/img/E26media/clints/8.png" alt="img" />
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link href="/javascript:void(0)">
                                            <img src="/assets/img/E26media/clints/9.png" alt="img" />
                                        </Link>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Link href="/javascript:void(0)">
                                            <img src="/assets/img/E26media/clints/10.png" alt="img" />
                                        </Link>
                                    </SwiperSlide>
                                   
                                </Swiper>
                            </div>
                        </div>


                           
                           </div>
                           </div>



        
        </>
    )
}