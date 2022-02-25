export interface Question{
    category: String,
    questionText: String,
    answer: Boolean,
    order: Number,
    _id: String
}


export interface categoryQuestion{
    scienceQuestion: Question,
    geographyQuestion: Question,
    historyQuestion: Question,
    artQuestion:Question,
    sportsQuestion:Question,
    _id: String
}


export interface dayQuestions{
    questions:categoryQuestion
}
