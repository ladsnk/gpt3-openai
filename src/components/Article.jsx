import React from "react";
import "./styles/article.scss";

const Article = ({ imgUrl, date, text }) => (
  <div className="article">
    <div className="article__image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="article__content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
);

export default Article;
