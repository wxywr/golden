$(window).resize(function(){
    $('html').css({'font-size':$(window).width()/3.9+"px"});
});
$(function(){
	$('html').css({'font-size':$(window).width()/3.9+"px"});
	$('.alert .ok').click(function(){
		$('.alert').css('display','none');
	})

});