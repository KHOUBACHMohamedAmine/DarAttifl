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
          <div style={{minHeight: '200px',display: 'flex',alignItems: 'center', justifyContent: 'center', fontSize: '16px'}} className="container-fluid">
             ليس لديك حق الوصول إلى هذه الصفحة.
          </div>

          </main>
        </div>
  )
}

const AccesErrorPage = () => {
 
  return (
    <Layout title=" الجمعية الخيرية الإسلامية بأسفي ">
        <Content />
        <Footer/>
    </Layout>
  );
};

export default AccesErrorPage;
