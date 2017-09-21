(function($){
// Dude loves closures

  var debug = true;

  // get HASH
  var hash = window.location.hash.substr(1);
  var menuItems;
  var productImages;
  var productTexts;
  var nProducts = 0;

  /******************************************************************

  TIMELINES

  *******************************************************************/

  /******************************************************************

  PHONE

  *******************************************************************/

  var lockscreen = $('.unlock-lockscreen'),
      notification = $('.unlock-notification-container'),
      notificationActions = $('.notification-action'),
      notificationActionUpper = $('.upper-action'),
      lockscreenBlurred = $('.unlock-lockscreen-blurred'),
      passcode = $('.unlock-passcode'),
      passcodeUnlocked = $('.unlock-passcode-unlocked'),
      welcome = $('.unlock-welcome');

  var unlockTimeline = new TimelineLite({
    delay: 3,
    paused: true,
    onComplete: function(){
      $('.replay-button').addClass('active');
    },
    onStart: function(){
      $('.replay-button').removeClass('active');
    }
  });
  unlockTimeline.to(lockscreen, 0.5, {ease: Power2.easeInOut, opacity: 1.0}, 0.0);
  unlockTimeline.from(notification, 0.3, {ease: Power2.easeInOut, scale: 0, opacity: 1.0}, 2.4);
  unlockTimeline.to(notification, 0.5, {ease: Back.easeInOut.config(4), scale:1.05, y: '-25%'}, 3.4);
  unlockTimeline.from(notificationActions, 0.5, {ease: Power2.easeIn, opacity:0.0}, 3.4);
  unlockTimeline.from(lockscreenBlurred, 0.5, {ease: Power2.easeIn, opacity: 0.0}, 3.4);
  unlockTimeline.to(notificationActionUpper, 0.3, {ease: Power4.easeInOut, opacity:1.0 }, 4.8);
  unlockTimeline.to(notification, 0.4, {ease: Power4.easeOut, scale: 0.5, opacity: 0.0}, 5.4);
  unlockTimeline.from(passcode, 0.4, {ease: Power2.easeOut, scale:0.8, opacity: 0.0}, 5.4);
  unlockTimeline.from(passcodeUnlocked, 0.3, {ease: Power2.easeIn, opacity: 0.0}, 6.4);
  unlockTimeline.to(passcode, 0.3, {ease: Power2.easeIn, opacity: 0.0}, 6.8);
  unlockTimeline.to(passcodeUnlocked, 0.3, {ease: Power2.easeIn, opacity: 0.0}, 6.8);
  unlockTimeline.to(lockscreenBlurred, 0.3, {ease: Power2.easeIn, opacity: 0.0}, 7.2);
  unlockTimeline.from(welcome, 0.7, {ease: Power2.easeOut, opacity: 0.0, scale: 0.4}, 7.2);

  var resetUnlockTimeline = new TimelineLite({
    onComplete: function(){
      startAnimation();
      unlockTimeline.restart();
    }
  })
  resetUnlockTimeline.to($('.unlock-phone>div'), 0.5, {opacity: 0.0});

  /******************************************************************

  MAC

  *******************************************************************/

  var macbookLogin = $('.macbook-login-button'),
      macbookSpinner = $('.macbook-spinner'),
      macbookLockscreen = $('.macbook-lockscreen');

  var macTimeline = new TimelineMax({
    pause: true
  })
  // macTimeline.to(macbookLogin, 0.15, {ease: Power2.easeOut,scale: 0.9, backgroundColor: "#dedede"}, 1.8);
  macTimeline.set(macbookLogin, {className:'+=active'}, 2.0);
  macTimeline.set(macbookLogin, {className:'-=active'}, 2.3);
  macTimeline.to(macbookLogin, 0.2, {opacity: 0.0}, 2.5);
  macTimeline.from(macbookSpinner, 0.3, {ease: Power4.easeIn, opacity: 0.0}, 2.6);
  macTimeline.to(macbookSpinner, 0.7, {opacity: 0.0}, 7.2);
  macTimeline.to(macbookLogin, 0.7, {opacity: 0.0}, 7.2);
  macTimeline.to(macbookLockscreen, 0.7, {opacity: 0.0}, 7.2);

  /******************************************************************

  SSH

  *******************************************************************/

  var sshConsole = $('.ssh-console'),
      sshLines = $('.ssh-line'),
      sshIndicator = $('.ssh-indicator');

  var sshTimeline = new TimelineLite({
    pause: true
  })
  sshTimeline.to(sshLines.get(0), 0.8, {text:" ssh johann@147.192.134.13", ease:Linear.easeNone}, 1.2);
  sshTimeline.from(sshLines.get(1), 0.05, {opacity: 0.0}, 2.2);
  sshTimeline.from(sshLines.get(2), 0.05, {opacity: 0.0}, 7.2);
  sshTimeline.from(sshLines.get(3), 0.05, {opacity: 0.0}, 7.6);
  sshTimeline.from(sshLines.get(4), 0.05, {opacity: 0.0}, 8.8);
  sshTimeline.from(sshIndicator, 0.3, {alpha: 0.0,repeatDelay:0.4, repeat:-1, yoyo:true}, 8.8);

  // sshTimeline.from(sshLines.get(0), 2, {ease: Power2.easeOut, opacity:0.0 });
  // .to(sshLine, 0.15, {ease: Power2.easeOut,scale: 0.9, backgroundColor: "#dedede"}, 1.8);

  /******************************************************************

  WEB

  *******************************************************************/

  var webBody = $('.web-body'),
      webWelcome = $('.web-welcome'),
      webLockscreen = $('.web-lockscreen'),
      webUsername = $('.web-username'),
      webLogin = $('.web-login-button'),
      webSpinner = $('.web-spinner');

  var webTimeline = new TimelineLite({
    pause: true
  })
  webTimeline.to(webUsername, 0.5, {text:" johann", ease:Linear.easeNone}, 1.2);
  webTimeline.to(webLogin, 0.15, {ease: Power2.easeOut,scale: 0.9, backgroundColor: "#C80051"}, 1.8);
  webTimeline.to(webLogin, 0.1, {ease: Power2.easeOut,scale: 1.0, backgroundColor: "#E1006A"}, 2.0);
  webTimeline.to(webLogin, 0.3, {ease: Power2.easeOut,scale: 1.0, color: "#E1006A"}, 2.2);
  webTimeline.from(webSpinner, 0.3, {ease: Power2.easeOut,opacity: 0.0}, 2.2);
  webTimeline.to(webSpinner, 0.4, {ease: Power2.easeOut,opacity: 0.0}, 7.2);
  webTimeline.to(webUsername, 0.4, {ease: Power2.easeOut,opacity: 0.0}, 7.2);
  webTimeline.to(webLogin, 0.4, {ease: Power2.easeOut,opacity: 0.0}, 7.2);
  webTimeline.to(webLockscreen, 0.4, {ease: Power2.easeOut,opacity: 0.0}, 7.2);

  /******************************************************************

  WINDOWS

  *******************************************************************/

  var winBody = $('.windows-body'),
      winLogin = $('.windows-login-button'),
      winLockscreen = $('.windows-lockscreen'),
      winLoginActive = $('.windows-login-button-active'),
      winSpinner = $('.windows-spinner');

  var winTimeline = new TimelineLite({
    pause: true
  })
  winTimeline.from(winLoginActive, 0.3, {opacity: 0.0, ease:Power2.easeOut}, 1.2);
  winTimeline.to(winLogin, 0.3, {opacity: 0.0, ease:Power2.easeOut}, 1.5);
  winTimeline.to(winLoginActive, 0.3, {opacity: 0.0, ease:Power2.easeOut}, 1.5);
  winTimeline.from(winSpinner, 0.3, {opacity: 0.0, ease:Power2.easeOut}, 1.5);
  winTimeline.to(winSpinner, 0.3, {opacity: 0.0, ease:Power2.easeOut}, 7.2);
  winTimeline.to(winLockscreen, 0.3, {opacity: 0.0, ease:Power2.easeOut}, 7.2);


  /******************************************************************

  FUSE

  *******************************************************************/

  var productTimelines = {
    'mac': macTimeline,
    'ssh': sshTimeline,
    'web-apps': webTimeline,
    'windows': winTimeline,
    'vdi': winTimeline
  }

  // INIT
  function initProducts(){

    if(debug) console.log("Initializing Product Page...");
    // init vars

    if(debug) console.log("Looking for Hash");

    if(hash != undefined && hash != ""){
      if(debug) console.log("has Hash: "+hash);
      updateProducts();
    }else{
      if(debug) console.log("no Hash");
      // if no hash present, set first product
      window.location.hash = $('.products-menu-item').eq(0).data('product');
    }
  }
  initProducts();

  // PROCESS
  function activateProduct(){

    if(isMobile.any){
      var container = $('.product-menu-inner'),
          scrollTo = $('.product-id-'+hash);

      container.scrollLeft(
          scrollTo.offset().left - container.offset().left + container.scrollLeft() + - 85
      );

      // // Or you can animate the scrolling:
      // container.animate({
      //     scrollLeft: (scrollTo.offset().left - container.offset().left + container.scrollLeft())
      // });​
    }

    if(hash == 'juno'){
      $('#productDisplay').addClass('hide');
      $('#junoDisplay').removeClass('hide');
    }else{
      $('#productDisplay').removeClass('hide');
      $('#junoDisplay').addClass('hide');
    }

    $('.products-menu-item').removeClass('active');
    $('.product-image-item').removeClass('active');
    $('.product-text-item').removeClass('active');

    $('.product-id-'+hash).addClass('active');
    var classes = document.body.className.replace(/product-active-\w+/gi, '');
    $('body').attr('class', classes);
    $('body').addClass('product-active-'+hash)
    // unlockTimeline.play();
  }

  function startAnimation(){
    var timeline = productTimelines[hash];
    console.log(timeline);
    if(timeline != undefined) timeline.restart();
  }

  function updateProducts(){

    hash = window.location.hash.substr(1);
    unlockTimeline.stop();
    resetUnlockTimeline.play();
    activateProduct();

  }

  function resizeAdapt(){
    $('.header-text-app').fitText();
    $('.body-text').fitText();
  }

  // EVENTS
  $(window).on('hashchange', function() {
    // Where the magic happens
    console.log("The hash changed to");
    updateProducts();
  });

  $(window).on('resize', function() {
    // resizeAdapt();
  })

  var html = $('html, body');

  $('a.product-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    updateProducts();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $('#productMenu');
      // target = target.length ? target : $('[name=productDisplay]');
      if (target.length) {

        html.animate({
          scrollTop: (target.offset().top - 89)
        }, 1000, "easeInOutExpo", function(){
          html.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
        });

        html.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
          html.stop();
        });

      }
    }
  });

  $('#replay').click(updateProducts);

})(jQuery)
