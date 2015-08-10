var limiteData = 120;

Meteor.startup(function () {
    collectionApi = new CollectionAPI({
      apiPath: 'api',                      
      standAlone: false,                   
      sslEnabled: false,                   
      listenPort: 3005,                    
      listenHost: undefined               
    });

collectionApi.addCollection(DatosLectura, 'lectura', {
      methods: ['POST'],
      before: {  
        POST: function(obj) { 
          if (DatosLectura.find().count() >= limiteData) {
            DatosLectura.remove(DatosLectura.findOne({}, {sort: {time: 1}})._id);
          };
          return true
          },  
        GET: undefined,  
        PUT: undefined, 
        DELETE: undefined 
      }
    });

    collectionApi.start();

    Meteor.publish('lectura', function() {
      return DatosLectura.find({}, {sort: {time: 1}, limit: limiteData});
      this.ready();
    });

});

