
import Link from "next/link"

export default function Blog5() {
    
    return (
        <div className="mainbox">

            <section className="home-blog-version4 pb-space   position-relative" id='roundBox'>
                <div className="container zindex position-relative">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-15 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
                        <div className="pricing-title">
                            {/* <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5" >
                                BLOG &amp; News
                            </div> */}
                            <h2 className="stitle" >
{/* Our <span className="fw-400" >Our Services</span> */}
                                <span className="d-block fw-semibold  mt-10" >
                                    Our Services
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
                                    <img src="/assets/img/E26media/service/Website-Development.png" alt="img" className="w-100 overflow-hidden"  style={{borderRadius:'20px'}}/>
                                    <Link href="/" className="blog-v4-btn d-center" style={{backgroundColor:'#004f39',margin:'10px'}}>
                                        <span className="rot60">
                                            <i className="fa-solid fa-arrow-up" style={{color:'white'}} />
                                        </span>
                                    </Link>
                                </div>
                                <div className="blog-cont">
                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                        {/* <Link href="/blog-details" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-1">
                                            Creative
                                            <span className="rot60 d-inline-block ml-10">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link> */}
                                        {/* <span className="bspan-clr">
                                            MARCH 24, 2024
                                        </span> */}
                                    </div>
                                    <h5>
                                        <Link href="/" id="white-clr" style={{textAlign:'center !impotent'}}>
                                            Website Development
                                        </Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-widget-itemv4">
                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4 position-relative">
                                    <img src="/assets/img/E26media/service/Software Development.png" alt="img" className="w-100 overflow-hidden" style={{borderRadius:'20px'}} />
                                    <Link href="/" className="blog-v4-btn d-center" style={{backgroundColor:'#004f39',margin:'10px'}}>
                                        <span className="rot60" >
                                            <i className="fa-solid fa-arrow-up"  style={{color:'white'}} />
                                        </span>
                                    </Link>
                                </div>
                                <div className="blog-cont">
                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                        {/* <Link href="/blog-details" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-1">
                                            Creative
                                            <span className="rot60 d-inline-block ml-10">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link> */}
                                        {/* <span className="bspan-clr">
                                            MARCH 24, 2024
                                        </span> */}
                                    </div>
                                    <h5>
                                        <Link href="/" id="white-clr" >
                                          Software Development
                                        </Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-widget-itemv4">
                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4 position-relative">
                                    <img src="/assets/img/E26media/service/Mobile App Development.png" alt="img" className="w-100 overflow-hidden"  style={{borderRadius:'20px'}}/>
                                    <Link href="/" className="blog-v4-btn d-center" style={{backgroundColor:'#004f39',margin:'10px'}}>
                                        <span className="rot60" >
                                            <i className="fa-solid fa-arrow-up"  style={{color:'white'}} />
                                        </span>
                                    </Link>
                                </div>
                                <div className="blog-cont">
                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                        {/* <Link href="/blog-details" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-1">
                                            Creative
                                            <span className="rot60 d-inline-block ml-10">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link> */}
                                        {/* <span className="bspan-clr">
                                            MARCH 24, 2024
                                        </span> */}
                                    </div>
                                    <h5>
                                        <Link href="/" id="white-clr" >
                                           Mobile App Development
                                        </Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-widget-itemv4">
                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4 position-relative">
                                    <img src="/assets/img/E26media/service/Automation Services.png" alt="img" className="w-100 overflow-hidden" style={{borderRadius:'20px'}}/>
                                    <Link href="/" className="blog-v4-btn d-center" style={{backgroundColor:'#004f39',margin:'10px'}}>
                                        <span className="rot60" >
                                            <i className="fa-solid fa-arrow-up"  style={{color:'white'}} />
                                        </span>
                                    </Link>
                                </div>
                                <div className="blog-cont">
                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                        {/* <Link href="/blog-details" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-1">
                                            Creative
                                            <span className="rot60 d-inline-block ml-10">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link> */}
                                        {/* <span className="bspan-clr">
                                            MARCH 24, 2024
                                        </span> */}
                                    </div>
                                    <h5>
                                        <Link href="/" id="white-clr" >
                                           Automation Services
                                        </Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-widget-itemv4">
                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4 position-relative">
                                    <img src="/assets/img/E26media/service/Digital Marketing.png" alt="img" className="w-100 overflow-hidden" style={{borderRadius:'20px'}} />
                                    <Link href="/" className="blog-v4-btn d-center" style={{backgroundColor:'#004f39',margin:'10px'}}>
                                        <span className="rot60" >
                                            <i className="fa-solid fa-arrow-up"  style={{color:'white'}}/>
                                        </span>
                                    </Link>
                                </div>
                                <div className="blog-cont">
                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                        {/* <Link href="/blog-details" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-1">
                                            Creative
                                            <span className="rot60 d-inline-block ml-10">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link> */}
                                        {/* <span className="bspan-clr">
                                            MARCH 24, 2024
                                        </span> */}
                                    </div>
                                    <h5>
                                        <Link href="/" id="white-clr" >
                                          Digital Marketing
                                        </Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="blog-widget-itemv4">
                                <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4 position-relative">
                                    <img src="/assets/img/E26media/service/Creative Picks.png" alt="img" className="w-100 overflow-hidden"  style={{borderRadius:'20px'}} />
                                    <Link href="/" className="blog-v4-btn d-center" style={{backgroundColor:'#004f39',margin:'10px'}}>
                                        <span className="rot60">
                                            <i className="fa-solid fa-arrow-up"   style={{color:'white'}}/>
                                        </span>
                                    </Link>
                                </div>
                                <div className="blog-cont">
                                    <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                        {/* <Link href="/blog-details" className="radius-btn cmn-border radius100 py-xxl-1 py-1 px-xxl-4 px-3 theme-clr style-1">
                                            Creative
                                            <span className="rot60 d-inline-block ml-10">
                                                <i className="fas fa-arrow-up theme-clr" />
                                            </span>
                                        </Link> */}
                                        {/* <span className="bspan-clr">
                                            MARCH 24, 2024
                                        </span> */}
                                    </div>
                                    <h5>
                                        <Link href="/" id="white-clr" >
                                       Creative Picks
                                        </Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           <style>
  {`
    h5 {
      text-align: center;
      margin-top: -20px !important;
    }
  `}
</style>

        </div>
    )
}
