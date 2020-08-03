var $card = jQuery('.card');
var lastCard = jQuery(".card-list .card").length - 1;

jQuery('.next').click(function(e){
	e.preventDefault(); 
	var prependList = function() {
		
		var $slicedCard = jQuery('.card').slice(lastCard).removeClass('activeNow');
		jQuery('.card-list').prepend($slicedCard);
		jQuery('li.card').last().addClass('activeNow');	
	}
	setTimeout(function(){prependList(); }, 150);
});

jQuery('.prev').click(function(e) { 
	e.preventDefault(); 
	var appendToList = function() {	
		jQuery('li.card').last().removeClass('activeNow');
		var $slicedCard = jQuery('.card').slice(0, 1).addClass('activeNow');
		jQuery('.card-list').append($slicedCard);
		
	}
	setTimeout(function(){appendToList();}, 150);
});

$("#pop-correct-trig").click(function(){
	$("#pop-correct").fadeIn();
});
$("#pop-correct .popup-close").click(function(){
	$("#pop-correct").fadeOut();
});

$("#pop-wrong-trig").click(function(){
	$("#pop-wrong").fadeIn();
});

$("#pop-wrong .popup-close").click(function(){
	$("#pop-wrong").fadeOut();
});

$( "#explanation" ).click(function() {
	$( "#explanationD" ).slideDown( "slow", function() {
	});
  });