import React, { useEffect, useState } from "react";


const AllMails = (props) => {
    
    return (
        <div>
            {props.data && props.data.length > 0 ? props.data.map(item => {
                return (
                    <div>
                        <div onClick={() => {
                            props.updateSelectedMail(item)
                        }}>{item.subject}</div>
                        {/* <div>{item.content}</div> */}
                        <br />
                    </div>
                )
            }): null}
        </div>
    )
}

export default AllMails;