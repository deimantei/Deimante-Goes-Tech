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

 function difficult_function() {
    if ($("#newsletter").valid()){
     confirm('Thank you!');}
}
function Dia(){document.getElementById("Di").showModal()}; 
                               
 //server and database
$($.getJSON('http://localhost:5000/get-bandshow', 
    function(data){
        const show = data.response.bandshow;
        const showTabElement = $('#showTab');
        for(let i=0; i<customers.length; i++) {
            const show = bandshow[i];

            const row = document.createElement('tr');

            const firstName = document.createElement('td');
            firstName.innerHTML = customer.firstname;
            row.append(firstName);

            const lastName = document.createElement('td');
            lastName.innerHTML = customer.lastname;
            row.append(lastName);

            const email = document.createElement('td');
            email.innerHTML = customer.email;
            row.append(email);

            const phone = document.createElement('td');
            phone.innerHTML = customer.phone;
            row.append(phone);

            customersTabElement.append(row);
        } 
    }));


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