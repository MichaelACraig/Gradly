import {React, useState} from "react";

function Home() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
  <><div className="search">
      <h1>Welcome to the Home Page</h1>;
      <input
        type="text"
        placeholder="Search..."
        value={inputText}
        onChange={inputHandler}/>
        
    </div></>
  );
}

export default Home;