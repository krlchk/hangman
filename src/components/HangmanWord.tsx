import clsx from "clsx";

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div className="flex gap-8 text-[6em] font-bold uppercase">
      {wordToGuess.split("").map((letter, index) => (
        <span className="max-w-[50px] border-b-[10px] border-black" key={index}>
          <span
            className={clsx(
              guessedLetters.includes(letter) || reveal
                ? "visible"
                : "invisible",
              !guessedLetters.includes(letter) && reveal
                ? "text-red-500"
                : "text-black",
            )}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
