import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../Styles/news.css";
export default function NewsContainer() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=in&category=business&pageSize=100&apiKey=08fcd1436bdc41e8954e90b07e1d06e4"
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
