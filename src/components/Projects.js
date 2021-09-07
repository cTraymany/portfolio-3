import ProjectCard from './ProjectCard'
// import natours from '../images/natours.png'
import tours from '../images/tours.png'
import problem_solver from '../images/problem_solver.png'
import social_media_distancing from '../images/social_media_distancing.png'

export default function Projects() {

    const projects = [
        {
            title: "Problem Solver",
            description: "Problem Solver has a custom API containing user-submitted problems and solutions. The API is generated with the Fast JSON gem to accelerate serialization. The JavaScript frontend creates and displays the application in a single, dynamic page, and communicates with the Rails backend models and controllers to parse and validate problem/solution objects.",
            image: problem_solver,
            alt: "problem solver",
            languages: ["Node", "Rails", "Sass"],
            github: "https://github.com/cTraymany/js-problem-solver",
            website: ""
        },{
            title: "Social Media Distancing",
            description: "This Ruby on Rails web app allows users to break unhealthy social media habits through creating goals that focus on themselves. Register safely with Bcrypt encrypted passwords and start journaling your aspirations! Or sign in with your Google account for a faster experience provided by omniauth. Journeys and goals are stored in a SQLite3 database.",
            image: social_media_distancing,
            alt: "social media distancing",
            languages: ["Rails", "SQLite3", "CSS"],
            github: "https://github.com/cTraymany/Rails-Social-Media-Distancing",
            website: ""
        },{
            title: "Natours",
            description: "Following the designs of one of Udemy's top 10 instructors, Natours utilizes vanilla HTML and Sass to build an interface for a fictional tour guide company. Natours is a fully responsive website, using advanced query selectors, and displaying progressive CSS properties such as animation, shape-outside, and backdrop-filter.",
            image: tours,
            alt: "Natours",
            languages: ["HTML", "Sass"],
            github: "https://github.com/cTraymany/Natours",
            website: "https://natours-c2049.web.app/"
        }
    ]


    return(
        <div className="projects__container" id="projects">
            {projects.map(project => <ProjectCard key={project.image} project={project}/>)}
        </div>
    )
}