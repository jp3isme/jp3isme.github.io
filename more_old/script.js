//------------------- is mobile ? ---------------------------------------------------------


var isMobile = false; //initiate as false
// device detection

$(document).ready(function() {
  resizePage();
});

$(window).on("load resize orientationchange", function(e) {
  if (isMobile == true) {
    document.location = "mobile.html"
  }
  resizePage();
});

function resizePage() {
  //fixmeTop = $('#nav').offset().top;
  if ($(window).width() < 1445 && $(window).width() > 1239) {
    $('.roundMe').css('width', '70%');
    $('#switch').css('left', '85%');
    $('#switch').css('visibility', 'visible');
  } else if ($(window).width() < 1240 && $(window).width() > 1039) {
    $('.roundMe').css('width', '80%');
    $('#switch').css('left', '90%');
    $('#switch').css('visibility', 'visible');
  } else if ($(window).width() < 1040 && $(window).width() > 939) {
    $('.roundMe').css('width', '90%');
    $('#switch').css('visibility', 'hidden');
  } else if ($(window).width() < 940) {
    $('.roundMe').css('width', '98%');
    $('#switch').css('visibility', 'hidden');
  } else {
    $('.roundMe').css('width', '60%');
    $('#switch').css('left', '80%');
    $('#switch').css('visibility', 'visbible');
  }
}

var fixmeTop = $('#nav').offset().top; // get initial position of the element

$(window).scroll(function() { // assign scroll event listener

  var currentScroll = $(window).scrollTop(); // get current position

  if (currentScroll >= fixmeTop) { // apply position: fixed if you
    $('#nav').css({ // scroll to that element or below it
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0'
    });
    $('#buffer').css( // scroll to that element or below it
      'margin-top', '45'
    );
    if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
      $('#buffer').css( // scroll to that element or below it
        'margin-top', '65'
      );
    }
  } else { // apply position: static
    $('#nav').css({ // if you scroll above it
      position: 'static'
    });
    $('#buffer').css( // scroll to that element or below it
      'margin-top', '0'
    );

  }

});

/*
$("#switch-colors").change(function() {
  $('.transform').toggleClass('transform-active');
  $('.transform2').toggleClass('transform-active2');
  $('.transform3').toggleClass('transform-active3');
  $('.transform-text').toggleClass('transform-text-active');
  $('.sec-name').toggleClass('transform-text-active');
  $('.sec-name  transform-text').toggleClass('transform-text-active');
  $('.course').toggleClass('transform-text-active');
  $('.skill').toggleClass('transform-text-active');
  $('.skills_container').toggleClass('transform-active');
  $('h4').toggleClass('transform-text-active');
  $("a.local").each(function() {
    var $this = $(this);
    var _href = $this.attr("href");
    if ($("#switch-colors").checked) {
      $this.attr("href", _href + '?dm=y');
    } else {
      $this.attr("href", _href);
      //alert("ran");
    }
  });
});
*/


//------------------ Smooth Scroll on click ------------------------------
$(function() {
  $('.link').click(function() {
    var id = $(this).attr('href');
    $('html,body').animate({
      scrollTop: $(id).offset().top - 65
    }, 750);
    // Prevent default behavior of link
    return false;
  });
});
sr.reveal('.booms', {}, 0);


//---------------- SKIP ANIMATION ---------------------------------
