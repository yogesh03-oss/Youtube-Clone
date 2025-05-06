import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import yogeh from '../../assets/yogeh.jpg'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment/moment'
import { data, useParams } from 'react-router-dom'



const PlayVideo = () => {

    const {videoId} = useParams();

    const [apiData,setApidata] = useState(null);            //fatchVideoData
    const [channelData,setchannelData] = useState(null);    //fatchOtherData
    const [commentData,setCommentData] = useState();



    const fatchVideoData = async () =>{
        //fetching Video Data
        const videodetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(videodetails_url).then(res=>res.json()).then(data => setApidata(data.items[0]));
    }

    const fatchOtherData = async () =>{
        //fetching Channel Data
        const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
        await fetch(channelData_url).then(res=>res.json()).then(data=> setchannelData(data.items[0]));

       
    }

    useEffect(()=>{
        fatchVideoData();
    },[videoId] )

    useEffect(() =>{
        fatchOtherData();
    },[apiData])


  return (
        <div className="play-video">
            {/*<video src={video1} controls autoplay mute></video>*/}    
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h3>{apiData?apiData.snippet.title:"Video title"}</h3>
            <div className="play-video-info">
                <p>{value_converter(apiData?apiData.statistics.viewCount:"viewcount")} views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""} </p>
                <div>
                    <span><img src={like} alt="" />{value_converter(apiData?apiData.statistics.likeCount:"16k")}</span>
                    <span><img src={dislike} alt="" />{value_converter(apiData?apiData.statistics.favoriteCount:"1")}</span>
                    <span><img src={share} alt="" />share</span>
                    <span><img src={save} alt="" />save</span>
                </div>
            </div>

            <hr />

            <div className="publisher">
                <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />           
              <div>
                <p>{apiData?apiData.snippet.channelTitle:""}</p>
                <span>{channelData?value_converter(channelData.statistics.subscriberCount):"1M"} Subscribers</span>
              </div> 
              <button>Subscribe</button>
            </div>

            <div className="vid-description">
               <p>{apiData?apiData.snippet.description.slice(0,240):"Description"}..more</p>
                <hr />
                <h4>{apiData?value_converter(apiData.statistics.commentCount):108} Comments</h4>





                    <div className="comment">
                        <img src={user_profile} alt="" />
                        <div>
                            <h3>King-of-yogesh <span>2 days ago</span></h3>
                            <p>Lorem ipsum dolor sit amet.</p>
    
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>143</span>
                                <img src={dislike} alt="" />
                                <span>1</span>
                            </div>
                        </div>
                    </div>
                    <div className="comment">
                        <img src={user_profile} alt="" />
                        <div>
                            <h3>King-of-yogesh <span>2 days ago</span></h3>
                            <p>Lorem ipsum dolor sit amet.</p>
    
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>143</span>
                                <img src={dislike} alt="" />
                                <span>1</span>
                            </div>
                        </div>
                    </div>
                    <div className="comment">
                        <img src={user_profile} alt="" />
                        <div>
                            <h3>King-of-yogesh <span>2 days ago</span></h3>
                            <p>Lorem ipsum dolor sit amet.</p>
    
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>143</span>
                                <img src={dislike} alt="" />
                                <span>1</span>
                            </div>
                        </div>
                    </div>
                    <div className="comment">
                        <img src={user_profile} alt="" />
                        <div>
                            <h3>King-of-yogesh <span>2 days ago</span></h3>
                            <p>Lorem ipsum dolor sit amet.</p>
    
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>143</span>
                                <img src={dislike} alt="" />
                                <span>1</span>
                            </div>
                        </div>
                    </div>
                    <div className="comment">
                        <img src={user_profile} alt="" />
                        <div>
                            <h3>King-of-yogesh <span>2 days ago</span></h3>
                            <p>Lorem ipsum dolor sit amet.</p>
    
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>143</span>
                                <img src={dislike} alt="" />
                                <span>1</span>
                            </div>
                        </div>
                    </div>
                    <div className="comment">
                        <img src={user_profile} alt="" />
                        <div>
                            <h3>King-of-yogesh <span>2 days ago</span></h3>
                            <p>Lorem ipsum dolor sit amet.</p>
    
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>143</span>
                                <img src={dislike} alt="" />
                                <span>1</span>
                            </div>
                        </div>
                    </div>
                        
                   
                        
                    
                  
                   
                    
                          
                   
                    
               

               
                


            </div>
        </div>
  )
}

export default PlayVideo