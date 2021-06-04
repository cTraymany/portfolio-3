import plants from '../images/plants.png'
import Projects from './Projects.js'

export default function Home() {

    return (
        <>
            <img src={plants} alt="plants" />
            <h1>Chindalath Traymany</h1>
            <h2><b>Fullstack Engineer</b>   |   Ruby, Rails, JavaScript, React.js</h2>
            {/* todo: turn this upsidedown and enlarge lol */}
            <div>^</div>
            <Projects />
        </>
    )
}