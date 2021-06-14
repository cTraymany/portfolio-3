import './Navbar.css';
// todo: organize the css

export default function Header() {

    return (
        <header className="hero">
            <div className="hero__container">
                <h1 className="hero__primary">Chindalath Traymany</h1>
                <h2 className="hero__secondary">
                    <span>Fullstack Engineer</span>
                    {/* todo: the css for the pipe is weird, fix that */}
                    <span> | </span>
                    <span>Ruby, Rails, JavaScript, React.js</span>
                </h2>
                {/* todo: turn this upsidedown and enlarge lol */}
                <div className="hero__arrow" >^</div>
            </div>
        </header>
    )
}