$(document).ready(function () {
  // Select all buttons inside the project section
  let $btns = $(".projects .the-button-legion button");

  // Handle button click events
  $btns.click(function (e) {
    // Remove 'active' class from all buttons
    $(".projects .the-button-legion button").removeClass("active");
    // Add 'active' class to the clicked button
    e.target.classList.add("active");

    // Get the filter value from the clicked button
    let selector = $(e.target).attr("data-filter");

    // Apply the filter using Isotope plugin
    $(".projects .grid").isotope({ filter: selector });

    // Prevent default link behavior
    return false;
  });

  // Calculate the offset of the navbar
  let nav_offset_top = $(".header").height() + 50;

  // Function to fix navbar on scroll
  function navbarFixed() {
    if ($(".header").length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();

        // Add 'navbar_fixed' class when scrolling past navbar
        if (scroll >= nav_offset_top) {
          $(".header .main-nav").addClass("navbar_fixed");
        } else {
          $(".header .main-nav").removeClass("navbar_fixed");
        }
      });
    }
  }

  // Highlight active link in navbar on click
  $(document).ready(function () {
    $("ul.navbar-nav a").click(function () {
      $("ul.navbar-nav .active").removeClass("active");
      $(this).parent().addClass("active");
    });
  });

  // Highlight active section in navbar on scroll
  $(window).on("scroll", function () {
    $("section").each(function () {
      if ($(window).scrollTop() >= $(this).offset().top - 60) {
        var currentId = $(this).attr("id");
        $("ul.navbar-nav .active").removeClass("active");
        $('ul.navbar-nav a[href="#' + currentId + '"]')
          .parent()
          .addClass("active");
      }
    });
  });

  // Function call to fix navbar
  navbarFixed();

  // Animation handling for skill image
  const skillImage = document.getElementById("bounce");
  skillImage.onclick = () => {
    skillImage.classList.add("start-bouncing");
  };
  skillImage.onanimationend = () => {
    skillImage.classList.remove("start-bouncing");
  };
});
