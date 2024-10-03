import React from "react";
import { checkGuess } from "../../game-helpers";

function Guesses({ guesses, answer }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => {
        const splitWord = guess ? guess.split("") : [];
        const wordStatus = checkGuess(guess, answer);
        const validation = (i) => {
          return wordStatus[i]?.status === "correct"
            ? "correct"
            : wordStatus[i]?.status === "misplaced"
            ? "misplaced"
            : "incorrect";
        };

        return (
          <p className="guess" key={index}>
            {Array(5)
              .fill("")
              .map((_, i) => {
                return (
                  <span
                    className={`cell ${guess !== "" ? validation(i) : ""}`}
                    key={i}
                  >
                    {splitWord[i] || ""}
                  </span>
                );
              })}
          </p>
        );
      })}
    </div>
  );
}

export default Guesses;
