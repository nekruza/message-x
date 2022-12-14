import React from "react";
import "./Chats.scss";

const Chat = ({ message }) => {
    const { text, is_user_msg } = message;
    return (
        <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}
        >{text}</span>
    );
};



const Chats = ({ messages }) => {
    const chatsRef = React.createRef();

    const scrollToBottom = () => {
        chatsRef.current.scrollTop =
            chatsRef.current.scrollHeight;
    };

    React.useEffect(() => {
        scrollToBottom()
    }, [messages])

    return (
        <div className="Chats" ref={chatsRef}>
            {messages.map(message => (
                <Chat message={message} key={message.number} />
            ))} </div>
    );

}
export default Chats;
