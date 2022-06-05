import React from 'react';
import classes from './postCard.module.css'
import { GrCloudDownload } from 'react-icons/gr';
import { FcLike } from 'react-icons/fc';
import logo from '../Assests/logo.png'

const Card = (props) => {
    if (props.timeStamp !== undefined) {
        var time = props.timeStamp.slice(0, 10)
    }

    const downloadHandle = (event) => {
        event.preventDefault();
        downloadImage(props.mediaUrl);
        
    }

    
    let ImageFormats = ["pdf", "doc", '.pptx'];
    var flag = true
    
    if (props.mediaUrl !== undefined) {
        var fileName = props.mediaUrl.split("---")[1]
        if(fileName!== undefined){
            var format = fileName.split(".")[1]
            var index;
            for (index = 0; index < ImageFormats.length; index++) {
                 if(ImageFormats[index] == format)
                 {
                    flag = false;
                    break;
                 }
              }
        }
    }
    
    


    function downloadImage(link) {
        var element = document.createElement('a');
        element.setAttribute('href', link);
      
        element.style.display = 'none';
        document.body.appendChild(element);
      
        element.click();
      
        document.body.removeChild(element);
      }
      


    return (
        <div className={classes.Allcards} key={props.index}>
            <div className={classes.Card}>
                <p className={classes.Title}>{props.Title}</p>                
                <hr className={classes.Line} />
                {
                    props.mediaUrl?.length > 0 
                    ?   
                        (flag)
                        ? <img className={classes.Img} src={props.mediaUrl} alt='Image' /> 
                        : <img className={classes.Img} src={logo} alt='Download Document' />
                    : 
                        null
                }
                <p className={classes.Content}>{props.msg}</p>
                {
                    (!flag) ?
                    <p className={classes.Content}>Download {format} Document to view</p>
                    :null
                }
                <p className={classes.Published}>Published By: <b>{props.postedBy}</b> on {time}</p>
                <div className={classes.Flex}>
                    
                        <FcLike
                        className={classes.IconLike}
                        onClick={downloadHandle}
                        />

                         <p className={classes.LikeCount}>{props.likes}</p>
                    
                        <GrCloudDownload 
                        className={classes.IconDownload}
                        onClick={downloadHandle}
                        />
                    
                </div>
            </div>
            
        </div>
    )
}
export default Card