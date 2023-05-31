import React from 'react'
import { Loader, Select } from '@mantine/core'
import { Controller, Control } from 'react-hook-form'
import type { SelectItem } from '@mantine/core'

type Props = {
    control: Control<Demande>
    selectedId: number | undefined
    errorMessage: string | undefined
}

const UserSelectList: React.VFC<Props> = ({
    control,
    selectedId,
    errorMessage
}) => {
    // Static data for the select options
    const staticData: SelectItem[] = [
        { value: 'r1', label: 'ضعف الحالة الاجتماعية' },
        { value: 'r2', label: 'البعد عن المدرسة' },
        { value: 'r3', label: ' يتيم الأب ' },
        { value: 'r4', label: ' يتيم الأم ' },
        { value: 'r5', label: ' يتيم الأبوين ' },
        { value: 'r6', label: ' مجهول الأب ' },
        { value: 'r7', label: ' مجهول الأبوين ' },
        { value: 'r8', label: ' سوء المعاملة من طرف الوالدين (العنف)' },
        { value: 'r9', label: ' الاستغلال المادي والاقتصادي للطفل : التسول به/ تشغيه ' },
        { value: 'autre', label: ' آخر' },
        // Add more options as needed
    ]

    return (
        <Controller
            name="raison"
            control={control}
            defaultValue={selectedId}
            render={({ field: { ref, onChange } }) => (
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

export default UserSelectList
