import React from "react";
import "./../sass/pages/projects.scss";

const Projects = () => {
  const store = [
    {
      id: 5,
      name: "Pedromedia",
      image: require("./../images/pedromedia.png"),
      reveal: "",
      link: "https://pedromedia.netlify.app",
      github_url: "https://github.com/F-Hamid/Pedromedia",
      description:
        "A styled and responsive website with services and contact information for a professional photographer.",
    },
    {
      id: 1,
      name: "Tattoo Artist",
      image: require("./../images/mexihenna.png"),
      reveal: "",
      link: "https://mexihenna.netlify.app/",
      github_url: "https://github.com/F-Hamid/",
      description:
        "Modern and styled website for the best Tattoo Artist in Denver Co.",
    },

    {
      id: 0,
      name: "Skill Up",
      image: require("./../images/skillup-chart.png"),
      reveal: "reveal",
      link: "https://skill-up-webapp.herokuapp.com/",
      github_url: "https://github.com/F-Hamid/SKILLUP",
      description:
        "A big scale project that manage and track the learning path and skills added by the user and store the data of each skill.",
    },

    {
      id: 2,
      name: "Architecture and interior design ",
      image: require("./../images/architecht.png"),
      reveal: "reveal",
      link: "https://architect-interior-design.netlify.app/",
      github_url: "https://github.com/F-Hamid/Architecture-Interior-Website",
      description:
        "A styled and responsive web SPA for a Architecture and interior design agency.",
    },

    {
      id: 3,
      name: "Budget App ",
      image: require("./../images/budgetapp.png"),
      reveal: "reveal",
      link: "https://budgetspa.netlify.app",
      github_url: "https://github.com/F-Hamid/Budget-App",
      description:
        "Single web page application for managing and keeping track of your budget.",
    },

    {
      id: 4,
      name: "Quote or joke",
      image: require("./../images/quoteorjoke.png"),
      reveal: "reveal",
      link: "https://quote-jocke.netlify.app/",
      github_url: "https://github.com/F-Hamid/Quote-or-Joke",
      description:
        "Single page application for some  wisdom quotes and funny jokes generated by two separate online APIs on one click.",
    },
  ];

  return (
    <>
      <section className="projects" id="projects">
        <div className="header ">
          <h1 className="header-heading">Projects</h1>
          <hr className="header-bar" />
          <p className="header-text">
            My work involves real life websites, various skills and problem
            solving. To explore even more, check out the links below.
          </p>
        </div>
        <main className="projects-main">
          {store.map(
            ({ description, id, github_url, name, link, image, reveal }) => {
              return (
                <div
                  key={id}
                  className={`projects-box projects-box_${id} 
                  ${reveal}`}
                >
                  <div className="card-text">
                    <h1 className="card-text_heading">{name} </h1>
                    <p className="card-text_p">{description}</p>
                  </div>
                  <img className="projects-box-img" src={image} alt="Github" />

                  <div className="projects-box_after">
                    <a href={link} target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-chrome"></i>
                    </a>
                    <a href={github_url} target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-github-alt"></i>
                    </a>
                  </div>
                </div>
              );
            }
          )}
          <img
            className="tech-img-contact tech-img-contact-8 reverse"
            src={require("./../images/tech1.png")}
            alt="html5 "
          />
          <img
            className="tech-img-contact tech-img-contact-9"
            src={require("./../images/tech11.png")}
            alt="css3 "
          />
          <img
            className="tech-img-contact tech-img-contact-11"
            src={require("./../images/tech10.png")}
            alt="javascript "
          />
          <img
            className="tech-img-contact tech-img-contact-13"
            src={require("./../images/tech16.png")}
            alt="react "
          />

          <img
            className="tech-img-contact tech-img-contact-19 reverse "
            src={require("./../images/tech19.png")}
            alt="figma "
          />
          <img
            className="tech-img-contact tech-img-contact-7 reverse "
            src={require("./../images/tech6.png")}
            alt="redux "
          />
          <img
            className="tech-img-contact tech-img-contact-6 reverse"
            src={require("./../images/tech7.png")}
            alt="bootstrap "
          />
          <img
            className="tech-img-contact tech-img-contact-5"
            src={require("./../images/tech8.png")}
            alt="sass "
          />
          <img
            className="tech-img-contact tech-img-contact-4"
            src={require("./../images/tech9.png")}
            alt="jquery "
          />
          <img
            className="tech-img-contact tech-img-contact-12 reverse"
            src={require("./../images/tech5.png")}
            alt="git "
          />

          <img
            className="tech-img-contact tech-img-contact-14 reverse"
            src={require("./../images/tech15.png")}
            alt="chrome "
          />
          <img
            className="tech-img-contact tech-img-contact-15 "
            src={require("./../images/tech22.png")}
            alt="chrome "
          />
          <img
            className="tech-img-contact tech-img-contact-16 reverse"
            src={require("./../images/tech25.png")}
            alt="chrome "
          />
          <img
            className="tech-img-contact tech-img-contact-17 "
            src={require("./../images/tech23.png")}
            alt="chrome "
          />
          <img
            className="tech-img-contact tech-img-contact-18 reverse"
            src={require("./../images/tech24.png")}
            alt="chrome "
          />
          <a className=" reveal more" href="/projects">
            <img
              className="more-img"
              src={require("./../images/cube1.png")}
              alt="cube2"
            />
            <h1 className="more-text">Explore More...</h1>
          </a>
        </main>
      </section>
    </>
  );
};

export default Projects;
