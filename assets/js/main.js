$(function(){
  $("#transition").animsition({
    inClass: 'flip-in-y',
    outClass: 'flip-out-y',
    inDuration: 1000,
    outDuration: 1000,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'black', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: true,
    touchSupport:true,
    timeoutCountdown: 500,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    overlay : false,
    overlayParentElement : 'body',
  });
});