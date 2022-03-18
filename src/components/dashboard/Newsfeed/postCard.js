import React from 'react';
import classes from './postCard.module.css'
import Card from 'react-bootstrap/Card';

const PostCard = () => {
    return(
        <div>
            <div className={classes.Allcards}>
            <div className={classes.Card}>
            <p className={classes.Title}>Examinations Schedule</p>
            <hr className={classes.Line} />
            <img className={classes.Img} src='https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80' 
            alt='image' />
            <p className={classes.Content}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
                unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <p className={classes.Published}>Published By: <b>Kalyan Chakravarthi</b> on 07/03/2022</p>
            </div>
            {/* <Card className={classes.Maincard}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
            </Card> */}
            
        </div>
        </div>

        
    );
}
export default PostCard;