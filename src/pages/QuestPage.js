import React, { useState, useHook, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";



export default function QuestPage() {
    const [quests, setQuests] = useState([]);
    const [completed, setCompleted] = useState(['no', 'no']);

    const location = useLocation();
    
    const questList = {
      Donut: {
        task: 'Craft 1 chocolate donut',
        reward: '5000',
        completed: completed[0]
      },
      Strawberry: {
        task: 'Buy a strawberry',
        reward: '100',
        completed: completed[1]
      },
      Boss: {
        task: 'Defeat a boss',
        reward: '10,000',
        completed: completed[1]
      },
      House: {
        task: 'Buy a home and upgrade it',
        reward: '5000',
        completed: completed[1]
      }
    }



  useEffect(() => {
    const keys = Object.keys(questList);
    console.log(`You changed the page to: ${location.pathname}`);
    const arr = [];
    keys.forEach((key, index) => {
 
          arr.push([
            <div className='questCard column'> 
            <h1>{key} Quest</h1>
            <p>Task: {questList[key].task }</p>
            <p>Reward: {questList[key].reward} PIXEL</p>
            <p>Completed: {questList[key].completed}</p> 
            </div>
          ]);
    });
    setQuests(arr);

    }, [location]);

    return(
      <div className='Main-Quests'>
      <Link to={"/"} style={{textDecoration: 'none'}}><button className='buttonpic'>Back</button></Link>
      
              <div className='questCard'>{quests[0]}</div>
              <div className='questCard'>{quests[1]}</div>
              <div className='questCard'>{quests[2]}</div>
              <div className='questCard'>{quests[3]}</div>
                
         
      </div>
    )
}