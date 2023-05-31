import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Demande, DemandeCreate } from '@/types/Demande'
import { InputWrapper, Input, Textarea, Button, Space, Grid, Col, Group } from '@mantine/core'
import { useForm, SubmitHandler } from 'react-hook-form'
import UserSelectList from '@/components/users/SelectList'
import DemandeStatusSelectList from '@/components/demandeStatuses/SelectList'

type Props = {
    demande: Demande|DemandeCreate,
    children?: React.ReactNode,
    submitAction: (demande: Demande, callback?: () => void) => Promise<void>
}

const DemandeForm: React.VFC<Props> = ({
    demande,
    children,
    submitAction
}) => {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors }, control } = useForm<Demande>()
    const [ isButtonLoading, setIsButtonLoading ] = useState(false)

    useEffect(() => {
        return () => {
            // Unmount時ボタンアニメーションを止める
            setIsButtonLoading(false)
        }
    }, [])

    const onSubmit: SubmitHandler<Demande> = data => {
        setIsButtonLoading(true)
        const updateData: Demande = {...demande, ...data}

        return submitAction(updateData, () => {
            setIsButtonLoading(false)
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>   
            <Space h="sm"  />
            <Grid>
                <Col span={6}>
                    <DemandeStatusSelectList
                        control={control}
                        selectedId={demande.status_id}
                        errorMessage={errors.status_id?.message}
                    />
                </Col>   
            </Grid>
            <Space h="sm"  />
            { children }
            <Group spacing="xs">
                <Button type="submit" loading={isButtonLoading}>حفظ</Button>
                <Button variant="light" color="gray" onClick={() => router.back()}>الرجوع</Button>
            </Group>
        </form>
    )
}

export default DemandeForm
