import React from 'react'
import SectionHeading from './SectionHeading'
import Project from './Project'
import personalProjects from '../data/projects'
import GridLayout from './GridLayout'
const Projects = () => {
    return (
        <div name="Projects" className='pt-10 h-full min-h-screen w-full flex items-center  bg-gradient-to-t from-black via-black to-gray-800 text-white'>
            <div className='section'>

                <SectionHeading heading="Projects" secondHeading="Check Out Some of my work" />

                <GridLayout style="sm:grid-cols-2 md:max-w-2xl mx-auto lg:max-w-none lg:grid-cols-3 ">
                    {personalProjects.map((project) => {
                        return (
                            <Project key={project.name} project={project} />
                        )
                    })}

                </GridLayout>
            </div>
        </div>
    )
}

export default Projects
