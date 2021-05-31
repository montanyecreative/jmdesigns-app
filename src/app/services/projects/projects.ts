import { Project } from '../../models/projects/project';

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'Gateway IT Consulting',
    image: 'assets/img/projects/gitc.jpg',
    imageAltText: 'Screenshot of the Gateway IT Consulting website.',
    websiteLink: 'https://www.gatewayitconsulting.com/',
    websiteLinkTitle: 'View the website on a new page.',
    codeLink: '',
    codeLinkTitle: '',
    description: 'A website to help clients and users find solutions for designing, building, and maintaining websites.',
    skills: [{name: 'ReactJS'}, {name: 'JavaScript'}, {name: 'Material Angular Design'}, {name: 'SASS'}, {name: 'CSS3'}, {name: 'GA'}, {name: 'HTML5'}]
  },
  {
    id: 2,
    name: 'Montanye Wedding',
    image: 'assets/img/projects/montanye-wedding.PNG',
    imageAltText: 'Screenshot of the Montanye Wedding website.',
    websiteLink: 'https://montanyewedding.com/',
    websiteLinkTitle: 'View the website on a new page.',
    codeLink: '',
    codeLinkTitle: '',
    description: 'An app/website for the wedding of John and Lauren Montanye for 2022.',
    // tslint:disable-next-line: max-line-length
    skills: [{name: 'ReactJS'}, {name: 'JavaScript'}, {name: 'Material Angular Design'}, {name: 'SASS'}, {name: 'Sails API'}, {name: 'HTML5'}, {name: 'GA'}]
  },
  {
    id: 3,
    name: 'The Palate STL',
    image: 'assets/img/projects/thePalateSTL.jpg',
    imageAltText: 'Screenshot of The Palate STL website.',
    websiteLink: 'https://www.thepalatestl.com/',
    websiteLinkTitle: 'View the website on a new page.',
    codeLink: '',
    codeLinkTitle: '',
    description: 'A local restaurant finder app for the St. Louis area.',
    skills: [{name: 'JavaScript'}, {name: 'PHP'}, {name: 'HTML5'}, {name: 'WordPress'}, {name: 'CSS3'}]
  },
  {
    id: 4,
    name: "Our Lady's Inn",
    image: 'assets/img/projects/ourLadysInn.jpg',
    imageAltText: "Screenshot of the Our Lady's Inn website.",
    websiteLink: 'https://ourladysinn.org/',
    websiteLinkTitle: 'View the website on a new page.',
    codeLink: '',
    codeLinkTitle: '',
    description: "Website for Our Lady's Inn maternity homes in St. Louis.",
    skills: [{name: 'JavaScript'}, {name: 'PHP'}, {name: 'CSS3'}, {name: 'WordPress'}, {name: 'GA'}]
  }
];
