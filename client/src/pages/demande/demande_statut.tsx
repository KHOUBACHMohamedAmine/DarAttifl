import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Head from 'next/head'

import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import { useDemande } from '@/hooks/demande'
import { useDemandeStatusList } from '@/hooks/demandeStatus'
import { Button, Space, Table, LoadingOverlay, Group } from '@mantine/core'
import dayjs from 'dayjs'
import Link from 'next/link'
import { getUrlParam } from '@/libs/libs'
import { Badge } from '@mantine/core'
import DemandeForm from '@/components/demandes/Form'
import { useAuth } from '@/hooks/auth'


const DemandeStatutPage = () => {

  const router = useRouter()
  const { updateAction, deleteAction, getItem2 } = useDemande()
  const { user } = useAuth();
  const { data: demande, error} = getItem2(Number(user?.id))
  const { data: demandeStatus, error: statusError } = useDemandeStatusList()

  const Content = () => {
    if (error || statusError) return <div>حدث خطأ</div>
    if (!demande || !demandeStatus) return <LoadingOverlay visible={true} />

    return (
        <> 
        <div>
          <main >
            <section className="py-4 Img1 back1">
            <div className='container'>
              <div className="row py-lg-4">
                <div className="col-md-8">
                  <div className="text4">تقديم الطلب</div>

                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link href="/">الصفحة الرئيسية / </Link></li>
                      <li className="breadcrumb-item pe-3"><Link href="/demande">تقديم الطلب /</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">التحقق من وضعية طلب التسجيل</li>
                    </ol>
                  </nav>

                </div>
              </div>
              </div>
            </section>
            <div className="pt-5 bg-light">
              <div className="container">
              <div className="row py-lg-4">
                <div className="col-md-8">
                <div className="text1">التحقق من وضعية طلب التسجيل:</div>
                    <p className="text6 mt-4"><i style={{color: 'var(--primary-color)'}} className="bi bi-arrow-right-circle-fill ms-2"></i> يهدف هذا الإجراء إلى التحقق من صحة واكتمال المعلومات المقدمة في الطلب والتأكد من أن الشروط والمتطلبات اللازمة تمت مراعاتها.</p>
                    <p className="text6 mt-4"><i style={{color: 'var(--primary-color)'}} className="bi bi-arrow-right-circle-fill ms-2"></i> تتضمن خطوات التحقق من وضعية طلب التسجيل مراجعة المعلومات والمستندات المقدمة من قبل المتقدم. يتم فحص الوثائق بعناية للتأكد من صحة المعلومات</p>
                    <div className='statut mt-4 mb-4'>
                      <div className="text1 col-md-4 ms-2"> حالة الطلب :</div>
                      <div className="col-md-6">
                      {demande && demande.data && demande.data[0] && demande.data[0].status_id ? (
                          <Badge
                            fullWidth
                            variant="filled"
                            color={demandeStatus[demande.data[0].status_id]?.color}
                          >
                            {demandeStatus[demande.data[0].status_id]?.label === 'non traite'
                              ? 'غير معالج'
                              : demandeStatus[demande.data[0].status_id]?.label === 'demande rejetée'
                              ? 'طلب مرفوض'
                              : demandeStatus[demande.data[0].status_id]?.label === 'demande acceptée'
                              ? 'طلب مقبول'
                              : demandeStatus[demande.data[0].status_id]?.label || 'error'}
                          </Badge>
                        ) : (
                          <div style={{display: 'flex', justifyContent: 'center'}} > ليس لديك اي طلب</div>
                        )
                      }
                      </div>
                  </div>

                </div>
              </div>
              
              </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}} className="py-5 bg-light">
            </div>
          </main>
        </div>
        </>
    )
  }

  return (

    <Layout title=" التحقق من وضعية طلب التسجيل | الجمعية الخيرية الإسلامية بأسفي ">
        <Content />
        <Footer/>
    </Layout>
  );
};

export default DemandeStatutPage;

