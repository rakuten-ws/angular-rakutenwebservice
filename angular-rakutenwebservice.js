/**
 * Angular Rakuten WebService Module
 * (c) 2014 Rakuten, inc. http://webservice.rakuten.co.jp
 * License: MIT
 */
(function () {
  var rakutenService = angular.module('RakutenService', ['ngResource']);

  rakutenService.constant('RakutenServiceConfig', {
    applicationId: 'please set',
    affiliateId: null
  });
  rakutenService.factory('KoboBooks', ['$resource', 'RakutenServiceConfig',
    function ($resource, config) {
      return $resource('https://app.rakuten.co.jp/services/api/Kobo/EbookSearch/20131010', {
        applicationId: config.applicationId,
        affiliateId: config.affiliateId,
        format: 'json'
      }, {
        query: { method: 'GET' }
      });
    }
  ]);
})();

