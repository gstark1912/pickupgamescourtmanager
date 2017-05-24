(function() {
  'use strict';

  angular
	.module('app')
	.config(configure);

  function configure() {
    // Replaced by Gulp build task
    /*$compileProvider.debugInfoEnabled('@@debugInfoEnabled' !== 'false');
    $logProvider.debugEnabled('@@debugLogEnabled' !== 'false');*/
  }
})();
