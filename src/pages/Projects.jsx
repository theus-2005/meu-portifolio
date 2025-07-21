import Project from "../components/Project";
import DBProjects from "../data/projects.json";

export default function Projects() {
  return (
    <div className="flex flex-wrap justify-center gap-10 m-10">
      {DBProjects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
}
