import { useState } from "react";
import Button from "./Button";
import TextField from "./TextField";
import Label from "./Label";

export default function AddFriendForm({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/80");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?u=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/80");
  }
  return (
    <div className="col-start-1 bg-amber-100 p-10 rounded-lg mt-3">
      <form
        className="grid grid-cols-[1fr_2fr] gap-5"
        onSubmit={handleSubmit}
      >
        <Label htmlFor="name">👭 Friend Name</Label>

        <TextField
          id="name"
          type="text"
          placeholder="Your Friend's Name"
          value={name}
          onChange={setName}
        />

        <Label htmlFor="image">🖼 Image URL</Label>

        <TextField
          id="image"
          type="text"
          placeholder="Your Friend's Image Url"
          value={image}
          onChange={setImage}
        />

        <div />

        <Button type="submit">Add</Button>
      </form>
    </div>
  );
}
