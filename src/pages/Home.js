import React, { useState, useHook, useEffect } from "react";
import { Link } from "react-router-dom";
import '../App.css';
import 'react-awesome-slider/dist/styles.css';
import '../styles.css';

function Home() {
  const [connected, setConnected] = useState();
  const [quest, setQuest] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      update();
	    //addBNB();
    }, 1000);
  
    return () => clearInterval(interval);
   
  }, []);

  async function update() {
     
      setConnected(true);
  
  }


  return(
    <div>
      <div className='Main'>
        <div className="HeaderBar">
          <div >
          <img className='title' src='title.png' />
          </div>
        {quest ?  

        <img className='lock2' src='lock.png'/>
        :
        <p></p>
        }
             <div className='columnRight'>

               
             </div>
             <div className='column'>
              <a target='_blank' style={{color: 'cyan', textDecoration: 'none'}} href="https://pixelland.app/pixelland">
                <button className='craftButton' type='button'>Play </button>
                </a>
              <Link to='quests'  style={{color: 'cyan', textDecoration: 'none'}}>
               <button component={Link} className='craftButton3' type='button'> Quests </button>
             </Link>
             
               <Link to='marketplace'  style={{color: 'cyan', textDecoration: 'none'}}>
               <button component={Link} className='craftButton2' type='button'> Marketplace </button>
             </Link>
               <Link to='character'  style={{color: 'cyan', textDecoration: 'none'}}>
               <button className='craftButton4' type='button'>Create Character </button>
               </Link>
               
            </div>
            </div>       
        </div>
   </div>
  )
} 



export default Home;
