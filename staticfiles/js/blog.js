
$( document ).ready(function() {
	//Loads images page on menu click
	$('#flex-menu-3').click(function(){
		window.location.href = "../templates/images.html";
	});

	$('#flex-menu-2').click(function(){
		window.location.href = "../templates/blog.html";
	});

	$('#flex-menu-1').click(function(){
		window.location.href = "../templates/trip.html";
	});

	//loads all posts to the page when page loads
	$.ajax({
		method: "GET",
		url: "http://api.blogger.danielbetteridge.com/posts?format=json",
		success: function(data){
			buildPosts(data);
			
		}
	})

	//Builds complete post including images and map
	function buildPosts(data){
	posts = data;
	for (var i=0;i<posts.length;i++){ 
		var title = posts[i].Title;
		var images = posts[i].Images;
		var created = posts[i].created;
		var modified = posts[i].modified;
		var content = posts[i].Content_Text;		
		var url = posts[i].url;
		var location = posts[i].Location;
		
		$('.content-container').append('<div class="flex-item flex-text"><h1>'+ title+ ' </h1><p>'+content+'</p></div>');
		$('.content-container').append('<div class=image-container id='+i+'></div>')	
		$('.content-container').append('<div class="flex-item flex-map" id="map'+i+'"><div class="abs-map" id="abs-map-'+i+'"></div></div>')
		var id = "#" + i;
		images.forEach(function(image) {
			loadImages(id, image)
		});
		
		loadMap(i, location);
		
	}	
	};	

	//loads image into html when provided by higher function
	function loadImages(id,image){		
					
			$.ajax({
				method: "GET",
				//async: false,
				url: image,
				success: function(data){
					$(id).append('<div class="flex-item"><img src="'+data.Image+'"></img></div>');				
					
				}
			});
			
	};

	//Loads map to html element with id of abs-map-i and uses coordinates, name and zoom level set in location
	function loadMap(i, location) {

		$.ajax({
				method: "GET",
				//async: false,
				url: location,
				success: function(data){
					L.mapbox.accessToken = 'pk.eyJ1IjoiZGFuaWVsYmV0dGVyaWRnZSIsImEiOiJjaWY3bjZqazcwc3IzczdrcmU1NjJ1czdnIn0.Xr0sZHMxs6Fvp7lzmmtJSg';
					var mapboxTiles = L.tileLayer('https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=' + L.mapbox.accessToken, {
    					attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
					});

					var map = L.map('abs-map-'+i)
						.addLayer(mapboxTiles)
						.setView([data.Latitude, data.Longitude], data.Zoom);

					L.mapbox.featureLayer({
    				// this feature is in the GeoJSON format: see geojson.org
    				// for the full specification
    				type: 'Feature',
    				geometry: {
        				type: 'Point',
        				// coordinates here are in longitude, latitude order because
        				// x, y is the standard for GeoJSON and many formats
        				coordinates: [
          				data.Longitude,
          				data.Latitude 
        				]
    				},
    				properties: {
        				title: data.Landmark,
        				description: data.LandmarkDescription,
        				// one can customize markers by adding simplestyle properties
        				// https://www.mapbox.com/guides/an-open-platform/#simplestyle
        				'marker-size': 'large',
        				'marker-color': '#BE9A6B',
        				'marker-symbol': data.LocationType
    				}
					}).addTo(map);
				}
		});
	};


	//Image scrolling viewer
	function imageViewer(){

	};

});

