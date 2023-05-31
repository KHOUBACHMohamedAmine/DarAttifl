import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Demande } from '@/types/Demande'
import { useDemandes } from '@/hooks/demande'
import { useDemandeStatusList } from '@/hooks/demandeStatus'
import { Table, Button, Group, Loader, Pagination, Space, Badge, Anchor } from '@mantine/core'
import dayjs from 'dayjs'
import { getUrlParam } from '@/libs/libs'
import { useConfirmModal } from '@/hooks/confirmModal'

const DemandeList = () => {
    const router = useRouter()
    // pageパラメータを取得
    const defaultPage: number = Number(getUrlParam('page')) || 1
    // ページャー用ステート
    const [pageIndex, setPageIndex] = useState<number>(defaultPage)
    // 課題一覧を取得
    const { demandes, error, deleteAction } = useDemandes(pageIndex)
    // 課題ステータス
    const { data: demandeStatus, error: statusError } = useDemandeStatusList()
    // 確認モーダル
    const { deleteModal } = useConfirmModal<Demande>(deleteAction)

    const handlePagerClick = (page: number) => {
        setPageIndex(page)
        // アドレスURLの書き換え
        router.push({
            query: { page :page }
        });
    }

    if (error || statusError) return <div>Une erreur est survenue</div>
    if (!demandes || !demandeStatus) return <Loader />

    return (
        <div>
            <Table striped highlightOnHover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>الاسم الشخصي للمستفيد</th>
                    <th>الاسم العائلي للمستفيد</th>
                    <th>علاقة الولي بالمستفيد</th>
                    <th>الاسم الكامل للولي  </th>
                    <th>رقم هاتف الولي</th>
                    <th>حالة الطلب</th>
                    <th>Date d'inscription</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    demandes.data.map(demande => (
                        <tr key={demande.id}>
                            <td width={50}>
                                <Link href={{
                                    pathname: '/liste_demandes/detail/',
                                    query: { id: demande.id },
                                }}>
                                    <Anchor>{('00000' + demande.id).slice(-5)}</Anchor>
                                </Link>
                            </td>
                            <td width={170}>{demande.prenom_Beneficiaire}</td>
                            <td width={160}>{demande.nom_Beneficiaire}</td>   
                            <td width={100}>{
                                demande.user_id === 'pere'
                                ? 'أب'
                                : demande.user_id === 'mere'
                                ? 'أم'
                                : demande.user_id === 'des proches'
                                ? 'من الأقارب'
                                : demande.user_id === 'autre'
                                ? 'آخر'
                                : demande.user_id || 'error'
                            }</td>       
                            <td width={160}>{demande.prenom_Tuteur} {demande.nom_Tuteur}</td>     
                            <td>0{demande.Tele_Tuteur}</td>    
                            <td width={80}>
                            {
                                demandeStatus[demande.status_id]
                                    ? <Badge fullWidth variant="filled" color={demandeStatus[demande.status_id]?.color}>
                                        {demandeStatus[demande.status_id]?.label === 'non traite'
                                        ? 'غير معالج'
                                        : demandeStatus[demande.status_id]?.label === 'demande rejetée'
                                        ? 'طلب مرفوض'
                                        : demandeStatus[demande.status_id]?.label === 'demande acceptée'
                                        ? 'طلب مقبول'
                                        : demandeStatus[demande.status_id]?.label || 'error'}
                                      </Badge>
                                    : ''
                            }
                            </td>
                            <td >{dayjs(demande.created_at).format('YYYY/MM/DD')}</td>
                            <td width={195}>
                                <Group spacing="xs">
                                    <Link href={{
                                        pathname: '/liste_demandes/detail/',
                                        query: { id: demande.id },
                                    }}>
                                        <Button variant="outline" size="xs" component="a">معالجة</Button>
                                    </Link>
                                    <Button color="red" size="xs" onClick={() => deleteModal(demande)}>حذف الطلب</Button>
                                </Group>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
            <Space h="md" />
            <div>
                <Pagination
                    page={pageIndex}
                    onChange={handlePagerClick}
                    total={demandes.last_page}
                />
            </div>
        </div>
    )
}

export default DemandeList
