<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $fillable = [
        'name',
        'model',
        'display_name',
        'description',
        'variant',
        'scale',
        'grade',
        'type_id',
        'brand_id',
        'line_id',
        'series_id',
        'group_id',
        'wave_id',
        'item_category_id',
        'bar_code',
        'image_links',
        'active',
    ];
}