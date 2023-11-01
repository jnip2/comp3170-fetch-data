import { useEffect, useState } from "react";
import "../styles.css";

export default function Article({ article }) {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const authorUrl = `https://jsonplaceholder.typicode.com/users/${article.userId}`;

    async function getAuthor() {
      const response = await fetch(authorUrl);
      const data = await response.json();
      setAuthor(data);
    }

    getAuthor();
  }, []);

  return (
    <div className="article">
      <h2>
        "{article.title.charAt(0).toUpperCase()}
        {article.title.slice(1)}"
      </h2>
      <p className="bodyCopy">
        {article.body.charAt(0).toUpperCase()}
        {article.body.slice(1)}
      </p>
      <a href={author.website}>{author && <p>By: {author.name}</p>}</a>
      <br />
    </div>
  );
}
