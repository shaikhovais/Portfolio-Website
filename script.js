// Displaying stars in rating -------------
let skillsRating = [9, 8, 8, 8, 7, 7, 8, 6];
for (let index = 0; index < 8; index++) {
  let list = document.querySelectorAll(`.rating`)[index];
  let rating = skillsRating[index];
  for (let ratingIndex = 1; ratingIndex <= 10; ratingIndex++) {
    if (ratingIndex <= rating) {
      list.innerHTML += `<img class="hidden" src="./Images/Icons/filled-star.png" alt="Filled Star" style="transition-delay: ${ratingIndex}00ms">`;
    } else {
      list.innerHTML += `<img class="hidden" src="./Images/Icons/unfilled-star.png" alt="Unfilled Star" style="transition-delay: ${ratingIndex}00ms;">`;
    }
  }
}

// Displaying tech stacks in projects -------------
let techStacks = [
  ["HTML", "CSS", "JavaScript", "React", "NodeJS", "ExpressJS", "MongoDB"],
  ["HTML", "CSS", "JavaScript", "React"],
  ["HTML", "CSS", "JavaScript", "React"],
  ["HTML", "CSS", "JavaScript"],
  ["HTML", "CSS", "JavaScript"],
  ["HTML", "CSS"],
];
for (let index = 0; index < 6; index++) {
  let project = document.querySelectorAll(`.techs-wrapper`)[index];
  let techs = techStacks[index];
  for (let techIndex = 0; techIndex < techs.length; techIndex++) {
    project.innerHTML += `<div class="single-tech">${techs[techIndex]}</div>`;
  }
}

// Animation in skills section ---------
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => observer.observe(element));

// Navigation Bar ---------------
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
let menuOpen = false;

function toggleMenu() {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menu.classList.add("menu-animation");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menu.classList.remove("menu-animation");
    menuOpen = false;
  }
}

menuBtn.addEventListener("click", toggleMenu);

let topicBtns = document.querySelectorAll(".topic-btn");
topicBtns.forEach((topicBtn) => {
  topicBtn.addEventListener("click", toggleMenu);
});


// Clearing form after submission -----------
window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}