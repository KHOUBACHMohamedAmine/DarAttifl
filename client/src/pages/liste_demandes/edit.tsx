import React from 'react'
import type { NextPage } from 'next'
import Layout from '@/components/Layout'
import { useDemande } from '@/hooks/demande'
import DemandeForm from '@/components/demandes/Form'
import { Button, Space, LoadingOverlay, Table } from '@mantine/core'
import { getUrlParam } from '@/libs/libs'
import dayjs from 'dayjs'
import { Demande } from '@/types/Demande'
import { useConfirmModal } from '@/hooks/confirmModal'

const DemandeEditPage: NextPage = () => {
    const { updateAction, deleteAction, getItem } = useDemande()
    const { data: demande, error } = getItem(Number(getUrlParam('id')))
    // 確認モーダル
    const { deleteModal } = useConfirmModal<Demande>(deleteAction)

    const Content = () => {
        if (error) return <div>حدث خطأ</div>
        if (!demande) return <LoadingOverlay visible={true} />
        return (
            <>
                <p>ID: {demande.id}</p>
                <Space h="md" />
                <div style={{textAlign: "right", marginTop: -50}}>
                    <Button color="red" onClick={() => deleteModal(demande)}>حذف</Button>
                </div>
                <DemandeForm submitAction={updateAction} demande={demande}>
                    <Table>
                        <tbody>
                        <tr>
                            <td>تاريخ التسجيل</td>
                            <td>{ dayjs(demande.created_at).format('YYYY/MM/DD HH:mm') }</td>
                        </tr>
                        <tr>
                            <td>تاريخ التحديث</td>
                            <td>{ dayjs(demande.updated_at).format('YYYY/MM/DD HH:mm') }</td>
                        </tr>
                        </tbody>
                    </Table>
                    <Space h="md" />
                </DemandeForm>
            </>
        )
    }

    return (
        <Layout title="課題編集">
            <Content />
        </Layout>
    )
}

export default DemandeEditPage
