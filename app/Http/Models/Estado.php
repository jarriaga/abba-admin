<?php
/**
 * Created by PhpStorm.
 * User: jarriaga
 * Date: 9/17/15
 * Time: 8:00 PM
 * Description: This class is used to handle records into the collection User
 * Jesus Arriaga    -   jarriagabarron@gmail.com
 */

namespace App\Http\Models;
use Illuminate\Support\Facades\Hash;
use Illuminate\Contracts\Auth\Authenticatable;

class Estado extends MongoDb{

    protected   $nameCollection = 'estados';
    protected   $fields;

    /**
     * this function return the list of states of Mexico
     * @return mixed
     */
    public static function findByAll()
    {
        $instance   =   new static;
        $estados    =   $instance->collection->find();
        return $estados;
    }

    public static function findBy(  $array  =   null    )
    {
        $instance   =   new static;
        $regionEdo    =   $instance->collection->find($array);
        return  $regionEdo;
    }


}
