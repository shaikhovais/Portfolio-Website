export class personalProjectDetails {
    constructor(projectName, techStack = [], description, features= [], imageLink, websiteLink) {
        this.projectName = projectName;
        this.techStack = techStack;
        this.description = description;
        this.features = features;
        this.imageLink = imageLink
        this.websiteLink = websiteLink;
    }
}