import {fillSkillSection} from "./js/skill-section";
import {fillSProjectsSection} from "./js/projects-section";

function filterProjects(type) {
    document.querySelectorAll(".project").forEach((project) => {
        let elementStyle;
        if (project.hasAttribute(type)) {
            elementStyle = "block";
        } else {
            elementStyle = "none";
        }
        project.style.display = elementStyle;
    });
}

function setNewActive(id) {
    document.querySelectorAll(".project-filter_button").forEach((btn) => {
        btn.classList.remove("active-filter");
    });
    document.getElementById(`projects-filters_${id}`).classList.toggle("active-filter");
}

document.addEventListener("DOMContentLoaded", () => {
    fillSkillSection("../src/json/data-skills-back.json", "skills-back");
    fillSkillSection("../src/json/data-skills-front.json", "skills-front");
    fillSkillSection("../src/json/data-skills-languages.json", "skills-languages");
    fillSkillSection("../src/json/data-skills-tools.json", "skills-tools");
    fillSkillSection("../src/json/data-skils-databases.json", "skills-databases");

    fillSProjectsSection("../src/json/data-projects.json");
    document.getElementById("projects-filters_all").addEventListener("click", () => {
        setNewActive("all");
        document.querySelectorAll(".project").forEach((project) => {
            project.style.display = "block";
        });
    });

    document.getElementById("projects-filters_front").addEventListener("click", () => {
        setNewActive("front");
        filterProjects("front");
    });

    document.getElementById("projects-filters_back").addEventListener("click", () => {
        setNewActive("back");
        filterProjects("back");
    });
});