window.onload = function() {
  Particles.init({
    selector: '.background',
    color: '#8b8b8b',
    connectParticles: true,
    maxParticles: 150
  });
};

const imgProjects = document.querySelectorAll(`.project-folder`);
const gifProjects = document.querySelectorAll(`.project-gif`);
const projectsHeadings = document.querySelectorAll(`.project-name`);
const projectsDescriptorWrapper = document.querySelectorAll(`.projects-descriptor-wrapper`);
const projectContainerEl = document.querySelectorAll(`.project-container`);


const blurBGC = () => {

  projectContainerEl.forEach(project => {

    project.addEventListener(`mouseenter`, e => {
      // Attaching the heading to his project(this is not the element, just the ID to link them)
      const hoveredProject = e.currentTarget
      const hoveredHeadingDataName = hoveredProject.dataset.name;

      imgProjects.forEach(img => {
        img.classList.toggle(`blur`, img.dataset.name !== hoveredProject.dataset.name);
      })

      projectsHeadings.forEach(heading => {
        heading.classList.toggle(`blur`, heading.dataset.name !== hoveredHeadingDataName);
      })

      hoveredProject.classList.add(`focused`);
    })

    project.addEventListener(`mouseleave`, e => {
      const hoveredProject = e.currentTarget

      imgProjects.forEach(img => {img.classList.remove(`blur`);
      projectsHeadings.forEach(heading => {heading.classList.remove(`blur`);})
      hoveredProject.classList.remove(`focused`);
      });
    });
  });

}

const showPreview = () => {

}

blurBGC();
showPreview();