import about_me from '../images/about_me.png'

export default function About() {
    return (
        <div className="about">
            <div className="about--image">
                <img src={about_me} alt="Chindalath and her cat" />
            </div>
            <div className="about--text">
                <h1>Hi! I'm Chindalath :)</h1>
                <p>I am a Laotian-American woman, a software developer, and a lifelong learner.</p><br />
                <p>I have a background in retail and food service management as well as healthcare administration. Being surrounded by the infinitely expanding tech scene, San Francisco played a role in my decision to transition to software engineering to pursue my passion for mentally stimulating and complex problem-solving.</p><br />
                <p>I am a graduate of Flatiron School where I studied JavaScript, Ruby, HTML, CSS, RESTful APIs, software design patterns such as MVC, and a myriad of libraries and frameworks including Rails, Sinatra, React, and Redux. I like to build on my technical knowledge and dip my toes in several other learning opportunities that are available to me through the vast free resources of the internet.</p><br />
                <p>I chose to become a software developer, and with this choice, I am more excited for the future than ever.</p><br />
            </div>
        </div>
    )
}