import React from 'react';
import classes from './postCard.module.css'

const Card = (props) => {
    if (props.timeStamp !== undefined) {
        var time = props.timeStamp.slice(0, 10)
    }
    return (
        <div className={classes.Allcards} key={props.index}>
            <div className={classes.Card}>
                <p className={classes.Title}>{props.Title}</p>
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