<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Product::class, function (Faker $faker) {
    return [
    	'user_id' => App\User::all()->random()->id,
      'name' => $faker->word(),
      'price' => $faker->randomFloat(2, 200, 1000),
      'description' => $faker->paragraph(random_int(1, 3)),
    ];
});