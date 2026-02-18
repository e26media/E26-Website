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
                    <p style={{color:'white !important '}}>
                      E26 Media Pvt Ltd provides scalable digital solutions in web, software, mobile apps, automation, and marketing to help businesses grow
                    </p>
                    <div className="sub-contact-left d-grid">
                        <div className="sub__contac-item">
                            <div className="content">
                                <span className="address d-block">
                                    Address
                                </span>
                                <span className="textp">
                                    5th Floor, Shalimar Complex,
Near Old Ganes Medical,
Kankanady, Mangalore - 575002
                                </span>
                            </div>
                        </div>
                        <div className="sub__contac-item">
                            <div className="content">
                                <span className="address d-block">
                                    Email
                                </span>
                               <Link href="mailto:info@e26media.com" className="textp">
    info@e26media.com
</Link>

                            </div>
                        </div>
                        <div className="sub__contac-item">
                            <div className="content">
                                <span className="address d-block">
                                    Call now
                                </span>
                                <Link 
  href="https://wa.me/917337753124" 
  target="_blank" 
  className="textp"
>
  +91 733 775 3124
</Link>

                            </div>
                        </div>
                    </div>
                   <ul className="common-social d-flex justify-content-start gap-3 mt-4">

  {/* Facebook */}
  <li>
    <Link 
      href="https://www.facebook.com/people/E26-Media-Production/61565034466150/#" 
      target="_blank"
      className="d-center p-2 rounded-circle"
      style={{ background: "rgba(255,255,255,0.1)", transition: "0.3s" }}
    >
      <i className="fab fa-facebook-f text-white"></i>
    </Link>
  </li>

  {/* Twitter */}
 

  {/* LinkedIn */}
  <li>
    <Link 
      href="https://www.linkedin.com/company/e26-media-production-private-limited/" 
      target="_blank"
      className="d-center p-2 rounded-circle"
      style={{ background: "rgba(255,255,255,0.1)", transition: "0.3s" }}
    >
      <i className="fab fa-linkedin-in text-white"></i>
    </Link>
  </li>

  {/* Instagram */}
  <li>
    <Link 
      href="https://www.instagram.com/e26media/" 
      target="_blank"
      className="d-center p-2 rounded-circle"
      style={{ background: "rgba(255,255,255,0.1)", transition: "0.3s" }}
    >
      <i className="fab fa-instagram text-white"></i>
    </Link>
  </li>

  {/* WhatsApp */}
  <li>
    <Link 
      href="https://wa.me/917337753124" 
      target="_blank"
      className="d-center p-2 rounded-circle"
      style={{ background: "rgba(255,255,255,0.1)", transition: "0.3s" }}
    >
      <i className="fab fa-whatsapp text-white"></i>
    </Link>
  </li>

  {/* YouTube */}
  <li>
    <Link 
      href="https://www.youtube.com/" 
      target="_blank"
      className="d-center p-2 rounded-circle"
      style={{ background: "rgba(255,255,255,0.1)", transition: "0.3s" }}
    >
      <i className="fab fa-youtube text-white"></i>
    </Link>
  </li>

</ul>


                    <Link href="/contact" className="d-flex cmn-btn cmn-border justify-content-center fw-500 align-items-center gap-2 py-2 px-3 rounded mt-4" style={{ backgroundColor:"white", color:"#004f39", fontWeight:"600", transition:"all 0.3s ease", }} > <span className="icons"> <i className="fas fa-arrow-up" style={{color:"#004f39"}} /> </span> <span className="get-text" style={{color:"#004f39"}}>Let's Talk</span> </Link>
                </div>
            </div>

        </>
    )
}
