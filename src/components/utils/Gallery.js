import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";

const html = <i className="fa-brands fa-html5"></i>;
const css = <i className="fa-brands fa-css3-alt"></i>;
const js = <i className="fa-brands fa-js"></i>;
const react = <i className="fa-brands fa-react"></i>;
const sass = <i className="fa-brands fa-sass"></i>;
const node = <i className="fa-brands fa-node"></i>;
const btsrp = <i className="fa-brands fa-bootstrap"></i>;
const wordpress = <i className="fa-brands fa-wordpress"></i>;
const ts = <SiTypescript />;
const tlwnd = <SiTailwindcss />;
const express = <SiExpress />;
const mongoDb = <SiMongodb />;

const gallery = {
  projects: [
    {
      id: 2023,
      name: "r-magazine",
      image: require("../../images/r-magazine.png"),
      stack: [html, css, js, ts, tlwnd, react],
      reveal: "fade-right",
      link: "https://r-magazine-recruit.netlify.app/‹",
      github_url: "https://github.com/F-Hamid/",
      description:
        "Stylish attractive website for art magazine in Montreal. Canada, with several pages and useful functionalities for recruitment and contacts",
    },
    {
      id: 1,
      name: "Tattoo Artist",
      image: require("../../images/mexihenna.png"),
      stack: [html, css, js, tlwnd, react],
      reveal: "fade-right",
      link: "https://mexihenna.netlify.app/",
      github_url: "https://github.com/F-Hamid/",
      description:
        "Modern and styled website for the best Tattoo Artist in Denver Co.",
    },

    {
      id: 2,
      name: "Architecture and interior design ",
      image: require("../../images/architecht.png"),
      stack: [html, css, sass, btsrp, js],
      reveal: "fade-left",
      link: "https://architect-interior-design.netlify.app/",
      github_url: "https://github.com/F-Hamid/Architecture-Interior-Website",
      description:
        "A styled and responsive website for a Architecture and interior design agency.",
    },

    {
      id: 6,
      name: "Pedromedia",
      image: require("../../images/pedromedia.png"),
      stack: [html, css, sass, btsrp, js],
      reveal: "fade-right",
      link: "https://pedromedia.netlify.app",
      github_url: "https://github.com/F-Hamid/Pedromedia",
      description:
        "A styled and responsive website with services and contact information for a photographer startup.",
    },
    {
      id: 12,
      name: "QR-Code Generator",
      image: require("../../images/qrcode.png"),
      stack: [html, css, js],
      reveal: "fade-left",
      link: "  https://qr-gnerator.netlify.app/",
      github_url: "https://github.com/F-Hamid/QR-Generator",
      description: "Simple modern design QR code generator",
    },

    {
      id: 5,
      name: "Budget App ",
      image: require("../../images/budgetapp.png"),
      stack: [html, css, sass, btsrp, js, react],
      reveal: "fade-right",
      link: "https://budgetspa.netlify.app",
      github_url: "https://github.com/F-Hamid/Budget-App",
      description:
        "Single page application for managing and keeping track of your budget.",
    },

    {
      id: 19,
      name: "Github Users Search",
      image: require("../../images/githubSearch2.png"),
      stack: [html, sass, js, react, node, express, mongoDb],
      reveal: "fade-left",
      link: "https://gitsearch-hub.netlify.app",
      github_url: "https://github.com/F-Hamid/GitHub-Users-Search",
      description:
        "Web page application for searching users and their stats on github : Repos, Followers, skills,... .",
    },

    {
      id: 7,
      name: "Quote or joke",
      image: require("../../images/quoteorjoke.png"),
      stack: [html, css, js],
      reveal: "fade-right",
      link: "https://quote-jocke.netlify.app/",
      github_url: "https://github.com/F-Hamid/Quote-or-Joke",
      description:
        "Useful and entertaining website with wisdom quotes and funny jokes generated by two separate online APIs on one click.",
    },

    {
      id: 20,
      name: "Jewelry Store",
      image: require("../../images/beads-2.jpg"),
      stack: [wordpress],
      reveal: "fade-left",
      link: "http://1948beads.com/",
      github_url: "",
      description:
        "I provided my client with this pixel perfect website that gathers all his products, gallery information, and professional work. ",
    },
  ],
  allProjects: [
    {
      id: 9,
      name: "Coin Toss ",
      image: require("../../images/cointoss.png"),
      stack: [html, css, js],
      reveal: "fade-right",
      link: "https://cointoss-app.netlify.app",
      github_url: "https://github.com/F-Hamid/coin-toss",
      description: "Coin Toss game : SPA logic/js practice.",
    },
    {
      id: 3,
      name: "Weather App ",
      image: require("../../images/weatherApp.png"),
      stack: [html, css, sass, btsrp, js, react],
      reveal: "fade-left",
      link: "https://spa-weather.netlify.app",
      github_url: "https://github.com/F-Hamid/Weather-app",
      description:
        "Live Weather infos based on location: single page Application.",
    },
    {
      id: 18,
      name: "Cabinet Dentiste Al Jazeera ",
      image: require("../../images/jazeera.png"),
      stack: [html, css, sass, js],
      reveal: "fade-right",
      link: "https://cabinetaljazeera.netlify.app/",
      github_url: "https://github.com/F-Hamid/Cabinet-Aljazeera",
      description:
        "Beautiful glass styled website for a local dentist with services and contact information.",
    },

    {
      id: 4,
      name: "SimoSud Website ",
      image: require("../../images/sumosud.png"),
      stack: [html, css, sass, js, react],
      reveal: "fade-left",
      link: "https://simosud.netlify.app",
      github_url: "https://github.com/F-Hamid/SimoSud",
      description:
        "A styled and responsive website with services and contact information for fishing and touristic rental agency.",
    },
    {
      id: 13,
      name: "Scientist Portfolio",
      image: require("../../images/heroSection.png"),
      stack: [html, js, tlwnd, react],
      reveal: "fade-right",
      link: "https://tallouanas.netlify.app/",
      github_url: "",
      description:
        "I provided my client with this pixel perfect website that gathers all his information, work, and professional skills. ",
    },
    {
      id: 0,
      name: "Skill Up",
      image: require("../../images/skillup-chart.png"),
      stack: [html, css, sass, js, react, node, express, mongoDb],
      reveal: "fade-left",
      link: "https://skill-up-webapp.herokuapp.com/",
      github_url: "https://github.com/F-Hamid/SKILLUP",
      description:
        "A big scale project that manage and track the learning path and skills added by the user and help store the data of each skill.",
    },
    {
      id: 11,
      name: "ToDo App ",
      image: require("../../images/todo.png"),
      stack: [html, css, react, js],
      reveal: "fade-right",
      link: "https://spatodo.netlify.app",
      github_url: "https://github.com/F-Hamid/react-Todo-App",
      description:
        "A styled and responsive web App for managing and keeping track of your work.",
    },
    {
      id: 10,
      name: "Calculator ",
      image: require("../../images/calculator.png"),
      stack: [html, css, js],
      reveal: "fade-left",
      link: "https://spacalculator.netlify.app",
      github_url: "https://github.com/F-Hamid/Caclulator",
      description: "Efficient calculator using minium code.",
    },
    {
      id: 8,
      name: "Counter",
      image: require("../../images/counter.png"),
      stack: [html, css, sass, js, react],
      reveal: "fade-right",
      link: "https://counter-spa.netlify.app",
      github_url: "https://github.com/F-Hamid/react-counter",
      description: "Counter: SPA logic/js/react practice.",
    },
  ],
};

export default gallery;
