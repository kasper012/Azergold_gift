"use strict";

$(".soglasen").on("click", function() {
	$('.receive').prop("disabled", "false");
	$(".receive").toggleClass("received")
})

$(function() {
  $(".1_2").click(function(e) {
    e.preventDefault();
    $("#carousel img").removeClass('active');
    $('.1__2').addClass('active');
  })
});



$(document).ready(function () {
          setTimeout(function () {
               
                $('a[href]#no-link').each(function () {
                    var href = this.href;
    
                    $(this).removeAttr('href').css('cursor', 'context-menu').click(function () {
                        if (href.toLowerCase().indexOf("#") >= 0) {
    
                        } else {
                            window.open(href, '_blank');
                        }
                    });
                });
    
          }, 500);
    });