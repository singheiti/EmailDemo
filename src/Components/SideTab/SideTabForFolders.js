import React from "react";

const SideTabForFolders = (props) => {
    const viewInbox = () => {
        props.setShowInbox(true);
        props.setShowSpam(false);
        props.setShowOutbox(false);
        props.setShowSent(false);
    }

    const viewSpam = () => {
        props.setShowInbox(false);
        props.setShowSpam(true);
        props.setShowOutbox(false);
        props.setShowSent(false);
    }

    const viewOutbox = () => {
        props.setShowInbox(false);
        props.setShowSpam(false);
        props.setShowOutbox(true);
        props.setShowSent(false);
    }

    const viewSent = () => {
        props.setShowInbox(false);
        props.setShowSpam(false);
        props.setShowOutbox(false);
        props.setShowSent(true);
    }
    return (
        <div>        
            <ul className="collapsible-list">
                <li className="collapsible-content" onClick={viewInbox}>Inbox</li>
                <li className="collapsible-content" onClick={viewSpam}>Spam</li>
                <li className="collapsible-content" onClick={viewSent}>Sent</li>
                <li className="collapsible-content" onClick={viewOutbox}>Outbox</li>
            </ul>
        </div>
    )
}

export default SideTabForFolders