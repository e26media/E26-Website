import Ourclints from "@/components/layout/footer/Ourclints"
import TopBar from "@/components/layout/header/TopBar"
import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Blog4 from "@/components/sections/Blog4"
import CaseStudy1 from "@/components/sections/CaseStudy1"
import Hero1 from "@/components/sections/Hero1"
import Product1 from "@/components/sections/Product1"
import Protfolio1 from "@/components/sections/Protfolio1"
import Service1 from "@/components/sections/Service1"
import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial1"
import Testimonial3 from "@/components/sections/Testimonial3"
import TextSLider1 from "@/components/sections/TextSLider1"
import TextSLider2 from "@/components/sections/TextSLider2"
import TextSLider3 from "@/components/sections/TextSLider3"
import TextSLider7 from "@/components/sections/TextSLider7"
import Watch1 from "@/components/sections/Watch1"
import About4 from "@/components/sections/About4"


export default function Home() {

    return (
        <>

            <Layout headerStyle={2} footerStyle={2}>
                <div className="position-relative overflow-hidden">
                    <div className="line-shape cus-z-1 first w-100 h-100 d-flex flex-wrap" />

                    <Hero1 />
                    <TextSLider7/>
                 <Protfolio1 />
                <Ourclints/>
                   <About4/>
                    <Blog4 />
                    <Testimonial3 />


                    {/* <Product1 /> */}
                    {/* <Service1 /> */}
                    <TextSLider1 />
                    {/* <CaseStudy1 /> */}
                    {/* <Watch1 /> */}
                    <Team1 />
                    {/* <TextSLider2 /> */}
                    {/* <Testimonial1 /> */}
                    {/* <Blog1 /> */}
                    {/* <TextSLider3 /> */}
                </div>
            </Layout>
        </>
    )
}