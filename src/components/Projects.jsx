import React from "react";
import ProjectsCard from "./ProjectsCard";
{
  /*data*/
}
const Projects = () => {
  const projects = [
    {
      name: "The Menu",
      desc: "Remake of My first project, a single-page website for Resturant Menus",
      image:
        "https://raw.githubusercontent.com/iamirhyd/Restaurant-Menu/refs/heads/main/public/Preview.png",
      live: "https://iamirhyd.github.io/Restaurant-Menu/",
      github: "https://github.com/iamirhyd/Restaurant-Menu",
    },
    {
      name: "TodoList",
      desc: "a basic Todo List",
      image: "./Preview/Todo.png",
      live: "https://iamirhyd.github.io/TodoList/",
      github: "https://github.com/iamirhyd/TodoList",
    },
    {
      name: "WeatherApp",
      desc: "WeatherApp with api features",
      image: "./Preview/Weather.png",
      live: "https://iamirhyd.github.io/Weather-App/",
      github: "https://github.com/iamirhyd/Weather-App",
    },
    {
      name: "TicTacToe",
      desc: "TicTacToe Game",
      image: "./Preview/TicTacToe.png",
      live: "https://iamirhyd.github.io/Tic-Tac-Toe/",
      github: "https://github.com/iamirhyd/Tic-Tac-Toe",
    },
    {
      name: "Github User Finder",
      desc: "An App that lets you search for usernames on github, Powered by Github API",
      image:
        "https://raw.githubusercontent.com/iamirhyd/Github-User-Search-App/refs/heads/main/public/Preview.png",
      live: "https://iamirhyd.github.io/Github-User-Search-App/",
      github: "https://github.com/iamirhyd/Github-User-Search-App",
    },
  ];

  return (
    <section
      id="Projects"
      className="w-full min-h-screen bg-black py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
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
  );
};

export default Projects;
