import React from "react";
import "./ChallengeItem.css";

const ChallengeItem = ({
  challenge,
  onCompleteToggle
}) => {
  const { id, text, complete, visible } = challenge;
  
  return (
    <div className="ChallengeItem"
    onClick={() => {
        onCompleteToggle(challenge.id);
    }}
    >
      <div className={`content ${complete ? "complete" : ""}`}>
        {visible ? (
            <div
                className="text"
            >
                    {text}
            </div>
        ) : (
            <div>
                ???
            </div>
        )}        
      </div>
      
    </div>
  );
};

export default ChallengeItem;