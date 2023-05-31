import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import { useDemande } from '@/hooks/demande'
import { useDemandeStatusList } from '@/hooks/demandeStatus'
import { Button, Space, Table, LoadingOverlay, Group } from '@mantine/core'
import dayjs from 'dayjs'
import Link from 'next/link'
import { getUrlParam } from '@/libs/libs'
import { Badge } from '@mantine/core'
import DemandeForm from '@/components/demandes/Form'

const DemandeDetailPage: NextPage = () => {
    const router = useRouter()
    const { updateAction, deleteAction, getItem } = useDemande()
    const { data: demande, error} = getItem(Number(getUrlParam('id')))
    // 課題ステータス
    const { data: demandeStatus, error: statusError } = useDemandeStatusList()

    const Content = () => {
        if (error || statusError) return <div>حدث خطأ</div>
        if (!demande || !demandeStatus) return <LoadingOverlay visible={true} />

        return (
            <>
            <article>
                <Space h="md" />
                <div>1. معلومات عن المستفيد :</div>
                <Table verticalSpacing="xs">
                    <tbody>
                    <tr>
                        <td width={200}>ID</td>
                        <td>{demande.id}</td>
                    </tr>
                    <tr>
                        <td>الاسم الشخصي للمستفيد</td>
                        <td>{demande.prenom_Beneficiaire}</td>
                    </tr>
                    <tr>
                        <td>الاسم العائلي للمستفيد</td>
                        <td>{demande.nom_Beneficiaire}</td>
                    </tr>
                    <tr>
                        <td>مكان الازدياد </td>
                        <td>{demande.lieu_naiss}</td>
                    </tr>
                    <tr>
                        <td>تاريخ الازدياد</td>
                        <td>{demande.date_naiss}</td>
                    </tr>
                    <tr>
                        <td> المستوى الدراسي </td>
                        <td>{demande.niveau_scolaire}</td>
                    </tr>
                    <tr>
                        <td>العنوان العائلي </td>
                        <td style={{whiteSpace: 'pre-wrap'}}>{demande.adresse_familiale}</td>
                    </tr>
                    <Space h="md" />
                    </tbody>
                </Table>

                <div>2 .معلومات عن الولي :</div>
                <Table verticalSpacing="xs">
                    <tbody>
                    <tr>
                        <td width={200}> علاقة الولي بالمستفيد</td>
                        <td>{
                            demande.user_id === 'pere'
                            ? 'أب'
                            : demande.user_id === 'mere'
                            ? 'أم'
                            : demande.user_id || 'error'
                        }</td>
                    </tr>
                    <tr>
                        <td> الاسم الشخصي للولي </td>
                        <td>{demande.prenom_Tuteur}</td>
                    </tr>
                    <tr>
                        <td> الاسم العائلي للولي  </td>
                        <td>{demande.nom_Tuteur}</td>
                    </tr>
                    <tr>
                        <td> رقم بطاقة التعريف الوطنية </td>
                        <td>{demande.CIN_Tuteur}</td>
                    </tr>
                    <tr>
                        <td> تاريخ انتهاء صلاحيتها  </td>
                        <td>{demande.CIN_date_validation}</td>
                    </tr>
                    <tr>
                        <td> الهاتف </td>
                        <td>0{demande.Tele_Tuteur}</td>
                    </tr>
                    <tr>
                        <td> المهنة </td>
                        <td>{demande.Profession_Tuteur}</td>
                    </tr>
                    <tr>
                        <td>عنوان الولي</td>
                        <td style={{whiteSpace: 'pre-wrap'}}>{demande.adresse_tuteur}</td>
                    </tr>
                    <tr>
                        <td>سبب تسجيل الطفل </td>
                        <td>{
                        demande.raison === 'r1'
                        ? 'ضعف الحالة الاجتماعية'
                        : demande.raison === 'r2'
                        ? 'البعد عن المدرسة'
                        : demande.raison === 'r3'
                        ? 'يتيم الأب '
                        : demande.raison === 'r4'
                        ? 'يتيم الأم '
                        : demande.raison === 'r5'
                        ? 'يتيم الأبوين '
                        : demande.raison === 'r6'
                        ? 'مجهول الأب '
                        : demande.raison === 'r7'
                        ? 'مجهول الأبوين '
                        : demande.raison === 'r8'
                        ? 'سوء المعاملة من طرف الوالدين (العنف)'
                        : demande.raison === 'r9'
                        ? 'الاستغلال المادي والاقتصادي للطفل : التسول به/ تشغيه '
                        : demande.raison === 'autre'
                        ? 'آخر'
                        : demande.raison || 'error'
                        }</td>
                    </tr>
                    {/* <tr>
                        <td > حالة الطلب  </td>
                        <td>
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
                    </tr> */}
                    <tr>
                        <td>تاريخ التسجيل</td>
                        <td>{ dayjs(demande.created_at).format('YYYY/MM/DD HH:mm') }</td>
                    </tr>
                    {/* <tr>
                        <td>تاريخ التحديث	</td>
                        <td>{ dayjs(demande.updated_at).format('YYYY年MM月DD日 HH:mm') }</td>
                    </tr> */}
                    </tbody>
                </Table>
            </article>
            <DemandeForm submitAction={updateAction} demande={demande}>
                    <Space h="md" />
             </DemandeForm>
            <Space h="sm" />
            </>
        )
    }

    return (
        <Layout title="معالجة الطلب | الجمعية الخيرية الإسلامية بأسفي" role='admin'>
            <Content />
        </Layout>
    )
}

export default DemandeDetailPage
