import React from "react";
import image from "../assets/breakingNews.jpg"
export const NewsItem = ({title , imgurl, description, newsurl}) => {

  // console.log(news.url);
  return (
    
          <div key={Math.random()}  className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{"maxWidth":"345px"}}>
        <img src={imgurl?imgurl:image} className="card-img-top" alt="pic" style={{"height":"200px", "width":"327px"}} />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,50)}</h5>
          <p className="card-text">{description?description.slice(0,90):"Israel’s operation to rescue four hostages took weeks of preparation and involved hundreds"} </p>
          <a href={newsurl} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
  );
};
