"use client";

import Layout from "@/components/layout/Layout";
import Project1 from "@/components/sections/Project1";
import Video from "@/components/sections/video";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Courses() {
  const courses = [
    "Web Development",
    "Data Science",
    "Digital Marketing"
  ];

  const [index, setIndex] = useState(0);       // which course
  const [subIndex, setSubIndex] = useState(0); // which letter
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (forward && subIndex === courses[index].length) {
      // pause before deleting
      setTimeout(() => setForward(false), 1000);
      return;
    }

    if (!forward && subIndex === 0) {
      // move to next course
      setForward(true);
      setIndex((prev) => (prev + 1) % courses.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (forward ? 1 : -1));
    }, 100);

    return () => clearTimeout(timeout);
  }, [subIndex, forward, index, courses]);

  return (
    <>
      <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Courses">
        {/* Intro Section */}
        <section
          className="blog-intro pt-space pb-space"
          style={{ backgroundColor: "#fff" }}
        >
          <div className="container text-center">
            <h2 style={{ fontWeight: "700", marginBottom: "20px" }}>
              <span style={{ color: "#000",fontSize:'80px' }}>Learn </span>
              <span style={{ color: "#004f39" ,fontSize:'60px' }}>
                {courses[index].substring(0, subIndex)}
              </span>
              <span style={{ borderRight: "3px solid #000", marginLeft: "2px" ,fontSize:'40px',borderRadius:'3px' }}>|</span>{" "} 
             
            </h2>
             {/* <h3 style={{ borderRight: "2px solid #000", marginLeft: "2px" }}>|</h3>{" "} */}
              <h3 style={{color: "#000" }}>
                in Just 1 Month
              </h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="20%" height="100%" viewBox="0 0 284 23"><path d="M 3 3 L 280.663 3 C 269.449 3 258.349 3.9 247.279 4.764 C 221.349 6.787 195.529 8.92 169.786 11.556 C 151.278 13.451 132.755 15.328 114.19 17.061 C 113.357 17.139 90.773 19.35 90.951 19.635 C 91.634 20.727 116.442 19.025 118.838 18.968 C 135.096 18.578 151.406 18.638 167.64 18.014" stroke="var(--token-52c17226-b237-4c84-bddb-cc65f5c502dd, rgb(30, 81, 40))" stroke-width="5" stroke-linecap="round" fill="transparent" opacity="1" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px" will-change="auto"></path></svg>

            <p
              style={{
                color: "#004f39",
                fontSize: "18px",
                maxWidth: "700px",
                margin: "0 auto 30px",
                lineHeight: "1.6",
              }}
            >
              Build real-world skills with hands-on training, expert mentors, and
              job-ready experience.
            </p>

            <p
              style={{
                backgroundColor: "#fff",
                color: "#004f39",
                display: "inline-block",
                padding: "10px 20px",
                borderRadius: "5px",
                fontWeight: "600",
                borderRadius:'30px',
                border:'2px solid #004f39'
              }}
            >
              Proudly trained students from IIT, NITK & leading national colleges
            </p>

          
          </div>
        </section>



        {/* our courses */}
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
                                               
                                            </div>
                                            <h5>
                                                <Link href="/blog-details" style={{ color: "#004f39", fontWeight: "600" }}>
                                                    {[
                                                        "Website Development",
                                                        " Digital Marketing",
                                                        "Website Development",
                                                        " Digital Marketing",
                                                        "Website Development",
                                                        " Digital Marketing",
                                                       
                                                        
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


                 <Project1 />

                 {/* <Video/> */}


        {/* our courses */}
      </Layout>
    </>
  );
}
