import BotProfile from "./BotProfile";
import YourBotArmy from "./YourBotArmy"
import React, { useState, useEffect } from 'react';

function BotCollection () {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
   
    fetch('https://bots-s8ny.onrender.com/bots')
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
// releasesbot from recruited army
  const releaseFromArmy = (releasedBot) => {
    setArmy((prevArmy) => prevArmy.filter((bot) => bot !== releasedBot));
  };
// discharges bot from the war bots collection 
  const dischargeBot = (botId) => {
    
    setBots((prevArmy) => prevArmy.filter((bot) => bot.id !== botId));
    //releases bot from yourBotArmy once its discharged
    // releaseFromArmy(botId);
  };

    return (
 
    <div>
         <h1>War Bots</h1>

          <div className="card-container">
              <h2>Bot Collection</h2>
              {bots.map((bot) => (
              <div key={bot.id} className="bot-card">
              <BotProfile bot={bot} />
              <button onClick={() => addToArmy(bot)}>Add to Army</button>
              {/* //added the dischrge button to the war bots collection */}
              <button onClick={() => dischargeBot(bot.id)}>Discharge</button>
              </div>
         
              ))}
          </div>


         <div>
             <h2>Your Bot Army</h2>
             <YourBotArmy army={army} onReleaseFromArmy={releaseFromArmy}  />
         </div>
  </div>
    );
  };

  export default BotCollection;

