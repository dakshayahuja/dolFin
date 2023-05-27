import axios from "axios";
import "../../Styles/news.css";
import React, { useState, useEffect } from "react";
export default function NewsContainer() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedArticles = localStorage.getItem("storedArticles");
        const lastFetchTime = localStorage.getItem("lastFetchTime");
        const currentTime = Date.now();
        if (
          storedArticles &&
          lastFetchTime &&
          currentTime - lastFetchTime <= 120000
        ) {
          setArticles(JSON.parse(storedArticles));
        } else {
          const response = await axios.get(
            "https://dolfin-backend.herokuapp.com/api/news"
          );
          setArticles(response.data.articles);
          localStorage.setItem(
            "storedArticles",
            JSON.stringify(response.data.articles)
          );
          localStorage.setItem("lastFetchTime", currentTime.toString());
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 3600000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <h3
        style={{
          fontFamily: "Montserrat",
          marginBottom: "1em",
          marginLeft: "0.5em",
          textDecoration: "underline",
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
