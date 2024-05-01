export interface userInterface {
    _id: string;
    username: string;
    password: string;
    email: string;
    firstname: string;
    lastname: string;
    school: string;
    education_level: string;
    __v: number;
}

export interface CommentInterface {
    _id: string;
    comment: string;
    PostID : string;
    OwnerID : userInterface;
    __v: number;
}

export interface CommunityInterface {
    _id: string;
    PostImage : string;
    PostTitle : string;
    OwnerID : userInterface;
    Comments : CommentInterface[];
    descriptionPost : string;
    dateCreate : Date;
    __v: number;
}