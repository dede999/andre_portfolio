const projects = [
  {
    id: 1,
    title_en: 'Calculus 4',
    title_pt: 'Cálculo 4',
    first_commit: '17-08-2015',
    link: 'https://github.com/dede999/calculo4-latex',
    tags: ['A', 'P'],
    tools: ['latex'],
    framework: [],
    desc_pt: 'Resumo de aulas de cálculo IV. A ideia era estudar os tópicos de quase todas as aulas, enquanto aproveitava a ocasião para afiar minhas habilidades em LaTeX. Infelizmente não consegui terminar este projeto, e em parte porque havia outras matérias a ser aprovado.',
    desc_en: 'Calculus IV classes briefings. The idea was to study the topics of (nearly) every class, while enjoying the opportunity to sharpen my LaTeX skills. Unfortunately, I was not able to finish it, and mostly because I had other subjects to be approved on',
  },
  {
    id: 2,
    title_en: 'Punch clock',
    title_pt: 'Folha de Ponto',
    first_commit: '20-07-2016',
    link: 'https://github.com/dede999/FolhaPonto',
    tags: ['U', 'P'],
    tools: ['awk', 'latex', 'ruby'],
    framework: [],
    desc_pt: 'Durante meu trabalho na Rede Linux, desenvolvi um script que automatizava o processo de criação da folha de ponto. Antes disso, eu e meus colegas tínhamos que alterar, manualmente, o arquivo-fonte em LaTeX levando em conta em que dia estivemos no posto e o horário também. Cada um estabelecia seus dias e horários, mas isso não facilitava muito o trabalho manual. Essa era a finalidade do script',
    desc_en: 'During my term in Rede Linux, I created a script to automatically create a punch clock. Before that, me and my colleges had to manually edit a LaTeX template including the days we have worked there and what time we have there at some specific day. Each of us had our working days and hours previously set, but it didn\'t make that easier. That\'s what the script was made for',
  },
  {
    id: 3,
    title_en: 'Adopt a Pet',
    title_pt: 'Adote um Pet',
    first_commit: '04-09-2016',
    link: 'https://github.com/dede999/adoptappet',
    tags: ['A'],
    tools: ['css', 'html', 'js', 'ruby'],
    framework: ['rails'],
    desc_pt: 'Esse projeto consiste num exercício de criação de uma start up usando tecnologia no modelo de negócio ou na sua implementação. Meu grupo apostou numa ideia de criar um painel para a divulgação de serviços para animais de estimação',
    desc_en: 'This project consists in creating an start up using technology as part of the business model or its implementation. My group\'s idea was creating a space to disseminate information about pet dedicated services',
  },
  {
    id: 4,
    title_en: 'Minera PIPE',
    title_pt: 'Minera PIPE',
    first_commit: '06-10-2016',
    link: 'https://gitlab.com/dede999/minera-pipe/',
    tags: ['A'],
    tools: ['css', 'html', 'js', 'ruby'],
    framework: ['cucumber', 'rails', "rspec"],
    desc_pt: 'Projeto criado para avaliação na matéria \'Laboratório de Programação 2\'. Essa matéria introduz alguns conceitos primários de engenharia de software e metodologias ágeis. Esse projeto visava colocar esses ensinamentos em prática. Mas não só isso.',
    desc_en: 'This project has been created for evaluation in \'Programming Lab 2\'. This module introduces some primary software engineering concepts and Agile methodologies. This project existed so we could exercise the things we learned. But not just that.',
  },
  {
    id: 5,
    title_pt: 'Livro Razão',
    title_en: 'Accountability Record',
    first_commit: '08-12-2016',
    link: 'https://github.com/dede999/LivroRazao',
    tags: ['P'],
    tools: ['css', 'html', 'js', 'ruby'],
    framework: ['rails', 'material design'],
    desc_pt: 'Esse projeto foi criado para melhorar minhas habilidaes em Ruby de uma forma mais intensa. Além das coisas que já costumava a fazer, aprendi a implemetar um sistema com autenticação de usuários. Outra motivação pra criar este projeto é fornecer uma ferramenta de gerência de recursos pessoais.',
    desc_en: 'This project was created to improve my Ruby on Rails habilities more intensily. Besides the things I already knew how to code, I learned to implement a system with user authentication. Other reason to build this project is to provide a personal resource management tool',
  },
  {
    id: 6,
    title_en: 'My MLB',
    title_pt: 'Minha MLB',
    first_commit: '15-12-2017',
    link: 'https://github.com/dede999/myMLB',
    tags: ['P'],
    tools: ['css', 'html', 'js', 'ruby'],
    framework: ['rails', 'material design'],
    desc_pt: 'Este é um dos projetos onde exercito uma paixão de adolecência: reproduzir e simular torneios conhecidos, e criar alguns outros. Neste caso, a inpiração veio da Major League Baseball. Muita coisa ali ainda era bem rudimentar, mas retrata um considerável salto de qualidade se comparado ao que faço nos dias de hoje. É a pedra angular da ferramenta de uma de minhas criações em fase de planejamento.',
    desc_en: 'This is one of the projects where I exercise one of my teenagehood passions: reproduce and simulate well-known tournaments and create some others. In this case, inspiration came from Major League Baseball. Most of its code is very raw, but shows a considerable leap of quality in comparision with what I do nowadays',
  },
  {
    id: 7,
    title_en: 'Hockey (CHL)',
    title_pt: 'Hóquei (CHL)',
    first_commit: '05-03-2018',
    link: 'https://github.com/dede999/hockey',
    tags: ['P'],
    tools: ['html', 'python'],
    framework: ['django', 'material design'],
    desc_pt: 'Projeto criado para simular, de modo superficial, a liga canadense de hóquei no gelo (Canadian Hockey League). Assim como o projeto \'myMLB\', também foi uma maneira de unir o útil (o aporendizado do framework) ao agradável (simular campeonatos).',
    desc_en: 'Project created to simulate, in a superficial way, the Canadian Hockey League (CHL). Like \'myMLB\', it was a manner to combine business (when learning a new skill) and pleasure (simulating tournaments) ',
  },
  {
    id: 8,
    title_en: 'MAC 0210 - Bezier\'s Curves',
    title_pt: 'MAC 0210 - Curvas de Bezier',
    first_commit: '28-11-2018',
    link: 'https://github.com/dede999/ep1_mac210',
    tags: ['A'],
    tools: ['python'],
    framework: [],
    desc_pt: 'É o trabalho da matéria \'Laboratório de Métodos Numéricos\'. Consistia em gerar Curvas de Bezier, e identificar qual era a curva mais próxima de um ponto específico',
    desc_en: 'It\'s \'Numeric Methods Lab\' module\'s project. Consisted in creating Bezier Curves, and identifing which one is closesr to an specific point',
  },
  {
    id: 9,
    title_en: 'Nuxt.js Sandbox',
    title_pt: 'Nuxt.js Sandbox',
    first_commit: '24-07-2019',
    link: 'https://github.com/dede999/nuxt_sandbox',
    tags: ['P'],
    tools: ['html', 'js', 'css'],
    framework: ['nuxt', 'rails'],
    desc_pt: 'Este projeto foi feito para aprender como lidar com problema de CORS ao usar API\'s REST em uma outra aplicações. O back end feito em Rails e tem uma entidade que conta com dados genéricos. Depois de finalizar este exercício, consigo manipular dados pelo front end também.',
    desc_en: 'This project was created to learn how to deal with CORS issues when using REST API\'s on a different application. Back end was made in Rails and has an entity with generic data. After completing this exercise, I can manipulate data though the front end too.',
  },
  {
    id: 10,
    title_en: 'Be The Hero',
    title_pt: 'Seja o Heroi',
    first_commit: '27-03-2020',
    link: 'https://gitlab.com/semana-omnistack-11',
    tags: ['A', 'P', 'U'],
    tools: ['html', 'js', 'css'],
    framework: ['express', 'jest', 'react', 'react native'],
    desc_pt: 'Este projeto é o resultado de um programa ofererecido pela Rocketseat chamado Semana Omnistack 11. Tem 3 partes: a primeira feita em Express, a segunda em React e a terceira, em React Native',
    desc_en: 'This project comes from the lessons tought in a program called Omnistack Week 11 offered by Rockseat. It has 3 parts: fist one was made in Express, the second in React, and the third, in React Native',
  }
];

module.exports = projects;
