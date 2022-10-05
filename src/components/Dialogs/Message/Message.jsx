import React from "react";
import styleDial from "./../Dialogs.module.css";


const Message = (props) => {
   return <div className={styleDial.message}>{props.message}</div>
}


export default Message;
