//Test engine = jasmine 2.4 https://jasmine.github.io/2.4/introduction.html https://jasmine.github.io/
//Testing if Controller works properly 
describe('MotorcycleListController', function() {
    beforeEach(module('motorcycleApp')); //beforeEach test load motorcycleApp module

    //inject controller in test function and controller to create instance of MLController
        it('should create a `motorcycles` model with 3 motorcycles', inject(function($controller)  {
var scope = {};
var ctrl = $controller('MotorcycleListController', {$scope:scope});

//expect that test will show that 3 elements are shown
expect(scope.motorcycles.length).toBe(3);

    }))
});