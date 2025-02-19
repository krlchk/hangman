export function HangmanWord() {
  const word: string = "text";
  const guessedLetter: string[] = ["t", "e", "g"];
  return (
    <div className="flex gap-8 text-[6em] font-bold uppercase">
      {word.split("").map((letter, index) => (
        <span className="border-b-[10px] border-black" key={index}>
          <span
            className={guessedLetter.includes(letter) ? "visible" : "invisible"}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
