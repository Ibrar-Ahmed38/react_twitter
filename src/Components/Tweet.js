import React , {useEffect, useState} from 'react'
import Images from './Images/ibrar.jpg'
import './tweet.css'
import Post from './Post'
import db from '../Firebase'

const Tweet = () => {

    const [posts, setPost] = useState([])

    useEffect( ()=>{
        db.collection('post').onSnapshot(onSnapshot=>(
            setPost(onSnapshot.doc.map(doc => doc.data))
        ))
    },[])

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

           {posts && posts.map( (postObj)=>{
               return(
                   <div>
                <Post 
                displayName={postObj.displayName}
                userName={postObj.userName}
                verified={postObj.verified}
                text={postObj.text}
                images={postObj.images}
                avatar={postObj.avatar}

                />
                   </div>
               )
           })}

        {/* {posts.map( (postObj)=>{
            return(
                <>
                <Post 
                displayName={postObj.displayName}
                userName={postObj.userName}
                verified={postObj.verified}
                text={postObj.text}
                images={postObj.images}
                avatar={postObj.avatar}
                />

                </>
            )
        })} */}

        
    
        </div>
    </>
    )
}

export default Tweet
