
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
	var i=0;
	var j=0;
	var image = new Array();
	for (i=0;i<posts.length;i++){ 
		var title = posts[i].Title;
		var images = posts[i].Images;
		var created = posts[i].created;
		var modified = posts[i].modified;
		var content = posts[i].Content_Text;		
		var url = posts[i].url;
		
		$('.content-container').append('<div class="flex-item flex-text"><h1>'+ title+ ' </h1><p>'+content+'</p></div>');
		$('.content-container').append('<div class=image-container id='+i+'></div>')
		for (j=0;j<images.length;j++){
			var id = "#" + i;
			
			
			
			$(id).append('<div class="flex-item"><img src="" id=' + i+ j +'></img></div>');
			
			$.ajax({
				method: "GET",
				//async: false,
				url: images[j],
				success: function(data){
					image[i+j] = data.Image;				
					console.log(data.Image);
				}
			});
			
		}

	}
	for (i=0;i<posts.length;i++){ 
		for (j=0;j<images.length;j++){
			$("#" + i + j).attr("src", image[i+j]);
		}
	}
	};
});

