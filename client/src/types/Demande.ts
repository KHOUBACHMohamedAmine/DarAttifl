import { Pager } from './Pager'

type User = {
    id: number
    name: string
}

export type Demande = {
    data: any
    length: number
    id: number
    prenom_Beneficiaire: string
    nom_Beneficiaire: string
    lieu_naiss: string
    date_naiss: Date
    niveau_scolaire: string
    adresse_familiale: string
    status_id: number
    user_id?: string
    user?: User
    prenom_Tuteur: string
    nom_Tuteur: string
    CIN_Tuteur: string
    CIN_date_validation: Date
    Tele_Tuteur: number
    Profession_Tuteur: string
    adresse_tuteur:string
    raison: string
    created_at: Date
    updated_at: Date
    id_user: number
    // img1: string
    // img2: string
}

export type DemandeCreate = {
    prenom_Beneficiaire: string
    nom_Beneficiaire: string
    lieu_naiss: string
    date_naiss: Date
    niveau_scolaire: string
    adresse_familiale: string
    status_id: number
    user_id?: string
    prenom_Tuteur: string
    nom_Tuteur: string
    CIN_Tuteur: string
    CIN_date_validation: Date
    Tele_Tuteur: number
    Profession_Tuteur: string
    adresse_tuteur:string
    raison: string 
    id_user: number
    // img1: string
    // img2: string
}

export type DemandePager = Pager & {
    data: Demande[]
}
