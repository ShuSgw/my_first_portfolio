$(document).ready(function() {
  $(".animation").animsition({
    inClass: 'flip-in-y-fr',
    outClass: 'flip-out-y-fr',
    inDuration: 800,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '<img id="loadingGif" src="assets/img/loading.gif"/>', // e.g '<img src="loading.svg" />'
    timeout: true,
    timeoutCountdown: 500,
    onLoadEvent: false,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
  });
});