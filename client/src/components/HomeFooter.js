import React from 'react'
import Link from 'next/link'

const HomeFooter = () => {
  return (
    <>
        <footer className="site-footer">
      <div className="container">
          <div className="row">
              <div style={{ display: 'flex',alignItems: 'center'}} className="col-lg-3 col-12 mb-4 ms-4">
                  <img src="/images/logo2.png" className="logo Image-fluid" alt=""/>
              </div>

              <div className="col-lg-3 col-md-6 col-12 mb-4">
                  <h5 className="site-footer-title mb-3">روابط</h5>

                  <ul className="footer-menu">
                      <li className="footer-menu-item"><a href="#top" className="footer-menu-link">الصفحة الرئيسية</a></li>

                      <li className="footer-menu-item"><a href="#section_2" className="footer-menu-link">من نحن</a></li>

                      <li className="footer-menu-item"><a href="#section_3" className="footer-menu-link">أنشطة</a></li>

                      <li className="footer-menu-item"><a href="#section_4" className="footer-menu-link">اتصل بنا</a></li>
                  </ul>
                  <Link style={{width: 'fit-content', height:'45px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} href="demande/" className="custom-btn btn mt-3">تقديم طلب</Link>
              </div>

              <div className="col-lg-5 col-md-6 col-12 mx-auto">
                  <h5 className="site-footer-title mb-3">معلومات الاتصال</h5>

                    <p className="text-white d-flex mb-2">
                        <i className="bi-geo-alt ms-2"></i>
                        شارع الشهيد محمد بوليفة سيدي عبد الكريم أسفي
                    </p>

                    <p className="text-white d-flex mb-2">
                        <i className="bi-telephone ms-2"></i>
                        <a className='text-white' href="tel: 05246-68508">
                        05246-68508
                        </a>
                    </p>

                    <p className="text-white d-flex">
                        <i className="bi-envelope ms-2"></i>
                        <a className='text-white' href="as.mus.bienfaisancesafi@gmail.com">
                            as.mus.bienfaisancesafi@gmail.com
                        </a>
                    </p>
                    <p className="text-white d-flex mb-2">
                        <i className="bi bi-clock ms-2"></i>
                        الإثنين - الجمعة: 9 صباحا - 16 ظهرا ,السبت : 9 صباحا - 13 ظهرا
                    </p>

              </div>
          </div>
      </div>

      <div className="site-footer-bottom">
          <div className="container">
              <div className="row">

                  <div className="col-lg-6 col-md-7 col-12">
                      <p className="copyright-text mb-0">Copyright © 2023 الجمعية الخيرية الإسلامية بأسفي.
                          Design: IDOUFKIR Kamal
                      </p>
                  </div>

                  <div className="col-lg-6 col-md-5 col-12 d-flex justify-content-center align-items-center mx-auto">
                      <ul className="social-icon">
                          <li className="social-icon-item">
                              <a href="https://twitter.com/MBSAFI1956" className="social-icon-link bi-twitter" target='_blank'></a>
                          </li>

                          <li className="social-icon-item">
                              <a href="https://www.facebook.com/profile.php?id=100066462587833" className="social-icon-link bi-facebook" target='_blank'></a>
                          </li>

                          <li className="social-icon-item">
                              <a href="#" className="social-icon-link bi-instagram"></a>
                          </li>

                          <li className="social-icon-item">
                              <a href="#" className="social-icon-link bi-linkedin"></a>
                          </li>

                          <li className="social-icon-item">
                              <a href="https://youtube.com/templatemo" className="social-icon-link bi-youtube"></a>
                          </li>
                      </ul>
                  </div>

              </div>
          </div>
      </div>
        </footer>
    </>
  )
}

export default HomeFooter
