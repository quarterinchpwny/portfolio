var grid = document.querySelectorAll('.grid')
var heading = document.querySelectorAll('.heading')
var bigHeading = document.querySelectorAll('.big-heading')
var smallHeading = document.querySelectorAll('.small-heading')
var logo = document.querySelectorAll('.logo')


  
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


            })
        })
    },4000);

    setTimeout(TimeoutFunction(grid, 4700));
    setTimeout(TimeoutFunction(heading, 4900));
    setTimeout(TimeoutFunction(bigHeading, 5400));
    setTimeout(TimeoutFunction(smallHeading, 5900));
    })

    setTimeout(function() {
      document.body.classList.remove('no-scroll');

        $(`.socials`).addClass('animated');
        $(`.socials`).addClass('fadeInUp');
    }, 7000);

 

var typed = new Typed('.typed', {
    strings: ["code.", "watch.","play.","explore."],
    startDelay: 1400,
    typeSpeed: 100,
    backSpeed: 100,
    loop:true
  });
  const options = {};


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
        
        $('#device').prop("src", "images/metabolic.gif");

      
      } else if(isElementInViewport($('#top'))){
        $('.stay').removeClass('project-view');
      }
      else if(isElementInViewport($('#id2'))){
        $('#device').prop("src", "images/crypto.gif");

      }
      else if(isElementInViewport($('#id3'))){
        $('#device').prop("src", "images/vision.gif");

      }
      else if(isElementInViewport($('#id4'))){
        $('#device').prop("src", "images/market.gif");

      }
      ;
      
    });
  }
else{
  $('.stay').removeClass('project-view');

}

  }


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





 