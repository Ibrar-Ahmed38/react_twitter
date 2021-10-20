import React from 'react'
import './Widgets.css'
import {TwitterTimeLineEmbed, TwitterShareButton, TwitterTweetEmbed} from 'react-twitter-embed'
import SearchIcon from '@mui/icons-material/Search';
const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets_input">
                <SearchIcon className="widgetsiconsearch"/>
                <input type="text" placeholder="Search__twitter"/>
            </div>

            <div className="widgets__WidgetContainer">
                <h2>What's Happings</h2>
            </div>
        </div>
    )
}

export default Widgets
