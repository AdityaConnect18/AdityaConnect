import React from 'react';
import classes from './postCard.module.css'

const Card = (props) => {
    if(props.timeStamp!==undefined)
    {
        var time=props.timeStamp.slice(0,10)
    }
    return(
        <div className={classes.Allcards} key={props.index}>
              <div className={classes.Card}>
              <p className={classes.Title}>{props.Title}</p>
              <hr className={classes.Line} />
              <img className={classes.Img} src='https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80' 
              alt='image' />
              <p className={classes.Content}>{props.msg}</p>
                  <p className={classes.Published}>Published By: <b>{props.postedBy}</b> on {time}</p>
              </div>
            </div>
    )
    }
export default Card