<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tugas_users', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('tugas_id');
            $table->foreign('tugas_id')->references('id')->on('tugas');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');

            $table->string('tugas1')->nullable();
            $table->string('waktu_submit1')->nullable();

            $table->string('tugas2')->nullable();
            $table->string('waktu_submit2')->nullable();

            $table->string('tugas3')->nullable();
            $table->string('waktu_submit3')->nullable();

            $table->string('tugas4')->nullable();
            $table->string('waktu_submit4')->nullable();

            $table->string('tugas5')->nullable();
            $table->string('waktu_submit5')->nullable();

            $table->string('tugas6')->nullable();
            $table->string('waktu_submit6')->nullable();

            $table->string('status')->nullable();

            $table->integer('nilai')->nullable();
            $table->longText('feedback')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tugas_users');
    }
};
