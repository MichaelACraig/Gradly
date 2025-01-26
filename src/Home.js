import React, { useEffect, useState } from "react";

function Home() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
  <><div className="search">
      <h1 className="homepage-intro-text">Welcome to Sublettee</h1>;
      <input
        type="text"
        placeholder="Search..."
        value={inputText}
        onChange={inputHandler}/>

    </div></>
  );
  <br>
  </br>
  return <h1>Welcome to the Home Page</h1>;
}

export default Home;