import plants from '../images/plants.png'
import Projects from './Projects.js'

export default function Home() {

    return (
        <div className="hero">
            <div className="hero__container">
                <img className="hero__image" src={plants} alt="plants" />
                <h1 className="hero__title">Chindalath Traymany</h1>
                <h2 className="hero__subtitle"><b>Fullstack Engineer</b>   |   Ruby, Rails, JavaScript, React.js</h2>
                {/* todo: turn this upsidedown and enlarge lol */}
                <div>^</div>
                <Projects />
            </div>
        </div>
    )
}