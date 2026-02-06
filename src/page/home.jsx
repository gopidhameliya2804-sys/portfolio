import React from 'react'

function home() {
  return (
    <div>
      {/* header section start */}
      <header>
        <div className="header-section d-flex max-width">
          <div className="header-content">
            <h3>Hii, I am</h3>
            <h1>Gopi Dhameliya</h1>
            <p>
              A Sydney based full stack developer passionate about building
              accessible and user friendly websites.
            </p>
            <div className="header-icons d-flex btn">
              <div className="header-icon">
                <a href="">
                  <span className="fa fa-at"></span>
                </a>
              </div>
              <div className="header-icon">
                <a href="">
                  <span className="fa fa-linkedin"></span>
                </a>
              </div>
              <div className="header-icon">
                <a href="">
                  <span className="fa fa-github"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="header-img" style={{ textAlign: "center" }}>
            <img src="images/Gopi2.jpeg" alt="" />
          </div>
        </div>
      </header>
      <div className="border1"></div>
      {/* header section ends */}

      {/* blockquote section start */}
      <section className="blockquote">
        <div className="blockquote-heading max-width">
          <h2>FEATURED PROJECTS</h2>
          <p>
            Here are some of the selected projects that showcase my passion for{" "}
            <br /> full stack development.
          </p>
        </div>

        <div className="blockquote-content max-width">
          <div className="blocks d-flex ">
            <div className="block-img ">
              <a href="https://allrecipes.onrender.com">
                <img src="images/recipes_ss.png" alt="" />{" "}
              </a>
            </div>
            <div className="block-content ">
              <h2>Kocina – Easy Recipes for Everyone</h2>
              <p className="para">
                Kocina is a user-friendly recipe browsing website built with a
                modern UI layout. The homepage includes a hero banner, a global
                search bar, sorting options, and high-quality recipe cards.
                Users can filter by cuisine type, check ratings, and explore
                food categories. The project focuses on clean design, responsive
                layout, and accessibility.
              </p>
              <h6>PROJECT INFO</h6>
              <hr />
              <div className="project-time d-flex">
                <p>year</p>
                <span>2025</span>
              </div>
              <hr />
              <div className="project-role d-flex">
                <p>Role</p>
                <span>Front-end Developer</span>
              </div>
              <hr />
              <div className="project-role d-flex">
                <p>Technologies</p>
                <span>React.js | JavaScript | CSS | Bootstrap | HTML</span>
              </div>
              <hr />
              <div className="links d-flex">
                <a href="https://allrecipes.onrender.com">
                  LIVE DEMO <span className="fa fa-arrow-up"></span>
                </a>
                <a href="https://github.com/gopidhameliya2804-sys/AllRecipes">
                  SEE ON GITHUB <span className="fa fa-github"></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="blockquote-content max-width">
          <div className="blocks d-flex blocks-revese">
            <div className="block-content ">
              <h2>Vivid - Anime & Manga Discovery Platform</h2>
              <p className="para">
                A lightweight and user-friendly platform for discovering anime
                and manga. It includes genre filters, search functionality, and
                a featured banner for trending shows.
              </p>
              <h6>PROJECT INFO</h6>
              <hr />
              <div className="project-time d-flex">
                <p>year</p>
                <span>2025</span>
              </div>
              <hr />
              <div className="project-role d-flex">
                <p>Roles</p>
                <span>Front-end Developer</span>
              </div>
              <hr />
              <div className="project-role d-flex">
                <p>Technologies</p>
                <span>React.js | JavaScript | CSS | Bootstrap | HTML</span>
              </div>
              <hr />
              <div className="links d-flex">
                <a href=" https://animemanga-kfv0.onrender.com">
                  LIVE DEMO <span className="fa fa-arrow-up"></span>
                </a>
                <a href="https://github.com/gopidhameliya2804-sys/AnimeManga">
                  SEE ON GITHUB <span className="fa fa-github"></span>
                </a>
              </div>
            </div>
            <div className="block-img ">
              <a href="https://animemanga-kfv0.onrender.com">
                <img src="images/anime.png" alt="" />{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="blockquote-content max-width">
          <div className="blocks d-flex">
            <div className="block-img">
              <a href="https://gymexercises.onrender.com">
                <img src="images/exercises.png" alt="" />{" "}
              </a>
            </div>
            <div className="block-content">
              <h2>Zacson Fitness – Gym Exercise Guide</h2>
              <p className="para">
                A modern and interactive exercise website that showcases various
                workout routines, fitness categories, and proper training
                techniques. This project highlights my skills in UI design,
                responsive layout, and dynamic content organization. The website
                helps users find exercises easily, follow guided workouts, and
                stay motivated on their fitness journey.
              </p>
              <h6>PROJECT INFO</h6>
              <hr />
              <div className="project-time d-flex">
                <p>year</p>
                <span>2025</span>
              </div>
              <hr />
              <div className="project-role d-flex">
                <p>React Projetcs</p>
                <span>Front-end Developer</span>
              </div>
              <hr />
              <div className="project-role d-flex">
                <p>Technologies</p>
                <span>React.js | JavaScript | CSS | Bootstrap | HTML</span>
              </div>
              <hr />
              <div className="links d-flex">
                <a href="https://gymexercises.onrender.com">
                  LIVE DEMO <span className="fa fa-arrow-up"></span>
                </a>
                <a href="https://github.com/gopidhameliya2804-sys/GYMExercises">
                  SEE ON GITHUB <span className="fa fa-github"></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="blockquote-content max-width">
          <div className="blocks d-flex blocks-revese">
            <div className="block-content">
              <h2>NewsViral - Breaking News Hub</h2>
              <p className="para">
                NewsViral is a fully responsive and user-friendly news portal
                built with a modern UI layout. The application organizes news
                into categories, highlights the latest posts with images and
                timestamps, and showcases trending articles in a compact sidebar
                layout. It includes a search system, category navigation, and a
                clean card-based design to enhance readability and
                accessibility. The layout is optimized for both desktop and
                mobile devices.
              </p>
              <h6>PROJECT INFO</h6>
              <hr />
              <div className="project-time d-flex">
                <p>year</p>
                <span>2025</span>
              </div>
              <hr />
              <div className="project-role d-flex">
                <p>Role</p>
                <span>Front-end Developer</span>
              </div>
              <hr />
              <div className="project-role d-flex">
                <p>Technologies</p>
                <span>React.js | JavaScript | CSS | Bootstrap | HTML</span>
              </div>
              <hr />
              <div className="links d-flex">
                <a href="https://trendingnews-cakn.onrender.com">
                  LIVE DEMO <span className="fa fa-arrow-up"></span>
                </a>
                <a href="https://github.com/gopidhameliya2804-sys/TrendingNews">
                  SEE ON GITHUB <span className="fa fa-github"></span>
                </a>
              </div>
            </div>
            <div className="block-img">
              <a href="https://trendingnews-cakn.onrender.com">
                <img src="images/news1.png" alt="" />{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="borders"></div>
      {/* blockquote section ends */}

      {/* about section start */}
      <section className="about-section max-width d-flex">
        <div className="about">
          <h1>ABOUT ME</h1>
        </div>
        <div className="about-content">
          <h6>
            I am a full stack developer based in Sydney. Has computer science
            background.
          </h6>
          <p>
            {/* I am a full stack developer based in Sydney looking for exciting
            opportunities. Has computer science background. Likes to focus on
            accessibility when developing. Passionate and curious about solving
            problems. Currently, I'm exploring Reactjs, Webflow and a bit of
            designing. While I am not programming, I enjoy drawing sketches.
            Learning more to improve skill. */}
            I am a passionate Full-Stack Developer with hands-on experience in
            building responsive and scalable web applications using the MERN
            stack.
            <br />I enjoy solving problems, learning new technologies, and
            writing clean, maintainable code. Currently, I am looking for a
            junior full-stack or frontend developer role where I can grow and
            contribute to impactful projects.
          </p>
          <a href="#">MORE ABOUT ME</a>
        </div>
      </section>
      <div className="borders"></div>
      {/* about section ends */}

      {/* skill section start */}
      <section className="skill-section max-width">
        <div className="title">
          <h1 className="H1">FULL STACK SKILLS</h1>
        </div>

        <div className="skills d-flex">
          <div className="skill animate-skill">
            <div>
              <span className="fa fa-code"></span>
            </div>
            <div>
              <h4>Frontend Development</h4>
              <p>HTML5, CSS3, JavaScript (ES6+), React.js, React Router , Axios, Responsive UI</p>
            </div>
          </div>

          <div className="skill animate-skill">
            <div>
              <span className="fa fa-database"></span>
            </div>
            <div>
              <h4>Backend Development</h4>
              <p>Node.js, Express, MongoDB, REST APIs</p>
            </div>
          </div>

          <div className="skill animate-skill">
            <div>
              <span className="fa fa-server"></span>
            </div>
            <div>
              <h4>Deployment & Tools</h4>
              <p>Git & GitHub ,VS Code</p>
            </div>
          </div>
        </div>
      </section>

      <div className="borders"></div>
      {/* skill section end */}

      {/* contact section start */}
      <section className="contact-section max-width d-flex">
        <div className="contact">
          <h1>LET&apos;S CONNECT !</h1>
          {/* <img style={{ width: "50px", height: "50px" }} /> */}
          <div className="p1">
            <p>
              Got a project in mind, or want to collaborate on something
              awesome? OR{" "}
            </p>
            <p>
              Interested in working together or have a question? Let&apos;s
              connect!
            </p>
            <p>
              Say Hello at{" "}
              <a href="mailto:gopidhameliya2804@gmail.com">
                gopidhameliya2804@gmail.com
              </a>
            </p>
            <p>
              For more info, here my <a href="#">Resume</a>
            </p>
          </div>
        </div>
        <form>
          <div className="d-flex form-content">
            <div className="form-group">
              <input type="text" name="name" placeholder="Fisrt name" />
            </div>
            <div className="form-group">
              <input type="text" name="name" placeholder="Last name" />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="text" name="name" placeholder="Phone" />
            </div>
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
            ></textarea>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
      <div className="borders"></div>
      {/* contact section ends */}

    </div>
  )
}

export default home
