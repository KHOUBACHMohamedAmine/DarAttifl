import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/hooks/auth'
import { useRouter } from "next/router"
import { useEffect } from 'react'
import { LoadingOverlay } from '@mantine/core'
import Head from 'next/head'
import Layout from '@/components/Layout'
import { DemandeCreate }  from '@/types/Demande'
import { useDemande } from '@/hooks/demande'
import DemandeForm from '@/components/demandes/Form_demande'
import Footer from '@/components/Footer';

const Content = () => {

  const { createAction } = useDemande()
  const demande: DemandeCreate = {
      title: '',
      body: '',
      status_id: 1
  }

  return(
        <div>
          <section className='py-4 Img1 back1'>
              <div className='container'>
                    <div className="row py-lg-4">
                      <div className="col-md-8">
                        <div className="text4">تقديم الطلب</div>
                          <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                              <li className="breadcrumb-item"><Link href="/">الصفحة الرئيسية / </Link></li>
                              <li className="breadcrumb-item pe-3"><Link href="/demande">تقديم الطلب /</Link></li>
                              <li className="breadcrumb-item active" aria-current="page">ملأ استمارة التسجيل</li>
                            </ol>
                          </nav>
                      </div>
                    </div>
              </div>
            </section>

          <section className=" container">     
          </section>

          <div className="py-5 bg-light">
            <div className="container">       
              <div className='dsflex steps'>
                <div className="step">
                    <div style={{display:'flex', alignItems: 'flex-start'}} className="text6 mt-4 mb-4">
                      <i style={{color: 'var(--primary-color)'}} className="bi bi-info-circle-fill ms-2 mt-1"></i> 
                      <div>بعد تقديم الطلب، قد يتم ترتيب لقاء أو مقابلة مع فريق العمل في دار الأطفال لمناقشة الحاجات والظروف الخاصة بالعائلة أو الفرد وتقييم مدى توافقها مع مبادئ وقوانين المؤسسة.</div>
                    </div>
                </div>
             

              </div>
              <div className='formulaire mt-4'>
                <DemandeForm submitAction={createAction} demande={demande} />
              </div>
            </div>
          </div>      
        </div>

  )
}


const DemandeEtape1 = () => {

  return (
    <div>
      <Layout title=" ملأ استمارة التسجيل | الجمعية الخيرية الإسلامية بأسفي ">
        <Content />
        <Footer/>
      </Layout>
    </div>
  );
};

export default DemandeEtape1;
