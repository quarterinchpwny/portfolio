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

  const observer = new IntersectionObserver(function
  (entries, observer){
      entries.forEach(entry => {
          console.log("kita ko ang 1 lods");
      });
  }, options);

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
    //console.log(sticky.offsetTop)
    const device = document.querySelector('.device');
    if (sticky.offsetTop > 0 && sticky.offsetTop < 2956) {
      device.style.opacity = '1';
    }

    else {
      device.style.opacity = '0';
    }

    observer.observe(document.querySelector(".sample-card:nth-child(1)"));

  });
 
  window.addEventListener('resize', () => {
    spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
  });



