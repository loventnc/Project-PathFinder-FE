export interface ChoiseInterface {
    _id: string;
    answer: string;
    weight: [string];
}


export interface QuizzInterface {
    _id: string;
    quizzTitle: string;
    ImageQuizz : string;
    choies: ChoiseInterface[];
}  

export interface ResultInterface {
    _id: string;
    jobID: {
        _id: string;
        jobTitle: string;
        description: string;
        OneDayDo: string[];
        skills: {
            skill: string;
            descriptoionskill: string;
            _id: string;
        }[];
        Image: string;
        __v: number;
    };
    userID: string | null;
    __v: number;
}
