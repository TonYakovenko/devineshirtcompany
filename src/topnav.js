/*------------------------------*/
/* JQuery*/ 
/*------------------------------*/

/*--Navigation Scroll--*/
let isScrolling = false;


$(document).ready(function(){
  const topnav = document.querySelector('.topnav');
  const topNavHeight = topnav.offsetHeight;
  let offsetParam = "100px";  

  // Select all links with hashes
  const topnavbut = $('a[href*="#"]');

  topnavbut
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {

    highlightActiveLink(this);
    isScrolling = true;
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - topNavHeight
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          isScrolling = false;
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  $('#home').waypoint(function(direction){
    if(!Boolean(isScrolling)){
      highlightActiveLink($('a[href*="#home"]')[0]);
    } 
  }, {offset: topNavHeight - 150});

  $('#about').waypoint(function(direction){
    if(!Boolean(isScrolling)){
      highlightActiveLink($('a[href*="#about"]')[0]);
    }
  },{offset:topNavHeight});

  $('#services').waypoint(function(direction){
    if(!Boolean(isScrolling)){
      highlightActiveLink($('a[href*="#services"]')[0]);
    }
  },{offset:topNavHeight});

  $('#screen-printing').waypoint(function(direction){
    if(!Boolean(isScrolling)){
      highlightActiveLink($('a[href*="#screen-printing"]')[0]);
    }
  },{offset:topNavHeight});

  $('#faq').waypoint(function(direction){
    if(!Boolean(isScrolling)){
      highlightActiveLink($('a[href*="#faq"]')[0]);
    }
  },{offset:topNavHeight});

  $('#art-guidelines').waypoint(function(direction){
    if(!Boolean(isScrolling)){
      highlightActiveLink($('a[href*="#art-guidelines"]')[0]);
    }
  },{offset:topNavHeight});

  $('#testimonials').waypoint(function(direction){
    if(!Boolean(isScrolling)){
      highlightActiveLink($('a[href*="#testimonials"]')[0]);
    }
  },{offset:topNavHeight});

  $('#contact').waypoint(function(direction){
    if(!Boolean(isScrolling)){
      highlightActiveLink($('a[href*="#contact"]')[0]);
    }
  },{offset:topNavHeight});
});

function highlightActiveLink(el) {
    var topNavLinks = document.getElementsByTagName("a");
    var i;
    for (i=0; i < topNavLinks.length; i++){
      topNavLinks[i].classList.remove('active');
    }
    
    el.className = "active";
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('slide-from-left-anim');
    }
  });
});

// observer.observe(document.querySelector('.heading2'));
document.querySelectorAll('.heading2').forEach(entry => {observer.observe(entry)});


/*---------------MOBILE NAVIGATION-----------------*/
$('.js--nav-icon').click(function(){
  var nav = $('.js--main-nav');
  var icon = $('.js--nav-icon i');
  
  if(icon.hasClass('fa-bars'))
  {
    icon.addClass('fa-close');
    icon.removeClass('fa-bars');
  }
  else 
  {
    icon.addClass('fa-bars');
    icon.removeClass('fa-close');
  }

  nav.slideToggle(200);
})

//This works basically like a media query for jQuery, where we can take different actions depending on the screen width

$(window).resize(function(){
  var nav = $('.js--main-nav');
  var icon = $('.js--nav-icon i');
  
  if ($(window).width() > 830){
    nav.css("display", "block");
    icon.addClass('fa-close');
    icon.removeClass('fa-bars');
  } else {
    nav.css("display", "none");
    icon.addClass('fa-bars');
    icon.removeClass('fa-close');
  }
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon 
function myFunction() {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 

  console.log('HELLO WORLD')

(function () {
  setTimeout(() => alert('HELLO WORLD'), 3000)
})();
*/