$(document).ready(function () {

  var names = ['founder', 'at', 'ever & ever', 'designer', 'developer', 'dancer', 'thug', 'product', 'digital', 'baller', 'london', 'simon' ];

  setTimeout( function(){ document.getElementById("word").innerHTML = names[0]; },1500); //founder
  setTimeout( function(){ document.getElementById("word").innerHTML = names[1]; },1800); //at
  setTimeout( function(){ document.getElementById("word").innerHTML = names[2]; },2200); //ever and ever
  // setTimeout( function(){ document.getElementById("word").innerHTML = names[3]; },3000); //designer
  // setTimeout( function(){ document.getElementById("word").innerHTML = names[4]; },3200); //devlerop
  // setTimeout( function(){ document.getElementById("word").innerHTML = names[5]; },3400); //dancer
  // setTimeout( function(){ document.getElementById("word").innerHTML = names[6]; },3550); //dancer
  // setTimeout( function(){ document.getElementById("word").innerHTML = names[7]; },3650); //dancer
  // setTimeout( function(){ document.getElementById("word").innerHTML = names[8]; },3750); //london
  // setTimeout( function(){ document.getElementById("word").innerHTML = names[9]; },3900); //simon
  // setTimeout( function(){ document.getElementById("word").innerHTML = names[10];},4100); //simon
  // setTimeout( function(){ document.getElementById("word").innerHTML = names[11];},4350); //simon


  /* later */
  setTimeout( function(){
    $('.me-wrap').addClass('zoom');
    $('.heyyy').addClass('here-I-am');
  },2900);

  $(".img-bg--type").hover( function() {
    var bgType = $(this).attr('data');
    // console.log('.full-background' + '.' + bgType);
    $('.img-bg' + '.' + bgType).toggleClass('view');
  });

});



