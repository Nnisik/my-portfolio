import {fillSkillSection} from "./js/skill-section";

document.addEventListener("DOMContentLoaded", () => {
    fillSkillSection("../src/json/data-skills-back.json", "skills-back");
    fillSkillSection("../src/json/data-skills-front.json", "skills-front");
    fillSkillSection("../src/json/data-skills-languages.json", "skills-languages");
    fillSkillSection("../src/json/data-skills-tools.json", "skills-tools");
    fillSkillSection("../src/json/data-skils-databases.json", "skills-databases");
});