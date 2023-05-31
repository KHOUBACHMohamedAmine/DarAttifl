<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Demande extends Model
{
    use HasFactory;

    protected $fillable = [
        'prenom_Beneficiaire','nom_Beneficiaire','lieu_naiss','date_naiss','niveau_scolaire', 'adresse_familiale' ,'prenom_Tuteur','nom_Tuteur','CIN_Tuteur','CIN_date_validation','Tele_Tuteur','Profession_Tuteur','adresse_tuteur', 'status_id', 'user_id','raison','id_user'
    ];

    protected $casts = [
        'status_id' => 'integer'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
