<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Laravel\Lumen\Auth\Authorizable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;

class ServiceRequest extends Model implements AuthenticatableContract, AuthorizableContract
{
    use Authenticatable, Authorizable;

    // const UPDATED_AT = null;
    public $timestamps = false;
    protected $table = "service_request";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'service_name'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    // protected $hidden = [
    //     'password',
    // ];
}
