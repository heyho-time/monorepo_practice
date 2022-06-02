import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import str, { Header } from "@monorepo/user";

function App() {
  const [count, setCount] = useState(0);
  console.log(str);

  return (
    <>
      <div>gg</div>
      <Header />
    </>
  );
}

export default App;
