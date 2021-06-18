export default function ProjectCard({project}) {
    return(
        <div className="project">
            <div className="project__image">
                <img src={project.image} alt={project.alt} />
            </div>
            <div className="project__description">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
        </div>
    )
}