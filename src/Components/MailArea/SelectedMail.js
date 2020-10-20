import React from "react";

const SelectedMail = (props) => {
    return (
        <div>
            {props.data != {} ? (
                <div>
                    <h1>{props.data.subject}</h1>
                    <br />
                   <p>{props.data.content}</p>
                </div>
            ) : null}
        </div>
    )
}

export default SelectedMail;