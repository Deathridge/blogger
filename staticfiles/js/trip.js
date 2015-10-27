
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
		url: "http://api.blogger.danielbetteridge.com/locations?format=json",
		success: function(data){
			locations = data;
			async.each(locations, function(location, callback){
				
				$.ajax({
				method: "GET",
				//async: false,
				url: location.url,
				success: function(data){
					geojson = buildGeoJSON(data);
					callback();					
				}
				});
				}, function(err){
					if( err ) {
      					// One of the iterations produced an error.
      					// All processing will now stop.
      					console.log('A file failed to process');
    				} else {
      					loadMap(geojson);
    				}				
				});	
		}
	});


	function buildGeoJSON(location) {
		geojson.push({type: location.LocationTypeGeoJSON, geometry: { type: "Point", coordinates: [location.Longitude, location.Latitude]}});
		return geojson;
	};
	//Loads map to html element with id of abs-map-i and uses coordinates, name and zoom level set in location
	function loadMap(geojson) {

		
				
					L.mapbox.accessToken = 'pk.eyJ1IjoiZGFuaWVsYmV0dGVyaWRnZSIsImEiOiJjaWY3bjZqazcwc3IzczdrcmU1NjJ1czdnIn0.Xr0sZHMxs6Fvp7lzmmtJSg';
					var mapboxTiles = L.tileLayer('https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=' + L.mapbox.accessToken, {
    					attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
					});

					var map = L.map('abs-map-0')
						.addLayer(mapboxTiles)
						.setView([39.50, -98.35], 3);

					L.mapbox.featureLayer().setGeoJSON(geojson).addTo(map);

					// Add a new line to the map with no points.
					var polyline = L.polyline([]).addTo(map);
					geojson.forEach(function addPoint(geo){
						polyline.addLatLng(
        					L.latLng(geo.geometry.coordinates[0], geo.geometry.coordinates[1]));
					});
		
	};


});

