import React from 'react'
import { Demande } from '@/types/Demande'
import { Loader, Select } from '@mantine/core'
import { useDemandeStatusList } from '@/hooks/demandeStatus'
import { Controller, Control } from 'react-hook-form'
import type { SelectItem } from '@mantine/core'

type Props = {
    control: Control<Demande>
    selectedId: string|undefined
    errorMessage: string|undefined
}

/**
 * 課題状態選択セレクトボックス
 * @param control
 * @param selectedId
 * @param errorMessage
 * @constructor
 */
const DemandeStatusSelectList: React.VFC<Props> = ({
    control,
    selectedId,
    errorMessage
}) => {
    const { data, error } = useDemandeStatusList()

    if (error) return <div>حدث خطأ</div>
    if (!data) return <Loader />

    // コンポーネント用にvalue,label配列にする
    const staticData: SelectItem[] = [
        { value: 'r1', label: 'ضعف الحالة الاجتماعية' },
        { value: 'r2', label: 'البعد عن المدرسة' },
        { value: 'r3', label: 'يتيم الأب ' },
        { value: 'r4', label: 'يتيم الأم ' },
        { value: 'r5', label: 'يتيم الأبوين ' },
        { value: 'r6', label: 'مجهول الأب ' },
        { value: 'r7', label: 'مجهول الأبوين ' },
        { value: 'r8', label: 'سوء المعاملة من طرف الوالدين (العنف)' },
        { value: 'r9', label: 'الاستغلال المادي والاقتصادي للطفل : التسول به/ تشغيه ' },
        { value: 'autre', label: ' آخر' },
        // Add more options as needed
    ]

    return (
        <Controller
            name="raison"
            control={control}
            defaultValue={selectedId}
            render={({ field: {ref, onChange} }) => (
                <Select
                    ref={ref}
                    onChange={onChange}
                    required
                    data={staticData}
                    defaultValue={String(selectedId)}
                    error={errorMessage}
                />
            )}
        />
    )
}

export default DemandeStatusSelectList
