import React, { useEffect } from 'react'
import Head from 'next/head'
import { Container, LoadingOverlay, Anchor, Header, Space, Menu, Group } from '@mantine/core'
import { useAuth } from '@/hooks/auth'
import { useRouter } from "next/router"
import Link from 'next/link'
import { GearIcon, ExitIcon, CaretDownIcon } from '@radix-ui/react-icons'
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

type Props = {
    children?: React.ReactNode
    title?: string
    isGuest?: boolean
    role?: string
}

export default function Layout ({ children, title, isGuest = false, role = 'user'}: Props) {
    const pageTitle = title || 'الجمعية الخيرية الإسلامية بأسفي'
    const router = useRouter()
    const { logout, user, error } = useAuth()

    useEffect(() => {

        if (!isGuest && !user && error) {
            const redirectUrl = router.pathname
                ? '?redirect=' + router.pathname + window.location.search
                : ''

            router.push('/login' + redirectUrl)
        }
        if (!isGuest && user && role === 'user' && user?.role !== 'user') {   
                router.push('/acces_error'); // Redirect to acces_error page if the role is not "user"
        }
        if (!isGuest && user && role === 'admin' && user?.role !== 'admin') {
            router.push('/acces_error'); // Redirect to acces_error page if the role is not "admin"
        }

    }, [user, error, role])

    if (!user) return <LoadingOverlay visible={true} />

    return (
        <>
           <NavBar/>

                <Head>
                    <title>{ pageTitle }</title>
                </Head>
                <main>{ children }</main>
        </>
    )
}
