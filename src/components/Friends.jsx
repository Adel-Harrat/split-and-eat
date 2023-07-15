import Friend from "./Friend";

export default function Friends({ friends, onSelection, selectedFriend }) {
  return (
    <section className="flex flex-col gap-3">
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </section>
  );
}
