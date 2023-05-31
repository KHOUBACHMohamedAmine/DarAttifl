import React from 'react'
import { Demande } from '@/types/Demande'
import { Loader, Select } from '@mantine/core'
import { useDemandeStatusList } from '@/hooks/demandeStatus'
import { Controller, Control } from 'react-hook-form'
import type { SelectItem } from '@mantine/core'

type Props = {
    control: Control<Demande>
    selectedId: number|undefined
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
    const selectData: SelectItem[] = Object.keys(data).map((index) => {
        let label = data[Number(index)].label;
        let value = index;
        
        if (label === 'non traite') {
          label = 'غير معالج';
        } else if (label === 'demande rejetée') {
          label = 'طلب مرفوض';
        } else if (label === 'demande acceptée') {
            label = 'طلب مقبول';
          }
      
        return {
          value,
          label
        };
      });
      

    return (
        <Controller
            name="status_id"
            control={control}
            defaultValue={selectedId}
            render={({ field: {ref, onChange} }) => (
                <Select
                    ref={ref}
                    onChange={onChange}
                    label="حالة الطلب"          
                    data={selectData}
                    defaultValue={String(selectedId)}
                    error={errorMessage}
                />
            )}
        />
    )
}

export default DemandeStatusSelectList
