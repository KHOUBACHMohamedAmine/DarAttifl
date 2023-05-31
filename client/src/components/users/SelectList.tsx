import React from 'react'
import { Loader, Select } from '@mantine/core'
import { Controller, Control } from 'react-hook-form'
import type { SelectItem } from '@mantine/core'

type Props = {
    control: Control<Demande>
    selectedId: string | undefined
    errorMessage: string | undefined
}

const UserSelectList: React.VFC<Props> = ({
    control,
    selectedId,
    errorMessage
}) => {
    // Static data for the select options
    const staticData: SelectItem[] = [
        { value: 'pere', label: 'أب' },
        { value: 'mere', label: 'أم' },
        { value: 'des proches', label: 'من الأقارب' },
        { value: 'autre', label: 'آخر' },
        // Add more options as needed
    ]

    return (
        <Controller
            name="user_id"
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
