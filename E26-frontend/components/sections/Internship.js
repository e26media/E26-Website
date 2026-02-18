'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Courses() {
    return (
        <section className="courses-section pb-space">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between gap-3 mb-4">
                    <h3 className=" white-clr " style={{textAlign:'center'}}>Courses We Offer</h3>
                </div>

                {/* One row with 5 cards */}
                <div className="row g-4 justify-content-center">
                    
                    {/* Card 1 */}
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="course-card shadow-lg rounded overflow-hidden h-100">
                            <img
                                src="/assets/img/E26media/ourmentor/1.png"
                                alt="Advanced MERN Stack Development with AI"
                                className="w-100"
                                style={{borderRadius:'10px'}}
                            />
                            <div className="course-info text-center p-3">
                                <h6 className="mb-2" style={{color:'#004f39',fontSize:'16px'}}>Advanced MERN Stack <br/> Development with AI</h6>
                                <span className="d-block mb-3" style={{color:'#004f39',fontSize:'16px'}}>8 Months | Offline</span>
                                <Link href="/enquire" className="btn ">Enquire Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="course-card shadow-lg rounded overflow-hidden h-100">
                            <img
                                src="/assets/img/E26media/ourmentor/2.png"
                                alt="Advanced Flutter Mobile App Development with AI"
                                className="w-100"
                                style={{borderRadius:'10px'}}
                            />
                            <div className="course-info text-center p-3">
                                <h6 className="mb-2" style={{color:'#004f39',fontSize:'16px'}}>Advanced Flutter Mobile App Development with AI</h6>
                                <span className="d-block mb-3" style={{color:'#004f39',fontSize:'16px'}}>4 Months | Offline</span>
                                <Link href="/enquire" className="btn">Enquire Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="course-card shadow-lg rounded overflow-hidden h-100">
                            <img
                                src="/assets/img/E26media/ourmentor/3.png"
                                alt="Advanced Data Analytics with AI"
                                className="w-100"
                                style={{borderRadius:'10px'}}
                            />
                            <div className="course-info text-center p-3">
                                <h6 className="mb-2" style={{color:'#004f39',fontSize:'16px'}}>Advanced Data Analytics with AI</h6>
                                <span className="d-block mb-3" style={{color:'#004f39',fontSize:'16px'}}>5 Months | Offline</span>
                                <Link href="/enquire" className="btn ">Enquire Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="course-card shadow-lg rounded overflow-hidden h-100">
                            <img
                                src="/assets/img/E26media/ourmentor/4.png"
                                alt="Advanced Data Analytics with AI"
                                className="w-100"
                                style={{borderRadius:'10px'}}
                            />
                            <div className="course-info text-center p-3">
                                <h6 className="mb-2" style={{color:'#004f39',fontSize:'16px'}}>Advanced Data Analytics with AI</h6>
                                <span className="d-block mb-3" style={{color:'#004f39',fontSize:'16px'}}>5 Months | Offline</span>
                                <Link href="/enquire" className="btn ">Enquire Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                   

                    {/* Card 5 */}
                    


                    <style>
                        {
                            `.btn{
                            background-color: #004f39 !important;
                            padding: 10px !important;
                            color:white
                            }
                            // h6{
                            // color:#004f39;
                            // font-size: 16px!important;
                            // }
                            // span{
                            // color:#004f39;
                            // font-size: 16px!important;
                            // }
                            `
                        }
                    </style>

                </div>
            </div>
        </section>
    )
}
