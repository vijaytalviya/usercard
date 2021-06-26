import React from "react";
import "./Card.css";
import "font-awesome/css/font-awesome.min.css";
const Card = (props) => {
  const { name, img, position } = props.user;
  return (
    <div className="card">
      <div className="content">
        <div className="img-container">
          <img src={img} alt="img1" className="card-img-top" />
        </div>
        <div className="content-box">
          <h4>
            {name}
            <br></br>
            <span>{position}</span>
          </h4>
        </div>
        <ul>
          <li>
            <a href="#">
              <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
