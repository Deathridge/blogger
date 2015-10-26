
$( document ).ready(function() {
	//Loads images page on menu click
	$('#flex-menu-3').click(function(){
		window.location.href = "../templates/images.html";
	});

	$('#flex-menu-2').click(function(){
		window.location.href = "../templates/blog.html";
	});
	var geojson =[];
	$.ajax({
		method: "GET",
		url: "http://api.blogger.danielbetteridge.com/posts?format=json",
		success: function(data){
			posts = data;
			posts.forEach(function(post){
				var location = post.Location;
				$.ajax({
				method: "GET",
				//async: false,
				url: location,
				success: function(data){
					buildGeoJSON(data);
				}
				});
			});	
		}
	});


	function buildGeoJSON(location) {
		geojson.push({type: location.LocationType, geometry: { type: "Point", coordinates: [location.Longitude, location.Latitude]}});
	}
	//Loads map to html element with id of abs-map-i and uses coordinates, name and zoom level set in location
	function loadMap(geojson) {

		
				
					L.mapbox.accessToken = 'pk.eyJ1IjoiZGFuaWVsYmV0dGVyaWRnZSIsImEiOiJjaWY3bjZqazcwc3IzczdrcmU1NjJ1czdnIn0.Xr0sZHMxs6Fvp7lzmmtJSg';
					var mapboxTiles = L.tileLayer('https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=' + L.mapbox.accessToken, {
    					attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
					});

					var map = L.map('abs-map-0')
						.addLayer(mapboxTiles)
						.setView([data.Latitude, data.Longitude], 10);

					L.mapbox.featureLayer().setGeoJSON(geojson).addTo(map);
				
		
	};


});
