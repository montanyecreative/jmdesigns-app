import { Project } from '../../services/projects/project';

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Simplest Cookbook',
    image: 'assets/img/projects/simplestCookbook.jpg',
    websiteLink: 'https://www.simplestcookbook.com/',
    codeLink: 'https://github.com/gatewayitconsulting/Simplest-Cookbook-Angular',
    description: 'Cookbook app with many different recipes and features to assist people cooking.',
    skills: [{name: 'Angular 7'}, {name: 'JavaScript'}, {name: 'Bootstrap'}, {name: 'SASS'}, {name: 'HTML5'}]
  },
  {
    id: 2,
    name: 'Gateway IT Consulting',
    image: 'assets/img/projects/gitc.jpg',
    websiteLink: 'https://www.gatewayitconsulting.com/',
    codeLink: 'https://github.com/gatewayitconsulting/GatewayITConsulting',
    description: 'A website to help clients and users find solutions for designing, building, and maintaining websites.',
    skills: [{name: 'AngularJS'}, {name: 'JavaScript'}, {name: 'SASS'}, {name: 'PHP'}, {name: 'HTML5'}]
  },
  {
    id: 3,
    name: 'The Palate STL',
    image: 'assets/img/projects/thePalateSTL.jpg',
    websiteLink: 'https://www.thepalatestl.com/',
    codeLink: '',
    description: 'A local restaurant finder app for the St. Louis area.',
    skills: [{name: 'JavaScript'}, {name: 'PHP'}, {name: 'HTML5'}, {name: 'WordPress'}, {name: 'CSS3'}]
  },
  {
    id: 4,
    name: "Our Lady's Inn",
    image: 'assets/img/projects/ourLadysInn.jpg',
    websiteLink: 'https://ourladysinn.org/',
    codeLink: '',
    description: "Website for Our Lady's Inn maternity homes in St. Louis.",
    skills: [{name: 'JavaScript'}, {name: 'PHP'}, {name: 'CSS3'}, {name: 'WordPress'}, {name: 'GA'}]
  }
];
