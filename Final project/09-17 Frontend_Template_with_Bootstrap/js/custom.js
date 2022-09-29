//music onload
window.onload=function(){
    document.getElementById("my_audio").play();
 }

 function pause() {
    document.getElementById("my_audio").pause();
 }

 function song1(){
    document.getElementById("song1").play();
}
function pause1() {
    document.getElementById("song1").pause();
 }

 function song2(){
    document.getElementById("song2").play();
}
function pause2() {
    document.getElementById("song2").pause();
 }
 function song3(){
    document.getElementById("song3").play();
}
function pause3() {
    document.getElementById("song3").pause();
 }

//function myFunction(){
 //   document.getElementById('myModal').showModal();
// }

 //$("form").on('submit', function(){
 //   $('.myModal').show();
 //})
//  $(document).on('click', '.alert', function(e) {
//     bootbox.confirm("Thank you! See you later <3");
// })
function alert_function() {
    if ($("#booking").valid()){
     confirm('Thank you!');}
}
 function difficult_function() {
    if ($("#newsletter").valid()){
     confirm('Thank you! See you soon!');}
}

function contact_function() {
    if ($("#contactform").valid()){
     confirm('Thanks for your message!');}
}
//function Dia(){document.getElementById("Di").showModal()}; 

/*------------------------------------------------------------------
Project:        Wooster - HTML onepage theme by GraphBerry.com
Version:        1.0
Last change:    04/07/2015
Author:         GraphBerry
URL:            http://graphberry.com
License:        http://graphberry.com/pages/license
-------------------------------------------------------------------*/
$(function(){
	'use strict';

/*--------------------------------------------------
    Initialize portfolio filter
    ---------------------------------------------------*/
	$('#portfolio-grid').mixItUp();

/*--------------------------------------------------
    Open video modal
    ---------------------------------------------------*/
	$('#popup-youtube').magnificPopup({
	    disableOn: 700,
	    type: 'iframe',
	    mainClass: 'mfp-fade',
	    removalDelay: 160,
	    preloader: false,
	    fixedContentPos: false
	});
	
/*--------------------------------------------------
    Page Scroll Features 
    ---------------------------------------------------*/
	smoothScroll.init({
        speed: 1000,
        updateURL: true,
        offset: 50
    });

$(window).scroll(function () {
    if ($(this).scrollTop() > 130) {
            $('#header-nav').addClass('navbar-wooster');
        } else {
            $('#header-nav').removeClass('navbar-wooster');
        }
    });

});