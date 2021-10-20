
import React from 'react'
import Images from './Images/ibrar.jpg'
import './Post.css'


const Post = ({displayName, userName, verified, text, images}) => {
    return (
        <>
        <div className="post"> 
            <img src={Images} className="post_img" alt="Ibrar.jpg"/>
        </div>
        
        <div className="post-body">
        <div className="post_header">
            <div className="post_heading">
                <h3>Ibrar Ahmed
                    <span>
                    <i class="verifed__tick far fa-badge-check"></i>
                    </span>
                    </h3>

                <div className="headerDiscription">
                    <p>Hello this is a my first post in twitter clone</p>
                </div>
            </div>
            
            <div className="post__section d-flex align-items-lg-center mx-auto justify-content-center ">
                <img src={Images} className="d-flex align-items-lg-center mx-auto justify-content-center" alt="ibrar.jpg" />
            </div>
        </div>
        </div>
   </>
    )
}

export default Post
