import React from "react";


function BotCollection ({ bots, onAddToArmy }) {
    return (
      <div>
        <h2>Bot Collection</h2>
        {bots.map((bot) => (
          <div key={bot.id}>
            <BotProfile bot={bot} />
            <button onClick={() => onAddToArmy(bot)}>Add to Army</button>
          </div>
        ))}
      </div>
    );
  };

  export default BotCollection;
