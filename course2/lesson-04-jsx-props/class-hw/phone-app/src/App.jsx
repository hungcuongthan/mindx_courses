import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ItemFriendPhone from "./assets/components/ItemFriendPhone";
("./assets/components/ItemFriendPhone/index.jsx");

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Phone list</h1>
      <ul>
        <ItemFriendPhone name="James" phone="12345" />
        <ItemFriendPhone name="Neal" phone="123" />
        <ItemFriendPhone name="Ben" phone="6789" />
      </ul>
    </>
  );
}

export default App;
