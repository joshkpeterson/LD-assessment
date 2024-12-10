import ProjectList from "../components/ProjectList.jsx";
import projectsData from "../assets/projects.json";

function ProjectOverview() {
  // TODO: React Query to fetch projects data, add mock API package
  const projects = projectsData.projects;

  return (
    <main>
      <ProjectList projects={projects} />
    </main>
  );
}

export default ProjectOverview;
