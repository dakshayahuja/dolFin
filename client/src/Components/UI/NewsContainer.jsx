import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../Styles/news.css";
export default function NewsContainer() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dolfin-backend.herokuapp.com/api/news"
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h3
        style={{
          fontFamily: "Montserrat",
          marginBottom: "1em",
          marginLeft: "0.5em",
        }}
      >
        Latest Market News
      </h3>
      <div id="news-container">
        {articles.map((article, index) => (
          <div key={index} id="news-item">
            <h5>{article.title}</h5>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
