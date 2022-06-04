import React from 'react';
import classes from './messages.module.css';
import MessageCard from './messageCard';
import { GetMessages } from "../../../SERVICES/service"
import { useState} from "react";
import ClockLoader from "react-spinners/ClockLoader";
import { css } from "@emotion/react";

const Messages = () => {
    const [messages, setMessages] = useState([{}]);
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#FD752C");

    React.useEffect(() => {
        GetMessages()
          .then((data) => {
            setLoading(!loading)
            setMessages(data.data.data);
          })
          .catch((error) => console.error(error))
      }, [])

    const override = css`
    display: block;
    margin: auto 0;
    top: 220px;
    left: 45%;
    `;

    return(
      <div>
        {
            (loading)? <ClockLoader css={override} color={color} loading={loading} size={100}  />
            :
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
      }
      </div>
    );
}
export default Messages;