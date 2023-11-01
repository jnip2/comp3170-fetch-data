import "./styles.css";
import { useState, useEffect, useRef } from "react";
import Post from "./components/Post";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts`;

    setLoading(true);

    async function getArticles() {
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data);
      setLoading(false);
    }

    setTimeout(() => {
      getArticles();
    }, 1000);
  }, [query]);

  return (
    <div className="App">
      <h1>Post List</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {articles.map((item, index) => {
            return <Post article={item} key={index} />;
          })}
        </div>
      )}
    </div>
  );
}
