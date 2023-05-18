import AskQuestionImage from "../../assets/images/ask-question.png"
import Button from '../globals/button'

const AskQuestion = () => {
    return (
        <div className="ask-question">
            <img src={AskQuestionImage} alt="" />
            <h2>
                Need more Help?
                <br />
                Ask a Question
            </h2>
            <Button>Ask a Question</Button>
        </div>
    );
}

export default AskQuestion;