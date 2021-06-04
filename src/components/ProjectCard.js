export default function ProjectCard({project}) {
    return(
        <>
            <img src={project.image} alt={project.alt} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
        </>
    )
}