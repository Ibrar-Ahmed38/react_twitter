import React from 'react'
import Images from './Images/ibrar.jpg'
import './tweet.css'
import Post from './Post'

const Tweet = () => {
    return (
        <>
        <div className="tweet-box">
            <form action="">
                <div className="tweetbox_input">
                    <img src={Images} className="Profile_img" alt="" srcset="" />
                    <input type="text" className="tweets_send" placeholder="What's happens" id="" />
                    <input type="text" className="Input__url"  placeholder="Optional Enter your URL" />

                   
                </div>
            </form>
            <button className="tweet-btn">Tweet</button>
        </div>

        <div>
            <Post />
        </div>
  </>
    )
}

export default Tweet
