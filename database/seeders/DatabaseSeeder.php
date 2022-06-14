<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        DB::table('users')->delete();
        DB::table('users')->insert([
            [ 'username' => 'drew', 'first_name' => 'Andrew', 'last_name' => 'Arciaga', 'middle_name' => 'Catindig', 'email' => 'drew_arciaga@yahoo.com', 'password' => '$2y$10$7TGVsf.ErJQi4kVwWmvBS.GUBT8.P2dJZLONsXbJth3DInJkGezBu',
              'active' => 1, 'locked' => 0, 'super_admin' => 1 ],
            [ 'username' => 'rinoa', 'first_name' => 'Rinoa', 'last_name' => 'Heartily', 'middle_name' => null, 'email' => 'rinoheartily@yahoo.com', 'password' => '$2y$10$7TGVsf.ErJQi4kVwWmvBS.GUBT8.P2dJZLONsXbJth3DInJkGezBu',
              'active' => 1, 'locked' => 0, 'super_admin' => 0 ],
            [ 'username' => 'yuna', 'first_name' => 'Yuna', 'last_name' => null, 'middle_name' => null, 'email' => 'yuna@yahoo.com', 'password' => '$2y$10$7TGVsf.ErJQi4kVwWmvBS.GUBT8.P2dJZLONsXbJth3DInJkGezBu',
              'active' => 1, 'locked' => 0, 'super_admin' => 0 ]
        ]);

        DB::table('item_types')->delete();
        DB::table('item_types')->insert([
            [ 'name' => 'Action Figures', 'user_id' => 1 ],
            [ 'name' => 'Plastic Models', 'user_id' => 1 ],
            [ 'name' => 'Comics', 'user_id' => 1 ],
            [ 'name' => 'Trading Cards', 'user_id' => 1 ],
            [ 'name' => 'Statue Figures', 'user_id' => 1 ],
            [ 'name' => '3D Prints', 'user_id' => 1 ],
            [ 'name' => 'Graphic Novels', 'user_id' => 1 ],
            [ 'name' => 'Books', 'user_id' => 1 ],
            [ 'name' => 'Magazine', 'user_id' => 1 ],
        ]);

        DB::table('item_brands')->delete();
        DB::table('item_brands')->insert([
            [ 'name' => 'Hasbro', 'user_id' => 1 ],
            [ 'name' => 'Hot Toys', 'user_id' => 1 ],
            [ 'name' => 'Good Smile Company', 'user_id' => 1 ],
            [ 'name' => 'Mezco Toyz', 'user_id' => 1 ],
            [ 'name' => 'Mattel', 'user_id' => 1 ],
            [ 'name' => 'Neca', 'user_id' => 1 ],
            [ 'name' => 'Storm Collectibles', 'user_id' => 1 ],
            [ 'name' => 'McFarlane Toys', 'user_id' => 1 ],
            [ 'name' => 'Diamond Select Toys', 'user_id' => 1 ],
            [ 'name' => 'TruForce Collectibles', 'user_id' => 1 ],
            [ 'name' => 'Bandai Tamashii Nations', 'user_id' => 1 ],
            [ 'name' => 'Bandai', 'user_id' => 1 ],
            [ 'name' => 'Bandai Spirits', 'user_id' => 1 ],
            [ 'name' => 'Banpresto', 'user_id' => 1 ],
            [ 'name' => 'Threezero', 'user_id' => 1 ],
            [ 'name' => 'ZD Toys', 'user_id' => 1 ],
            [ 'name' => 'TBLeague', 'user_id' => 1 ],
            [ 'name' => 'Takara Tomy', 'user_id' => 1 ],
            [ 'name' => 'Tamiya', 'user_id' => 1 ],
            [ 'name' => 'Kotobukiya', 'user_id' => 1 ],
            [ 'name' => 'Taito', 'user_id' => 1 ]
        ]);

        DB::table('item_lines')->delete();
        DB::table('item_lines')->insert([
            [ 'name' => 'Marvel Legends', 'user_id' => 1 ],
            [ 'name' => 'HasLab', 'user_id' => 1 ],
            [ 'name' => 'Power Rangers Lightning Collection', 'user_id' => 1 ],
            [ 'name' => 'Soul Of Chogokin', 'user_id' => 1 ],
            [ 'name' => 'S.H.Figuarts', 'user_id' => 1 ],
            [ 'name' => 'Marvel Select', 'user_id' => 1 ],

        ]);

        DB::table('item_lines')->delete();
        DB::table('item_lines')->insert([
            [ 'name' => 'Marvel Legends', 'user_id' => 1 ],
            [ 'name' => 'HasLab', 'user_id' => 1 ],
            [ 'name' => 'Power Rangers Lightning Collection', 'user_id' => 1 ],
            [ 'name' => 'Soul Of Chogokin', 'user_id' => 1 ],
            [ 'name' => 'S.H.Figuarts', 'user_id' => 1 ],
            [ 'name' => 'Marvel Select', 'user_id' => 1 ],
            [ 'name' => 'Gunpla', 'user_id' => 1 ],
            [ 'name' => 'Metal Build', 'user_id' => 1 ],
            [ 'name' => 'NXEdge Style', 'user_id' => 1 ],
            [ 'name' => 'DX Chogokin', 'user_id' => 1 ],
            [ 'name' => 'Bishoujo Series', 'user_id' => 1 ],

        ]);

        DB::table('item_scales')->delete();
        DB::table('item_scales')->insert([
            [ 'name' => '1:12', 'user_id' => 1 ],
            [ 'name' => '1:6', 'user_id' => 1 ],
            [ 'name' => '1:4', 'user_id' => 1 ],
            [ 'name' => '1:9', 'user_id' => 1 ],
            [ 'name' => '1:10', 'user_id' => 1 ],
            [ 'name' => '1:18', 'user_id' => 1 ],
            [ 'name' => '1:48', 'user_id' => 1 ],
            [ 'name' => '1:100', 'user_id' => 1 ],
            [ 'name' => '1:24', 'user_id' => 1 ],
            [ 'name' => '1:35', 'user_id' => 1 ],
            [ 'name' => '1:144', 'user_id' => 1 ],
            [ 'name' => '1:60', 'user_id' => 1 ],
            [ 'name' => '1:200', 'user_id' => 1 ],


        ]);

        DB::table('item_grades')->delete();
        DB::table('item_grades')->insert([
            [ 'name' => 'Master Grade', 'user_id' => 1 ],
            [ 'name' => 'Master Grade Extreme', 'user_id' => 1 ],
            [ 'name' => 'High Grade', 'user_id' => 1 ],
            [ 'name' => 'Reborn-One Hundred', 'user_id' => 1 ],
            [ 'name' => 'Perfect Grade', 'user_id' => 1 ],
            [ 'name' => 'Perfect Grade Unleashed', 'user_id' => 1 ],
            [ 'name' => 'Mega Size Model', 'user_id' => 1 ],
            [ 'name' => 'First Grade', 'user_id' => 1 ],
            [ 'name' => 'Real Grade', 'user_id' => 1 ],
            [ 'name' => 'Entry Grade', 'user_id' => 1 ],

        ]);

        DB::table('item_series')->delete();
        DB::table('item_series')->insert([
            [ 'name' => 'Attack on Titan', 'user_id' => 1 ],
            [ 'name' => 'DC Comics', 'user_id' => 1 ],
            [ 'name' => 'Detective Conan', 'user_id' => 1 ],
            [ 'name' => 'Doraemon', 'user_id' => 1 ],
            [ 'name' => 'Dragon Ball', 'user_id' => 1 ],
            [ 'name' => 'Final Fantasy', 'user_id' => 1 ],
            [ 'name' => 'Fortnite', 'user_id' => 1 ],
            [ 'name' => 'Gundam', 'user_id' => 1 ],
            [ 'name' => 'G.I. Joe', 'user_id' => 1 ],
            [ 'name' => 'Hunter x Hunter', 'user_id' => 1 ],
            [ 'name' => 'Kamen Rider', 'user_id' => 1 ],
            [ 'name' => 'Mavel Cinematic Universe', 'user_id' => 1 ],
            [ 'name' => 'Marvel Comics', 'user_id' => 1 ],
            [ 'name' => 'Metal Gear', 'user_id' => 1 ],
            [ 'name' => 'Naruto', 'user_id' => 1 ],
            [ 'name' => 'Neon Genesis Evangelion', 'user_id' => 1 ],
            [ 'name' => 'Ninja Turtles', 'user_id' => 1 ],
            [ 'name' => 'One Piece', 'user_id' => 1 ],
            [ 'name' => 'Pokémon', 'user_id' => 1 ],
            [ 'name' => 'Power Rangers', 'user_id' => 1 ],
            [ 'name' => 'Rurouni Kenshin', 'user_id' => 1 ],
            [ 'name' => 'Sailor Moon', 'user_id' => 1 ],
            [ 'name' => 'Shaman King', 'user_id' => 1 ],
            [ 'name' => 'Slam Dunk', 'user_id' => 1 ],
            [ 'name' => 'Star Wars', 'user_id' => 1 ],
            [ 'name' => 'Street Fighter', 'user_id' => 1 ],
            [ 'name' => 'Transformers', 'user_id' => 1 ],
            [ 'name' => 'X-Men', 'user_id' => 1 ],
            [ 'name' => 'Yu Yu Hakusho', 'user_id' => 1 ],
            [ 'name' => 'YU-GI-OH!', 'user_id' => 1 ],

        ]);
    }
}
