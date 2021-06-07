  $(document).ready(function() {
    $(".menu-bar").click(function(){
    $(".nav .navigation-menu, .overlay").toggle(500);
	$('body').css('overflow', 'hidden');
});

$(".navigation-menu .fa-times").click(function(){
    $(".nav div.navigation-menu, .overlay").toggle(500);
	$('body').css('overflow-y', 'visible');
});

$(".tab1").click(function(){
    $(".tabber1").fadeIn(500);
	$(".tabber2, .tabber3, .tabber4").fadeOut(0);
});
$(".tab2").click(function(){
    $(".tabber2").fadeIn(500);
	$(".tabber1, .tabber3, .tabber4").fadeOut(0);
});
$(".tab3").click(function(){
    $(".tabber3, .tabber5").fadeIn(500);
	$(".tabber1, .tabber2, .tabber4").fadeOut(0);
});
$(".tab4").click(function(){
	$(".tabber1, .tabber2, .tabber3").fadeOut(0);
	$(".tabber4, .tabber5").fadeIn(500);
});

$('.navigation li a').on('click', function(){
    $('.navigation li a.active').removeClass('active');
    $(this).addClass('active');
});



$(".accordions .cell-1 .accordions-cell-content").click(function(){
	$(".accordions .cell-2").addClass("expanded");
	$(".accordions .cell-1").removeClass("expanded");
});
$(".accordions").click(function(){
	$(".accordions .cell-1").addClass("collapsed");
	$(".learn-btn").css("display", "none");
});

    });
	


