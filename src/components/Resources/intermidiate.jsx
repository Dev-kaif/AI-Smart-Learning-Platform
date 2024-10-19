import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Rstyle.css";

const ResourcesPage = () => {
  const roadmap = [
    {
      step: 1,
      title: "Deep Dive into JavaScript",
      duration: "2 weeks",
      goal: "Master advanced JavaScript concepts like closures, callbacks, and async programming.",
      practice: "Complete advanced JavaScript exercises.",
      resources: [
        {
          title: "JavaScript: The Good Parts (Book)",
          link: "https://www.oreilly.com/library/view/javascript-the-good/9780596805524/",
        },
        {
          title: "Advanced JavaScript Concepts (Udemy)",
          link: "https://www.udemy.com/course/advanced-javascript-concepts/",
        },
      ],
    },
    {
      step: 2,
      title: "Asynchronous JavaScript",
      duration: "2 weeks",
      goal: "Understand promises, async/await, and AJAX.",
      practice: "Build an application that fetches data from an API.",
      resources: [
        {
          title: "Understanding Async/Await (MDN)",
          link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await",
        },
        {
          title: "JavaScript Promises (freeCodeCamp)",
          link: "https://www.freecodecamp.org/news/javascript-promises-explained/",
        },
      ],
    },
    {
      step: 3,
      title: "Advanced CSS Techniques",
      duration: "2 weeks",
      goal: "Learn CSS Grid, Flexbox, and animations.",
      practice: "Redesign existing projects using advanced layout techniques.",
      resources: [
        {
          title: "CSS Grid Layout (MDN)",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout",
        },
        {
          title: "Flexbox Froggy (Interactive Game)",
          link: "https://flexboxfroggy.com/",
        },
      ],
    },
    {
      step: 4,
      title: "CSS Preprocessors (Sass/LESS)",
      duration: "2 weeks",
      goal: "Learn to use Sass or LESS for better CSS management.",
      practice: "Refactor your CSS projects using a preprocessor.",
      resources: [
        {
          title: "Sass Basics (Sass Official)",
          link: "https://sass-lang.com/guide",
        },
        {
          title: "Learn Sass (Codecademy)",
          link: "https://www.codecademy.com/learn/learn-sass",
        },
      ],
    },
    {
      step: 5,
      title: "Responsive Design with Frameworks",
      duration: "2 weeks",
      goal: "Use frameworks like Bootstrap or Tailwind CSS for responsive design.",
      practice: "Recreate existing websites using a CSS framework.",
      resources: [
        {
          title: "Bootstrap Documentation",
          link: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
        },
        {
          title: "Tailwind CSS Documentation",
          link: "https://tailwindcss.com/docs/installation",
        },
      ],
    },
    {
      step: 6,
      title: "Version Control with Git and GitHub",
      duration: "2 weeks",
      goal: "Advanced Git commands and collaboration using GitHub.",
      practice: "Contribute to an open-source project.",
      resources: [
        {
          title: "Pro Git Book (Book)",
          link: "https://git-scm.com/book/en/v2",
        },
        {
          title: "Git and GitHub Crash Course (YouTube)",
          link: "https://www.youtube.com/watch?v=RGOj5yH7evk",
        },
      ],
    },
    {
      step: 7,
      title: "JavaScript Frameworks (React/Vue)",
      duration: "4 weeks",
      goal: "Learn the basics of a JavaScript framework like React or Vue.",
      practice: "Build small applications using the chosen framework.",
      resources: [
        {
          title: "React Official Documentation",
          link: "https://reactjs.org/docs/getting-started.html",
        },
        {
          title: "Vue.js Guide",
          link: "https://vuejs.org/v2/guide/",
        },
      ],
    },
    {
      step: 8,
      title: "APIs and RESTful Services",
      duration: "2 weeks",
      goal: "Understand RESTful services and how to interact with APIs.",
      practice: "Build a project that consumes a public API.",
      resources: [
        {
          title: "REST API Tutorial",
          link: "https://restfulapi.net/",
        },
        {
          title: "Consuming APIs with Fetch (MDN)",
          link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data",
        },
      ],
    },
    {
      step: 9,
      title: "Testing JavaScript Applications",
      duration: "2 weeks",
      goal: "Learn about testing frameworks and libraries (e.g., Jest, Mocha).",
      practice: "Write tests for your JavaScript applications.",
      resources: [
        {
          title: "Testing JavaScript Applications (Kent C. Dodds)",
          link: "https://testingjavascript.com/",
        },
        {
          title: "Introduction to Jest (YouTube)",
          link: "https://www.youtube.com/watch?v=7r7h4Ryn1ro",
        },
      ],
    },
    {
      step: 10,
      title: "Build a Full-Stack Application",
      duration: "4 weeks",
      goal: "Create a full-stack application using a backend technology (Node.js, Express).",
      practice: "Implement user authentication and data storage.",
      resources: [
        {
          title: "Node.js Crash Course (YouTube)",
          link: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
        },
        {
          title: "Build a Full-Stack App with React and Node (YouTube)",
          link: "https://www.youtube.com/watch?v=7CqJlxBYliI",
        },
      ],
    },
    {
      step: 11,
      title: "Deployment and DevOps Basics",
      duration: "2 weeks",
      goal: "Learn to deploy applications on platforms like Heroku or Netlify.",
      practice: "Deploy your projects and understand CI/CD basics.",
      resources: [
        {
          title: "How to Deploy a React App (YouTube)",
          link: "https://www.youtube.com/watch?v=8W3g3p1q8Wk",
        },
        {
          title: "Introduction to DevOps (freeCodeCamp)",
          link: "https://www.freecodecamp.org/news/devops-explained/#what-is-devops",
        },
      ],
    },
    {
      step: 12,
      title: "Portfolio and Continuous Learning",
      duration: "Ongoing",
      goal: "Keep updating your portfolio with new projects and skills.",
      practice:
        "Engage in continuous learning through online resources and communities.",
      resources: [
        {
          title: "How to Create a Personal Portfolio (freeCodeCamp)",
          link: "https://www.freecodecamp.org/news/how-to-create-a-personal-portfolio-website/",
        },
        {
          title: "Join Online Communities (e.g., GitHub, Stack Overflow)",
          link: "https://stackoverflow.com/",
        },
      ],
    },
  ];

  const { scrollY } = useScroll();
  const res1 = {
    hidden: { opacity: 0 }, // Initial state (invisible and slightly moved up)
    visible: {
      opacity: 1, // Fully visible
      transition: { duration: 1, ease: "easeInOut" }, // Animation details
    },
  };

  return (
    <motion.div
      id="res-page"
      initial="hidden"
      animate="visible"
      variants={res1}
    >
<div className="res-guide">
  <section className="instructions">
    <h2>Instructions for Intermediate Developers</h2>
    <ol>
      <li>
        <strong>Embrace Challenges:</strong> Don't shy away from complex problems.
        Tackling difficult projects will strengthen your skills and boost your confidence!
      </li>
      <li>
        <strong>Experiment with New Technologies:</strong> Explore frameworks like React or Vue. 
        Trying new tools keeps your skills sharp and can lead to exciting opportunities!
      </li>
      <li>
        <strong>Contribute to Open Source:</strong> Join collaborative projects to learn from others 
        and share your knowledge. It’s a fantastic way to grow and connect with the community!
      </li>
      <li>
        <strong>Focus on Best Practices:</strong> Prioritize writing clean, maintainable code and 
        understanding testing frameworks. This will elevate your projects and make them stand out!
      </li>
      <li>
        <strong>Stay Curious and Keep Learning:</strong> The tech world is always evolving. 
        Keep up with the latest trends and resources—your growth mindset will open many doors!
      </li>
    </ol>
  </section>
</div>


      <div id="resources-page">
        <div id="res-title">
          <h1>Web Development Roadmap</h1>
          <div className="underline-res"></div>
        </div>
        <div id="res-card">
          {roadmap.map((item, index) => {
            const { scrollY } = useScroll();
            const y = useTransform(
              scrollY,
              [index * 380, index * 380 + 380],
              [0.8, 1]
            ); // Adjust based on item index
            const opacity = useTransform(
              scrollY,
              [index * 380, index * 380 + 380],
              [0, 1]
            );

            return (
              <motion.div
                key={item.step}
                className="roadmap-step"
                style={{
                  scale: y,
                  opacity: opacity,
                }}
                initial={{ scale: 0.8, opacity: 0 }} // Initial state
                transition={{ duration: 0.5 }} // Animation duration
              >
                <h2>
                  Step {item.step}: {item.title}
                </h2>
                <p className="duration">
                  <strong>Duration:</strong> {item.duration}
                </p>
                <p className="goal">
                  <strong>Goal:</strong> {item.goal}
                </p>
                <p className="practice">
                  <strong>Practice:</strong> {item.practice}
                </p>
                <h3>Resources:</h3>
                <ul>
                  {item.resources.map((resource, index) => (
                    <li key={index}>
                      <a
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {resource.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ResourcesPage;
