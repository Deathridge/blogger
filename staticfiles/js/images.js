
$( document ).ready(function() {
	$('#flex-menu-2').click(function(){
		window.location.href = "../templates/blog.html";
	});

	$('#flex-menu-3').click(function(){
		window.location.href = "../templates/images.html";
	});

	$.ajax({
		method: "GET",
		url: "http://api.blogger.danielbetteridge.com/images?format=json",
		success: function(data){
			buildImages(data);
		}
	});


	function buildImages(data){
	images = data;
	for (var i=0;i<images.length;i++){ 
		var title = images[i].Title;
		var image = images[i].Image;
		var datetime = images[i].datetime;		
		var url = images[i].url;
		
		$('.content-container').append('<div class="flex-item"><img src='+image+'></img></div>');
		$('.content-container').append('<div class="flex-item-seperator"></div>');

	};
	}
});

