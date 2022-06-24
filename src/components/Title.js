import React, { useState, useEffect, useMemo } from "react"
import './style.css';
import { Link } from "react-router-dom";
import SignInScreen from "./FirebaseLogin";
import $ from "jquery";
import Wallet from "./SolanaCard";
//require('@solana/wallet-adapter-react-ui/styles.css');
// const programID = new PublicKey(idl.metadata.address);

export default function Group1() {
  const [connected, setConnected] = useState(false);
  const [bgState, setBgState] = useState('bgmain');
  const [showGame, setShowGame] = useState(true);


  useEffect(() => {
    $('#frame').addClass(bgState);

    $('#Voxelland').hover(function() {
      $('#frame').addClass('bg1');
      $('#frame').removeClass('bgmain');
      setBgState('bg2');
      setShowGame(false);
  }, function() {
    $('#frame').removeClass('bg1');
    $('#frame').addClass('bgmain');
    setShowGame(true);
});

    $('#Pixelland').hover(function() {
        $('#frame').addClass('bg2');
        $('#frame').removeClass('bgmain');
        setBgState('bg1');
        setShowGame(false);
    }, function() {
      $('#frame').removeClass('bg2');
      $('#frame').addClass('bgmain');
      setShowGame(true);
  });

    $('#PixellandSaga').hover(function() {
      $('#frame').addClass('bg3');
      $('#frame').removeClass('bgmain');
      setBgState('bg3')
      setShowGame(false);
  } , function() {
      $('#frame').removeClass('bg3');
      $('#frame').addClass('bgmain');
      setShowGame(true);
  });
  }, [])

    return (
        <div id='frame'>
  
        <div >
          <div className="group-2410 flex-col">
          <div >
          <img className='titleNew' src='title.png' />
          </div>
            <div className="column">
              <div className="group-2410 flex-col">
                <div className="frame-4 flex-row-vstart-hstart">
                  <a style={{textDecoration: 'none'}} href="https://game.pixelland.app" className="txt-469 paddedOut">Play</a>
                </div>
                <div className="group-8510">
                  <p className="overRight" > <Wallet /></p>
                  <div className='column'>
                  <div id="Voxelland" className='bordered paddedOut Voxelland'>

              
              <a href="https://github.com/RebornGames/Voxelland/releases/download/0.1.0/VoxellandGame.exe"><p className="txt-461 ">Voxelland</p></a>
              <div className='row'>
              <p className="txt-471 ">Unlock character</p>
              <p className="txt-035 ">Closed Beta !</p> 
              </div>
              </div>
              <div id="Pixelland" className='bordered paddedOut Pixelland'>
              <div>
              <a href="https://github.com/RebornGames/Pixelland/releases/download/0.1.0/PixellandGame.exe"><p className="txt-461 ">Pixelland</p></a>
              <div className='row'>
              <p className="txt-471 ">Unlock character</p>
              <p className="txt-035 ">Closed Beta !</p> 
              
              </div>
              
              </div>
              </div>
              
              <div id="PixellandSaga" className='bordered paddedOut PixellandSaga'>
              <div>
              <a href="https://github.com/RebornGames/SamuraiSaga/releases/download/0.1.0/PixellandSaga.exe"><p className="txt-461 ">PixellandSaga</p></a>
              <div className='row'>
              <p className="txt-471 ">Unlock character</p>
              <p className="txt-035 ">Closed Beta !</p>
              </div>
              </div>
              </div>
             
             
          
                </div>
                <div className='column'>
                <Link style={{textDecoration: 'none'}} to='../marketplace'className="txt-252 over paddedOut">Marketplace</Link>
                <a href='https://twitter.com/PixellandMaker' target='_blank'> <p className="txt-284 paddedOut">Join the Community</p></a>
                </div>
          
                <div className='column'>
             <SignInScreen id='signIn' />
       
             </div>

           </div>
              </div>
             
          
          </div>
        </div>
        {!showGame ?  <embed src="https://pixelland.app/customize" style={{zIndex: -1}} className="char_game" ></embed> : 
        <embed src="https://pixelland.app/customize"  className="char_game" ></embed>
        }
      
     





        </div>
        </div>
      
  )
}