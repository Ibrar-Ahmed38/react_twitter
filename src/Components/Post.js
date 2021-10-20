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
              Ibrar Ahmed
              <span>
                  <i className="verifed__tick far fa-badge-check"></i>
              </span>
              <h5>@ibrarsoomro88</h5>
            </h4>

            <div className="headerDiscription">
              <p>
                Hello this is a my first post in twitter clone Lorem ipsum dolor
                sit  in twitter clone Lorem ipsum dolor
                sit 
              </p>
            </div>
          </div>

          <div className="psot__img">
            <img
             src="https://media.giphy.com/media/YRK6HL1CEMUxZHLvjl/giphy.gif" className="setPostImg" alt="ibrar.jpg" />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Post;
