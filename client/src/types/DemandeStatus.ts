export type DemandeStatus = {
    id: number
    label: string
    color: string
    created_at: Date
    updated_at: Date
}

export type DemandeStatusCreate = {
    label: string
    color: string
}
