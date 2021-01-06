export class Project {
    id: number;
    name: string;
    image: string;
    imageAltText: string;
    websiteLink: string;
    websiteLinkTitle: string;
    codeLink: string;
    codeLinkTitle: string;
    description: string;
    skills: Array<{
      name: string
    }>
  }
