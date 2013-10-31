angular.module('restResource', []).provider('restResource', function() {
  this.$get = function($http) {
    function restResource(url, config) {
      this.url = url;
      this.prefix = config.prefix || '';
      this.suffix = config.suffix || '';
      this.method = config.method || 'PUT';
    }
    
    restResource.prototype = {
      create: function(data, config) {
        return $http.post(this.prefix + this.url + this.suffix, data, config);
      },
      all: function(config) {
        return $http.get(this.prefix + this.url + this.suffix, config);
      },
      find: function(id, config) {
        if (!id) { throw Error("called method without id"); }
        id = '/' + id;
        return $http.get(this.prefix + this.url + id + this.suffix, config);
      },
      update: function(id, data, config) {
        if (!id) { throw Error("called method without id"); }
        id = '/' + id;
        return $http({
          url: this.prefix + this.url + id + this.suffix,
          method: this.method.toUpperCase(),
          data: data,
          config: config
        });
      },
      delete: function(id, config) {
        if (!id) { throw Error("called method without id"); }
        return $http.delete(this.prefix + this.url + id + this.suffix, config);
      }
    };
    
    return restResource;
  };
});
