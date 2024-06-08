export interface JobListInterface {
    _id: string;
    jobID : JobInterface;
    userID : string;
    datePrdict : string;
    __v : number;
}


export interface JobInterface {
    _id : string;
    jobTitle : string;
    description : string;
    OneDayDo : string[];
    skills : {
        skill : string;
        descriptoionskill : string;
        _id : string;
    }[];
    Image : string;
    __v : number;
}