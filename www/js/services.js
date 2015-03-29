var gservices = angular.module('gservices', ['ngResource']);

gservices.factory("gusers", function($resource) {
  return $resource("/api/users/:id", { id: "@_id" },
    {
      'create':  { method: 'POST' },
      'index':   { method: 'GET', isArray: true },
      'show':    { method: 'GET', isArray: false },
      'update':  { method: 'PUT' },
      'destroy': { method: 'DELETE' }
    }
  );
});