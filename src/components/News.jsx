import React from "react";

const News =({title, content, urlToImage})=>
(
    <div>
        <img src={urlToImage} alt={title}/>
        <h1>{title}</h1>
        <p>{content}</p>
    </div>
);


export default News;