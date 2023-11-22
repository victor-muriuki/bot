import BotProfile from "./BotProfile";
import YourBotArmy from "./YourBotArmy"
import React, { useState, useEffect } from 'react';

function BotCollection () {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
   
    fetch('http://127.0.0.1:3000/bots')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setBots(data);
      })
      .catch((error) => {
        console.error('Error fetching bots:', error);
      });
  }, []); 

  const addToArmy = (selectedBot) => {
    if (!army.includes(selectedBot)) {
      setArmy((prevArmy) => [...prevArmy, selectedBot]);
    }
  };

  const releaseFromArmy = (releasedBot) => {
    setArmy((prevArmy) => prevArmy.filter((bot) => bot !== releasedBot));
  };

  const dischargeBot = (botId) => {
    
    setArmy((prevArmy) => prevArmy.filter((bot) => bot.id !== botId));
  };

    return (
    //   <div>
    //     <h2>Bot Collection</h2>
    //     {bots.map((bot) => (
    //       <div key={bot.id}>
    //         <BotProfile bot={bot} />
    //         <button onClick={() => onAddToArmy(bot)}>Add to Army</button>
    //       </div>
    //     ))}
    //   </div>
    <div>
    <h1>War Bots</h1>

      <div>
        <h2>Bot Collection</h2>
        {bots.map((bot) => (
          <div key={bot.id}>
            <BotProfile bot={bot} />
            
          </div>
        ))}
      </div>

      <div>
        <h2>Your Bot Army</h2>
        <YourBotArmy army={army} onReleaseFromArmy={releaseFromArmy} onDischarge={dischargeBot} />
      </div>
      </div>
    );
  };

  export default BotCollection;
