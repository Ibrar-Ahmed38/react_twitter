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
                    <img src={Images} className="Profile_img" alt="ibrar.jpg"/>
                    <input type="text" className="tweets_send" placeholder="What's happening?"/>
                        <br/>
                    <button className="everyone-btn mt-3"><i class="fas fa-globe-europe"></i> Every one can reply</button>            
                
                   
                </div>
            </form>
            <button className="tweet-btn">Tweet</button>
            
        </div>

        <div>
            <Post />

            <Post />

            <Post />
        </div>
  </>
    )
}

export default Tweet
