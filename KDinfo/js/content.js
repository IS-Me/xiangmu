$(function(){
	// console.log($('.KDbody ul li:first'));
	$('.KDbody ul li:nth-child(1)').click(function(){
		$('.content2').load('pages/shouye.html');
	})
	$('.KDbody ul li:nth-child(2)').click(function(){
		$('.content2').load('pages/lanmu.html');
	})
	$('.KDbody ul li:nth-child(3)').click(function(){
		$('.content2').load('pages/zixun.html');
	})
	$('.KDbody ul li:nth-child(4)').click(function(){
		$('.content2').load('pages/user.html');
	})
})
