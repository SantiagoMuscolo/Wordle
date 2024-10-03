import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../Input/GuessInput";
import Guesses from "../Guess/Guesses";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import HappyBanner from "../Banners/HappyBanner";
import SadBanner from "../Banners/SadBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [word, setWord] = useState("");
  const [guesses, setGuesses] = useState(
    Array(NUM_OF_GUESSES_ALLOWED).fill("")
  );
  const [isWinner, setIsWinner] = useState(false)
  const [isLoser, setIsLoser] = useState(false)
  const lengthFilledValues = guesses.filter((e) => e.length != 0).length;

  const submitWord = () => {
    if (word.length !== 5) {
      window.alert("La palabra ingresada debe contener 5 caracteres.");
      return;
    }

    const nextGuesses = [...guesses];
    const firstEmptyIndex = guesses.findIndex((e) => e === "");

    if (firstEmptyIndex !== -1) {
      nextGuesses[firstEmptyIndex] = word;

      setGuesses(nextGuesses);
      setWord("");

      if(word === answer){
        setIsWinner(true)
      }

      const validation = nextGuesses.every((e) => e.length !== 0)

      if (validation && !nextGuesses.includes(answer)){
        console.log('hola')
        setIsLoser(true)
      }
    }
  };

  return (
    <>
      <Guesses guesses={guesses} answer={answer} />
      <GuessInput submitWord={submitWord} setWord={setWord} word={word} />
      {isWinner && <HappyBanner length={lengthFilledValues}/>}
      {isLoser && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
