import React, { useState } from 'react'
import type { NextPage } from 'next'
import { Button, Input, InputWrapper, Space, PasswordInput, Container, Group } from '@mantine/core'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAuth } from '@/hooks/auth'
import Head from 'next/head'
import login_style from '@/styles/auth/login.module.css'
import Link from 'next/link'
type RegisterSubmit = {
    name: string,
    email: string,
    password: string,
    password_confirmation: string
}

const RegisterPage: NextPage = () => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm<RegisterSubmit>()
    const [ isButtonLoading, setIsButtonLoading ] = useState(false)
    const { register: userRegister } = useAuth()

    const onSubmit: SubmitHandler<RegisterSubmit> = data => {
        setIsButtonLoading(true)
        userRegister(data)
        window.setTimeout(() => {
            setIsButtonLoading(false)
        }, 1500)
    }

    return (
        <>
        <Head>
            <title>Inscription d’un nouvel utilisateur</title>
        </Head>
                    
            <div className={login_style.body_login}>
            <div className={login_style.center}>
            <div className={login_style.imgcontainer}>
                <Link href="/">
                <img style={{width: '190px'}} src="/images/logo.png" className="logo img-fluid" alt="logo"/>
                </Link>
            </div>
            <div style={{padding: '0px 30px'}}>
                <div className='text5 mb-2'> أنشئ حسابك الخاص</div>
                <div className='me-2' style={{fontSize: '13px'}}>الجمعية الخيرية الإسلامية بأسفي رائدة في تقديم الخدمات الاجتماعية من أجل مستقبل أفضل</div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name" className="form-label">  اسم المستخدم </label>
                <InputWrapper
                    required
                    
                    error={errors.name?.message}
                >
                    <Input
                        {...register('name', {
                            required: 'يرجى التأكد من المعلومات.'
                        })}
                        invalid={errors.name !== undefined}
                    />
                </InputWrapper>
                <Space h="md" />
                <label htmlFor="email"  className="form-label"> البريد الإلكتروني </label>
                <InputWrapper
                    required
                  
                    error={errors.email?.message}
                >
                    <Input
                        {...register('email', {
                            required: 'يرجى التأكد من المعلومات.',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'الرجاء إدخال عنوان البريد الإلكتروني الخاص بك.'
                            }
                        })}
                        invalid={errors.email !== undefined}
                    />
                </InputWrapper>
                <Space h="md" />
                <label htmlFor="password" className="form-label">  كلمة المرور </label> 
                <input
                 id="password"
                 type="password"
                    {...register('password', {
                        required: 'يرجى التأكد من المعلومات.',
                        minLength: {
                            value: 8,
                            message: 'الرجاء إدخال 8 أحرف على الأقل.'
                        }
                    })}
                    className="form-control" 
                    error={errors.password?.message}
                    required
                />
                <Space h="md" />
                <label htmlFor="password" className="form-label">  تاكيد كلمة المرور</label> 
                <input
                 id="password"
                 type="password"
                    {...register('password_confirmation', {
                        required: 'يرجى التأكد من المعلومات.',
                        min: 8,
                        validate: {
                            match: (value) => getValues('password') === value || 'كلمة المرور التي أدخلتها غير متطابقة'
                        },
                    })}
                    className="form-control" 
                    error={errors.password_confirmation?.message}
                    required
                />
                <Space h="xl" />
                <Group spacing="xs">
                    <Button type="submit" loading={isButtonLoading}>S'inscrire</Button>
                    <Button component="a" variant="light" color="gray" href="/login">Annuler</Button>
                </Group>
            </form>
            </div>
            </div>
        </>
    )
}

export default RegisterPage
