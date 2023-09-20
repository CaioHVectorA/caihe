//pegar icones do https://www.svgviewer.dev/s/480740/nextjs
// "excel","express","javascript","jest","mongoDB","nextJS","node","prisma","react","SQLite","styled-components","tailwind","typescript"
function getIcons(icons) {
    const iconElements = icons.map(item => `<img title="${item}" alt="${item}" class="w-6" src="./assets/icons/${item}.svg">`);
    return `<div class=" flex gap-3 mt-4">${iconElements.join('')}</div>`;
}

const TECH = {
    EXCEL: "excel",
    EXPRESS: "express",
    JAVASCRIPT: "javascript",
    JEST: "jest",
    MONGODB: "mongoDB",
    NEXTJS: "nextJS",
    NODE: "node",
    PRISMA: "prisma",
    REACT: "react",
    SQLITE: "SQLite",
    STYLED_COMPONENTS: "styled-components",
    TAILWIND: "tailwind",
    TYPESCRIPT: "typescript",
    IONIC: 'ionic',
    WEBSOCKET: 'websocket'
  };

  const proj = [
    {
        title: 'UVContos',
        body: 'Olá! Tenho 17 anos e sou obcecado ter ideias e resolver problemas a partir delas. Costumo estudar diferentes tecnologias para descobrir as mais diferentes formas de resolver esses problemas, e acredito que a mais notável das minhas habilidades é a capacidade de se adaptar, seguido da capacidade de ter as ideias, dissertas sobre, e sempre ver pelos dois lados da moeda.',
        icons: [TECH.REACT,TECH.NEXTJS,TECH.NODE,TECH.EXPRESS,TECH.TYPESCRIPT,TECH.TAILWIND,TECH.PRISMA,TECH.SQLITE],
        hrefGithub: "https://github.com/CaioHVectorA/UVC-3.0",
        hrefWeb: "https://uvcontos.vercel.app",
        mainIMG: "uvcontos",
    },
    {
        title: 'NaveApp',
        body: 'Um aplicativo designado para ser utilizado no colégio NAVE, facilitando as relação entre a direção, os professores e os alunos, disponibilizando dados, horários, avisos, e muitas outras funções.',
        icons: [TECH.REACT,TECH.TYPESCRIPT,TECH.IONIC,TECH.TAILWIND,TECH.NODE,TECH.EXPRESS,TECH.PRISMA,TECH.SQLITE],
        hrefGithub: "https://github.com/CaioHVectorA/b612_ionic",
        hrefWeb: "https://naveapp.netlify.app",
        mainIMG: "naveapp",
    },

  ]
  const otherProj = [
    {
      title: 'Sinner Castle',
      body: 'Um jogo 2D feito na engine ct.js. Sendo o meu primeiro contato(inesperado) com a programação, esse projeto me introduziu a lógica de algoritmos, além de um pouco de tipos de dados em JS.',
      icons: [TECH.JAVASCRIPT],
      hrefGithub: "https://github.com/CaioHVectorA/sincastle",
      hrefWeb: "https://sincastle.netlify.app",
      mainIMG: 'sincastle'
    },
    {
        title: "Nave Ideas",
        body: "Um microsite feito para o uso em sala de aula - onde os alunos podem criar seus personagens e histórias de RPG. Nele, aperfeiçoei minhas habilidades utilizando banco de dados e integrando a API(que eu fiz :D) com o front-end de uma aplicação.",
        icons: [TECH.JAVASCRIPT, TECH.MONGODB, TECH.NODE, TECH.EXPRESS,TECH.REACT, TECH.STYLED_COMPONENTS,TECH.WEBSOCKET],
        hrefGithub: "https://github.com/CaioHVectorA/nave-ideas-creator",
        hrefWeb: "https://naveideias.netlify.app/",
        mainIMG: 'naveideas'
    },
    {
        title: "Landing Page - Oxum",
        body: "Um trabalho de freelance que fiz, do qual é uma landing page básica que oferece o trabalho de um umbandista. (a url e a imagem é de uma versão inicial do site. O site completo está numa URL de meu cliente.)",
        icons: [TECH.REACT,TECH.JAVASCRIPT,TECH.STYLED_COMPONENTS],
        hrefGithub: 'https://github.com/CaioHVectorA/Landing-Page-Oxum',
        hrefWeb: 'https://sitetestetestoso.netlify.app/',
        mainIMG: 'oxum'
    },
    {
        title: "Todo",
        body: "Sim, eu também fiz um TODO!!",
        icons: [TECH.TYPESCRIPT,TECH.REACT,TECH.STYLED_COMPONENTS,TECH.NODE,TECH.EXPRESS,TECH.MONGODB,],
        hrefGithub: "https://github.com/CaioHVectorA/todo-list-webapp",
        hrefWeb: "https://0nd520-5173.csb.app/",
        mainIMG: 'todo'
    },
    {
        title: "aqueleappdojogodamasmorra",
        body: "Um trabalho que fiz de freelance, tal qual tinha como objetivo ser uma aplicação mobile que serviria para uma ferramenta em jogos RPG, mais especificamente de RPGs baseados no livro 'aquele jogo da masmorra com dragões e tal'. ",
        icons: [TECH.REACT,TECH.STYLED_COMPONENTS,TECH.JAVASCRIPT],
        hrefGithub: "https://github.com/CaioHVectorA/aqueleappdojogodamasmorra",
        hrefWeb: "https://aqueleapp2.netlify.app",
        mainIMG: 'aqueleapp'
    },
    {
        title: "Carlicia",
        body: "Um projeto que consiste num e-commerce funcional da ❤️ minha mãe ❤️, onde o usuário pode reunir os produtos que quer e, no apertar de um botão, ser redirecionado para o whatzap da proprietária da loja, já com uma mensagem que inclui os produtos.",
        icons: [TECH.JAVASCRIPT,TECH.REACT,TECH.STYLED_COMPONENTS],
        hrefGithub: "https://github.com/CaioHVectorA/carlicia",
        hrefWeb: "https://carlicia.netlify.app",
        mainIMG: "carlicia"
    },
    {
        title: "Too Mush Problem",
        body: "Um jogo de cartas feito com reactJS, tal qual foi feito para a 'Global Game Jam' em janeiro de 2023, inspirado nos problemas da pandemia.",
        icons: [TECH.JAVASCRIPT,TECH.REACT],
        hrefGithub: "https://github.com/CaioHVectorA/TooMushProblem-",
        hrefWeb: "https://toomushproblem.netlify.app/",
        mainIMG: 'tmp'
    }
  ]
function createProj({title, body, icons,hrefGithub, hrefWeb, mainIMG}) {
    // fazer essa template no HTML e depois adaptar aqui!
    return (`<div class=" flex max-md:flex-col-reverse max-md:px-4 w-full gap-2 transition-all hover:scale-110 hover:my-5">
    <div class=" md:w-6/12 flex flex-col justify-between">
        <h2 class=" text-2xl font-bold text-center">${title}</h2>
        <p>${body}</p>
            ${getIcons(icons)}
        <h3 class=" mt-4 mb-1 text-xl text-center">Acesse!</h3>
        <div class=" flex gap-5 justify-center">
            <a target="_blank"  href="${hrefGithub}">
                <img class=" w-12 transition-all hover:scale-125" src="./assets/github.svg">
            </a>
            <a target="_blank"  href="${hrefWeb}">
                <img class=" w-12 transition-all hover:scale-125" src="./assets/web.svg">
            </a>
        </div>
    </div>
    <div class=" md:w-6/12">
        <img src="./assets/proj/${mainIMG}.png" class="object-contain max-h-64 bg-white w-full h-full">
    </div>
</div>`)
}
document.addEventListener('DOMContentLoaded', function() {
    const ulElement = document.querySelector('ul');
    if (ulElement) {
      proj.forEach(item => {
        console.log(getIcons(item.icons));
        ulElement.innerHTML += createProj(item);
      });
      ulElement.innerHTML += `<li onclick="showAll()" class="moreProj underline text-blue-600 text-xl self-center cursor-pointer transition-all hover:text-blue-900">Ver todos os projetos</li>`
    }
  });

  function showAll() {
    const ulElement = document.querySelector('ul');
    if (ulElement) {
        document.querySelector('.moreProj').style.display = 'none '
        otherProj.forEach(item => {
            ulElement.innerHTML += createProj(item);
        })
    }
  }




