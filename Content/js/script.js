var $card = jQuery('.card');
var lastCard = jQuery(".card-list .card").length - 1;
var activeCard = lastCard;
//console.log(activeCard);
jQuery('.next').click(function(e){
	e.preventDefault(); 
	/*var prependList = function() {		
		var $slicedCard = jQuery('.card').slice(lastCard).removeClass('activeNow');
		jQuery('.card-list').prepend($slicedCard);
		jQuery('li.card').last().addClass('activeNow');	
	}
	setTimeout(function(){prependList(); }, 150);
	*/
	setNext();
});

jQuery('.prev').click(function(e) { 
	e.preventDefault(); 
	/*var appendToList = function() {	
		jQuery('li.card').last().removeClass('activeNow');
		var $slicedCard = jQuery('.card').slice(0, 1).addClass('activeNow');
		jQuery('.card-list').append($slicedCard);
		
	}
	setTimeout(function(){appendToList();}, 150);
	*/
	setPrev();
});

function setNext(){
	var prependList = function() {		
		var $slicedCard = jQuery('.card').slice(lastCard).removeClass('activeNow');
		jQuery('.card-list').prepend($slicedCard);
		jQuery('li.card').last().addClass('activeNow');
		if(window.activeCard != 0){
			window.activeCard -= 1;
		}else{
			window.activeCard = window.lastCard;
		}		
	}
	setTimeout(function(){prependList(); }, 150);
}

function setPrev(){
	var appendToList = function() {	
		jQuery('li.card').last().removeClass('activeNow');
		var $slicedCard = jQuery('.card').slice(0, 1).addClass('activeNow');
		jQuery('.card-list').append($slicedCard);
		if(window.activeCard != window.lastCard){
			window.activeCard += 1;
		}else{
			window.activeCard = 0;
		}
		
	}
	setTimeout(function(){appendToList();}, 150);
}

$(document).on("pagecreate","#pageone",function(){
	$(".card").on("swipeleft",function(){
	  //console.log("left swipe event");
	  //window.activeCard
	  //window.lastCard
	  if(window.activeCard != 0){
		  setNext();
	  }
	  //console.log(window.activeCard);	
	});
	$(".card").on("swiperight",function(){
	  //console.log("right swipe event");
	  if(window.activeCard != window.lastCard){
		  setPrev();
	  }
	  //console.log(window.activeCard);
	});
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



$("#word-complete-trig").click(function(){
	$("#word-complete").fadeIn();
});

$("#word-complete .popup-close").click(function(){
	$("#word-complete").fadeOut();
});




$( "#explanation" ).click(function() {
	$( "#explanationD" ).slideDown( "slow", function() {
	});
  });
  $( "#explanationA" ).click(function() {
	  $( "#explanationDA" ).slideDown( "slow", function() {
	  });
	});
	
	$( "#explanationB" ).click(function() {
		$( "#explanationDB" ).slideDown( "slow", function() {
		});
	  });