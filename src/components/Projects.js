import ProjectCard from './ProjectCard'
import country_cli from '../images/country_cli.png'
import problem_solver from '../images/problem_solver.png'
import social_media_distancing from '../images/social_media_distancing.png'

export default function Projects() {

    const projects = [
        {
            title: "Problem Solver",
            description: "Problem Solver has a custom API containing user-submitted problems and solutions. The API is generated with the Fast JSON gem to accelerate serialization. The JavaScript frontend creates and displays the application in a single, dynamic page, and communicates with the Rails backend models and controllers to parse and validate problem/solution objects.",
            image: problem_solver,
            alt: "problem solver"
        },{
            title: "Social Media Distancing",
            description: "This Ruby on Rails web app allows users to break unhealthy social media habits through creating goals that focus on themselves. Register safely with Bcrypt encrypted passwords and start journaling your aspirations! Or sign in with your Google account for a faster experience provided by omniauth. Journeys and goals are stored in a SQLite3 database.",
            image: social_media_distancing,
            alt: "social media distancing"
        },{
            title: "Around the World",
            description: "Use this simple CLI application to Learn about a new country! Search by calling-code to view 5 data points per country gathered through scraping REST Countries API. Each country’s data is parsed to retrieve nested information for display using Ruby.",
            image: country_cli,
            alt: "around the world"
        }
    ]


    return(
        <>
            {projects.map(project => <ProjectCard key={project.image} project={project}/>)}
        </>
    )
}