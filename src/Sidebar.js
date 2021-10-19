import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import Sidebaroption from './Sidebaroption';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

import './sidebar.css'

function Sidebar () {
    return (
        <div className="sidebar">
            <TwitterIcon className="twitter__icon"/>

        <Sidebaroption active text="Home" Icon={HomeIcon}/>
        <Sidebaroption text="Explore" Icon={SearchOutlinedIcon}/>
        <Sidebaroption text="Notification" Icon={NotificationsOutlinedIcon}/>
        <Sidebaroption text="Messages" Icon={EmailOutlinedIcon}/>
        <Sidebaroption text="Bookmark" Icon={BookmarkIcon}/>
        <Sidebaroption text="Person" Icon={PersonOutlineRoundedIcon}/>
        <Sidebaroption text="More" Icon={MoreHorizRoundedIcon}/>


        {/* button tweet */}

        <button className="sidebar-btn">Tweets</button>
        </div>


    )
}
 
export default Sidebar
