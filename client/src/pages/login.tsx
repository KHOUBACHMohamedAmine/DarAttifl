import React, { useState } from 'react'
import type { NextPage } from 'next'
import { Button, Input, InputWrapper, Space, PasswordInput, Container, Anchor, Group } from '@mantine/core'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAuth } from '@/hooks/auth'
import Head from 'next/head'
import Link from 'next/link'
import login_style from '@/styles/auth/login.module.css'

type LoginSubmit = {
    email: string,
    password: string
}

const LoginPage: NextPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginSubmit>()
    const { login } = useAuth()
    const [ isButtonLoading, setIsButtonLoading ] = useState(false)

    const onSubmit: SubmitHandler<LoginSubmit> = data => {
        setIsButtonLoading(true)
        login(data)
        window.setTimeout(() => {
            setIsButtonLoading(false)
        }, 1500)
    }

    return (
        <>
            <Head>
                <title>Connectez-vous</title>
            </Head>
            <div className={login_style.body_login}>
    <div className={login_style.center}>
      <div className={login_style.imgcontainer}>
        <Link href="/">
            <img style={{width: '190px'}} src="/images/logo.png" className="logo img-fluid" alt="logo"/>
        </Link>
      </div>
      <div style={{padding: '0px 30px'}}>
        <div className='text5 mb-2'> مرحبًا بك في حسابك الخاص</div>
        <div className='me-2' style={{fontSize: '13px'}}>الجمعية الخيرية الإسلامية بأسفي رائدة في تقديم الخدمات الاجتماعية من أجل مستقبل أفضل</div>
      </div>

            <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="password" for="password" class="form-label mt-3">  البريد الإلكتروني </label>
                <InputWrapper
                    required
                    error={errors.email?.message}
                >
                    <Input
                        {...register('email', {
                            required: 'يرجى التأكد من البريد ا كلمة المرور.'
                        })}
                        invalid={errors.email !== undefined}
                        
                    />
                </InputWrapper>
                <Space h="md" />

                <label htmlFor="password" for="password" class="form-label">  كلمة المرور </label>
                <input
                    {...register('password', {
                        required: 'يرجى التأكد من البريد ا كلمة المرور.'
                    })}
                    id="password"
                    type="password"
                    class="form-control" 
                    autoComplete="current-password"
                    error={errors.password?.message}
                    required
                    
                   
                />
                <Space h="xl" />
                <Group>
                    <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                        <Button style={{background: '#5a6f80'}} className='mt-4 ms-2' type="submit" loading={isButtonLoading}>تسجيل الدخول </Button>
                        <div style={{fontSize: '13px',}} className='mt-4 mb-4'>
                        جديد على منصتنا؟ 
                        <Link href="/register"><a style={{fontSize: '13px',}}> إنشاء حساب </a></Link>
                        </div>
                        
                    </div>
                </Group>
            </form>
            </div>
    </div>
    </>
    )
}

export default LoginPage
