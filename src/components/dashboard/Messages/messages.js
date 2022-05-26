import React from 'react';
import classes from './messages.module.css';
import MessageCard from './messageCard';
import { GetMessages } from "../../../SERVICES/service"
import { useState} from "react";

const Messages = () => {
    const [messages, setMessages] = useState([{}]);
    React.useEffect(() => {
        GetMessages()
          .then((data) => {
            setMessages(data.data.data);
          })
          .catch((error) => console.error(error))
      }, [])

    return(
        <div className={classes.MainContainer}>
            <div className={classes.Heading}>Messages</div>
            {messages.map((oneMsg,index) => (
              <MessageCard
              index={index}
              msg={oneMsg.message}
              timeStamp={oneMsg.createdAt}
              postedBy = {oneMsg.postedBy?.fullName}
              email={oneMsg.postedBy?.email}
              />
          ))}
        </div>
    );
}
export default Messages;