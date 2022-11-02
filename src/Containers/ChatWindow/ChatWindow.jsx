import React from "react";
import store from "../../store/index";
import Header from "../../Components/Header/Header";
import Chats from "../../Components/Chats/Chats";
import _ from "lodash";
import "./ChatWindow.css"
import MessageInput from "../Message/MessageInput";


const ChatWindow = ({ activeUserId }) => {
    const state = store.getState();
    const activeMsgs = state.messages[activeUserId];
    const activeUser = state.contacts[activeUserId];
    const { typing } = state;

    return (
        <div className="ChatWindow">
            <Header user={activeUser} />
            <Chats messages={_.values(activeMsgs)} />
            <MessageInput value={typing} />
        </div>
    );
};

export default ChatWindow;