import React, { useEffect, useRef } from "react";

const NewsItem = (props) => {
  const { title, description, imageUrl, newsUrl, author, date, source } = props;
  const cardRef = useRef(null);

  useEffect(() => {
    // Get the height of the tallest card
    const tallestCardHeight = Math.max(
      ...Array.from(document.querySelectorAll(".card")).map(
        (card) => card.offsetHeight
      )
    );
    // Set the height of all cards to match the tallest card
    Array.from(document.querySelectorAll(".card")).forEach(
      (card) => (card.style.height = tallestCardHeight + "px")
    );
  }, []);

  return (
    <div className="my-3">
      <div className="card" ref={cardRef}>
        <div style={{ justifyContent: "flex-end" }} className="d-flex">
          <span className="badge rounded-pill bg-danger"> {source} </span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
