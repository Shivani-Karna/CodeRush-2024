// App.js
import React from "react";
import itemList from "./itemList";

function App() {
  return (
    <div>
      <ul>
        {itemList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
