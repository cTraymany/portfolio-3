import { ReactComponent as GithubLogo } from '../images/github.svg';
import { ReactComponent as WebLogo } from '../images/web.svg';

export default function ProjectCard({project}) {
    return(
        <div className="project">
            <figure className="project__image">
                <img src={project.image} alt={project.alt} />
            </figure>
            <div className="project__box">
                <h3 className="project__box--title">{project.title}</h3>
                <div className="project__body">
                    <p className="project__body--description">{project.description}</p>
                    <div className="project__footer">
                        <ul className="project__footer--languages">
                            {project.languages.map(language => 
                                <li className="project__footer--language" key={`${language}${project.id}`}>{language}</li>
                            )}
                        </ul>
                        <ul className="project__footer--icons">
                            <a href={project.github} target="blank">
                                <GithubLogo />
                            </a>
                            <a href={project.website} target="blank">
                                <WebLogo />
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}