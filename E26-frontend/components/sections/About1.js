import Link from "next/link"
import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('../elements/CounterUp'), {
    ssr: false,
})

export default function About1() {
    return (
        <>
            <section className="about-product pt-space pb-20">
                <div className="container">
                    <div className="row g-xxl-7 g-lg-5 g-7">
                        <div className="col-lg-6">
                            <div className="about-product-thumb w-100" data-aos="zoom-in" data-aos-duration={2000}>
                                <img 
                                    src="https://www.kambala.co.in/wp-content/uploads/2024/08/Kambala-Solutions.png" 
                                    alt="img" 
                                    className="w-100" 
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-product-content about-content-v02 ps-xxl-10">
                                <div className="pricing-title">
                                    <h2 
                                        className="stitle mb-xxl-8 mb-xl-7 mb-xl-5 mb-4" 
                                        data-aos="fade-up" 
                                        data-aos-duration={1600} 
                                        style={{color:"#004f39"}}
                                    >
                                        Join E26 Media
                                    </h2>
                                    <div 
                                        className="d-flex flex-sm-nowrap flex-wrap align-items-center gap-xxl-10 gap-7 gap-md-5 gap-4 mb-xxl-11 mb-xl-10 mb-lg-9 mb-md-7 mb-6" 
                                        data-aos="fade-up" 
                                        data-aos-duration={1900}
                                    >
                                        <p style={{color:'#004f39'}}>
                                            Bring to the table win-win survival strategies to ensure proactive domination.
                                            At the end of the day, going
                                        </p>
                                    </div>

                                    {/* Updated button with Next.js Link */}
                                    <Link 
                                        href="/careers" 
                                        className="btn btn-primary px-4 py-2" 
                                        style={{background:"#004f39", borderColor:"#004f39"}}
                                    >
                                        View Open Positions
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


