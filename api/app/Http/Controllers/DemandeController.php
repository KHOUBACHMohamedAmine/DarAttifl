<?php

namespace App\Http\Controllers;

use App\Models\Demande;
use App\Http\Requests\DemandeRequest;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Log;


class DemandeController extends Controller
{
    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $demandes = Demande::with([
                'user' => fn($q) => $q->select('id', 'name')
            ])
            ->select('id','prenom_Beneficiaire','nom_Beneficiaire','lieu_naiss','date_naiss','niveau_scolaire','status_id','prenom_Tuteur','nom_Tuteur','CIN_Tuteur','CIN_date_validation','Tele_Tuteur','Profession_Tuteur','adresse_tuteur','user_id','created_at','updated_at','raison','id_user')
            ->orderByDesc('id')
            ->paginate(10);

        return response()->json($demandes);
    }

    /**
     * Get demandes by user ID.
     *
     * @param int $userId
     * @return \Illuminate\Http\JsonResponse
     */
    public function getByUserId($userId)
    {
  
        $demandes = Demande::with([
                'user' => fn($q) => $q->select('id', 'name')
            ])
            ->where('id_user', $userId)
            ->select('id','prenom_Beneficiaire','nom_Beneficiaire','lieu_naiss','date_naiss','niveau_scolaire','status_id','prenom_Tuteur','nom_Tuteur','CIN_Tuteur','CIN_date_validation','Tele_Tuteur','Profession_Tuteur','adresse_tuteur','user_id','created_at','updated_at','raison','id_user')
            ->orderByDesc('id')
            ->paginate(10);
        return response()->json($demandes);
    }
    



    /**
     * @param DemandeRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(DemandeRequest $request)
    {
        $demande = Demande::create($request->all());
        return response()->json($demande, Response::HTTP_CREATED);
    }

    /**
     * @param Demande $demande
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Demande $demande)
    {
        $demande->load([
            'user' => fn($q) => $q->select('id', 'name')
        ]);
        return response()->json($demande);
    }

    /**
     * @param DemandeRequest $request
     * @param Demande $demande
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(DemandeRequest $request, Demande $demande)
    {
        return $demande->update($request->all())
            ? response()->json($demande)
            : response()->json([], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @param Demande $demande
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Demande $demande)
    {
        return $demande->delete()
            ? response()->json($demande)
            : response()->json([], Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
