
$( document ).ready(function() {
	$('#flex-menu-3').click(function(){
		window.location.href = "../templates/images.html";
	});



	$.ajax({
		method: "GET",
		url: "api.blogger.danielbetteridge.com/post",
		success: function(data){
			getPosts(data);
		}
	})
});

function getPosts(data){
	alert(data);
}