export interface Question{
    category: String,
    questionText: String,
    answer: Boolean,
    order: Number
}


export interface categoryQuestion{
    scienceQuestion: Question,
    geographyQuestion: Question,
    historyQuestion: Question,
    artQuestion:Question,
    sportsQuestion:Question
}


export interface dayQuestions{
    questions:categoryQuestion
}
