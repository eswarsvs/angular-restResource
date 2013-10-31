angular-restResource
====================

Todo:

* Tests
* example app

feel free to request features or send a pull-request :)

Angular Resource Module for REST API endpoints


Simple Example:
``` js
angular.module('App', ['restResource']).service('message', function(restResource) {
  return new restResource('/messages', {
    prefix: '/api/v1', // default is ''
    suffix: '.json', // default is ''
    update: 'PUT' // default is PUT
  });
})

angular.module('App').controller('MainCtrl', function(message) {
  message.create(data, config); // will do POST /api/v1/messages
  message.all(config);  // will do GET /api/v1/messages
  message.find(id, config); // will do GET /api/v1/messages/:id
  message.update(id, data, config); // will do PUT /api/v1/messages/:id (but can be configured to do PATCH)
  message.delete(id, config); // will do DELETE /api/v1/messages/:id

});
```


example: http://plnkr.co/edit/dKw4EYBDl28VXka90yn8?p=preview
