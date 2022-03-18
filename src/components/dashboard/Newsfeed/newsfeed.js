import React from 'react';
import PostCard from './postCard';
import classes from './newsfeed.module.css';



const NewsFeed = () => {
    return(
        <div className={classes.NewsFeed}>
            <div className={classes.Heading}>News Feed</div>
            <div className={classes.Buttons}>
            <button className={classes.Button}><span>Publish Post</span></button>
            <button className={classes.Button}><span>NewsFeed</span></button>
            </div>
            <div>
            
            </div>
            <div className={classes.FormContainer}>
            <form >
            <label for="Category">Select Category</label>
                <select name="Category">
                    <option value="campusnews">Campus News</option>
                    <option value="officecirculars">Office Circulars</option>
                    <option value="examinations">Examinations</option>
                    <option value="placements">Placements</option>
                    <option value="sports">Sports</option>
                    <option value="fests">Fests</option>
                </select>

                
                <label for="Category">Select News Channels</label><br/>
                <input type="checkbox" name="engineering" value="engineering"/>
                <label for="Engineering">Engineering</label>

                <input type="checkbox" name="pharmacy" value="pharmacy"/>
                <label for="pharmacy">Pharmacy</label>

                <input type="checkbox" name="diploma" value="diploma"/>
                <label for="Diploma">Diploma</label>

                <input type="checkbox" name="mca" value="mca"/>
                <label for="mca">Management & MCA</label>

                <input type="checkbox" name="aec" value="aec"/>
                <label for="aec">Aditya Engineering College (Engineering)</label>

                <input type="checkbox" name="acet" value="acet"/>
                <label for="acet">Aditya College of Engineering & Technology (Engineering)</label>

                <input type="checkbox" name="acoe" value="acoe"/>
                <label for="acoe">Aditya College of Engineering (Engineering)</label>

                <input type="checkbox" name="aecd" value="aecd"/>
                <label for="aecd">Aditya Engineering College (Diploma)</label>

                <input type="checkbox" name="acetd" value="acetd"/>
                <label for="acetd">Aditya College of Engineering & Technology (Diploma)</label>

                <input type="checkbox" name="acoed" value="acoed"/>
                <label for="acoed">Aditya College of Engineering (Diploma)</label>

                <input type="checkbox" name="aecm" value="aecm"/>
                <label for="aecm">Aditya Engineering College (Management & MCA)</label>

                <input type="checkbox" name="acetm" value="acetm"/>
                <label for="acetm">Aditya College of Engineering & Technology (Management & MCA)</label>

                <input type="checkbox" name="acoem" value="acoem"/>
                <label for="agbsm">Aditya Global Business School (Management & MCA)</label>

                <input type="checkbox" name="pg" value="pg"/>
                <label for="pg">Aditya Institute of P.G. Studies (Management & MCA)</label>

                <input type="checkbox" name="apc" value="apc"/>
                <label for="apc">Aditya Pharmacy College (Pharmacy)</label>

                <input type="checkbox" name="acop" value="acop"/>
                <label for="acop">Aditya College of Pharmacy (Pharmacy)</label>


                <br/><label>Title</label>
                <input type="text" name="firstname" placeholder="Enter Title"/>
                <label>Message</label>
                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                <label for="upload">Upload Your Document</label>
			    <input type="file" id="upload" name="upload" ></input>
                <input type="submit" value="Submit"/>
            </form>
            </div>
            <div className={classes.Filter}>
            <form >
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

            <PostCard/>
            <PostCard/>
        </div>
    )
}

export default NewsFeed;