export function fillSProjectsSection(JSONFilePath) {
    fetch(JSONFilePath)
        .then((res) => {
            if (!res.ok) {
                throw new Error();
            }
            return res.json();
        })
        .then((data) => {
            data.forEach((elem) => {
                drawProjectInfo(elem);
            });
        })
        .catch((error) => {
            console.log(error);
        })
}

function drawProjectInfo(data) {
    const container = document.createElement("div");
    container.classList.add("project");
    container.setAttribute("data-type", data.type);
    // project image
    // info about project
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("project-info");
    const projectHeader = document.createElement("h3");
    projectHeader.innerText = data.name;
    infoContainer.appendChild(projectHeader);
    // project links
    const projectLinks = document.createElement("div");
    projectLinks.classList.add("project-info_links");
    const githubLink = document.createElement("a");
    githubLink.classList.add("project-link", "github-link");
    githubLink.innerText = "GitHub";
    projectLinks.appendChild(githubLink);
    const demoLink = document.createElement("a");
    demoLink.classList.add("project-link", "demo-link");
    demoLink.innerText = "->";
    projectLinks.appendChild(demoLink);
    infoContainer.appendChild(projectLinks);
    // project stack
    const stackList = document.createElement("div");
    stackList.classList.add("project-info_stack");
    data["stack"].forEach((tool) => {
        const skill = document.createElement("p");
        skill.innerText = tool;
        stackList.appendChild(skill);
    });
    infoContainer.appendChild(stackList);
    container.appendChild(infoContainer);
    document.getElementById("projects-list").appendChild(container);
}

/*
function drawProjectImage(imageLink) {
    const imageContainer = document.createElement("img");
    imageContainer.src = imageLink;
    imageContainer.alt = "";
    imageContainer.classList.add("project-img");
    return imageContainer;
}
*/