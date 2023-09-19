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
    IONIC: 'ionic'
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
    }
  ]

function createProj({title, body, icons,hrefGithub, hrefWeb, mainIMG}) {
    // fazer essa template no HTML e depois adaptar aqui!
    return (`<div class=" flex max-md:flex-col-reverse max-md:px-4 w-full gap-2">
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
    }
  });




