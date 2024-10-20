import React, { useEffect } from "react";
import { delay, motion, useScroll, useTransform } from "framer-motion";
import "./Rstyle.css";

const ResourcesPage = () => {
  const roadmap = [
    {
      step: 1,
      title: "Understanding Web Basics",
      duration: "2 weeks",
      goal: "Learn what the web is, how it works, and fundamental concepts.",
      practice: "Read articles and watch videos about the internet.",
      resources: [
        {
          title: "What is World Wide Web (WWW)? (Article)",
          link: "https://www.geeksforgeeks.org/world-wide-web-www/",
        },
        {
          title: "What is Internet?(Article)",
          link: "https://www.geeksforgeeks.org/what-is-internet-definition-uses-working-advantages-and-disadvantages/",
        },
        {
          title: "How internet works? (YouTube)",
          link: "https://youtu.be/x3c1ih2NJEg?si=LkjH81ej7ogNrxZ6",
        },
      ],
    },
    {
      step: 2,
      title: "Learn HTML",
      duration: "2 weeks",
      goal: "Understand the structure of web pages.",
      practice: "Create simple HTML pages.",
      resources: [
        {
          title: "HTML Basics (MDN)",
          link: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics",
        },
        {
          title: "Basic HTML Course (Youtube)",
          link: "https://www.youtube.com/watch?v=4dprtEzunIk&list=PLbtI3_MArDOkNtOan8BQkG6P8wf6pNVz-",
        },
        {
          title: "HTML Course (freeCodeCamp)",
          link: "https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/",
        },
      ],
    },
    {
      step: 3,
      title: "Learn CSS",
      duration: "2 weeks",
      goal: "Style web pages using CSS.",
      practice: "Style your HTML pages.",
      resources: [
        {
          title: "CSS Basics (MDN)",
          link: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics",
        },
        {
          title: "CSS Basics (Youtube)",
          link: "https://www.youtube.com/watch?v=K1naz9wBwKU&list=PLbtI3_MArDOkNtOan8BQkG6P8wf6pNVz-&index=2",
        },
        {
          title: "CSS Course (freeCodeCamp)",
          link: "https://www.freecodecamp.org/learn/responsive-web-design/basic-css/",
        },
      ],
    },
    {
      step: 4,
      title: "Responsive Design",
      duration: "2 weeks",
      goal: "Make your web pages look good on all devices.",
      practice: "Use media queries and flexible layouts.",
      resources: [
        {
          title: "Responsive Web Design (MDN)",
          link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Responsive_design",
        },
        {
          title: "Responsive Web development(Youtube)",
          link: "https://youtu.be/HG10yrq1pbk?si=jXW3FLjtOsXvQPXj",
        },
        {
          title: "Responsive Design Course (freeCodeCamp)",
          link: "https://www.freecodecamp.org/learn/responsive-web-design/responsive-web-design-principles/",
        },
      ],
    },
    {
      step: 5,
      title: "Projects with HTML and CSS",
      duration: "2 weeks",
      goal: "Develop practical skills in HTML and CSS by creating responsive and visually appealing web projects.",
      practice:
        "Build projects like a personal portfolio, a responsive landing pages",
      resources: [
        {
          title: "Landing Page with HTML and CSS",
          link: "https://www.youtube.com/watch?v=3fxxRHV8Jfk&list=PLbtI3_MArDOnscF-pLyW8QU9oDIXBPnLo",
        },
        {
          title: "Advance Landing Page with HTML and CSS",
          link: "https://www.youtube.com/watch?v=0kWMHEOwbis",
        },
        {
          title: "Build Your Personal Portfolio Website with HTML & CSS",
          link: "https://youtube.com/playlist?list=PLXQpH_kZIxTWgPEnocGfpQo4XLrgcx63M&si=TraCvbtzTUx16qyb",
        },
      ],
    },
    {
      step: 6,
      title: "Learn JavaScript",
      duration: "4 weeks",
      goal: "Add interactivity to your web pages.",
      practice: "Build simple JavaScript applications.",
      resources: [
        {
          title: "JavaScript Basics (MDN)",
          link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps",
        },
        {
          title: "JavaScript From Basics(Youtube)",
          link: "https://youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&si=UFkgGBr0UNmgulNj",
        },
        {
          title: "JavaScript Course (freeCodeCamp)",
          link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
        },
      ],
    },
    {
      step: 7,
      title: "DOM Manipulation",
      duration: "2 weeks",
      goal: "Learn how to manipulate the Document Object Model (DOM).",
      practice: "Create dynamic content using JavaScript.",
      resources: [
        {
          title: "DOM Manipulation (MDN)",
          link: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
        },
      ],
    },
    {
      step: 8,
      title: "Version Control with Git",
      duration: "2 weeks",
      goal: "Learn how to manage code versions using Git.",
      practice: "Use Git for your projects.",
      resources: [
        {
          title: "Git Basics (Codecademy)",
          link: "https://www.codecademy.com/learn/learn-git",
        },
      ],
    },
    {
      step: 9,
      title: "Basic Project",
      duration: "4 weeks",
      goal: "Build a simple personal portfolio website.",
      practice: "Implement all learned skills.",
      resources: [
        {
          title: "Portfolio Website Tutorial (Traversy Media)",
          link: "https://www.youtube.com/watch?v=i4Zt5BaNVdA",
        },
      ],
    },
    {
      step: 10,
      title: "Introduction to Frameworks",
      duration: "4 weeks",
      goal: "Get familiar with frontend frameworks (e.g., React).",
      practice: "Build small applications.",
      resources: [
        {
          title: "React Official Documentation",
          link: "https://reactjs.org/docs/getting-started.html",
        },
        {
          title: "React Course (freeCodeCamp)",
          link: "https://www.freecodecamp.org/learn/front-end-development-libraries/#react",
        },
      ],
    },
    {
      step: 11,
      title: "Build a Comprehensive Project",
      duration: "4 weeks",
      goal: "Create a functional web application using your learned skills.",
      practice: "Work on a personal project or contribute to open-source.",
      resources: [
        {
          title: "Project Management App Tutorial (YouTube)",
          link: "https://www.youtube.com/watch?v=grmXhHhG6qg",
        },
      ],
    },
    {
      step: 12,
      title: "Portfolio Enhancement",
      duration: "Ongoing",
      goal: "Continuously update and improve your portfolio.",
      practice: "Add new projects and skills over time.",
      resources: [
        {
          title: "How to Create a Portfolio (freeCodeCamp)",
          link: "https://www.freecodecamp.org/news/how-to-create-a-personal-portfolio-website/",
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
  // Underline animation when the section is visible
  const underlineVariants = {
    hidden: { width: "0" }, // Initial width of 0
    visible: {
      width: "100%", // Expanding width to 50vw
      transition: { delay:0.5,duration: 1, ease: "easeInOut" }, // Smooth easing
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
          <h2>Instructions for Beginners</h2>
          <ol>
            <li>
              <strong>Start with the basics:</strong> Take your time to
              understand foundational concepts before moving on to more advanced
              topics. It’s okay to revisit material if needed!
            </li>
            <li>
              <strong>Practice regularly:</strong> Consistent practice will help
              reinforce what you learn. Set aside some time each day or week to
              work on exercises and projects.
            </li>
            <li>
              <strong>Utilize resources:</strong> Don’t hesitate to explore
              additional learning materials such as videos, articles, and
              forums. The more resources you engage with, the better!
            </li>
            <li>
              <strong>Join the community:</strong> Connect with fellow learners!
              Engage in discussions, ask questions, and share your insights.
              Collaboration enhances the learning experience.
            </li>
            <li>
              <strong>Have fun!</strong> Enjoy the journey of learning.
              Experiment with different projects, and remember that making
              mistakes is part of the process.
            </li>
          </ol>
        </section>
      </div>
      <div id="resources-page">
        <div id="res-title">
          <h1>Web Development Roadmap</h1>
          <motion.div
          className="underline-res"
          variants={underlineVariants} 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        ></motion.div>
        </div>
        <div id="res-card">
          {roadmap.map((item, index) => {
            const { scrollY } = useScroll();
            const y = useTransform(
              scrollY,
              [index * 440, index * 440 + 440],
              [0.8, 1]
            ); // Adjust based on item index
            const opacity = useTransform(
              scrollY,
              [index * 440, index * 440 + 440],
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
