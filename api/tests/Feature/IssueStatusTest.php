<?php /** @noinspection NonAsciiCharacters */

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\DemandeStatus;
use App\Models\User;

class DemandeStatusTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        $this->seed('DemandeStatusSeeder');

        /** @var \App\Models\User $user */
        $user = User::factory()->create();
        $this->actingAs($user);
    }

    /**
     * @test
     */
    public function 一覧を取得できる()
    {
        $response = $this->getJson('api/demande-statuses');
        $response
            ->assertOk()
            ->assertJsonCount(3);
    }

    /**
     * @test
     */
    public function 登録することができる()
    {
        $data = [
            'label' => 'テスト',
            'color' => 'test'
        ];

        $response = $this->postJson('api/demande-statuses', $data);
        $response
            ->assertCreated()
            ->assertJsonFragment($data);
    }

    /**
     * @test
     */
    public function 更新することができる()
    {
        $demande = DemandeStatus::firstWhere('id', 1);

        $demande->label = '書き換え';

        $response = $this->putJson("api/demande-statuses/{$demande->id}", $demande->toArray());

        $response
            ->assertOk()
            ->assertJsonFragment(['label' => $demande->label]);
    }

    /**
     * @test
     */
    public function 削除することができる()
    {
        $demandeStatuses = DemandeStatus::all();

        $response = $this->deleteJson('api/demande-statuses/1');
        $response->assertOk();

        $response = $this->getJson('api/demande-statuses');

        $response
            ->assertOk()
            ->assertJsonCount($demandeStatuses->count() -1);
    }
}
