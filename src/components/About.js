import about_me from '../images/about_me.png'

export default function About() {
    return (
        <main className="about">
            <figure className="about__image">
                <img src={about_me} alt="Chindalath and her cat" />
            </figure>
            <div className="about__text">
                <h1 className="about__text--primary">Hi! I'm Chindalath :)</h1>
                <p className="about__text--secondary">I am a Laotian-American woman, a software developer, and a lifelong learner.</p><br />
                <p className="about__text--secondary">I have a background in retail and food service management as well as healthcare administration. Being surrounded by the infinitely expanding tech scene, San Francisco played a role in my decision to transition to software engineering to pursue my passion for mentally stimulating and complex problem-solving.</p><br />
                <p className="about__text--secondary">I am a graduate of Flatiron School where I studied JavaScript, Ruby, HTML, CSS, RESTful APIs, software design patterns such as MVC, and a myriad of libraries and frameworks including Rails, Sinatra, React, and Redux. I like to build on my technical knowledge and dip my toes in several other learning opportunities that are available to me through the vast free resources of the internet.</p><br />
                <p className="about__text--secondary">I chose to become a software developer, and with this choice, I am more excited for the future than ever.</p><br />
            </div>
        </main>
    )
}