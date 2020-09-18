
import React, {useState} from "react";
import "./style.css";

export default function App() {
    const [search, setSearch] = useState("");

    return (
        <div className="App">
            <div className="container">
            <textarea
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="What's Happening?"
                autoFocus
            ></textarea>
            <a
            className="tweet"
            href={`https://twitter.com/intent/tweet?text=${search}`} 
            target="_blank"
            rel="noopener noreferrer"
            >
                TwitterFingers!
            </a>
        </div>
        </div>
    );
}
