import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useSWR, { useSWRConfig } from 'swr'
import axios, { validateErrorNotice } from '@/libs/axios'
import { Demande, DemandePager, DemandeCreate } from '@/types/Demande'
import { toast } from 'react-toastify'

const APIURL = '/api/demandes'

export const useDemandes = (pageIndex: number = 1) => {
    const api = `${APIURL}?page=${pageIndex}`

    const { data: demandes, error, mutate } = useSWR<DemandePager>(api, () =>
        axios
            .get(api)
            .then((res: any) => res.data)
    )

    const deleteAction = async (demande: Demande) => {
        await axios
            .delete(`${APIURL}/${demande.id}`)
            .then(() => {
                toast.success('تم الحذف بنجاح')
                mutate(demandes)
            })
            .catch(() => {
                toast.error('فشل الحذف')
            })
    }

    return {
        demandes,
        error,
        deleteAction
    }
}

export const useDemande = () => {
    const { mutate } = useSWRConfig()
    const router = useRouter()
    let timer: number

    const getItem = (id: number) => {
        const api = `${APIURL}/${id}`
        return useSWR<Demande>(api, async () =>
            await axios
                .get(api)
                .then((res: any) => res.data)
        )
    }

    const getItem2 = (id_user: number) => {
        const api = `/api/get-by-user/${id_user}`
        return useSWR<Demande>(api, async () =>
            await axios
                .get(api)
                .then((res: any) => res.data)
        )
    }

    const createAction = async (demande: DemandeCreate, callback?: () => void) => {
        await axios
            .post(APIURL, demande)
            .then(() => {
                toast.success('تم التسجيل بنجاح')
                router.replace('/demande')
            })
            .catch(error => {
                validateErrorNotice(error)
            })
            .finally(() => {
                if (callback) {
                    timer = window.setTimeout(() => {
                        callback()
                    }, 1000)
                }
            })
    }

    const updateAction = async (demande: Demande, callback?: () => void) => {
        const api = `${APIURL}/${demande.id}`
        await axios
            .put(api, demande)
            .then(() => {
                mutate(api)
                toast.success('تم التحديث بنجاح')
            })
            .catch(error => {
                validateErrorNotice(error)
            })
            .finally(() => {
                if (callback) {
                    timer = window.setTimeout(() => {
                        callback()
                    }, 1000)
                }
            })
    }

    const deleteAction = async (demande: Demande) => {
        const api = `${APIURL}/${demande.id}`
        await axios
            .delete(api)
            .then(() => {
                toast.success('تم الحذف بنجاح')
                router.replace('/demandes/')
            })
            .catch(() => {
                toast.error('فشل الحذف')
            })
    }

    useEffect(() => {
        return () => clearInterval(timer)
    }, [])

    return {
        getItem,
        getItem2,
        createAction,
        updateAction,
        deleteAction
    }
}
