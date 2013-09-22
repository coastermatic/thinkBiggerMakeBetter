

$(function(){

    // Set up and compile the Dust.js templates
    var cardFronts = dust.compile($("#frontCard").html(),"cardFronts");
    dust.loadSource(cardFronts);

    var cardBacks = dust.compile($("#backCard").html(),"cardBacks");
    dust.loadSource(cardBacks);
  
    // render the templates
    dust.render("cardFronts", cards, function(err, res){
    $("#cards .row").append(res);
    });

    dust.render("cardBacks", cards, function(err, res){
    $(".cardBackContainer").append(res);
    });
	
	//on click, display front/back of card
	$('.container').on('click', '.card', function () {

	   	$('.cardBack').hide();	
	   	$('.cardBackContainer #' + this.id).show();
	   	$('#myModal').modal();

	  });		

	 
	  $('.container').on('mouseenter', '.card', function () {
		  
		  $(this).addClass('hover');
		  console.log('hover');
		  
	  });
	  
	  	  $('.container').on('mouseleave', '.card', function () {
		  
		  $(this).removeClass('hover');
		  console.log('no');
		  
	  });
 });	


 