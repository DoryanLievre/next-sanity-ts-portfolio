interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: 'image';
    asset: {
        _ref: string;
        _type: 'reference';
    };
}

export interface PageInfo extends SanityBody {
    _type: 'pageInfo';
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}
export interface Social extends SanityBody {
    _type: 'social';
    title: string;
    url: string;
}

export interface Technology extends SanityBody {
    _type: 'skill';
    image: string;
    numberOfProjectsDone: number;
    title: string;
}

export interface Skill extends SanityBody {
    _type: 'skill';
    image: string;
    numberOfProjectsDone: number;
    title: string;
}

export interface Project extends SanityBody {
    _type: 'project';
    title: string;
    image: Image;
    linkToProject: string;
    summary: string;
    technologies: Technology[];
}

export interface Experience extends SanityBody {
    _type: 'experience';
    jobTitle: string;
    companyImage: Image;
    company: string;
    dateStarted: string;
    dateEnded: string;
    isCurrentlyWorkingHere: boolean;
    technologies: Technology[];
    points: string[];
}
export interface Study extends SanityBody {
    _type: 'study';
    diplomaTitle: string;
    schoolImage: Image;
    schoolName: string;
    dateStarted: string;
    dateEnded: string;
    isCurrentlyStudyingHere: boolean;
    technologies: Technology[];
    whatILearned: string[];
}