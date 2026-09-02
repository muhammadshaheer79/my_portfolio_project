import ProjectCard from "./ProjectCard";

const projects = [
  {
    imgSrc: "/assets/images/project-1.jpg",
    title: "FastGroce - Grocery Delivery App",
    tags: ["API", "NAT", "Development"],
    projectLink: "",
  },
  {
    imgSrc: "/assets/images/project-2.jpg",
    title: "Synchive - Instagram Inspired App",
    tags: ["API", "NAT", "Development"],
    projectLink: "",
  },
  {
    imgSrc: "/assets/images/project-3.jpg",
    title: "ByteKeep - OneDrive Inspired App",
    tags: ["Development", "SSR"],
    projectLink: "",
  },
  {
    imgSrc: "/assets/images/project-4.jpg",
    title: "Food App UI/UX",
    tags: ["Web-design", "UI/UX"],
    projectLink:
      "https://www.figma.com/design/kEi2XhDlwjz268QLhAcS49/SYED-MUHAMMAD-SHAHEER-HASAN-_-FIGMA-TASK?node-id=0-1&t=nsuXzruiYVDiFlDH-1",
  },
  {
    imgSrc: "/assets/images/project-5.jpg",
    title: "CraveMax - A Restaurant Application",
    tags: ["eCommerce", "MVC", "SPA", "Development"],
    projectLink: "",
  },
  {
    imgSrc: "/assets/images/project-6.jpg",
    title: "HealthBank - Final Year Project",
    tags: ["Blockchain", "Development", "FYP", "MVC"],
    projectLink: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {projects.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
