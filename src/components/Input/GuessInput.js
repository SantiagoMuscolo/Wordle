import React from "react";

function GuessInput({ submitWord, setWord, word }) {
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        submitWord(word);
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        maxLength={5}
        minLength={5}
        value={word}
        onChange={(e) => {
          const value = e.target.value.toUpperCase();

          setWord(value);
        }}
      />
    </form>
  );
}

export default GuessInput;
