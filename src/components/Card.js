import React from "react";
import "./Card.css";
import "font-awesome/css/font-awesome.min.css";
const Card = (props) => {
  const { name, coverImg, position, img } = props.user;
  return (
    <div className="card">
      <div className="content">
        <div className="img-1">
          <img src={coverImg} alt="img1" className="card-img-top" />
          <ul>
            <li>
              <a href="https://www.linkedin.com">
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/">
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="back"></div>
        <div className="content-box">
          <div className="img-2">
            <img src={img} alt="img1" className="card-img-top" />
          </div>

          <h4>
            {name}
            <br></br>
            <span>{position}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
