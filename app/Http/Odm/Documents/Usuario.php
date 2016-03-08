<?php
namespace App\Http\Odm\Documents;
use Doctrine\ODM\MongoDB\Mapping\Annotations as ODM;

/** @ODM\Document */
class Usuario
{
    /** @ODM\Id */
    private $id;

    /** @ODM\Field(type="string") */
    private $name;

    /** @ODM\Field(type="string") */
    private $email;


    public function setName($string)
    {
        $this->name     =   $string;
    }
}
