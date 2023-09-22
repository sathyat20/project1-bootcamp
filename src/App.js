import React from "react";
import StartPage from "./Pages/Start/StartPage.js";
import QuizPage from "./Pages/Quiz/QuizPage.js";
import ResultPage from "./Pages/Result/ResultPage.js"
import data from "./db.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: {},
      currentPage: "start",
      data: null,
    };
  }

  startQuiz = () => {
    this.setState({
      currentPage: "quiz",
    });
  };

  restartQuiz = () => {
    this.setState({
      currentPage: "start",
      answers: {}
    });
  };

  submitAnswers = (answers) => {
    this.setState({
      answers: answers,
      currentPage: "result",
    });
  };

  render() {

    return (
      // Start page
      <div className="container">
        {this.state.currentPage === "start" && (
          <StartPage startQuiz={this.startQuiz} />
        )}

        {this.state.currentPage === "quiz" && (
          <QuizPage
            questions={data.questions}
            submitAnswers={this.submitAnswers}
          />
        )}

        {this.state.currentPage === "result" && (
          <ResultPage
            answers={this.state.answers}
            combinations={data.combinations}
            restart={this.restartQuiz}
          />
        )}
      </div>
    )
  }
}

export default App;
