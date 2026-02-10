import Link from "next/link"
import VideoPopup from "../elements/VideoPopup"

export default function StepWorking2() {
    return (
        <>
            <section className="working-sectionv04 pt-space pb-space position-relative" style={{ backgroundColor: "#004f39" }}>
                <div className="container">
                    <div className="row justify-content-between g-4 mb-xxl-17 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
                        <div className="col-lg-7">
                            <div className="pricing-title">
                                <div
                                    className="radius-btn text-uppercase d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 gap-xxl-4 gap-3"
                                    style={{ backgroundColor: "#004f39", color: "#ffffff", border: "1px solid #ffffff" }}
                                >
                                   How it works
                                </div>
                                <h2 className="stitle mt-xxl-8 mt-xl-6 mt-5" style={{ color: "#ffffff" }}>
                                    Our Work <span className="fw-400" style={{ color: "#004f39" }}>process</span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="text-box position-relative" style={{ color: "#ffffff" }}>
                                <p>
                                    Bring to the table win-win survival strategies to ensure proactive domination. At the
                                    end of the day, going forward, a new normal that has evolved from generation on the runway heading towards
                                </p>
                                <VideoPopup style={2} />
                            </div>
                        </div>
                    </div>

                    <div className="step-working-processwrap">
                        {/* Step 1 */}
                        <div className="step-working-inner">
                            <div className="step-working-processitem d-grid gap-7">
                                <div className="d-grid gap-5 justify-content-end me-20">
                                    <div
                                        className="serial d-grid align-content-center justify-content-center radius100"
                                        style={{ backgroundColor: "#004f39", color: "#ffffff" }}
                                    >
                                        <span className="d-block">25</span>
                                        <span>%</span>
                                    </div>
                                    <div className="vline" style={{ borderColor: "#ffffff" }} />
                                </div>
                                <div className="process-btn" style={{ color: "#ffffff" }}>
                                    Discover &amp; Strategy.
                                    <svg width={350} height={62} viewBox="0 0 350 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width={349} height={61} rx="30.5" stroke="#ffffff" strokeDasharray="6 6" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="step-working-inner">
                            <div className="step-working-processitem d-grid gap-7">
                                <div className="d-grid gap-5 justify-content-end me-20">
                                    <div
                                        className="serial d-grid align-content-center justify-content-center radius100"
                                        style={{ backgroundColor: "#004f39", color: "#ffffff" }}
                                    >
                                        <span className="d-block">50</span>
                                        <span>%</span>
                                    </div>
                                    <div className="vline" style={{ borderColor: "#ffffff" }} />
                                </div>
                                <div className="process-btn" style={{ color: "#ffffff" }}>
                                    Wireframes &amp; User-flows
                                    <svg width={350} height={62} viewBox="0 0 350 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width={349} height={61} rx="30.5" stroke="#ffffff" strokeDasharray="6 6" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="step-working-inner">
                            <div className="step-working-processitem d-grid gap-7">
                                <div className="d-grid gap-5 justify-content-end me-20">
                                    <div
                                        className="serial d-grid align-content-center justify-content-center radius100"
                                        style={{ backgroundColor: "#004f39", color: "#ffffff" }}
                                    >
                                        <span className="d-block">75</span>
                                        <span>%</span>
                                    </div>
                                    <div className="vline" style={{ borderColor: "#ffffff" }} />
                                </div>
                                <div className="process-btn" style={{ color: "#ffffff" }}>
                                    Hi-Fidelity &amp; Visuals design
                                    <svg width={350} height={62} viewBox="0 0 350 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width={349} height={61} rx="30.5" stroke="#ffffff" strokeDasharray="6 6" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="step-working-inner">
                            <div className="step-working-processitem d-grid gap-7">
                                <div className="d-grid gap-5 justify-content-end me-20">
                                    <div
                                        className="serial d-grid align-content-center justify-content-center radius100"
                                        style={{ backgroundColor: "#004f39", color: "#ffffff" }}
                                    >
                                        <span className="d-block">100</span>
                                        <span>%</span>
                                    </div>
                                    <div className="vline" style={{ borderColor: "#ffffff" }} />
                                </div>
                                <div className="process-btn" style={{ color: "#ffffff" }}>
                                    Development Phase
                                    <svg width={350} height={62} viewBox="0 0 350 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width={349} height={61} rx="30.5" stroke="#ffffff" strokeDasharray="6 6" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Element */}
                    <div className="step-element1">
                        <img src="/assets/img/service/step-working.png" alt="img" />
                    </div>
                </div>
            </section>
        </>
    )
}
