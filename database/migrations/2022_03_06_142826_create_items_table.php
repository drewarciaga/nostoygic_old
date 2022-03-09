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
            $table->string('description')->nullable();
            $table->string('variant')->nullable();
            $table->unsignedInteger('grade_id')->nullable();
            $table->unsignedInteger('scale_id')->nullable();
            $table->unsignedInteger('type_id')->nullable();
            $table->unsignedInteger('brand_id')->nullable();
            $table->unsignedInteger('line_id')->nullable();
            $table->unsignedInteger('series_id')->nullable();
            $table->unsignedInteger('group_id')->nullable();
            $table->unsignedInteger('wave_id')->nullable();
            $table->unsignedInteger('item_category_id')->nullable();
            $table->string('bar_code')->nullable();
            $table->text('image_links')->nullable();
            $table->unsignedTinyInteger('active')->default(1);

            $table->softDeletes();
            $table->timestamps();
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
