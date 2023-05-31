<?php

namespace App\Http\Controllers;

use App\Models\DemandeStatus;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class DemandeStatusController extends Controller
{
    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $demandesStatus = DemandeStatus::all();
        return response()->json($demandesStatus);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $demandeStatus = DemandeStatus::create($request->all());
        return response()->json($demandeStatus, Response::HTTP_CREATED);
    }

    /**
     * @param DemandeStatus $demandeStatus
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(DemandeStatus $demandeStatus)
    {
        return response()->json($demandeStatus);
    }

    /**
     * @param Request $request
     * @param DemandeStatus $demandeStatus
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, DemandeStatus $demandeStatus)
    {
        return $demandeStatus->update($request->all())
            ? response()->json($demandeStatus)
            : response()->json([], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @param DemandeStatus $demandeStatus
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(DemandeStatus $demandeStatus)
    {
        return $demandeStatus->delete()
            ? response()->json($demandeStatus)
            : response()->json([], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function list()
    {
        $demandesStatus = DemandeStatus::select('id', 'label', 'color')->get()->keyBy('id');
        return response()->json($demandesStatus);
    }
}
