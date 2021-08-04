export default function Header() {
    // todo: this only works if user is fully at the top of page; if they click halfway down, it scrolls too much.
    const handleClick = (event) => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
          });
    }

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
                    {/* todo: width of arrow needs to be smaller because of hover */}
                <span onClick={handleClick} className="hero__arrow" >^</span>
            </div>
        </header>
    )
}