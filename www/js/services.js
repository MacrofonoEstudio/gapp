angular.module('gapp.gservices', ['ngResource'])

.factory("gusers", function($resource) {
  return $resource("https://sessions2.herokuapp.com/api/users/:id", { id: "@_id" },
    {
      'create':  { method: 'POST' },
      'index':   { method: 'GET', isArray: true },
      'show':    { method: 'GET', isArray: false },
      'update':  { method: 'PUT' },
      'destroy': { method: 'DELETE' }
    }
  );
});