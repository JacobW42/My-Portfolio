function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here
    showPopup(true);
    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
    recommendation.value = "";
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}



document.addEventListener("DOMContentLoaded", () => {
    const testimonials = document.querySelectorAll(".testimonial");
    const dots = document.querySelectorAll(".nav-dot");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
    let currentIndex = 0;

    function updateSlider(index) {
      const offset = -100 * index; // Calculate the offset for sliding

      // Apply transform to the slider container
      document.querySelector(".testimonial-slider").style.transform = `translateX(${offset}%)`;

      // Update active testimonial
      testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle("active", i === index);
      });

      // Update active dot
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }

    function showNext() {
      currentIndex = (currentIndex + 1) % testimonials.length;
      updateSlider(currentIndex);
    }

    function showPrevious() {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      updateSlider(currentIndex);
    }

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlider(currentIndex);
      });
    });
    
// Declare a global variable for the timer
let autoSlideTimer = setInterval(showNext, 10000); // Auto-slide every 5 seconds

// Function to reset the timer
function resetTimer() {
    clearInterval(autoSlideTimer); // Clear the existing timer
    autoSlideTimer = setInterval(showNext, 10000); // Restart the timer
}

// Event listeners for arrow clicks
leftArrow.addEventListener("click", () => {
    showPrevious();
    resetTimer(); // Reset the timer when left arrow is clicked
});

rightArrow.addEventListener("click", () => {
    showNext();
    resetTimer(); // Reset the timer when right arrow is clicked
});

    // Swipe functionality for mobile devices
    let startX;
    let endX;

    document.querySelector(".testimonial-slider").addEventListener("touchstart", (e) => {
      startX = e.changedTouches[0].pageX;
    });

    document.querySelector(".testimonial-slider").addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].pageX;

      if (startX - endX > 50) {
        // Swipe left
        showNext();
        resetTimer();
      } else if (endX - startX > 50) {
        // Swipe right
        showPrevious();
        resetTimer();
      }
    });
  });

function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
  }

  function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
  }

  function toggleCertificates() {
  const container = document.querySelector('.collapse-container');
  const button = document.getElementById('toggleCertsBtn');
  const isExpanded = container.classList.toggle('expanded');
  button.textContent = isExpanded ? 'Show Less' : 'View All Certificates';

  if (!isExpanded) {
    // Scroll smoothly to the certificates section top when collapsing
    document.getElementById('certificates').scrollIntoView({ behavior: 'smooth' });
  }
}