import React from "react";
import BotProfile from "./BotProfile";

function YourBotArmy  ({ army, onReleaseFromArmy, onDischarge })  {
    return (
      <div className="card-container">
        <h2>Your Bot Army</h2>
        {army.map((bot) => (
          <div key={bot.id} className="bot-card">
            <BotProfile bot={bot} />
            <button onClick={() => onReleaseFromArmy(bot)}>Release from Army</button>
            {/* <button onClick={() => onDischarge(bot.id)}>Discharge</button> */}
          </div>
        ))}
      </div>
    );
  };

  export default YourBotArmy;