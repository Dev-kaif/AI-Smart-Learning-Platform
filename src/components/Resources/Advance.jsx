import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Rstyle.css";

const ResourcesPage = () => {
    const roadmap = [
        {
          step: 1,
          title: "Advanced JavaScript Concepts",
          duration: "2 weeks",
          goal: "Master concepts like closures, hoisting, and the event loop.",
          practice: "Solve advanced coding challenges on platforms like LeetCode or Codewars.",
          resources: [
            {
              title: "JavaScript: Understanding the Weird Parts (Udemy)",
              link: "https://www.udemy.com/course/understand-javascript/",
            },
            {
              title: "You Don’t Know JS (Book Series)",
              link: "https://github.com/getify/You-Dont-Know-JS",
            },
          ],
        },
        {
          step: 2,
          title: "TypeScript",
          duration: "2 weeks",
          goal: "Learn TypeScript to enhance JavaScript development.",
          practice: "Convert existing JavaScript projects to TypeScript.",
          resources: [
            {
              title: "TypeScript Official Documentation",
              link: "https://www.typescriptlang.org/docs/",
            },
            {
              title: "TypeScript for Beginners (YouTube)",
              link: "https://www.youtube.com/watch?v=BCg4U1FzODs",
            },
          ],
        },
        {
          step: 3,
          title: "Frontend Frameworks Deep Dive",
          duration: "4 weeks",
          goal: "Gain in-depth knowledge of a frontend framework (e.g., React, Angular, Vue).",
          practice: "Build complex applications with state management (Redux, Vuex).",
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
          step: 4,
          title: "State Management",
          duration: "2 weeks",
          goal: "Understand state management techniques in applications.",
          practice: "Implement state management in your applications.",
          resources: [
            {
              title: "Redux Documentation",
              link: "https://redux.js.org/introduction/getting-started",
            },
            {
              title: "Vuex Documentation",
              link: "https://vuex.vuejs.org/",
            },
          ],
        },
        {
          step: 5,
          title: "Backend Development Basics",
          duration: "4 weeks",
          goal: "Learn backend technologies (Node.js, Express.js, or any other).",
          practice: "Build a RESTful API.",
          resources: [
            {
              title: "Node.js Official Documentation",
              link: "https://nodejs.org/en/docs/",
            },
            {
              title: "Express.js Guide",
              link: "https://expressjs.com/en/starter/installing.html",
            },
          ],
        },
        {
          step: 6,
          title: "Database Management",
          duration: "2 weeks",
          goal: "Understand SQL and NoSQL databases.",
          practice: "Implement CRUD operations with databases.",
          resources: [
            {
              title: "MongoDB University Free Courses",
              link: "https://university.mongodb.com/",
            },
            {
              title: "SQL Tutorial (W3Schools)",
              link: "https://www.w3schools.com/sql/",
            },
          ],
        },
        {
          step: 7,
          title: "RESTful API Development",
          duration: "3 weeks",
          goal: "Learn how to design and develop RESTful APIs.",
          practice: "Build a complete REST API with authentication.",
          resources: [
            {
              title: "Designing RESTful APIs (YouTube)",
              link: "https://www.youtube.com/watch?v=0sP0bV1rY-M",
            },
          ],
        },
        {
          step: 8,
          title: "Authentication & Authorization",
          duration: "2 weeks",
          goal: "Implement authentication strategies (JWT, OAuth).",
          practice: "Add authentication to your applications.",
          resources: [
            {
              title: "JWT Introduction (YouTube)",
              link: "https://www.youtube.com/watch?v=7Q17ubqLfaM",
            },
          ],
        },
        {
          step: 9,
          title: "Testing and Debugging",
          duration: "2 weeks",
          goal: "Learn testing frameworks and debugging techniques.",
          practice: "Write unit tests and integration tests for your applications.",
          resources: [
            {
              title: "Testing JavaScript Applications (YouTube)",
              link: "https://www.youtube.com/watch?v=Qz5i1GScN0A",
            },
            {
              title: "Jest Documentation",
              link: "https://jestjs.io/docs/getting-started",
            },
          ],
        },
        {
          step: 10,
          title: "DevOps Basics",
          duration: "3 weeks",
          goal: "Understand CI/CD pipelines and deployment strategies.",
          practice: "Deploy applications using platforms like Heroku or Vercel.",
          resources: [
            {
              title: "CI/CD with GitHub Actions (YouTube)",
              link: "https://www.youtube.com/watch?v=1qC-6kV4Zjo",
            },
          ],
        },
        {
          step: 11,
          title: "Progressive Web Apps (PWAs)",
          duration: "3 weeks",
          goal: "Learn how to create Progressive Web Apps.",
          practice: "Build a PWA with offline capabilities.",
          resources: [
            {
              title: "Progressive Web Apps (Google Developers)",
              link: "https://developers.google.com/web/progressive-web-apps",
            },
          ],
        },
        {
          step: 12,
          title: "Portfolio Project",
          duration: "4 weeks",
          goal: "Develop a comprehensive project to showcase your skills.",
          practice: "Create a full-stack application and host it.",
          resources: [
            {
              title: "Build a Full-Stack App (YouTube)",
              link: "https://www.youtube.com/watch?v=2u5b9ItlR4A",
            },
          ],
        },
        {
          step: 13,
          title: "Continuous Learning and Community Engagement",
          duration: "Ongoing",
          goal: "Stay updated with the latest trends and technologies.",
          practice: "Contribute to open source and attend meetups.",
          resources: [
            {
              title: "GitHub Open Source Projects",
              link: "https://github.com/explore",
            },
            {
              title: "Join Online Coding Communities",
              link: "https://www.reddit.com/r/webdev/",
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
    <h2>Instructions for Advanced Developers</h2>
    <ol>
      <li>
        <strong>Challenge Yourself:</strong> Embrace complex projects that push your limits. 
        Engaging with challenging tasks will enhance your skills and build resilience!
      </li>
      <li>
        <strong>Master New Frameworks:</strong> Delve into advanced features of frameworks like React or Angular. 
        Staying ahead of the curve opens up exciting career prospects!
      </li>
      <li>
        <strong>Mentor Others:</strong> Share your knowledge by teaching or mentoring junior developers. 
        This solidifies your understanding and enhances communication skills!
      </li>
      <li>
        <strong>Enhance Your Testing Skills:</strong> Focus on mastering unit tests and debugging techniques. 
        A solid testing strategy ensures robust and maintainable applications!
      </li>
      <li>
        <strong>Engage in Continuous Learning:</strong> Stay updated with the latest industry trends and technologies. 
        Attend webinars and read blogs to keep at the forefront of innovation!
      </li>
      <li>
        <strong>Contribute to Open Source:</strong> Get involved in the open-source community. 
        Collaborating with diverse teams broadens your perspective and fosters growth!
      </li>
      <li>
        <strong>Network with Professionals:</strong> Attend industry meetups and conferences to connect with like-minded professionals. 
        Networking can lead to collaborations and job opportunities!
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
