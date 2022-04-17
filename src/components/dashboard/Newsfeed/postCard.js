import React from 'react';
import classes from './postCard.module.css'
import { NavLink } from 'react-router-dom'

const PostCard = () => {
    return(
        <div className={classes.NewsFeed}>
        <div className={classes.Heading}>News Feed</div>
        <div className={classes.Buttons}>
        <NavLink 
        exact
        to="/news"
        className={classes.Button}>
        <span>Publish Post</span>
        </NavLink>
        <NavLink 
        exact
        to="/news/newsfeed"
        className={classes.Button}>
        <span>NewsFeed</span>
        </NavLink>
      </div>
      <div className={classes.Filter}>
        <form>
          <label for="Category">Filter By</label>
          <select name="Category">
            <option value="campusnews">Campus News</option>
            <option value="officecirculars">Office Circulars</option>
            <option value="examinations">Examinations</option>
            <option value="placements">Placements</option>
            <option value="sports">Sports</option>
            <option value="fests">Fests</option>
          </select>
        </form>
      </div>
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
        </div>
        </div>
    
        
    );
}
export default PostCard;