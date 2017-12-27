(function() {
  'use strict';

  angular
    .module('projetoLn')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
