import React, {useState, useEffect} from 'react';

export default function MobileNews() {
  const NEWS_API="https://newsapi.org/v2/top-headlines?country=us&apiKey=e0967298866744119bffceda6a43aabb";
  const [news, setNews] = useState([]);

  useEffect(()=>{
    fetch(NEWS_API)
      .then((res)=>res.json())
      .then((data)=>{
          let index = Math.floor(Math.random() * 20);
          setNews(data.articles[index]);
          setInterval(() => {
            let index = Math.floor(Math.random() * 20);
            document.querySelector(".mobile-image").src = data.articles[index].urlToImage;
            document.querySelector(".mobile-title").innerHTML = data.articles[index].title;
            document.querySelector(".mobile-description").innerHTML = data.articles[index].description;
            console.log(data.articles[index]);
          }, 1000 * 30);
      });
  },[]);

  return (
    <div className="mobile-container gap-3 d-flex align-items-center flex-column">
      <div className="mobile-news-heading">
        LifeGo News
      </div>
      <div className="mobile-foto d-flex justify-content-center align-items-center">
        <img className="mobile-image" src={news.urlToImage} width="100%"/>
      </div>
      <div className="mobile-title text-center">{news.title}</div>
      <div className="mobile-description">{news.description}</div>
    </div>
  )
}
