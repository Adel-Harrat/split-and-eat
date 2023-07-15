import { useState } from "react";
import Button from "./Button";
import TextField from "./TextField";
import Label from "./Label";

export default function SplitEat({ friend, onChangeBalance }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  let payedByFriend = bill ? bill - paidByUser : "";

  if (paidByUser > bill) setPaidByUser(bill);

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    if (whoIsPaying === "user") {
      onChangeBalance(payedByFriend);
    } else {
      onChangeBalance(-Math.abs(paidByUser));
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-[2fr_1fr] auto-rows-min gap-y-5 bg-amber-100 md:col-start-2 p-12 rounded-lg"
    >
      <h1 className="col-span-2 font-tw-display uppercase text-amber-900 text-3xl mb-10">
        Split a bill with {friend.name}
      </h1>

      <Label htmlFor="bill">💰 Bill value</Label>
      <TextField
        id="bill"
        type="text"
        value={bill}
        onChange={setBill}
        isNumber={true}
      />

      <Label htmlFor="expense">🕴 Your expense</Label>
      <TextField
        id="expense"
        type="text"
        value={paidByUser}
        onChange={setPaidByUser}
        isNumber={true}
      />

      <Label htmlFor="payedByFriend">👭 {friend.name}'s expense</Label>
      <TextField
        id="payedByFriend"
        type="text"
        value={payedByFriend}
        disabled={true}
      />

      <Label htmlFor="payer">🤑 Who is paying the bill?</Label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
        className="w-full shadow-sm ring-1 ring-zinc-950/10 focus:outline-none focus:ring-amber-500 focus:ring-2 transition duration-300 rounded-lg px-5 py-2 bg-white self-start text-center"
      >
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>

      <div
        type="submit"
        className="col-start-2"
      >
        <Button>Split bill</Button>
      </div>
    </form>
  );
}
