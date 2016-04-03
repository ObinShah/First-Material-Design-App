(function () {
    angular.module('App')
        .controller('PageController', ['$mdSidenav', pageController])
        .controller('LeftController', function ($mdSidenav) {
            var self = this;
            self.close = function () {
                $mdSidenav('left').close();
            };
        });

    function pageController($mdSidenav) {
        var self = this;

        self.v = "variable";
        self.toggleLeft = function () {
            $mdSidenav('left').toggle();
        };

    }

})();
