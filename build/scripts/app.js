$(document).ready(function () {


  /* later */
  /* setTimeout( function(){
    $('.me-wrap').addClass('zoom');
    $('.heyyy').addClass('here-I-am');
  },2900); */

  /* $(".img-bg--type").hover( function() {
    var bgType = $(this).attr('data');
    // console.log('.full-background' + '.' + bgType);
    $('.img-bg' + '.' + bgType).toggleClass('view');
  });
 */
  $(".try").click(function(){
    console.log('try');
    $('.video-wrap').addClass('fade-out');
    $('.loader').addClass('do-load');
    $(this).addClass('tried');
    $.getScript("./build/scripts/camera2.js");
  }); 
});



