export function fillSkillSection(JSONFilePath, sectionID) {
    fetch(JSONFilePath)
        .then((res) => {
            if (!res.ok) {
                throw new Error
                (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);
            data.forEach((skill) => {
                document.getElementById(sectionID).appendChild(drawSkillElement(skill["name"], skill["img"]));
            });
        })
        .catch((error) => {
            console.log(error);
        })
}

function drawSkillElement(name, image) {
    const element = document.createElement("img");
    element.classList.add("skills__img");
    element.src = image;
    element.alt = name;
    return element;
}