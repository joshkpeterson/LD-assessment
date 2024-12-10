import React from 'react'
import ProjectList from '../components/ProjectList.jsx'
import projectsData from '../assets/projects.json'


function ProjectOverview() {
  // TODO: React Query to fetch projects data
  const projects = projectsData.projects

  return (
    <div>
      Project Overview
      <ProjectList projects={projects} />
    </div>
  )
}

export default ProjectOverview