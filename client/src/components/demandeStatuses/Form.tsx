import React, { useState } from 'react'
import { DemandeStatus, DemandeStatusCreate } from '@/types/DemandeStatus'
import { InputWrapper, Input, Button, Space, ColorSwatch, Group, useMantineTheme } from '@mantine/core'
import { useForm, SubmitHandler } from 'react-hook-form'
import { CheckIcon } from '@radix-ui/react-icons'

type Props = {
    demandeStatus: DemandeStatus|DemandeStatusCreate,
    submitAction: (demandeStatus: DemandeStatus, callback?: () => void) => Promise<void>
    handleClose: () => void
}

const DemandeStatusForm: React.VFC<Props> = ({
    demandeStatus,
    submitAction,
    handleClose
}) => {
    const {register, handleSubmit, formState: { errors }} = useForm<DemandeStatus>()

    const [selectColor, setSelectColor] = useState(demandeStatus.color || '')

    const theme = useMantineTheme();

    const swatches = Object.keys(theme.colors).map((color) => (
        <ColorSwatch
            key={color}
            color={theme.colors[color][6]}
            style={{color: '#fff', cursor: 'pointer'}}
            onClick={() => setSelectColor(color)}
        >
            {selectColor === color ? <CheckIcon /> : ''}
        </ColorSwatch>
    ));

    const onSubmit: SubmitHandler<DemandeStatus> = data => {
        data.color = selectColor
        const updateData = {...demandeStatus, ...data}
        return submitAction(updateData, () => {
            handleClose()
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputWrapper
                id="input-label"
                required
                label="ラベル"
                error={errors.label?.message}
            >
                <Input
                    defaultValue={demandeStatus.label}
                    {...register('label', {
                        required: '必ず入力してください。',
                        maxLength: {
                            value: 10,
                            message: '10文字以内で入力してください。'
                        }
                    })}
                    invalid={errors.label !== undefined}
                />
            </InputWrapper>
            <Space h="sm" />
            <InputWrapper
                id="input-color"
                required
                label="カラー"
                error={errors.color?.message}
            >
                <Group spacing="xs">
                {swatches}
                </Group>
            </InputWrapper>
            <Space h="sm" />
            <Group spacing="xs">
                <Button type="submit">保存</Button>
                <Button variant="light" color="gray" onClick={handleClose}>閉じる</Button>
            </Group>
        </form>
    )
}

export default DemandeStatusForm
