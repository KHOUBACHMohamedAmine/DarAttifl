import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const HomeNavBar = () => {
  return (
    <>
    <div>
        <header className="site-header">
          <div className="container">
              <div className="row">

                  <div className="col-lg-8 col-12 d-flex flex-wrap">
                      <p className="d-flex ms-4 mb-0">
                          <i className="bi-geo-alt ms-2"></i>
                          شارع الشهيد محمد بوليفة سيدي عبد الكريم أسفي
                      </p>

                      <p className="d-flex ms-4 mb-0">
                          <i className="bi-telephone ms-2"></i>

                          <Link href="tel: 05246-68508">
                            05246-68508
                          </Link>
                      </p>
       
                      <p className="d-flex mb-0">
                          <i className="bi-envelope ms-2"></i>

                          <Link href="as.mus.bienfaisancesafi@gmail.com">
                            as.mus.bienfaisancesafi@gmail.com
                          </Link> 
                      </p>
                  </div>

                  <div className="col-lg-3 col-12 me-auto d-lg-block d-none">
                      <ul className="social-icon">
                          <li className="social-icon-item">
                            <a href="https://twitter.com/MBSAFI1956" target="_blank" className="social-icon-link bi-twitter"></a>
                          </li>

                          <li className="social-icon-item">
                              <a href="https://www.facebook.com/profile.php?id=100066462587833" className="social-icon-link bi-facebook" target="_blanky"></a>
                          </li>

                          <li className="social-icon-item">
                              <a href="#" className="social-icon-link bi-instagram"></a>
                          </li>

                          <li className="social-icon-item">
                              <a href="#" className="social-icon-link bi-youtube"></a>
                          </li>

                          <li className="social-icon-item">
                              <a href="#" className="social-icon-link bi-whatsapp"></a>
                          </li>
                      </ul>
                  </div>

              </div>
          </div>
        </header>

        <nav className="navbar navbar-expand-lg bg-light shadow-lg">
          <div className="container">
              <a className="navbar-brand" href="/">
                  <img src="/images/logo.png" className="logo img-fluid" alt="logo"/>
              </a>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav me-auto">
                      <li className="nav-item ms-2">
                        <a className="nav-link click-scroll">
                          <Link href="/">الصفحة الرئيسية</Link>
                        </a>
                      </li>

                      <li className="nav-item ms-2">
                          <a className="nav-link click-scroll">
                            <Link href="/#section_2">من نحن</Link>
                        </a>
                      </li>

                      <li className="nav-item ms-2">
                         
                        <a className="nav-link click-scroll">
                            <Link href="/#section_4"> أنشطة</Link>
                        </a>
                      </li>

                      <li className="nav-item ms-2">
                        <a className="nav-link click-scroll">
                            <Link href="/#section_4">اتصل بنا</Link>
                        </a>
                      </li>

                      <li className="nav-item me-4 ">
                        <Link href="demande/" > 
                        <a className="nav-link custom-btn custom-border-btn btn" style={{ padding: '12px 25px' }}>تقديم طلب
                        </a>
                        </Link>
                      </li>
                  </ul>
              </div>
          </div>
        </nav>
    </div>
    </>
  )
}

export default HomeNavBar
