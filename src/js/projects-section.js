export function fillSProjectsSection(JSONFilePath) {
    fetch(JSONFilePath)
        .then((res) => {
            if (!res.ok) {
                throw new Error();
            }
            return res.json();
        })
        .then((data) => {
            console.log(data)
            data.forEach((skill) => {
                projectsSection.appendChild(displayProjectInfo(skill));
            });
        })
        .catch((error) => {
            console.log(error);
        })
}

function drawProjectImage(imageLink) {
    const imageContainer = document.createElement("img");
    imageContainer.src = imageLink;
    imageContainer.alt = "";
    imageContainer.classList.add("project-img");
    return imageContainer;
}


// FIXME: doesn't display anything
function drawProjectInfo(skillInfo) {
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("project-info");
    // project header
    const projectHeader = document.createElement("h3");
    projectHeader.innerText = skillInfo["name"];
    infoContainer.appendChild(infoContainer);
    // project links
    const projectLinks = document.createElement("div");
    projectLinks.classList.add("project-info_links");
    const githubLink = document.createElement("a");
    githubLink.classList.add("project-link github-link");
    githubLink.innerText = "GitHub";
    projectLinks.appendChild(githubLink);
    const demoLink = document.createElement("a");
    demoLink.classList.add("project-link demo-link");
    demoLink.innerText = "->";
    projectLinks.appendChild(demoLink);
    infoContainer.appendChild(projectLinks);
    // project stack
    const stackList = document.createElement("div");
    stackList.classList.add("project-info_stack");
    skillInfo["stack"].forEach((tool) => {
        const skill = document.createElement("p");
        skill.innerText = tool;
        stackList.appendChild(skill);
    });
    infoContainer.appendChild(stackList);
    return infoContainer;
}

function displayProjectInfo(skillInfo) {
    const container = document.createElement("div");
    container.classList.add("project");
    // project image
    container.appendChild(drawProjectImage(skillInfo["image"]));
    // project info
    container.appendChild(drawProjectInfo(skillInfo));
    return container;
}

const projectsSection = document.getElementById("projects-list");