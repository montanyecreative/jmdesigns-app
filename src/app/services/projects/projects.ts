import { Project } from '../../models/projects/project';

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Gateway IT Consulting',
    image: 'assets/img/projects/gitc.jpg',
    imageAltText: 'Screenshot of website.',
    websiteLink: 'https://www.gatewayitconsulting.com/',
    codeLink: 'https://github.com/gatewayitconsulting/GatewayITConsulting',
    description: 'A website to help clients and users find solutions for designing, building, and maintaining websites.',
    skills: [{name: 'AngularJS'}, {name: 'JavaScript'}, {name: 'SASS'}, {name: 'CSS3'}, {name: 'PHP'}, {name: 'HTML5'}]
  },
  {
    id: 2,
    name: 'NFPFramework',
    image: 'assets/img/projects/nfpframework.PNG',
    imageAltText: 'Screenshot of website.',
    websiteLink: 'http://nfpframework.com/',
    codeLink: '',
    description: 'Angular & Bootstrap shell built from offline bootstrap customized to run templates further into development.',
    // tslint:disable-next-line: max-line-length
    skills: [{name: 'Angular 10'}, {name: 'TypeScript'}, {name: 'AWS'}, {name: 'Bootstrap 4.5'}, {name: 'SASS'}, {name: 'Angular Animations'}, {name: 'HTML5'}]
  },
  {
    id: 3,
    name: 'The Palate STL',
    image: 'assets/img/projects/thePalateSTL.jpg',
    imageAltText: 'Screenshot of website.',
    websiteLink: 'https://www.thepalatestl.com/',
    codeLink: '',
    description: 'A local restaurant finder app for the St. Louis area.',
    skills: [{name: 'JavaScript'}, {name: 'PHP'}, {name: 'HTML5'}, {name: 'WordPress'}, {name: 'CSS3'}]
  },
  {
    id: 4,
    name: "Our Lady's Inn",
    image: 'assets/img/projects/ourLadysInn.jpg',
    imageAltText: 'Screenshot of website.',
    websiteLink: 'https://ourladysinn.org/',
    codeLink: '',
    description: "Website for Our Lady's Inn maternity homes in St. Louis.",
    skills: [{name: 'JavaScript'}, {name: 'PHP'}, {name: 'CSS3'}, {name: 'WordPress'}, {name: 'GA'}]
  }
];
