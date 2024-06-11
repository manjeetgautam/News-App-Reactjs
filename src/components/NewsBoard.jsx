import { useEffect, useState } from "react";
import { NewsItem } from "./NewsItem";

export const NewsBoard = ({category}) => {
  let [news, setnews] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      try {
        let url =
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        let data = await fetch(url);
        let newdata = await data.json();
        setnews(newdata.articles);
      } catch {
        console.log("data not found");
      }
    };
    getdata();
  }, [category]);

  // console.log(news);

  return (
    <div>
      <h2 className="text-center mt-3">
        Latest <span className="badge bg-danger fs-4">News</span>
      </h2>
        {news.map((news, index) => {
          return (
            <NewsItem
              key={index}
              imgurl={news.urlToImage}
              title={news.title}
              description={news.description}
              content={news.content}
              newsurl={news.url}
            />
          );
        })}
    </div>
  );
};
