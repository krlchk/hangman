import keys from "../alphabet.json";

export function Keyboard() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(75px,1fr))] gap-4">
      {keys.map((key, index) => (
        <button className="border flex items-center justify-center border-black" key={index}>
          {key}
        </button>
      ))}
    </div>
  );
}
