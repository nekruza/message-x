import user from "./generateUser";
import contacts from "./contacts";
import activeUserId from "./activeUserID";
import messages from "./messages";
import typing from "./typing";
import { combineReducers } from "redux";

export default combineReducers({
    user,
    messages,
    typing,
    contacts,
    activeUserId
});