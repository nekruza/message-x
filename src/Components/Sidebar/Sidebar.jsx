import React from "react";
import "./sidebar.scss";
import User from "../../Containers/User/User";

const Sidebar = ({ contacts }) => {
    return (
        <aside className="Sidebar">
            {contacts.map(contact => <User user={contact} key={contact.user_id} />)}
        </aside>
    );
};
export default Sidebar;