import React, { useEffect, useState } from 'react';
import './Stylesheets/App.css'
import Headers from "./Components/Headers";
import SideTabForFolders from "./Components/SideTab/SideTabForFolders";
import MailArea from "./Components/MailArea/MailArea";
import inboxData from "./Data/inbox";
import spamData from "./Data/spam";
import sentData from "./Data/sent";
import outboxData from "./Data/outbox";
import Loader from "./Components/Loader";

const App = () => {
  
  const [showInbox, setShowInbox] = useState(true);
  const [showSpam, setShowSpam] = useState(false);
  const [showOutbox, setShowOutbox] = useState(false);
  const [showSent, setShowSent] = useState(false);

  const [data, updateData] = useState([]);
  const [selectedMail, updateSelectedMail] = useState({});

  useEffect(() => {
      if(showOutbox) {
          updateData(outboxData);
      }
      else if(showSpam) {
          updateData(spamData);
      }
      else if(showSent) {
        updateData(sentData);
      }
      else {
        updateData(inboxData);
      }
  }, [showInbox, showSpam, showOutbox, showSent, data])

  return (
    <React.Fragment>
      <Headers />
      <div className="main-div">
        <div className="side-tab-for-folders">
          <SideTabForFolders
            showInbox={showInbox}
            setShowInbox={setShowInbox}
            showSpam={showSpam}
            setShowSpam={setShowSpam} 
            data={data}
            updateData={updateData}
            showOutbox={showOutbox}
            setShowOutbox={setShowOutbox}
            showSent={showSent}
            setShowSent={setShowSent}
          />
        </div>
        {data && data.length <= 0 ? <Loader /> : (
        <div className="mail-area">
          <MailArea
            showInbox={showInbox}
            setShowInbox={setShowInbox}
            showSpam={showSpam}
            setShowSpam={setShowSpam}   
            selectedMail={selectedMail}
            updateSelectedMail={updateSelectedMail}
            showOutbox={showOutbox}
            setShowOutbox={setShowOutbox}
            showSent={showSent}
            setShowSent={setShowSent}
            data={data}
          />
        </div>
        )}
      </div> 

    </React.Fragment>
  )
}

export default App;
