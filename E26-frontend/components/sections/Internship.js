'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Courses() {
    return (
        <section className="courses-section pb-space">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between gap-3 mb-4">
                    <h3 className="related-title white-clr">Courses We Offer</h3>
                </div>

                {/* One row with 5 cards */}
                <div className="row g-4 justify-content-center">
                    
                    {/* Card 1 */}
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="course-card shadow-lg rounded overflow-hidden h-100">
                            <img
                                src="https://harisandcoacademy.com/wp-content/uploads/2025/06/Mern-Neha.png"
                                alt="Advanced MERN Stack Development with AI"
                                className="w-100"
                            />
                            <div className="course-info text-center p-3">
                                <h6 className="mb-2">Advanced MERN Stack Development with AI</h6>
                                <span className="d-block mb-3">8 Months | Offline</span>
                                <Link href="/enquire" className="btn btn-primary">Enquire Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="course-card shadow-lg rounded overflow-hidden h-100">
                            <img
                                src="https://harisandcoacademy.com/wp-content/uploads/2025/06/Mern-Neha.png"
                                alt="Advanced Flutter Mobile App Development with AI"
                                className="w-100"
                            />
                            <div className="course-info text-center p-3">
                                <h6 className="mb-2">Advanced Flutter Mobile App Development with AI</h6>
                                <span className="d-block mb-3">4 Months | Offline</span>
                                <Link href="/enquire" className="btn btn-primary">Enquire Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="course-card shadow-lg rounded overflow-hidden h-100">
                            <img
                                src="https://harisandcoacademy.com/wp-content/uploads/2025/06/Mern-Neha.png"
                                alt="Advanced Data Analytics with AI"
                                className="w-100"
                            />
                            <div className="course-info text-center p-3">
                                <h6 className="mb-2">Advanced Data Analytics with AI</h6>
                                <span className="d-block mb-3">5 Months | Offline</span>
                                <Link href="/enquire" className="btn btn-primary">Enquire Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="course-card shadow-lg rounded overflow-hidden h-100">
                            <img
                                src="https://harisandcoacademy.com/wp-content/uploads/2025/06/Mern-Neha.png"
                                alt="Advanced Data Analytics with AI"
                                className="w-100"
                            />
                            <div className="course-info text-center p-3">
                                <h6 className="mb-2">Advanced Data Analytics with AI</h6>
                                <span className="d-block mb-3">5 Months | Offline</span>
                                <Link href="/enquire" className="btn btn-primary">Enquire Now</Link>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                   

                    {/* Card 5 */}
                    

                </div>
            </div>
        </section>
    )
}
