import React from "react";

function About() {
  return (
    <div className="about">
      <div className="hero about-img">
        <div className="img-text">
          <h1>Who I Am</h1>
          <p>
            Discover the story behind the words and the passion that fuels them.
          </p>
        </div>
      </div>
      <h1 className="heading">About Me</h1>
      <p>
        "Hi, I’m Suryansh Gupta, a student pursuing a degree in Artificial
        Intelligence and Machine Learning. I’m passionate about frontend
        development and building responsive web applications. This personal blog
        is part of my IBM internship project, where I share ideas, experiments,
        and learning experiences in web development."
      </p>
      <h1 className="heading">About the Blog</h1>
      <p>
        "This blog is designed as a simple, responsive platform for writers.
        Unlike traditional complex CMS platforms, it allows posts to be rendered
        dynamically from JSON or local data, making it lightweight and easy to
        manage. Here, you will find posts about technology, programming, and
        personal insights, written in a clear and approachable style."
      </p>
    </div>
  );
}

export default About;
