import React, { useState } from 'react'
import type { NextPage } from 'next'
import Layout from '@/components/Layout'
import DemandeStatusList from '@/components/demandeStatuses/List'
import { Button, Loader, Modal, Space } from '@mantine/core'
import { useDemandeStatuses } from '@/hooks/demandeStatus'
import { DemandeStatus } from '@/types/DemandeStatus'
import DemandeStatusForm from '@/components/demandeStatuses/Form'
import { useConfirmModal } from '@/hooks/confirmModal'

const DemandeStatusPage: NextPage = () => {
    const [modalOpened, setModalOpened] = useState(false)
    const [selectIndex, setSelectIndex] = useState<number|null>(null)

    // 課題ステータス一覧
    const { data, error, updateAction, createAction, deleteAction } = useDemandeStatuses()
    // 確認モーダル
    const { deleteModal } = useConfirmModal<DemandeStatus>(deleteAction)

    const handleOpenModal = (editId: number|null = null): void => {
        setSelectIndex(editId)
        setModalOpened(true)
    }

    const handleCloseModal = (): void => {
        setSelectIndex(null)
        setModalOpened(false)
    }

    const Content = () => {
        if (error) return <div>エラーが発生しました</div>
        if (!data) return <Loader />

        return (
            <>
                <DemandeStatusList
                    data={data}
                    handleOpenModal={handleOpenModal}
                    handleDelete={deleteModal}
                />
                <Modal
                    opened={modalOpened}
                    onClose={handleCloseModal}
                    title={selectIndex ? '編集' : '新規登録'}
                >
                    <DemandeStatusForm
                        demandeStatus={
                            selectIndex
                                ? data[data.findIndex(i => i.id === selectIndex)]
                                : { label: '', color: 'gray' }
                        }
                        submitAction={selectIndex ? updateAction : createAction}
                        handleClose={handleCloseModal}
                    />
                </Modal>
            </>
        )
    }

    return (
        <Layout title="ステータス">
            <div style={{ textAlign: 'right', marginTop: -50 }}>
                <Button onClick={() => handleOpenModal()}>新規登録</Button>
            </div>
            <Space h="md" />
            <Content />
        </Layout>
    )
}

export default DemandeStatusPage
