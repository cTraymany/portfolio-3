export default function Header() {
    // todo: this only works if user is fully at the top of page; if they click halfway down, it scrolls too much.
    // const handleClick = (event) => {
    //     window.scrollBy({
    //         top: window.innerHeight,
    //         behavior: 'smooth'
    //       });
    // }

    return (
        <header className="header">
            <div className="hero">
                <h1 className="hero__primary">Chindalath Traymany</h1>
                <h2 className="hero__secondary">
                    <span>Fullstack Engineer</span>
                    <span> &#124; </span>
                    <span>Ruby, Rails, JavaScript, React.js</span>
                </h2>
                {/* todo: change arrow to an icon instead of v (for screenreaders) */}
                <a href="#projects" className="hero__arrow" >&#118;</a>
            </div>
        </header>
    )
}