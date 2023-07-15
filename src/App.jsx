import "./App.css"; // 21
import Friends from "./components/Friends";
import AddFriend from "./components/AddFriend";
import SplitEat from "./components/SplitEat";
import { useState } from "react";
import Button from "./components/Button";

const default_friends = [
  {
    id: 1,
    name: "John",
    image: "https://i.pravatar.cc/80?img=54",
    balance: 35,
  },
  {
    id: 2,
    name: "Jane",
    image: "https://i.pravatar.cc/80?img=19",
    balance: -20,
  },
  {
    id: 3,
    name: "Alex",
    image: "https://i.pravatar.cc/80?img=14",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(default_friends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((s) => !s);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleChangeBalance(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? {
              ...friend,
              balance: friend.balance + value,
            }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className="font-tw-normal">
      <main className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-10 px-5 xl:px-0 py-10 lg:py-0 mt-20">
        <div>
          <Friends
            friends={friends}
            onSelection={handleSelection}
            selectedFriend={selectedFriend}
          />

          {showAddFriend && <AddFriend onAddFriend={handleAddFriend} />}

          <div className="text-right flex justify-end my-5">
            <Button onClick={handleShowAddFriend}>
              {showAddFriend ? "Close" : "Add friend"}
            </Button>
          </div>
        </div>

        {selectedFriend && (
          <SplitEat
            friend={selectedFriend}
            onChangeBalance={handleChangeBalance}
          />
        )}
      </main>
    </div>
  );
}

export default App;
