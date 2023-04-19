import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./App.css";

function App() {
  const [catUrl, setCatUrl] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/cats")
      .then((res) => {
        setCatUrl(res.data.catUrl);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <><div className="container">
      <h2>A random cat for you!</h2><br/>
      <img className="cat-image" src={catUrl} alt="random cat" />
    </div><footer className="footer">
        <p>Made with ❤️ by Cemre Şenyuva</p>
        <a href="https://github.com/cemrecodes" target="_blank">
          <img
            className="github-logo"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="github logo" />
        </a>
      </footer></>
 
  );
}

export default App;
