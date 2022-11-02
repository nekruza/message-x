import React from "react";
import "./user.css";
import store from "../../store/index";
import { setActiveUserId } from "../../action/index";

const User = ({ user }) => {
    const { name, profile_pic, status } = user;

    function handleUserClick(user) {
        const id = setActiveUserId(user.user_id)
        store.dispatch(id);
    }

    return (
        <div className="User" onClick={() => handleUserClick(user)}>
            <img src={profile_pic} alt={name} className="User__pic" />
            <div className="User__details">
                <p className="User__details-name">{name}</p>
                <p className="User__details-status">{status}</p>
            </div>
        </div>
    );
};


export default User;