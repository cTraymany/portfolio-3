export default function ProjectCard({project}) {
    return(
        <>
            <img height="476" width="670" src={project.image} alt={project.alt} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </>
    )
}