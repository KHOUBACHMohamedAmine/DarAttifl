import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useEffect } from 'react'
import Head from 'next/head'
import { LoadingOverlay } from '@mantine/core'
import { useAuth } from '@/hooks/auth'
import { useRouter } from "next/router"
import Link from 'next/link'
import Layout from '@/components/Layout'

const Content = () => {

  return(
        <div>
          <main>
          <section style={{backgroundPosition: '0px -100px'}} className="py-5 Img1">
              <div className='container'>
              <div className="row py-lg-4 ">
                <div className="col-md-8">
                  <div className="text4">تقديم الطلب</div>
                  <p className="text6 mt-3">تحسين نوعية حياة الأطفال المحرومين من الأسرة والحالات الصعبة باستقبالهم في مؤسسات الرعاية الاجتماعية, ووقايتهم من الإهمال من خلال الاستقبال و الرعاية و الاستماع والمرافقة.</p>
                  <p className="text6">التسجيل مفتوح لجميع المواطنين المغاربة.</p>
                
                </div>
              </div>
              <div>
                  <Link  href="demande/demande_etape1" > 
                    <a style={{padding: '11px 25px',width: '300px', borderRadius: '3px'}} className="custom-btn btn smoothscroll mt-2 ms-4 mb-3">
                    املأ طلب التسجيل
                    </a>
                  </Link>
                  <Link href="demande/demande_statut" >
                    <a style={{padding: '11px 25px',width: '300px', borderRadius: '3px'}} className="custom-btn2 custom-border-btn2 btn smoothscroll mt-2 mb-3">
                    تتبع حالة التسجيل 
                    </a>
                  </Link>
                  </div>
              </div>
          </section>

          <div className="py-5 bg-light">
            <div className="container">
            <div className="row py-lg-4">
              <div className="col-md-8">
                <div className="text1">الوثائق المطلوبة :</div>
                  <p className="text6 mt-4"><i style={{color: 'var(--primary-color)'}} className="bi bi-arrow-right-circle-fill ms-2"></i>نتائج المدرسة.</p>
                  <p className="text6 mt-3"><i style={{color: 'var(--primary-color)'}} className="bi bi-arrow-right-circle-fill ms-2"></i>الوضع الاجتماعي: جميع المستندات التي تبرر الحالة (شهادة الوفاة، شهادة الطلاق، الإدمان، مرض الأوصياء أو الوالدين ...).</p>
                  <p className="text6 mt-3"><i style={{color: 'var(--primary-color)'}} className="bi bi-arrow-right-circle-fill ms-2"></i>السجل المدرسي</p>
              </div>
            </div>

            <div className="row py-lg-4">
              <div className="col-md-8">
                <div className="text1">خطوات إدارية بعد تشكيل الملف</div>
                  <p className="text6 mt-4"><i style={{color: 'var(--primary-color)'}} className="bi bi-arrow-right-circle-fill ms-2"></i>مقابلة مع المرشد الاجتماعي.</p>
                  <p className="text6 mt-3"><i style={{color: 'var(--primary-color)'}} className="bi bi-arrow-right-circle-fill ms-2"></i>البحث الاجتماعي</p>
                  <p className="text6 mt-3"><i style={{color: 'var(--primary-color)'}} className="bi bi-arrow-right-circle-fill ms-2"></i>تقديم الطفل</p>
                  <p className="text6 mt-3"><i style={{color: 'var(--primary-color)'}} className="bi bi-arrow-right-circle-fill ms-2"></i>زيارة طبية للطفل لدى طبيب الأطفال.</p>
              </div>
            </div>


            </div>
          </div>
          </main>
        </div>
  )
}

const DemandePage = () => {
 
  return (
    <Layout title="  تقديم الطلب | الجمعية الخيرية الإسلامية بأسفي ">
        <Content />
        <Footer/>
    </Layout>
  );
};

export default DemandePage;
