import { Question } from './exam-question'
import { MCQChoice } from './mcqchoice'
import { Exam } from './exam'


export class MCQQuestion {

    choices : MCQChoice[]
    question : Question
    exam : Exam
    
    constructor(choices : MCQChoice[] = null, question : Question = null, exam : Exam = null){
        this.question  = question
        this.choices = choices
        this.exam = exam
    }
    //ng generate component exam-form
}