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
        Schema::create('tbl_trucks', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('family');
            $table->string('national_no');
            $table->string('mobile');
            $table->string('ir_no');
            $table->string('transit_no');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tbl_trucks', function (Blueprint $table) {
            $table->dropSoftDeletes();
        });
    }
};
