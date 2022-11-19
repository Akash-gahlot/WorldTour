import React from "react";

export default function Card(props) {
  return (
    <div class="card">
      <img
        src={props.imageUrl}
        alt="Avatar"
        width="50%"
        height="300px"
      />
      <div class="container">
        <h4>
          <b class="card-title">{props.location.toUpperCase()}</b>
        </h4>
        <p class="title">{props.title}</p>
        <p>
          {props.description}
        </p>
        <div class="nav-links">
          <a href={props.googleMapsUrl} class="btn text-right">
            <img
              src="https://cdn-icons-png.flaticon.com/512/8920/8920213.png"
              alt="gps"
              srcset=""
              width="50px"
            />
          </a>
          <a href={props.explore} class="btn explore">
            Explore..
          </a>
          <a href="#" class="btn text-right reviewhover">
          <span class="reviews">Reviews</span>
            <img
              src="https://cdn4.iconfinder.com/data/icons/testimonial/639/quote_testimonial_feedback_reviews_comment_bubble_chat_talk-512.png"
              alt="Review"
              srcset=""
              width="50px"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
