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