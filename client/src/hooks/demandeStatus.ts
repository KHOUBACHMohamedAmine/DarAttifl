import useSWR from 'swr'
import axios, { validateErrorNotice } from '@/libs/axios'
import { DemandeStatus, DemandeStatusCreate } from "@/types/DemandeStatus"
import { toast } from 'react-toastify'

const APIURL = '/api/demande-statuses'

export const useDemandeStatusList = () => {
    const api = `${APIURL}/list`

    const { data, error } = useSWR<DemandeStatus[]>(api, () =>
        axios
            .get(api)
            .then((res: any) => res.data)
    )

    return {
        data,
        error
    }
}

export const useDemandeStatuses = () => {
    const api = `${APIURL}`

    const { data, error, mutate } = useSWR<DemandeStatus[]>(api, () =>
        axios
            .get(api)
            .then((res: any) => res.data)
    )

    const createAction = async (demandeStatus: DemandeStatusCreate, callback?: () => void) => {
        await axios
            .post(APIURL, demandeStatus)
            .then(() => {
                mutate()
                toast.success('登録に成功しました')
            })
            .catch(error => {
                validateErrorNotice(error)
            })
            .finally(() => {
                if (callback) callback()
            })
    }

    const updateAction = async (demandeStatus: DemandeStatus, callback?: () => void) => {
        const api = `${APIURL}/${demandeStatus.id}`
        await axios
            .put(api, demandeStatus)
            .then(() => {
                mutate()
                toast.success('更新に成功しました')
            })
            .catch(error => {
                validateErrorNotice(error)
            })
            .finally(() => {
                if (callback) callback()
            })
    }

    const deleteAction = async (demandeStatus: DemandeStatus) => {
        const api = `${APIURL}/${demandeStatus.id}`
        await axios
            .delete(api)
            .then(() => {
                mutate()
                toast.success('削除に成功しました')
            })
            .catch(error => {
                toast.error('削除に失敗しました')
                console.log(error.message)
            })
    }

    return {
        data,
        error,
        createAction,
        updateAction,
        deleteAction
    }
}

