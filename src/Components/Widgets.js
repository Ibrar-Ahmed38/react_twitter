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
                <h4 className="text-center">What's Happings</h4>

                <div className="trending__post">
                <div className="hashtags mt-5">
                    <table>
                        <td>
                            <tr>Trending in Pakistan
                            <a href="#"><i class="three__dots fas fa-ellipsis-h"></i></a>
                            </tr>                  
                            <tr className="hashdev">#ReactJs</tr>
                            <tr>112.M tweets</tr>  
                               
                        </td>
                    </table>

                    <table>
                        <td>
                            <tr>Trending in Pakistan
                            <a href="#"><i class="three__dots fas fa-ellipsis-h"></i></a>
                            </tr>                  
                            <tr className="hashdev">#ExpressJs</tr>
                            <tr>112.M tweets</tr>  
                               
                        </td>
                    </table>

                    <table>
                        <td className="trending__data">
                            <tr>Technology trending
                            <a href="#"><i class="three__dots fas fa-ellipsis-h"></i></a>
                            </tr>                  
                            <tr className="hashdev">#NodeJs</tr>
                            <tr>112.M tweets</tr>  
                               
                        </td>
                    </table>

                    <table>
                        <td className="trending__data">
                            <tr>Trending in Sindh
                            <a href="#"><i class="mern__dots fas fa-ellipsis-h"></i></a>
                            </tr>                  
                            <tr className="hashdev">#MernStackdeveloper</tr>
                            <tr>1M tweets</tr>  
                               
                        </td>
                    </table>

                    <table>
                        <td className="trending__data">
                            <tr>Trending in Pakistan
                            <a href="#"><i class="three__dots fas fa-ellipsis-h"></i></a>
                            </tr>                  
                            <tr className="hashdev">#BackendDeveloeper</tr>
                            <tr>11.M tweets</tr>  
                               
                        </td>
                    </table>
                    
                </div> 
            </div>
            </div>

          
        </div>
    )
}

export default Widgets
