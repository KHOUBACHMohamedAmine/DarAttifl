import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '@/components/Layout'
import DemandeList from '@/components/demandes/List'
import { Button, Space } from '@mantine/core'

const DemandePage: NextPage = () => {
    return (
        <Layout title="قائمة الطلبات | الجمعية الخيرية الإسلامية بأسفي " role='admin'>
            <Space h="md" />
            <DemandeList />
        </Layout>
    )
}

export default DemandePage
