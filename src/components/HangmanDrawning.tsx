const HEAD = (
  <div className="absolute -right-[30px] top-[50px] h-[70px] w-[70px] rounded-full border-[10px] border-black" />
);
const BODY = (
  <div className="absolute right-0 top-[120px] h-[100px] w-[10px] bg-black" />
);
const RIGHT_ARM = (
  <div className="absolute -right-[100px] top-[150px] h-[10px] w-[100px] origin-bottom-left -rotate-45 bg-black" />
);
const LEFT_ARM = (
  <div className="absolute right-[10px] top-[150px] h-[10px] w-[100px] origin-bottom-right rotate-45 bg-black" />
);
const RIGHT_LEG = (
  <div className="absolute -right-[90px] top-[210px] h-[10px] w-[100px] origin-bottom-left rotate-[60deg] bg-black" />
);
const LEFT_LEG = (
  <div className="absolute right-0 top-[210px] h-[10px] w-[100px] origin-bottom-right -rotate-[60deg] bg-black" />
);

export function HangmanDrawning() {
  return (
    <div className="relative">
      {HEAD}
      {BODY}
      {RIGHT_ARM}
      {LEFT_ARM}
      {RIGHT_LEG}
      {LEFT_LEG}
      <div className="absolute right-0 top-0 h-[50px] w-[10px] bg-black" />
      <div className="ml-[120px] h-[10px] w-[200px] bg-black" />
      <div className="ml-[120px] h-[400px] w-[10px] bg-black" />
      <div className="h-[10px] w-[250px] bg-black" />
    </div>
  );
}
