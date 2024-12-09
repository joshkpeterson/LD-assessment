import React from 'react'
import ProjectList from '../components/ProjectList.jsx'
import projectsData from '../assets/projects.json'


function ProjectOverview() {
  const projects = projectsData.projects
  console.log(projects)
  console.log("foo")

  return (
    <div>
      Project Overview
      <ProjectList projects={projects} />
    </div>
  )
}

export default ProjectOverview