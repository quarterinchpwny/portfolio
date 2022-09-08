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

function reveal(){
    var reveals = document.querySelectorAll('.content')
    for (let i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop<windowHeight-revealpoint){
            reveals[i].classList.add('animated');
            reveals[i].classList.add('fadeInUp');
        }

        
    }


}
window.addEventListener('scroll',reveal)

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

var typed = new Typed('.typed', {
    strings: ["code.", "watch.","play.","explore."],
    startDelay: 600,
    typeSpeed: 100,
    backSpeed: 100,
    loop:true
  });




   


