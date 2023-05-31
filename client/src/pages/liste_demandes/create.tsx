import type { NextPage } from 'next'
import Layout from '@/components/Layout'
import { DemandeCreate }  from '@/types/Demande'
import { useDemande } from '@/hooks/demande'
import DemandeForm from '@/components/demandes/Form'

const DemandeCreatePage: NextPage = () => {
    const { createAction } = useDemande()

    const demande: DemandeCreate = {
        title: '',
        body: '',
        status_id: 1
    }

    return (
        <Layout title="新規登録">
            <DemandeForm submitAction={createAction} demande={demande} />
        </Layout>
    )
}

export default DemandeCreatePage
