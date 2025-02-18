import { useState } from "react";
import words from "./wordList.json";
import { HangmanDrawning, HangmanWord, Keyboard } from "./components";

function App() {
  const [wordsToGues, setWordsToGues] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedFords, setGuessedFords] = useState<string[]>([]);

  return (
    <div className="m-auto flex max-w-[800px] flex-col items-center gap-8">
      <div className="text-center text-4xl">Lose win</div>
      <div>
        <HangmanDrawning />
        <HangmanWord />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
