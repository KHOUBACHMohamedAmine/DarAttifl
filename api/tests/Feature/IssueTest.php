<?php /** @noinspection NonAsciiCharacters */

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Demande;
use App\Models\User;

class DemandeTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        /** @var \App\Models\User $user */
        $user = User::factory()->create();
        $this->actingAs($user);
    }

    /**
     * @test
     */
    public function 一覧を取得できる()
    {
        $demandes = Demande::factory()->count(10)->create();
        $response = $this->getJson('api/demandes');
        $response
            ->assertOk()
            ->assertJsonCount($demandes->count(), 'data');
    }

    /**
     * @test
     */
    public function ひとつだけ取得できる()
    {
        $demandes = Demande::factory()->count(10)->create();
        $response = $this->getJson('api/demandes/1');
        $response
            ->assertOk()
            ->assertJson($demandes[0]->toArray());
    }

    /**
     * @test
     */
    public function レコードがない場合404エラー()
    {
        $response = $this->getJson('api/demandes/1');
        $response
            ->assertStatus(404)
            ->assertJson([
                'message' => 'そのリクエストはありません。'
            ]);
    }

    /**
     * @test
     */
    public function 登録することができる()
    {
        $data = [
            'title' => 'テスト課題',
            'body' => 'テスト内容',
            'status_id' => 1,
        ];

        $response = $this->postJson('api/demandes', $data);
        $response
            ->assertCreated()
            ->assertJsonFragment($data);
    }

    /**
     * @test
     */
    public function タイトルが空の場合は登録できない()
    {
        $data = [
            'title' => '',
            'status' => 1,
        ];

        $response = $this->postJson('api/demandes', $data);
        $response
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'title' => 'タイトルは、必ず指定してください。'
            ]);
    }

    /**
     * @test
     */
    public function タイトルが255文字の場合は登録できない()
    {
        $data = [
            'title' => str_repeat('あ', 256),
            'status_id' => 1,
        ];

        $response = $this->postJson('api/demandes', $data);
        $response
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'title' => 'タイトルは、255文字以下にしてください。'
            ]);
    }

    /**
     * @test
     */
    public function 内容が1001文字以上は登録できない()
    {
        $data = [
            'title' => 'テスト課題',
            'body' => str_repeat('あ', 1001),
            'status_id' => 1,
        ];

        $response = $this->postJson('api/demandes', $data);
        $response
            ->assertStatus(422)
            ->assertJsonValidationErrors([
                'body' => '内容は、1000文字以下にしてください。'
            ]);
    }

    /**
     * @test
     */
    public function 更新することができる()
    {
        $demande = Demande::factory()->create();

        $demande->title = '書き換え';

        $response = $this->putJson("api/demandes/{$demande->id}", $demande->toArray());
        $response
            ->assertOk()
            ->assertJsonFragment(['title' => $demande->title]);
    }

    /**
     * @test
     */
    public function 削除することができる()
    {
        $demandes = Demande::factory()->count(10)->create();

        $response = $this->deleteJson('api/demandes/1');
        $response->assertOk();

        $response = $this->getJson('api/demandes');
        $response
            ->assertOk()
            ->assertJsonCount($demandes->count() -1, 'data');
    }
}
