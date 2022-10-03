const projectSection = document.getElementById('project-section');
const projectDiv = projectSection.children[0];

projectData.sort((a, b) => a.name.localeCompare(b.name)).forEach((project) => {

    const text = `
    <a class="project-card-link" href="./projects/${project.path}" target="_blank">
        <div class="card project-card">
            <img class="card-img-top" src="./assets/img/projects/${project.image}" alt="Card image">
            <div class="card-body text-center">
                <h5 class="card-title">${project.name}</h5>
            </div>
        </div>
    </a>
    `;

    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card-div');
    projectCard.innerHTML = text;

    projectDiv.append(projectCard);
});