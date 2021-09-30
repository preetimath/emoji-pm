import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🥡": "takeout box",
  "😑": "annoyance",
  "😒": "Unamused Face",
  "😱": "Face Screaming in Fear",
  "🎊": "Confetti Ball",
  "😅": "Grinning Face with Sweat",
  "🏁": "Chequered Flag",
  "🤗": "Hugging Face",
  "😬": "Grimacing Face",
  "😪": "Sleepy Face",
  "😐": "Neutral Face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    console.log(meaning);
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Meaning</h1>
      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <hr />
      <h3> emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
