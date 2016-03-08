<?php
/**
 * Created by PhpStorm.
 * User: jbarron
 * Date: 3/7/16
 * Time: 11:07 PM
 */

namespace App\Providers;
use Doctrine\MongoDB\Connection;
use Doctrine\ODM\MongoDB\Configuration;
use Doctrine\ODM\MongoDB\DocumentManager;
use Doctrine\ODM\MongoDB\Mapping\Driver\AnnotationDriver;
use Illuminate\Support\ServiceProvider;


class OdmServiceProvider extends ServiceProvider
{


    public function register()
    {
        $this->app->bind('ODM',function($app){
            //Configuracion para cargar el ODM  doctrine mongo
         /*   $config = new Configuration();

            $config->setProxyDir((dirname(__FILE__) .'/Http/Controllers/Odm/Proxies'));
            $config->setProxyNamespace('Proxies');
            $config->setHydratorDir((dirname(__FILE__) .'/Http/Controllers/Odm/Hydrators'));
            $config->setHydratorNamespace('Hydrators');
            $config->setDefaultDB('dbAbbaDev01');


            $connection = new Connection();
            $config->setMetadataDriverImpl(AnnotationDriver::create((dirname(__FILE__) .'/Http/Controllers/Odm/Documents')));

            AnnotationDriver::registerAnnotationClasses();

            $dm = DocumentManager::create($connection, $config);
            return $dm;
*/        });
    }
}