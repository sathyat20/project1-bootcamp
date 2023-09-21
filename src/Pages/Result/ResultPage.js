import React from "react";
import "./ResultPage.css"

class ResultPage extends React.Component {
  render() {

  console.log("ResultPage is being rendered")

   const userCriteria = {};

   Object.keys(this.props.answers).forEach((questionId) => {
      const answer = this.props.answers[questionId];
      userCriteria[answer] = 1;
     }
   );

   const userResult = this.props.combinations.find((combination) =>
     Object.keys(combination.criteria).every(
       (key) => userCriteria[key] === combination.criteria[key]
     )
   );

    console.log("userCriteria:", userCriteria);
    console.log("userResult:", userResult);

    if (userResult) {
      return (
        <div className="containerR">
          <div className="result-container">
            <h2 className="result-text">Quiz Results</h2>
            <p>You got: {userResult.result}</p>
            <button className="btn btn-primary" onClick={this.props.restart}>
              Restart
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="containerR">
          <div className="result-container">
            <h2 className="result-text">Quiz Results</h2>
            <p>Unable to determine the result.</p>
            <button className="btn btn-primary" onClick={this.props.restart}>
              Restart
            </button>
          </div>
        </div>
      );
    }
  }
}

export default ResultPage;