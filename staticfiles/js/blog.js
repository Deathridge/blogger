
$( document ).ready(function() {
	$('#flex-menu-3').click(function(){
		window.location.href = "../templates/images.html";
	});



	$.ajax({
		method: "GET",
		url: "http://api.blogger.danielbetteridge.com/posts?format=json",
		success: function(data){
			buildPosts(data);
			
		}
	})

	function buildPosts(data){
	posts = data;
	for (var i=0;i<posts.length;i++){ 
		var title = posts[i].Title;
		var images = posts[i].Images;
		var created = posts[i].created;
		var modified = posts[i].modified;
		var content = posts[i].Content_Text;		
		var url = posts[i].url;
		
		$('.content-container').append('<div class="flex-item flex-text"><h1>'+ title+ ' </h1><p>'+content+'</p></div>');
		$('.content-container').append('<div class=image-container id='+i+'></div>')	
		var id = "#" + i;
		loadImages(0,id);	
		
	}	
	};	

	function loadImages(nextImage,id){		
					
			$.ajax({
				method: "GET",
				async: false,
				url: images[j],
				success: function(data){
					$(id).append('<div class="flex-item"><img src="'+data.Image+'"></img></div>');
					while(nextImage++ < images.length)){
						loadImages(nextImage++, id)
					}
					
				}
			});
			
	};

});

