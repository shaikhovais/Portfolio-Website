import { workExperienceDetails } from "./Classes/WorkExperienceDetails.js";
import { personalProjectDetails } from "./Classes/PersonalProjectDetails.js"

//Showing skills dynamically
const skillSetList = {
  frontendSkills: [
    "Angular",
    "React",
    "TypeScript"
  ],
  backendSkills: ["Java", "Python", "Node.js"],
  databaseSkills: ["SQL","Oracle SQL","MongoDB"],
  softSkills1: [
    "Clearly and effectively conveying ideas and information.",
  ],
  softSkills2: [
    "Working effectively with different departments or teams to achieve common goals.",
  ],
  softSkills3: [
    "Skilled at researching online solutions, customizing them to fit specific situations, and effectively applying them to solve problems.",
  ],
};
let skillWrapperList = document.querySelectorAll(".skill-wrapper");
let index = 0;

for (const [key, skillSet] of Object.entries(skillSetList)) {
  if (index < skillWrapperList.length) {
    const wrapper = skillWrapperList[index];
    for (const skill of skillSet) {
      wrapper.innerHTML += `<h1 class="hidden">${skill}</h1>`;
    }
    if (index == 1) {
      wrapper.innerHTML += '<div class="hr-line"></div>';
    }
    index++;
  }
}

//Adding Work experience data dynamically
const workExperienceList = [
  new workExperienceDetails(
    "Winsoft Technologies India Pvt. Ltd.",
    "Mumbai",
    "Software Developer",
    "January 2023",
    "November 2024",
    [
      "Developed and deployed a Locker Management System for Kotak Mahindra Bank using Angular for the frontend and Oracle SQL for the database, significantly reducing locker allocation time across 1,800+ branches nationwide.",
      "Automated the digital onboarding process of insurance distributors for Yes Bank using React for the frontend and Node.js for the backend, reducing processing time by 70% while ensuring 100% IRDA compliance.",
      "Developed an agent tracking system for HDFC Bank using SQL Server for database management, enabling monitoring of over 150,000 insurance sales agents and improving reporting accuracy.",
      "Built an insurance enrollment system for ESAF Bank using SQL Server for the database, enabling customer enrollment and automatic data redirection to four insurance partners, streamlining the application process."
    ]
  ),
];
let workWrapperList = document.querySelectorAll(".work-wrapper");

workExperienceList.forEach((exp, key) => {
  const wrapper = workWrapperList[key];
  wrapper.innerHTML += `<div class="work-subcontainer"><h1>${exp.designation}</h1>
                          <h3>${exp.joiningDate} - ${exp.resignationDate}</h3></div>`;
  wrapper.innerHTML += `<h1 class="company-name">${exp.companyName}, <span class="company-location">${exp.location}</span></h1><ul>`;
  exp.workDescriptionList.forEach((workDescription) => {
    wrapper.innerHTML += `<li class="">${workDescription}</li>`;
  });
  wrapper.innerHTML += "</li>";
});

//
const personalProjects = [
  new personalProjectDetails(
    "Movieteria",
    ["HTML", "CSS", "JavaScript", "React"],
    "Created a website where users can search for any movie or TV series and see details like overview, cast, rating, runtime, open trailer on YouTube, etc.",
    [
      "Added multiple interacting sections for users to browse movies and shows.",
      "Implemented skeleton loading and responsiveness for better user experience.",
      "Implemented a modal to display more information about the movies and shows."
    ],
    "./Images/Project Images/Movieteria.png",
    "https://movieteria.netlify.app/"
  ),
  new personalProjectDetails(
    "ShopTrek",
    ["Angular", "Tailwind CSS"],
    "A fully functional e-commerce platform built with Angular and Tailwind CSS, fetching product data from the FakeStore API. ",
    [
      "Product browsing and filtering for easy navigation.",
      "Shopping cart with session-based cart persistence.",
      "Responsive design for seamless user experience."
    ],
    "./Images/Project Images/ShopTrek.png",
    "https://shoptrek.netlify.app/"
  ),
  new personalProjectDetails(
    "Burhani College",
    ["HTML", "CSS"],
    "Created the website of my college using only HTML and CSS. It includes everything that a college website needs.",
    [
      "Multiple pages to display courses and infrastructure of college.",
      "Integrated map and a query form.",
      "Responsive design for seamless user experience."
    ],
    "./Images/Project Images/Burhani College.png",
    "https://burhani-college.netlify.app/"
  ),
  // new personalProjectDetails(
  //   "Day & Night Themed Calculator",
  //   ["HTML", "CSS", "JavaScript"],
  //   "Created a vibrant-looking calculator where users can change the theme with just one click.",
  //   [
  //     "Two different themes (Day and Night).",
  //     "Added 3D effect on buttons.",
  //     "Added responsiveness."
  //   ],
  //   "./Images/Project Images/Day and Night Themed Calculator.png",
  //   "https://2theme-calculator.netlify.app/"
  // ),
];

function createProjectCard(project) {
  const techStackHtml = project.techStack.map(tech => `<div class="single-tech">${tech}</div>`).join('');
  const featuresHtml = project.features.map(feature => `<li>${feature}</li>`).join('');

  return `
      <div class="project-card project-card-hover">
          <img src="${project.imageLink}" class="project-display" />
          <div class="project-name">${project.projectName}</div>
          <div class="project-techStack">
              <h2>Tech Stack Used:</h2>
              <div class="techs-wrapper">${techStackHtml}</div>
          </div>
          <div class="layer">
              <div class="project-info">
                  <h3>${project.description}</h3>
                  <h4>-: Features :-</h4>
                  <ul>${featuresHtml}</ul>
                  <a href="${project.websiteLink}" class="project-link" target="_blank" rel="noopener noreferrer">
                      Visit Website
                      <div class="open-link"></div>
                  </a>
              </div>
          </div>
      </div>
  `;
}

// Render all projects to the container
const projectsContainer = document.querySelector('.projects-container');
projectsContainer.innerHTML = personalProjects.map(createProjectCard).join('');

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
const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener("click", () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
})
