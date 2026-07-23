import React from 'react'
import ProjectsCard from './ProjectsCard'
{/*data*/ }
const Projects = () => {
  const projects = [
    { name: "TodoList", desc: "a basic Todo List", image: "./Preview/Todo.png", live: "https://iamirhyd.github.io/TodoList/", github: "https://github.com/iamirhyd/TodoList" },
    { name: "WeatherApp", desc: "WeatherApp with api features", image: "./Preview/Weather.png", live: "https://iamirhyd.github.io/Weather-App/", github: "https://github.com/iamirhyd/Weather-App" },
    { name: "TEST3", desc: "TEST", image: "", live: "https://github.com/iamirhyd", github: "https://github.com/iamirhyd" },
  ]

  return (
    <section id='Projects' className="w-full min-h-screen bg-black py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">

        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-white/60 text-sm sm:text-base font-light tracking-[0.3em] mb-3">
            MY WORK
          </h2>
          <h3 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
            Featured <span className="text-white/70">Projects</span>
          </h3>
        </div>
        {/*Generating projectCard using data and ProjectsCard component*/}

        <ProjectsCard obj={projects} />

      </div>
    </section>
  )
}

export default Projects