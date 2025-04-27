window.onload = function () {
    function $(selector, all_=false) {
        if (!all_) {
            return document.querySelector(selector)
        } else {
            return document.querySelectorAll(selector)
        }
    }


    window.onscroll = function() {
      // // document.querySelector("#sd-container").style.display = "none"; // Hide the sd-container when scrolled
      // // console.log(window.pageYOffset);
      //   var navbar = $("#nav-bar");
        if (window.pageYOffset === 0) {
          document.querySelector("#sd-container").style.display = "block"; // Show the sd-container when at top
        } else {

          document.querySelector("#sd-container").style.display = "none"; // Hide the sd-container when scrolled
        }
      };
    
        // Scroll back to top
function backToTop() {
    const progressPath = document.querySelector('.progress-wrap path');
    if (progressPath) {
      const pathLength = progressPath.getTotalLength();
      progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
      progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
      progressPath.style.strokeDashoffset = pathLength;
      progressPath.getBoundingClientRect();
      progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
  
      const updateProgress = function () {
        const scroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        const height = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight, document.documentElement.clientHeight, document.body.clientHeight) - window.innerHeight;
        const progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
      };
  
      updateProgress();
      window.addEventListener('scroll', updateProgress);
  
      const offset = 50;
      const duration = 550;
      const progressWrap = document.querySelector('.progress-wrap');
  
      window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > offset) {
          if (progressWrap) {
            progressWrap.classList.add('active-progress');
          }
        } else {
          if (progressWrap) {
            progressWrap.classList.remove('active-progress');
          }
        }
      });
  
      if (progressWrap) {
        progressWrap.addEventListener('click', function(event) {
          event.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
      }
    }
  }

backToTop();

// Update date [[Feature Added to inspire the visitor about the updatation of the site]]
function updateDate() {
    const dateElement_desktop = document.querySelector('.left-topbar .left-topbar-item:nth-child(1)');
    const dateElement_mobile = document.querySelector('.topbar-mobile .left-topbar:nth-child(1) span');
    if (dateElement_desktop && dateElement_mobile) {
        const currentDate = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        dateElement_desktop.textContent = currentDate.toLocaleDateString('en-US', options);
        dateElement_mobile.textContent = currentDate.toLocaleDateString('en-US', options);
    }
}
updateDate();

// What we do
var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'), 
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.carousel .timeRunning') 

let timeRunning = 3000 
let timeAutoNext = 15000

nextBtn.onclick = function(){
    showSlider('next')
}

prevBtn.onclick = function(){
    showSlider('prev')
}

let runTimeOut 

let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)


// function resetTimeAnimation() {
//     runningTime.style.animation = 'none'
//     runningTime.offsetHeight /* trigger reflow */
//     runningTime.style.animation = null 
//     runningTime.style.animation = 'runningTime 7s linear 1 forwards'
// }


function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
    if(type === 'next'){
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('next')
    } else{
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prev')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout( () => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeRunning)


    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    // resetTimeAnimation() // Reset the running time animation
}

// Start the initial animation 
// resetTimeAnimation()


// COUNTER
function isScrolledIntoView(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

  // Check if the element's top is within the viewport
  const topInView = rect.top <= windowHeight;
  // Check if the element's bottom is within the viewport
  const bottomInView = rect.bottom >= 0;
  //Check for horizontal visibility
  const leftInView = rect.left <= windowWidth;
  const rightInView = rect.right >= 0;

  return (topInView && bottomInView && leftInView && rightInView);
}

su_wrapper = document.querySelector('.su-wrapper')
su_counters = su_wrapper.querySelectorAll('.su-card h2')

hasCounted = false
function countUp(el) {
    const target = parseInt(el.getAttribute('data-target'));
    const count = parseInt(el.innerText);
    const increment = Math.ceil(target / 100); // Increment by 1% of the target

    if (count < target) {
        el.innerText = count + increment ;
        setTimeout(() => countUp(el), 30); // Adjust the speed here
    } else {
        el.innerText = `${target}+`; // Ensure it ends at the target value
    }
}
if (isScrolledIntoView(su_wrapper) && !hasCounted) {
    hasCounted = true; // Prevent counting again
    su_counters.forEach(counter => {
        countUp(counter);
    });
}
window.addEventListener('scroll', function() {
    if (isScrolledIntoView(su_wrapper) && !hasCounted) {
        hasCounted = true; // Prevent counting again
        su_counters.forEach(counter => {
            countUp(counter);
        });
    }
});

onresize = function() {
    console.log(window.innerWidth)
}

// SCROLLER : WE HAVE WORKED WITH
const logoCarousel = document.getElementById('logoCarousel');
const carouselWrapper = document.querySelector('.carousel-wrapper');

if (logoCarousel && carouselWrapper) {
    // Clone the list of logos
    const clonedLogos = logoCarousel.cloneNode(true);

    // Append the cloned logos to the original list
    logoCarousel.appendChild(clonedLogos);

    const speed = 1; // Pixels to move per frame
    let currentPosition = 0;

    function animateCarousel() {
        currentPosition -= speed;
        logoCarousel.style.transform = `translateX(${currentPosition}px)`;

        // When the first set of logos is completely out of view,
        // instantly move the carousel back to the start of the second set.
        if (currentPosition <= -logoCarousel.offsetWidth / 2) {
            currentPosition = 0;
        }

        requestAnimationFrame(animateCarousel);
    }

    animateCarousel();
}


// ADJUST ORDER OF AD ELEMNTS ON RESIZE
        // Function to check and adjust element order
        function adjustAdOrder() {
          const callAds = document.querySelectorAll('.call-ad');
          
          callAds.forEach(ad => {
              const mainAd = ad.querySelector('.main-ad');
              const testimonial = ad.querySelector('.testimonial');
              
              if (window.innerWidth <= 768) {
                  // Mobile view - ensure main-ad is first
                  if (testimonial.compareDocumentPosition(mainAd) & Node.DOCUMENT_POSITION_FOLLOWING) {
                      // Testimonial comes before main-ad, so we need to reorder
                      ad.insertBefore(mainAd, testimonial);
                  }
              } else {
                  // Desktop view - restore original order
                  // Check if this is an even-numbered ad (right-aligned testimonial)
                  const isEvenAd = Array.from(callAds).indexOf(ad) % 2 === 1;
                  
                  if (isEvenAd) {
                      // For even ads, testimonial should come first
                      if (mainAd.compareDocumentPosition(testimonial) & Node.DOCUMENT_POSITION_FOLLOWING) {
                          ad.insertBefore(testimonial, mainAd);
                      }
                  } else {
                      // For odd ads, main-ad should come first
                      if (testimonial.compareDocumentPosition(mainAd) & Node.DOCUMENT_POSITION_FOLLOWING) {
                          ad.insertBefore(mainAd, testimonial);
                      }
                  }
              }
          });
      }

      // Add touch event listeners for mobile
      function setupTouchEvents() {
          const mainAds = document.querySelectorAll('.main-ad');
          
          mainAds.forEach(ad => {
              // Touch start - show button
              ad.addEventListener('touchstart', function(e) {
                  // Prevent triggering both touch and click events
                  e.preventDefault();
                  this.classList.add('touched');
                  
                  // Hide button when touching elsewhere
                  document.addEventListener('touchstart', function outsideTouch(e) {
                      if (!ad.contains(e.target)) {
                          ad.classList.remove('touched');
                          document.removeEventListener('touchstart', outsideTouch);
                      }
                  });
              });
          });
      }

      // Run on load and on resize
      adjustAdOrder();
      window.addEventListener('load', function() {
          adjustAdOrder();
          setupTouchEvents();
      });
      window.addEventListener('resize', adjustAdOrder);


    // animated underline h2 elements
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      }, {
        threshold: 0.5, // Trigger when 50% of h2 is visible
        rootMargin: '0px 0px -50px 0px' // Adjusts trigger point (negative = earlier)
      });
    
      document.querySelectorAll('.animated-underline').forEach(h2 => {
        observer.observe(h2);
      });


      // ialternative carousel images for mobile device
      alternative_images = ["mobile-versions-1", "mobile-versions-2", "mobile-versions-3"]
      
      // Change background image of carousel items if device is a mobile device for each of the images in the list
      // function updateCarouselBackgrounds() {
      //   const items = document.querySelectorAll('.carousel .list .item');
      //   const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed
        
      //   items.forEach(item => {
      //     const bgImage = isMobile ? item.dataset.mobileBg : item.dataset.desktopBg;
      //     if (bgImage) {
      //       item.style.backgroundImage = `url('${bgImage}')`;
      //       item.style.backgroundSize = 'cover';
      //       item.style.backgroundPosition = 'center';
      //       item.style.backgroundRepeat = 'no-repeat';
      //     }

      //     if (isMobile) {
      //       document.querySelector('.carousel').style.height = '120vh';
      //     }
      //   });
      // }
      
      // // Initialize on load
      // document.addEventListener('DOMContentLoaded', updateCarouselBackgrounds);  
      // // Update on window resize
      // window.addEventListener('resize', updateCarouselBackgrounds);


      function resizeCarousel() {
        const desktop_default_image_width = 1366
        const desktop_default_image_height = 641
        const mobile_default_image_width = 720
        const mobile_default_image_height = 1280
        const carousel = document.querySelector('.carousel');
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const desktopAspectRatio = desktop_default_image_width / desktop_default_image_height;
        const mobileAspectRatio = mobile_default_image_width / mobile_default_image_height;

        // Set the height of the carousel based on the window width and the aspect ratio
        if (windowWidth <= 768) {
            // Mobile view
            const newHeight = windowWidth / mobileAspectRatio;
            carousel.style.height = `${newHeight}px`;
        } else {
            // Desktop view
            const newHeight = windowWidth / desktopAspectRatio;
            carousel.style.height = `${newHeight}px`;
        } 

      }
      resizeCarousel()
      window.addEventListener('resize', resizeCarousel);
      window.addEventListener('load', resizeCarousel); // Call on load to set initial height


}