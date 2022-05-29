import React from 'react';
import classes from './postCard.module.css'
import { GrCloudDownload } from 'react-icons/gr';

const Card = (props) => {
    if (props.timeStamp !== undefined) {
        var time = props.timeStamp.slice(0, 10)
    }

    const downloadHandle = (event) => {
        event.preventDefault();
        downloadImage(props.mediaUrl);
        
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
                
                <GrCloudDownload 
                className={classes.DownloadIcon}
                onClick={downloadHandle}
                />

                <hr className={classes.Line} />
                {props.mediaUrl?.length > 0 ? <img className={classes.Img} src={props.mediaUrl}
                    alt='image' /> : null}
                <p className={classes.Content}>{props.msg}</p>
                <p className={classes.Published}>Published By: <b>{props.postedBy}</b> on {time}</p>
            </div>
        </div>
    )
}
export default Card