import { ReactComponent as GithubLogo } from '../images/github.svg';

export default function ProjectCard({project}) {
    return(
        <div className="project">
            <div className="project--image">
                <img src={project.image} alt={project.alt} />
            </div>
            <div className="project--description">
                <h3>{project.title}</h3>
                <div className="u-box-shadow">
                    <p>{project.description}</p>
                    <div className="project-card-footer">
                        <ul>
                            {project.languages.map(language => 
                                <li key={`${language}${project.id}`}>{language}</li>
                            )}
                        </ul>
                        <a href={project.github} target="blank">
                            <GithubLogo />
						</a>
                    </div>
                </div>
            </div>
        </div>
    )
}