import React from "react";

const NewsItem= (props)=> {
 
   

    return (
      <div className="my-3">
        <div className="card">
        <div style={{display: 'flex',
        justifyContent: 'flex-end',
        position: 'absolute',
        right:0 }}>
          <span class=" badge rounded-pill bg-success">
            {props.source}
            <span class="visually-hidden">unread messages</span>
          </span>
          </div>
          <img
            src={
              props.imageUrl
                ? props.imageUrl
                : "https://image.cnbcfm.com/api/v1/image/107113261-1662126800173-gettyimages-1202307354-_r359071-1.jpeg?v=1662126851&w=1920&h=1080"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-props.title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text">
              <small class="text-primary">
                By <b>{props.author ? props.author : "Unknown"} </b> on{" "}
                <b>{new Date(props.date).toGMTString()} </b>{" "}
              </small>
            </p>
            <a href={props.newsUrl} target="_blanck" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
