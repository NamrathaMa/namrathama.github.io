"use strict";

let experienceBtns, experienceTabs;

const mainDocument = document.documentElement;

const linksGrid = document.querySelector(".links");
const aboutGrid = document.querySelector(".about-grid");
const experienceGrid = document.querySelector(".experience-grid");
const projectsGrid = document.getElementById("projects-grid");
const educationGrid = document.querySelector(".education-grid");

const emailID = document.getElementById("email");
const copyBtn = document.getElementById("copy-btn");
const copyLabel = document.getElementById("copy-label");

const darkModeQuery = window.matchMedia("(prefers-color-scheme:dark)");

const gitHubIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>`;

const statusCodes = {
  done: "built & tested",
  live: "live",
  wip: "in progress",
};

//Dynamically displaying links
const setUpLinks = function () {
  linksGrid.innerHTML = links
    .map(
      (link) =>
        `<${link.id === "" ? "a" : "button"} class="icon-btn" ${link.id === "" ? "" : `id = ${link.id}`} ${link.url === "" ? "" : `href = "${link.url}"`} target="_blank" rel="noopener noreferrer" aria-label="${link.label}">${link.svg}</${link.id === "" ? "a" : "button"}>`,
    )
    .join("");
  const nightBtn = document.getElementById("theme-toggle");

  nightBtn.addEventListener("click", () => {
    mainDocument.dataset.theme =
      mainDocument.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", mainDocument.dataset.theme);
  });

  darkModeQuery.addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      mainDocument.dataset.theme = e.matches ? "dark" : "light";
    }
  });
};

setUpLinks();

//Dynamically displaying intro
aboutGrid.innerHTML = `<div><p>${intro.jobExp}</p><p>${intro.eduExp}</p><ul class="skills">${intro.skills.map((skill) => `<li>${skill}</li>`).join("")}</ul></div><div class='photo'><img src='${intro.imgUrl}' alt='${intro.imgAlt}'/></div>`;

//Dynamically displaying experience tabs

experienceBtns = experiences
  .map(
    (button) =>
      `<button class="tab${button.buttonData === "chubb" ? " active" : ""}" data-tab="${button.buttonData}">${button.name}</button>`,
  )
  .join("");

experienceTabs = experiences
  .map(
    (expCompany) =>
      `<div class="panel${expCompany.buttonData !== "chubb" ? " hidden" : ""}" id="${expCompany.buttonData}">
  <h3>${expCompany.title} @<a href="${expCompany.url}" target="_blank" rel="noopener noreferrer">${expCompany.name}</a></h3>
  <p class="date-location">${expCompany.date} · ${expCompany.location}</p>
  <ul>${expCompany.exp.map((point) => `<li>${point}</li>`).join("")}</ul>
       </div>`,
  )
  .join("");

const setUpTabs = function () {
  experienceGrid.innerHTML = `<div class="tabs">${experienceBtns}</div><div>${experienceTabs}</div>`;

  const panels = document.querySelectorAll(".panel");
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((tab1) => tab1.classList.remove("active"));
      panels.forEach((panel) => panel.classList.add("hidden"));

      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.remove("hidden");
    });
  });
};

setUpTabs();

//Dynamically displaying projects

projectsGrid.innerHTML = projects
  .map(
    (project) =>
      `<article class="card">
                    <div class="card-top">
                      <span class="pill ${project.status}">${statusCodes[project.status]}</span>
                     ${project.repo ? `<a class="icon-btn" href="${project.repo}" target="_blank" rel="noopener noreferrer" aria-label="View Code">${gitHubIcon}</a>` : ""}
                    </div>
                    <h3>${project.title}</h3>
                      <p>${project.description}</p>
                      <p class="tech">${project.tech.join(" · ")}</p>
                </article>`,
  )
  .join("");

//Dynamically displaying education section

educationGrid.innerHTML = education
  .map(
    (school) =>
      `<div class="school">
     <h3> ${school.name}</h3> 
     <p class="degree">${school.degree}</p>
     <p class="year">${school.year}</p>
     </div>`,
  )
  .join("");

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(emailID.textContent).then(() => {
    copyBtn.classList.add("copied");
    copyLabel.textContent = "Copied!";
    setTimeout(() => {
      copyBtn.classList.remove("copied");
      copyLabel.textContent = "Copy Email";
    }, 3000);
  });
});
