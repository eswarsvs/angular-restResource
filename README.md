angular-restResource
====================

Angular Resource Module for REST API endpoints


Simple Example:
``` js
angular.module('App', ['restResource']).service('message', function(restResource) {
  return new restResource('/messages', {
    prefix: '/api/v1',
    suffix: '.json',
    update: 'put'
  });
})

angular.module('App').controller('MainCtrl', function(message) {
  message.create(data, config); // will do POST /api/v1/messages
  message.all(config);  // will do GET /api/v1/messages
  message.find(id, config); // will do GET /api/v1/messages/:id
  message.update(id, data, config); // will do PUT /api/v1/messages/:id (but can be configured to do patch)
  message.delete(id, config); // will do DELETE /api/v1/messages/:id

});
```


### restResource methods
