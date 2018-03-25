$(function(){
	$(".headerNav a").on("click", function(){
		if(!$(this).hasClass("active")){
			$(".headerNav a").removeClass("active");
			$(this).addClass("active");
		}
	});
});

if ('serviceWorker' in navigator) {
	navigator.serviceWorker
	.register('./service-worker.js')
	.then(function() { console.log('Service Worker Registered'); });
}

var routeApp =  angular.module("weather", ["ngRoute"]);
routeApp
.config(function($routeProvider) {
	$routeProvider
	.when("/dashBoard", {
		templateUrl : "pages/dashboard/dashboard.htm",
		controller: "dashboardController"
	})
	.when("/search", {
		templateUrl : "pages/search/search.htm",
		controller: "searchController"
	})
	.when("/favourite", {
		templateUrl : "pages/favs/favs.htm",
		controller: "favsController"
	})
});