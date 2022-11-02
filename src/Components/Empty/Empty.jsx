import React from "react";
import "./Empty.css";
import store from "../../store/index";
import { setActiveUserId } from "../../action/index";
import _ from "lodash";

const Empty = ({ user }) => {
    const { name, profile_pic, status } = user;
    const first_name = name.split(" ")[0];
    const { contacts } = store.getState();
    const userID = _.values(contacts)[0].user_id

    function handleUserClick() {
        const id = setActiveUserId(userID)
        store.dispatch(id);
    }

    return (
        <div className="Empty">
            <h1 className="Empty__name">Welcome, {first_name} </h1>
            <img src={profile_pic} alt={name} className="Empty__img" />
            <p className="Empty__status">
                <b>Status:</b> {status}
            </p>
            <button
                onClick={handleUserClick}
                className="Empty__btn"
            >
                Start conversation
            </button>
            <p className="Empty__info">
                Please start conversation with any of your friends just by clicking on their profile
            </p>
        </div>
    );

};
export default Empty;
