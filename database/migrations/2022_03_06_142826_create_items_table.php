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
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('model')->nullable();
            $table->string('display_name')->nullable();
            $table->text('description')->nullable();
            $table->string('variant')->nullable();
            $table->unsignedInteger('parent_variant_id')->nullable();
            $table->date('release_date')->nullable();
            $table->unsignedInteger('grade_id')->nullable();
            $table->unsignedInteger('scale_id')->nullable();
            $table->unsignedInteger('type_id')->nullable();
            $table->unsignedInteger('brand_id')->nullable();
            $table->unsignedInteger('line_id')->nullable();
            $table->unsignedInteger('series_id')->nullable();
            $table->unsignedInteger('group_id')->nullable();
            $table->unsignedInteger('wave_id')->nullable();
            $table->string('bar_code')->nullable();
            $table->string('profile_url')->nullable();
            $table->string('thumbnail_url')->nullable();
            $table->text('image_links')->nullable();
            $table->text('tags')->nullable();
            $table->string('item_material_ids')->nullable();
            $table->string('item_size')->nullable();
            $table->string('item_weight')->nullable();
            $table->text('remarks')->nullable();
            $table->string('color')->nullable();
            $table->unsignedTinyInteger('active')->default(1);
            $table->unsignedInteger('user_id');

            $table->softDeletes();
            $table->timestamps();

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
        Schema::dropIfExists('items');
    }
};
