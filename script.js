$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["YouTuber", "Developeur", "web-Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["YouTuber", "Developeur", "web-Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
  $(".image-slider").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: false,
      },
    },
  });
});

// notification de connexion

// Selecting all required elements
const wrapper = document.querySelector(".wrapper"),
  toast = wrapper.querySelector(".toast"),
  title = toast.querySelector("span"),
  subTitle = toast.querySelector("p"),
  wifiIcon = toast.querySelector(".icon"),
  closeIcon = toast.querySelector(".close-icon");

window.onload = () => {
  function ajax() {
    let xhr = new XMLHttpRequest(); //creating new XML object
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true); //sending get request on this URL
    xhr.onload = () => {
      //once ajax loaded
      //if ajax status is equal to 200 or less than 300 that mean user is getting data from that provided url
      //or his/her response status is 200 that means he/she is online
      if (xhr.status == 200 && xhr.status < 300) {
        toast.classList.remove("offline");
        title.innerText = "You're online now";
        subTitle.innerText = "Hurray! Internet is connected.";
        wifiIcon.innerHTML = '<i class="uil uil-wifi"></i>';
        closeIcon.onclick = () => {
          //hide toast notification on close icon click
          wrapper.classList.add("hide");
        };
        setTimeout(() => {
          //hide the toast notification automatically after 5 seconds
          wrapper.classList.add("hide");
        }, 1400);
      } else {
        offline(); //calling offline function if ajax status is not equal to 200 or not less that 300
      }
    };
    xhr.onerror = () => {
      offline(); ////calling offline function if the passed url is not correct or returning 404 or other error
    };
    xhr.send(); //sending get request to the passed url
  }

  function offline() {
    //function for offline
    wrapper.classList.remove("hide");
    toast.classList.add("offline");
    title.innerText = "You're offline now";
    subTitle.innerText = "Opps! Internet is disconnected.";
    wifiIcon.innerHTML = '<i class="uil uil-wifi-slash"></i>';
  }

  setInterval(() => {
    //this setInterval function call ajax frequently after 100ms
    ajax();
  }, 100);
};

// supprimer

let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

// infos photo anime

// infos photo anime
