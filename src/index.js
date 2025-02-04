import {fillSkillSection} from "./js/skill-section";
import {fillSProjectsSection} from "./js/projects-section";

function filterProjects(type) {
    document.querySelectorAll(".project").forEach((project) => {
        project.style.display = project.getAttribute("data-type") === type ? "block": "none";
    });
}

function setNewActive(id) {
    document.querySelectorAll(".project-filter_button").forEach((btn) => {
        btn.classList.remove("active-filter");
    });
    document.getElementById(`projects-filters_${id}`).classList.toggle("active-filter");
}

const projectTypes = {
    0: "full",
    1: "front",
    2: "back"
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
        filterProjects("0");
    });

    document.getElementById("projects-filters_back").addEventListener("click", () => {
        setNewActive("back");
        filterProjects("1");
    });

    document.getElementById("projects-filters_full").addEventListener("click", () => {
        setNewActive("full");
        filterProjects("2");
    });
});