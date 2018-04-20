// jQuery

$(function(){
  // parallax
  $(window).scroll(function () {
    var top = $(this).scrollTop();
    var about = $("#about").offset().top - 300;
    var work = $("#work").offset().top - 300;
    var skill = $("#skill").offset().top - 300;
    var contact = $("#contact").offset().top - 300;

    if(top > about) {
      $('#about .container').removeClass("opacity");
      $('.fa').css({color: 'black'});
    } else {
      $('#about .container').addClass("opacity");
      $('.fa').css({color: 'white'});
    }
    if(top > work) {
      $('#work .container').removeClass("opacity");
    } else {
      $('#work .container').addClass("opacity");
    }
    if(top > skill) {
      $('#skill .container').removeClass("opacity");
      $('.bar_over').width(0);
      $('.bar_over_100').width(330);
      $('.bar_over_60').width(200);
      $('.bar_over_80').width(250);
      $('.bar_over_40').width(250);
    } else {
      $('#skill .container').addClass("opacity");
      $('.bar_over').width(0);
    }
    if(top > contact) {
      $('#contact .container').removeClass("opacity");
      $('.path').addClass("startSign");
    } else {
      $('#contact .container').addClass("opacity");
      $('.path').removeClass("startSign");
    }
  });

//nav
  $('.fa').on('click', function() {
    $(this).next().slideToggle()
    var top = $(this).scrollTop();
    var winAbout = $("#about").scrollTop();
    $(this).css("color", "white");
  });


//mask on works
  $('.overlay').hover(function() {
     $(this).find('.mask').fadeIn(300);
  }, function() {
    $(this).find('.mask').fadeOut(300);
  });

// menu
  $('a[href^="#"]').click(function() {
    var speed = 400;
    var href = $(this).attr('href');
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });

  // plug-in header
  var images = [
    "squareFlash",
    "vortex",
    "bouncingBalls",
    "shootingLines",
    "simpleGradient",
    "starfield",
    "layeredTriangles",
    "cornerSpikes",
    "floatingBoxes"
  ];

  var randImg = images[Math.floor(Math.random() * images.length)];
      $("#quietflow").quietflow({
        theme          : randImg,
        boxCount       : 500,
        backgroundCol  : "black",
        starSize : 3,
        squareSize : 100,
        maxRed : 100,
        maxGreen : 100,
        speed : 50,
        bounceBallCount : 100,
        primary : "#21D4FD",
        accent : "#B721FF",
        triangles :2
      });
});//jQuery

