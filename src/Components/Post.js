import React from "react";
import Images from "./Images/ibrar.jpg";
import "./Post.css";

const Post = ({ displayName, userName, verified, text, images }) => {
  return (
    <>
      <div className="post">
        <img src={Images} className="post_img" alt="Ibrar.jpg" />
   

      <div className="post-body">
        <div className="post_header">
          <div className="post_heading">
            <h4>
              {displayName} {""}
              <span>
                  <i className="verifed__tick far fa-badge-check"></i>
              </span>
              <h5>@{userName}</h5>
            </h4>

            <div className="headerDiscription">
              <p>
              {text}
              </p>
            </div>
          </div>

          <div className="psot__img">
            <img
             src={Images} className="setPostImg" alt="ibrar.jpg" />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Post;
