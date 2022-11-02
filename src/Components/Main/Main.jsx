import React from "react";
import "./main.css";
import Empty from '../Empty/Empty'
import ChatWindow from '../../Containers/ChatWindow/ChatWindow'

const Main = ({ user, activeUserId }) => {
    const renderMainContent = () => {
        if (!activeUserId) {
            return <Empty user={user} activeUserId={activeUserId} />;
        } else {
            return <ChatWindow activeUserId={activeUserId} />;
        }
    };
    return <main className="Main">{renderMainContent()}</main>;
};
export default Main;