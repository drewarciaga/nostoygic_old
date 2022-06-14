<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use App\Models\Item;

class UniqueItem implements Rule
{
    private $brand_id;
    private $type_id;
    private $item_id;
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($type_id, $brand_id, $item_id = null)
    {
        $this->type_id  = $type_id;
        $this->brand_id = $brand_id;
        $this->item_id  = $item_id;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $id = $this->item_id;
        $existingItem = Item::where('name', $value)
                        ->when($id, function ($query, $id) {
                            $query->where('id', '!=', $id);
                        })
                        ->where('type_id', $this->type_id)
                        ->where('brand_id', $this->brand_id)
                        ->count();

        if($existingItem > 0){
            return false;
        }else{
            return true;
        }
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The :attribute under this brand already exists.';
    }
}
