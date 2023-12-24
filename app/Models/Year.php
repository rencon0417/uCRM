<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Year extends Model
{
    use HasFactory;

    protected $fillable = [
        'academic_year',
    ];

    public function quetions()
    {
        return $this->hasMany(Question::class);
    }
}
