$(document).ready(function(){

$('.menuIcon').click(function(){
$('.navigation ul').toggleClass('showMenu');
});

$(document).on("click", function (e) {
    if ($(e.target).is(".navigation > ul") === false && $(e.target).parents().is(".navigation") === false) {
        $('.navigation ul').removeClass('showMenu');
    }
});

/* Circle Progress Starts */
$(function(){
  $('.progress-pie-chart').each(function(e){
    var $ppc = $(this),
    percent = parseInt($ppc.data('percent')),
    deg = 360*percent/100;
  if (percent > 50) {
    $ppc.addClass('gt-50');
  }
  $(this).find('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)');
  $(this).find('.ppc-percents span').html(percent+'%');
});
  });
    
  /* Circle Progress Ends */

$('.wordListingNav a').click(function(){
  $('.wordListingNav a').removeClass('wLNActive');
  $(this).addClass('wLNActive');
var ids = '#'+$(this).attr('data-id');
$('.wListingItemWrap').removeClass('wListingItemWrapActive');
$(ids).addClass('wListingItemWrapActive');

if($(this).next().length > 0){
  var nextPID = $(this).next().attr('data-id');
  $('.wLPNext').show();
  $('.wLPNext').attr('data-nextId',nextPID);
}
else{
  $('.wLPNext').hide();
  $('.wLPNext').attr('data-nextId','');
}

if($(this).prev().length > 0){
  var prevPID = $(this).prev().attr('data-id');
  $('.wLPPrev').show();
  $('.wLPPrev').attr('data-prevId',prevPID);
}
else{
  $('.wLPPrev').hide();
  $('.wLPPrev').attr('data-prevId','');
}

});

if($('.wLNActive').next().length > 0){
  $('.wLPNext').show();
  var wLPId = $('.wLNActive').next().attr('data-id');
  $('.wLPNext').attr('data-nextId',wLPId);
}

$('.wLPNext').click(function(){
  var ids = $(this).attr('data-nextId');
  $('.wordListingNav a').removeClass('wLNActive');
  $('.wordListingNav a[data-id="'+ids+'"]').addClass('wLNActive');

$('.wListingItemWrap').removeClass('wListingItemWrapActive');
$('#'+ids).addClass('wListingItemWrapActive');
$('.wLPPrev').show();
$('.wLPPrev').attr('data-prevId',ids);

  if($(this).next().next().length > 0){

  }
  else{

  }
});

$('.wLPPrev').click(function(){
  if($(this).prev().length > 0){

  }
  else{
    
  }
});


$('.wListingItemsListing .wLIRowItem').each(function(e){

  var wordText = $(this).find('.wordText').width();
  var wordEnText = $(this).find('.wordText h3').width();
  var wordHiText = $(this).find('.wordText h4').width();
  if(wordEnText > wordText){
var scale = wordText / wordEnText;
$(this).find('.wordText h3').css({
  'transform':'scale('+scale+')',
  'transform-origin':'0 0 0'
});
  }
  if(wordHiText > wordText){
    var scale = wordText / wordHiText;
    $(this).find('.wordText h4').css({
      'transform':'scale('+scale+')',
  'transform-origin':'0 0 0'
    });
  }

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
	
});