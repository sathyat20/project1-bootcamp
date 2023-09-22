import React from "react";
import "./StartPage.css";

class StartPage extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1>Corks 'n Cheese</h1>
          <div className="wine"></div>
        </div>
        <div className="buttonDiv">
          <button className="btn btn-primary" onClick={this.props.startQuiz}>
            Start Quiz
          </button>
        </div>
      </div>
    );
  }
}

export default StartPage;



