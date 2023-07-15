import Button from "./Button";

export default function Friend({ friend, onSelection, selectedFriend }) {
  const { name, image, balance } = friend;
  const isSelected = selectedFriend?.id === friend.id;

  function selection() {
    onSelection(friend);
  }

  return (
    <section
      className={`grid grid-cols-[60px_1fr_100px] gap-5 p-5 rounded-2xl hover:bg-amber-100 ${
        isSelected && "bg-amber-100"
      }`}
    >
      <picture className={`w-14 h-14 rounded-full overflow-hidden self-center`}>
        <img
          src={image}
          alt={`avatar image of ${name}`}
          className={`w-full object-cover`}
        />
      </picture>

      <div>
        <h1 className={`font-tw-display text-2xl text-zinc-900`}>{name}</h1>
        <h2 className="text-lime-600">
          {balance > 0 && (
            <p className="text-emerald-600">
              {name} owes you ${balance}
            </p>
          )}
          {balance < 0 && (
            <p className="text-red-600">
              You owe {name} ${Math.abs(balance)}
            </p>
          )}
          {balance === 0 && (
            <p className="text-zinc-600">You and {name} are even</p>
          )}
        </h2>
      </div>

      <div className="self-center">
        <Button onClick={selection}>{isSelected ? "Close" : "Select"}</Button>
      </div>
    </section>
  );
}
