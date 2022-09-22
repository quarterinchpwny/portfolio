var grid = document.querySelectorAll('.grid')
var heading = document.querySelectorAll('.heading')
var bigHeading = document.querySelectorAll('.big-heading')
var smallHeading = document.querySelectorAll('.small-heading')
var logo = document.querySelectorAll('.logo')
var navigation = document.querySelectorAll('.navigation')


  
function TimeoutFunction (classname,timeout){
    classname.forEach((classname)=>{
        setTimeout(() => {
            classname.classList.add('animated');
            classname.classList.add('fadeInUp');
            
        }, timeout);
    })
}




window.addEventListener('DOMContentLoaded',()=>{
    
    setTimeout(() => {
        logo.forEach((logo)=>{
            setTimeout(()=>{
                logo.classList.add('activelogo');
  
            })
        })
    },50);

    setTimeout(() => {
        logo.forEach((logo)=>{

            setTimeout(()=>{
                logo.classList.remove('active');
                logo.classList.add('fade');
                document.body.classList.remove('no-scroll');


            })
        })
    },4000);

    setTimeout(TimeoutFunction(grid, 4700));
    setTimeout(TimeoutFunction(heading, 4900));
    setTimeout(TimeoutFunction(bigHeading, 5400));
    setTimeout(TimeoutFunction(smallHeading, 5900));
    })
    setTimeout(() => {
        navigation.forEach((navigation)=>{

            setTimeout(()=>{
                navigation.classList.add('naviActive');

            })
        })
    },7000);


    for (let i = 0; i < 4; i++) {

        setTimeout(function() {
            $(`.n${1+i}`).addClass('naviActive');
        }, 7000 + i*200);
        
    }
    setTimeout(function() {
        $(`.socials`).addClass('animated');
        $(`.socials`).addClass('fadeInUp');
    }, 8000);

 

var typed = new Typed('.typed', {
    strings: ["code.", "watch.","play.","explore."],
    startDelay: 1400,
    typeSpeed: 100,
    backSpeed: 100,
    loop:true
  });
  const options = {};


/*
  const spaceHolder = document.querySelector('.space-holder');
  const horizontal = document.querySelector('.horizontal');
  spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

  function calcDynamicHeight(ref) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const objectWidth = ref.scrollWidth;
    return objectWidth - vw + vh + 5; // 150 is the padding (in pixels) desired on the right side of the .cards container. This can be set to whatever your styles dictate
  }

  window.addEventListener('scroll', () => {
    const sticky = document.querySelector('.sticky');
    horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
    console.log(sticky.offsetTop)
    const device = document.querySelector('.device');


  });


 */

  window.addEventListener('resize', () => {
    if($(window).width() <= 600) {
      $('.stay').removeClass('project-view');

    }
  });
 
function animateIfInView() {
  if($(window).width() > 600) {
    $.each($('#id1'), function(key, value) {
      
      if (isElementInViewport($(value))) {
        $('.stay').addClass('project-view');
        
        $('#device').prop("src", "images/try.gif");

      
      } else if(isElementInViewport($('#top'))){
        // (Optional) Fade out when out of view
        $('.stay').removeClass('project-view');
      }
      else if(isElementInViewport($('#id2'))){
        // (Optional) Fade out when out of view
        $('#device').prop("src", "images/devices.png");

      };
    });
  }
else{
  $('.stay').removeClass('project-view');

}

  }

/*
$('.project-content').mouseenter(function(){
  $('.stay').addClass('project-view');

});
$('.project-content').mouseleave(function(){
  $('.stay').removeClass('project-view');

});
*/
  function isElementInViewport(el) {

    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
  
    var rect = el.getBoundingClientRect();
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
  }





 