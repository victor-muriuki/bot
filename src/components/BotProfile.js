import React from "react";


function BotProfile  ({ bot }) {
    return (
      <div className=" card-image">
        <img src={bot.avatar_url} alt={bot.name} />
        <p>Name: {bot.name}</p>
        <p>Health: {bot.health}</p>
        {/* Include other bot details */}
      </div>
    );
  };


  export default BotProfile;