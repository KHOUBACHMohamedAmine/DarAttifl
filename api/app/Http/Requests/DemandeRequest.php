<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DemandeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'prenom_Beneficiaire' => 'required|max:255',
            'nom_Beneficiaire' => 'required',
            'lieu_naiss' => 'required',
            'date_naiss' => 'required',
            'niveau_scolaire' => 'required',
            'adresse_familiale' => 'max:1000',
            'status_id' => 'required|numeric',
            'prenom_Tuteur' => 'required',
            'nom_Tuteur' => 'required',
            'CIN_Tuteur' => 'required',
            'CIN_date_validation' => 'required',
            'Tele_Tuteur' => 'required',
            'Profession_Tuteur' => 'required',
            'adresse_tuteur' => 'required',
            'raison' => 'required',
            'id_user' => 'required',
            // 'img1' => 'required',
            // 'img2' => 'required',
        ];
    }

    /**
     * @return array
     */
    public function attributes()
    {
        return [
            'prenom_Beneficiaire' => 'タイトル',
            'adresse_familiale' => '内容',
            'status_id' => 'ステータス',
        ];
    }
}
