import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function BlogGrid() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Blog Grid">

                {/* Intro Section */}
                <section className="blog-intro pt-space pb-space" style={{ backgroundColor: "#ffff" }}>
                    <div className="container text-center">
                        <h2 style={{ color: "#004f39", fontWeight: "700", marginBottom: "20px" }}>
                            Our Most Recent Insights & Update
                        </h2>
                        <p style={{
                            color: "#004f39",
                            fontSize: "18px",
                            maxWidth: "700px",
                            margin: "0 auto 30px",
                            lineHeight: "1.6"
                        }}>
                            Welcome to our blog, where we share insights, stories, and updates on topics ranging from education.
                        </p>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                     
                        }}>
                            <hr style={{ flex: 1, border: "2px solid #004f39" }} />

                            <span style={{
                                padding: "0 15px",
                                color: "#004f39",
                                fontWeight: "600",
                                fontSize: "16px"
                            }}>
                                Our Featured Blogs
                            </span>
                           <hr style={{ flex: 1, border: "2px solid #004f39" }} />
                        </div>
                    </div>
                </section>

                {/* Blog Grid Section */}
                <section className="blog-grid  pb-space" style={{ backgroundColor: "#ffff",marginTop:'-100px' }}>
                    <div className="container">
                        <div className="row g-xxl-7 g-xl-6 g-6">
                            {[1, 2, 3, 4, 5, 6].map((num) => (
                                <div className="col-lg-4 col-md-6 col-sm-6" key={num}>
                                    <div className="blog-widget-item" style={{
                                        border: "1px solid #004f39",
                                        borderRadius: "12px",
                                        background: "linear-gradient(135deg, #ffff 0%, #e6f2ee 100%)",
                                        padding: "20px",
                                        marginBottom: "30px"
                                    }}>
                                        <div className="thumb w-100 overflow-hidden mb-4">
                                            <img src={`https://framerusercontent.com/images/vTbrrsawxT3y5lgIpuoixfaNWc.webp?scale-down-to=1024&width=8000&height=4500`} alt="img" className="w-100 overflow-hidden" />
                                        </div>
                                        <div className="blog-cont">
                                            <div className="d-flex align-items-center gap-3 mb-3">
                                                <Link href="/blog-details" className="radius-btn cmn-border radius100 py-1 px-3" style={{
                                                    backgroundColor: "#004f39",
                                                    color: "#ffff",
                                                    fontWeight: "500"
                                                }}>
                                                    Creative
                                                </Link>
                                                <span style={{ color: "#004f39", fontWeight: "500" }}>
                                                    MARCH 24, 2024
                                                </span>
                                            </div>
                                            <h5>
                                                <Link href="/blog-details" style={{ color: "#004f39", fontWeight: "600" }}>
                                                    {[
                                                        "Transforming Challenges into",
                                                        "Transforming Challenges into",
                                                        "Transforming Challenges into",
                                                        "Transforming Challenges into",
                                                        "Transforming Challenges into",
                                                        "Transforming Challenges into",
                                                        
                                                    ][num - 1]}
                                                </Link>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}
