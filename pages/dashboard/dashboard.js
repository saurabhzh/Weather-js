routeApp
.controller('dashboardController', function($scope) {
    $scope.openWeatherAppID = '64718856662a2ec41db7fec64a482a8b';
    $scope.openWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

    $scope.getWeatherData = (lat, lng) => {
        return new Promise((resolve, reject) => {
            $.get($scope.openWeatherUrl + '?lat=' + lat + '&lon=' + lng + '&APPID=' + $scope.openWeatherAppID, function(data){
                resolve(data);
            }).fail(function(e){
                reject(e);
            });
        });
    }

    $scope.getCurrentLocation = function() {
        return new Promise((resolve, reject) => {
            const geoSuccess = function (position) {
                resolve(position);
            };
            const geoError = function (error) {
                switch (error.code) {
                    case error.TIMEOUT:
                        reject('Error timeout');
                    break;
                }
            };
            navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
        });
    }

    $scope.getCurrentLocation().then(r => {
        $scope.getWeatherData(r.coords.latitude, r.coords.longitude).then(re => {
            $scope.weatherData = re;
            $scope.$apply();
            console.log(re);
        }).catch(e => {
            console.log(e);
        });
    }).catch(e => {
        console.log(e);
    });
});