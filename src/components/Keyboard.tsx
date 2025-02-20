import clsx from "clsx";
import keys from "../alphabet.json";

type KeyboardProps = {
  activeLetters: string[];
  innactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled: boolean;
};

export function Keyboard({
  activeLetters,
  innactiveLetters,
  addGuessedLetter,
  disabled,
}: KeyboardProps) {
  return (
    <div className="grid grid-cols-8 gap-4">
      {keys.map((key, index) => {
        const isActive = activeLetters.includes(key);
        const isInactive = innactiveLetters.includes(key);
        return (
          <button
            disabled={disabled}
            onClick={() => {
              addGuessedLetter(key);
            }}
            className={clsx(
              "flex aspect-square items-center justify-center border-2 border-black text-3xl font-bold uppercase transition-colors hover:bg-blue-400 hover:text-white",
              isActive ? "bg-blue-400 text-white" : "",
              isInactive
                ? "cursor-default border-gray-500 bg-gray-300 text-gray-500 hover:border-gray-500 hover:bg-gray-300 hover:text-gray-500"
                : "",
              disabled ? "hover:bg-white hover:text-black" : "",
            )}
            key={index}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
