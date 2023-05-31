import React from 'react'
import { Table, Button, Group, ColorSwatch, useMantineTheme } from '@mantine/core'
import dayjs from 'dayjs'
import { DemandeStatus } from '@/types/DemandeStatus'

type Props = {
    data: DemandeStatus[]
    handleOpenModal: (editId: number|null) => void
    handleDelete: (demandeStatus: DemandeStatus) => void
}

const DemandeStatusList: React.VFC<Props> = ({
   data,
   handleOpenModal,
   handleDelete
}) => {
    const theme = useMantineTheme()

    return (
        <div>
            <Table striped highlightOnHover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>カラー</th>
                    <th>ラベル</th>
                    <th>編集日</th>
                    <th>登録日</th>
                    <th>アクション</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map(demandeStatus => (
                        <tr key={demandeStatus.id}>
                            <td width={50}>
                                {('00000' + demandeStatus.id).slice(-5)}
                            </td>
                            <td width={70}>
                                <ColorSwatch color={theme.colors[demandeStatus.color][6]} />
                            </td>
                            <td>{demandeStatus.label}</td>
                            <td width={80}>{dayjs(demandeStatus.updated_at).format('YYYY/MM/DD')}</td>
                            <td width={80}>{dayjs(demandeStatus.created_at).format('YYYY/MM/DD')}</td>
                            <td width={150}>
                                <Group spacing="xs">
                                    <Button variant="outline" size="xs" onClick={() => handleOpenModal(demandeStatus.id)}>編集</Button>
                                    <Button color="red" size="xs" onClick={() => handleDelete(demandeStatus)}>削除</Button>
                                </Group>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
        </div>
    )
}

export default DemandeStatusList
