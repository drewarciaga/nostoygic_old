<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('item_series', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('description')->nullable();
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('sortOrder')->default(0);
            $table->string('image_url')->nullable();
            $table->string('thumbnail_url')->nullable();
            $table->string('color')->nullable();
            $table->text('tags')->nullable();
            $table->unsignedTinyInteger('active')->default(1);
            $table->softDeletes();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('item_series');
    }
};
