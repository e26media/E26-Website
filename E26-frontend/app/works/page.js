import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function StudyGrid() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="our Works">
                

                {/* Custom Responsive Grid */}
                <div className="parent" >
                    <div className="div1">
                        <img src="https://www.thezeroagency.in/dashboard/uploads/1752388194_bap_.jpg" alt="Grid 1" />
                        <h2>Creative Strategy</h2>
                    </div>
                    <div className="div2">
                        <img src="https://www.thezeroagency.in/dashboard/uploads/1752599657_mash_al.jpg" alt="Grid 2" />
                        <h2>Branding Excellence</h2>
                    </div>
                    <div className="div2">
                        <img src="https://www.thezeroagency.in/dashboard/uploads/1752599657_mash_al.jpg" alt="Grid 2" />
                        <h2>Branding Excellence</h2>
                    </div>

                    <div className="div1">
                        <img src="https://www.thezeroagency.in/dashboard/uploads/1752388194_bap_.jpg" alt="Grid 1" />
                        <h2>Creative Strategy</h2>
                    </div>
                    
                    
                   
                   
                   
                </div>
            </Layout>

            <style>
                {`
                .parent {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    grid-template-rows: repeat(20, auto);
                    gap: 20px;
                    margin: 40px auto;
                    max-width: 1200px;
                    padding: 0 16px;
                }

                .parent div {
                    background-color: #004f39;
                    border: 3px solid #ffff;
                    border-radius: 10px;
                    overflow: hidden;
                    text-align: center;
                    padding-bottom: 12px;
                }

                .parent img {
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                    display: block;
                    border-bottom: 2px solid #ffff;
                }

                .parent h2 {
                    font-size: 1.2rem;
                    color: #ffff;
                    margin-top: 10px;
                    font-weight: 600;
                }

                /* Grid positions */
                .div1 { grid-column: span 4; grid-row: span 4; }
                .div2 { grid-column: span 2; grid-row: span 3; grid-row-start: 5; }
                .div4 { grid-column: span 2; grid-row: span 3; grid-column-start: 3; grid-row-start: 5; }
                .div5 { grid-column: span 4; grid-row: span 4; grid-row-start: 8; }
                .div6 { grid-column: span 2; grid-row: span 3; grid-row-start: 12; }
                .div7 { grid-column: span 2; grid-row: span 3; grid-column-start: 3; grid-row-start: 12; }
                .div8 { grid-column: span 4; grid-row: span 4; grid-row-start: 15; }

                /* Responsive adjustments */
                @media (max-width: 992px) {
                    .parent {
                        grid-template-columns: repeat(2, 1fr);
                        grid-template-rows: auto;
                    }
                    .div1, .div5, .div8 { grid-column: span 2; }
                    .div2, .div4, .div6, .div7 { grid-column: span 2; }
                }

                @media (max-width: 576px) {
                    .parent {
                        grid-template-columns: 1fr;
                        gap: 16px;
                    }
                    .parent div { grid-column: span 1; }
                    .parent h2 { font-size: 1rem; }
                }
                `}
            </style>
        </>
    )
}
