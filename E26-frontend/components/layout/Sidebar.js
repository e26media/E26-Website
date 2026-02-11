import Link from 'next/link'
export default function Sidebar({ isSidebar, handleSidebar }) {
    return (
        <>

            <div className={`subside-barmenu ${isSidebar ? "active" : ""} `}  style={{backgroundColor:'#004f39'}}> 
                <div className="remove-click d-flex justify-content-center align-items-center" onClick={handleSidebar}>
                    <i className="fas fa-times" style={{color:"white"}}/>
                </div>
                <div className="sub-contact-wrapper d-grid">
                    <Link href="/" className="side-logo"  style={{filter:"drop-shadow(0 0 5px rgba(255,255,255,0.6))"}} >
                         <img className="w-100" src="/assets/img/E26media/whitelogo.png" alt="logo" />
                    </Link>
                    <p>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit consectetur, aliquam quaerats voluptatem. Ut
                        enim
                        ad minima veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem velit esse quam nihil
                    </p>
                    <div className="sub-contact-left d-grid">
                        <div className="sub__contac-item">
                            <div className="content">
                                <span className="address d-block">
                                    Address
                                </span>
                                <span className="textp">
                                    Loterl Poinent k/ls United Statate.
                                </span>
                            </div>
                        </div>
                        <div className="sub__contac-item">
                            <div className="content">
                                <span className="address d-block">
                                    Email
                                </span>
                                <Link href="/javascript:void(0)" className="textp">
                                    example021@gmail.com
                                </Link>
                            </div>
                        </div>
                        <div className="sub__contac-item">
                            <div className="content">
                                <span className="address d-block">
                                    Call now
                                </span>
                                <Link href="/jasacript:void(0)" className="textp">
                                    +996 1425 7471 0.2
                                </Link>
                            </div>
                        </div>
                    </div>
                    <ul className="common-social d-flex justify-content-start gap-3 mt-4"> 
                        <li> <Link href="/#" className="d-center p-2 rounded-circle" style={{background:"rgba(255,255,255,0.1)", transition:"0.3s"}}>
                         <i className="fab fa-facebook-f text-white"></i> </Link> </li> 
                         <li> <Link href="/#" className="d-center p-2 rounded-circle" style={{background:"rgba(255,255,255,0.1)", transition:"0.3s"}}> <i className="fab fa-twitter text-white"></i> </Link> </li> 
                         <li> <Link href="/#" className="d-center p-2 rounded-circle" style={{background:"rgba(255,255,255,0.1)", transition:"0.3s"}}> <i className="fab fa-linkedin-in text-white"></i> </Link> </li>
                          <li> <Link href="/#" className="d-center p-2 rounded-circle" style={{background:"rgba(255,255,255,0.1)", transition:"0.3s"}}> <i className="fab fa-youtube text-white"></i> </Link> </li> 
                          </ul>

                    <Link href="/contact" className="d-flex cmn-btn cmn-border justify-content-center fw-500 align-items-center gap-2 py-2 px-3 rounded mt-4" style={{ backgroundColor:"white", color:"#004f39", fontWeight:"600", transition:"all 0.3s ease", }} > <span className="icons"> <i className="fas fa-arrow-up" style={{color:"#004f39"}} /> </span> <span className="get-text" style={{color:"#004f39"}}>Let's Talk</span> </Link>
                </div>
            </div>

        </>
    )
}
