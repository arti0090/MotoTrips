//registering motolist component
angular.
    module('motorcycleList').
    component('motorcycleList', {
    templateUrl: 'motorcycle-list/motorcycle-list.template.html',
  
        controller: function MotorcycleListController() {
            this.motorcycles = [
                {
                    name: 'Ducati Multistrada 950' ,
                    snippet: 'Fast and agile motorcycle. For travel and urban riding.'
                  },
                  {
                    name: 'Triumph Tiger 900',
                    snippet: 'For dirt riding and long traveling.'
                  },
                  {
                    name: 'BMW F800GS' ,
                    snippet: 'Smaller brother of one of the best adventure motorcycle.'
                  }
                  
            ];
        }
});