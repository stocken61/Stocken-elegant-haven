/* 
 * Boutique Hotel Stocken - Main JavaScript
 */

document.addEventListener("DOMContentLoaded", function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", function() {
            mainNav.classList.toggle("active");
        });
    }

    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll(".main-nav .nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (mainNav.classList.contains("active")) {
                mainNav.classList.remove("active");
            }
        });
    });

    // Optional: Close mobile menu when clicking outside
    document.addEventListener("click", function(event) {
        if (mainNav && mainNav.classList.contains("active") && 
            !mainNav.contains(event.target) && 
            !menuToggle.contains(event.target)) {
            mainNav.classList.remove("active");
        }
    });

    // FAQ Accordion (if present on the page)
    const faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
            const isActive = question.classList.contains("active");

            // Close all other answers
            // faqQuestions.forEach(q => {
            //     q.classList.remove("active");
            //     q.nextElementSibling.classList.remove("active");
            //     q.nextElementSibling.style.display = "none";
            // });

            // Toggle current question
            if (!isActive) {
                question.classList.add("active");
                answer.classList.add("active");
                answer.style.display = "block"; // Or use CSS transitions
            } else {
                question.classList.remove("active");
                answer.classList.remove("active");
                answer.style.display = "none"; // Or use CSS transitions
            }
        });
    });

    // Room Gallery Thumbnail Click (if present on the page)
    const galleries = document.querySelectorAll(".room-gallery");
    galleries.forEach(gallery => {
        const mainImage = gallery.querySelector(".room-gallery-main img");
        const thumbnails = gallery.querySelectorAll(".room-gallery-thumbnail");

        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener("click", function() {
                // Update main image src
                const newSrc = this.querySelector("img").getAttribute("src");
                mainImage.setAttribute("src", newSrc);

                // Update active thumbnail
                thumbnails.forEach(t => t.classList.remove("active"));
                this.classList.add("active");
            });
        });
    });

});

