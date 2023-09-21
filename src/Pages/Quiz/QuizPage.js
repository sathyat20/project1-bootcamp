import React from "react";
import "./QuizPage.css";

class QuizPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionIndex: 0,
      answers: {},
    };
  }

  handleOptionSelect = (questionId, optionValue) => {
    this.setState(
      (prevState) => ({
        answers: {
          ...prevState.answers,
          [questionId]: optionValue,
        },
      }),
      //callback function
      () => {
        if (this.state.currentQuestionIndex < this.props.questions.length - 1) {
          this.setState(() => ({
            currentQuestionIndex: this.state.currentQuestionIndex + 1,
          }));
        } else {
          this.props.submitAnswers(this.state.answers);
        }
      }
    );
  };

  handleBack = () => {
    if (this.state.currentQuestionIndex > 0) {
      this.setState({
        currentQuestionIndex: this.state.currentQuestionIndex - 1,
    });
    }
  };

  render() {
    const currentQuestion = this.props.questions[this.state.currentQuestionIndex];

    return (
      <div>
        <p>{currentQuestion.question}</p>
        <ul className="list-group">
          {currentQuestion.options.map((option) => (
            <li key={option.value} className="list-group-item">
              <button
                className="btn btn-primary"
                onClick={() =>
                  this.handleOptionSelect(currentQuestion.id, option.value)
                }
              >
                {option.text}
              </button>
            </li>
          ))}
        </ul>

        {this.state.currentQuestionIndex > 0 && (
          <button className="btn btn-secondary" onClick={this.handleBack}>
            Back
          </button>
        )}
      </div>
    );
  }
}

export default QuizPage;
