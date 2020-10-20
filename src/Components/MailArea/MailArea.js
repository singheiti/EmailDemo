import React, {useState, useEffect} from "react";
import AllMails from "./AllMails";
import SelectedMail from "./SelectedMail";
import MailHeader from "./MailHeader";
import inboxData from "../../Data/inbox";
import spamData from "../../Data/spam";
import Loader from "./../Loader";

const MailArea = (props) => {
   
    return(
        <div>
            <MailHeader />
            {props.data && props.data.length <= 0 ?
            <Loader /> :
            <div>
            <div className="all-mails">
                <AllMails 
                    data={props.data}
                    updateSelectedMail={props.updateSelectedMail}
                />
            </div>
            <div className="selected-mail">
                <SelectedMail 
                    data={props.selectedMail}
                />
            </div>
            </div>}
        </div>
    )
}

export default MailArea;