import { Text } from '@mantine/core'
import { useModals } from '@mantine/modals'

/**
 * 確認モーダル
 * @param confirmAcrion
 */
export const useConfirmModal = <T extends { id?: number }>(confirmAcrion: (item: T) => Promise<void>) => {
    const modals = useModals()

    const deleteModal = (item: T) => {
        modals.openConfirmModal(
            {
                title: 'تأكيد الحذف',
                children: (
                    <Text size="sm">ID:{item.id} هل أنت متأكد أنك تريد حذف الطلب </Text>
                ),
                labels: { confirm: 'حذف', cancel: 'الغاء' },
                confirmProps: { color: 'red' },
                onConfirm: () => confirmAcrion(item)
            })
    }

    return {
        deleteModal
    }
}
