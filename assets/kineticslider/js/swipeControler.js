// EBC custom js
(function($) {
    // "use strict";

// images setup
const images = [
  "http://localhost/khaown/wp-content/uploads/2019/11/bacon-biscuit-cheese-139746-768x512.jpg",
  "http://localhost/khaown/wp-content/uploads/2019/11/cheese-crust-delicious-768x512.jpg",
  "http://localhost/khaown/wp-content/uploads/2019/11/cafeteria-chilli-delicious-768x512.jpg",
];

// const images = Array();

// $('#rgbKineticSlider img').each(function() {
//     images.push($(this).attr('src'));
// });

// content setup
const texts = ["Motahar", "Zubaer", "Milon"];

// console.log(tn_array);

rgbKineticSlider = new rgbKineticSlider({
  slideImages: images, // array of images > must be 1920 x 1080
  // itemsTitles: texts, // array of titles / subtitles

  backgroundDisplacementSprite: 'http://hmongouachon.com/_demos/rgbKineticSlider/map-2.jpg', // slide displacement image 
  cursorDisplacementSprite: 'http://hmongouachon.com/_demos/rgbKineticSlider/displace-circle.png', // cursor displacement image 

  cursorImgEffect : true, // enable cursor effect
  cursorTextEffect : true, // enable cursor text effect
  cursorScaleIntensity : 0.85, // cursor effect intensity
  cursorMomentum : 0.09, // lower is slower

  swipe: true, // enable swipe
  swipeDistance : window.innerWidth * 0.5, // swipe distance - ex : 580
  swipeScaleIntensity: 1.66, // scale intensity during swipping

  slideTransitionDuration : 1, // transition duration
  transitionScaleIntensity : 10, // scale intensity during transition
  transitionScaleAmplitude : 100, // scale amplitude during transition

  nav: true, // enable navigation
  navElement: '.main-nav', // set nav class

  imagesRgbEffect : true, // enable img rgb effect
  imagesRgbIntensity : 0.09, // set img rgb intensity
  navImagesRgbIntensity : 40, // set img rgb intensity for regular nav

  textsDisplay : true, // show title
  textsSubTitleDisplay : true, // show subtitles
  textsTiltEffect : true, // enable text tilt
  googleFonts : ['Playfair Display:700', 'Roboto:400'], // select google font to use

});


    
}(jQuery));