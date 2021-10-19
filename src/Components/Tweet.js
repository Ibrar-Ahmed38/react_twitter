import React from 'react'
import Images from './Images/ibrar.jpg'
import './tweet.css'

const Tweet = () => {
    return (
        <div className="tweet-box">
            <form action="">
                <div className="tweetbox_input">
                    <img src={Images} className="Profile_img" alt="" srcset="" />
                    <input type="text" className="tweets_send" placeholder="What's happens" id="" />
                    {/* <input type="text"  placeholder="Enter your URL" /> */}

                   
                </div>
            </form>
            <button className="tweet-btn">Tweet</button>
        </div>
    )
}

export default Tweet
