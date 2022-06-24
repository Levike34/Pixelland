
import React, { useState, useHook, useEffect } from "react";
import { Link } from "react-router-dom";
import '../App.css';
import getWeb3dos from '../getWeb3dos.js';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { BreadTile, CornTile, MushroomTile, StrawberryTile, ChickenTile, FishTile, FishTileBig, CheeseTile, CheeseTileBig, SeedsTile, SeedsTileBig,
	SteakTile, SalmonTile, WheatTile, ChocolateDonutTile, ChocolateTile, StrawberryCakeTile, CinnamonRollTile, Tile, PixelTile,
  CornTileBig, MushroomTileBig, StrawberryTileBig, ChickenTileBig, 
	SteakTileBig, SalmonTileBig, WheatTileBig, BreadTileBig, ChocolateDonutTileBig, ChocolateTileBig, StrawberryCakeTileBig, CinnamonRollTileBig, TileBig, PixelTileBig,
   } from "../tiles";
import HTMLFlipBook from "react-pageflip";
import Popup from 'reactjs-popup';
import '../styles.css';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, child, onValue, get } from "firebase/database";
import SignInScreen from "../components/FirebaseLogin";

const firebaseConfig = {
    apiKey: "AIzaSyC53kFlnq6MMtz1Yrs03qtMC3zLtBVt3fQ",
    authDomain: "pixelland-29cc4.firebaseapp.com",
    databaseURL: "https://pixelland-29cc4-default-rtdb.firebaseio.com",
    projectId: "pixelland-29cc4",
    storageBucket: "pixelland-29cc4.appspot.com",
    messagingSenderId: "152943033166",
    appId: "1:152943033166:web:b93130e00ed25013373c1f",
    measurementId: "G-YMQBN9P51G"
  };

function MarketPage() {
  const [connected, setConnected] = useState();
  const [mainPage, setMainPage] = useState(true);
  const [accounts, setAccounts] = useState(['0xAccount']);
  const [ethBal, setEthBal] = useState(1);
  const [pixelBal, setPixelBal] = useState(10000);
  //const [pixel, setPixel] = useState(10000);
 // const [resources, setResources] = useState();          
  const [resourceBalances, setResourceBalances] = useState([
	  100,//0    bread
	  50, //1    corn
	  50, //2    mushroom
	  50, //3    strawberry
	  10, //4    salmon
	  40, //5    chicken
	  5,  //6    steak
	  500,//7    wheat
	  2,  //8    chocolate
	  0,  //9    chocolate donut
	  0,  //10    strawberry cake
    0,  //11   cinnamon roll
    12, //12   fish
    5,  //13  cheese
    50  //14  seeds
	]);
  const [amount, setAmount] = useState(1);
  const [item1, setItem1] = useState(null);
  const [item2, setItem2] = useState(null);
  const [item3, setItem3] = useState(null);
  const [pair, setPair] = useState('a');
  const [tracker, setTracker] = useState(null);
  const [buyTracker, setBuyTracker] = useState('');
  const [amountToBuy, setAmountToBuy] = useState(null);
  const [showBook, setShowBook] = useState(false);
  const [mainItem, setMainItem] = useState(<BreadTileBig />);
  const [craftReq, setCraftReq] = useState([null,null,null]);
  const [calc, setCalc] = useState([null,null,null]);
  const [itemText, setItemText] = useState("Food is for eating and crafting."); 
  const [reqResources, setReqResources] = useState([null,null,null]);
  const [show, setShow] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);
  const [slidePage, setSlidePage] = useState(0);
  const [craftingPage, setCraftingPage] = useState(false);
  const [artifactStylePair, setArtifactStylePair] = useState(['artifactGlow', 'artifact' ]);
  const [did, setDid] = useState(false);
  const [quest, setQuest] = useState(false);
  const [pricePer, setPricePer] = useState(false);
  const [playerId, setPlayerId] = useState();


//const isMobile = width <= 768;

  const handleChange = (event) => {
    setAmount(parseInt(event.target.value));
  };
  const handleChange2 = (event) => {
    setAmountToBuy(parseInt(event.target.value));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getData();
      getBalance();
      update();
	    //addBNB();
    }, 1000);
  
    return () => clearInterval(interval);
   
  }, []);

  function getBalance() {


  }
 


 function getData() {
  const database = getDatabase();

  firebase.auth().onAuthStateChanged((user) => {
    
   
      //You're logged in!
  
      console.log(user.uid);
      const playerId = user.uid;
      const name = "jonny";

      const dbRef = ref(getDatabase());
      get(child(dbRef, `tokens/${playerId}`)).then((snapshot) => {
       if (snapshot.exists()) {
          console.log(snapshot.val());
          const coinBal = snapshot.val();
          const real = coinBal.coins.coins;
          const strawberry = coinBal.coins.strawberry;
          const seed = coinBal.coins.seed;
          const bread = coinBal.coins.bread;
          
          setPixelBal(real);
          resourceBalances[0] = bread;
          resourceBalances[14] = seed;
          resourceBalances[3] = strawberry;
  
       } else {
        console.log("No data available");
        setPixelBal(0);
        resourceBalances[0] = 0;
        resourceBalances[14] = 0;
        resourceBalances[3] = 0;
     }
    }).catch((error) => {
     console.error(error);
  } );


      setPlayerId(playerId);
     }
  )}

  async function update() {
     
     
     // setPixelBal(pixelBal);
      //setPixel(pixel);
      //setResources(resources);
      setConnected(true);
  
  }
 

  function faucet() {
    if(ethBal == 0) {
      alert(" https://testnet.binance.org/faucet-smart");
    }else if(!did) {
      let result = resourceBalances;
      let newArr = [];
      for (let i = 0; i < result.length; i++) {
        newArr.push(result[i] * 2);
      }
      setResourceBalances(newArr);
      alert("Resources have been transferred to you account:  "+newArr);
      setDid(true);
    } else {
      alert("1 per user.");
    }

  }

 function makeBread() {
    let arr = resourceBalances;
    let bal_check = resourceBalances[7] - (amount * 10);
    if (bal_check < 0) {
      return alert("Not enough resources.");
    } else {
      arr[7] -= (amount * 10);
      arr[0] += amount;
      setResourceBalances(arr);
      setReqResources([resourceBalances[7], null,null]);
    }
  }
  function makeCorn() {
    let arr = resourceBalances;
    let bal_check = resourceBalances[14] - (amount * 10);
    if (bal_check < 0) {
      return alert("Not enough resources.");
    } else {
      arr[14] -= (amount * 10);
      arr[1] += amount;
      setResourceBalances(arr);
      setReqResources([resourceBalances[14], null,null]);
    }
  }
  function makeMushroom() {
    let arr = resourceBalances;
    let bal_check = resourceBalances[14] - (amount * 20);
    if (bal_check < 0) {
      return alert("Not enough resources.");
    } else {
      arr[14] -= (amount * 20);
      arr[2] += amount;
      setResourceBalances(arr);
      setReqResources([resourceBalances[14], null,null]);
    }
  }
  function makeStrawberry() {
    let arr = resourceBalances;
    let bal_check = resourceBalances[14] - (amount * 10);
    if (bal_check < 0) {
      return alert("Not enough resources.");
    } else {
      arr[14] -= (amount * 10);
      arr[3] += amount;
      setResourceBalances(arr);
      setReqResources([resourceBalances[14], null,null]);
    }
  }
  function makeWheat() {
    let arr = resourceBalances;
    let bal_check = resourceBalances[14] - amount;
    if (bal_check < 0) {
      return alert("Not enough resources.");
    } else {
      arr[14] -= amount;
      arr[7] += amount;
      setResourceBalances(arr);
      setReqResources([resourceBalances[14], null,null]);
    }
  }
  function makeCheese() {
    let arr = resourceBalances;
    let bal_check = resourceBalances[6] - amount;
    if (bal_check < 0) {
      return alert("Not enough resources.");
    } else {
      arr[6] -= amount;
      arr[13] += amount;
      setResourceBalances(arr);
      setReqResources([resourceBalances[6], null,null]);
    }
  }
  function makeChocolate() {
    let arr = resourceBalances;
    let bal_check = resourceBalances[14] - (amount * 50);
    if (bal_check < 0) {
      return alert("Not enough resources.");
    } else {
      arr[14] -=  (amount * 50);
      arr[8] += amount;
      setResourceBalances(arr);
      setReqResources([resourceBalances[14], null,null]);
    }
  }
  function makeSalmon() {
    let arr = resourceBalances;
    let bal_check = resourceBalances[2] - (amount * 5);
    if (bal_check < 0) {
      return alert("Not enough resources.");
    } else {
      arr[2] -= (amount * 5);
      arr[4] += amount;
      setResourceBalances(arr);
      setReqResources([resourceBalances[2], null,null]);
    }
  }
  function makeFish() {
    let arr = resourceBalances;
    let bal_check = resourceBalances[2] - (amount * 3);
    if (bal_check < 0) {
      return alert("Not enough resources.");
    } else {
      arr[2] -= (amount * 3);
      arr[12] += amount;
      setResourceBalances(arr);
      setReqResources([resourceBalances[2], null,null]);
    }
  }
  function makeChicken() {
    let arr = resourceBalances;
    let bal_check = resourceBalances[1] - (amount * 5);
    if (bal_check < 0) {
      return alert("Not enough resources.");
    } else {
      arr[1] -= (amount * 5);
      arr[5] += amount;
      setResourceBalances(arr);
      setReqResources([resourceBalances[1], null,null]);
    }
  }
  


  function makeChocolateDonut() {
    let arr = resourceBalances;
    let index = arr[9];
    let req1 = arr[8];
    let req2 = arr[0];
    let bal_check = req1 - (amount * 3);
    let bal_check2 = req2 - amount;
    if (bal_check < 0 || bal_check2 < 0) {
      return alert("Not enough resources.");
    } else {
      arr[9] = index += amount;
      arr[8] = req1 -= (amount * 3);
      arr[0] = req2 -= amount;
      setResourceBalances(arr);
      setReqResources([resourceBalances[8], resourceBalances[0],null]);
      if(!quest) {
        let newPixelBal = pixelBal + 5000;
        setPixelBal(newPixelBal);
        setQuest(true);
        alert("Congratulations, you completed you first quest!  You received 5000 PIXEL.");
      }
    }
  }
  function makeStrawberryCake() {
    let arr = resourceBalances;
    let index = arr[10];
    let req1 = arr[3];
    let req2 = arr[0];
    let bal_check = req1 - amount;
    let bal_check2 = req2 - amount;
    if (bal_check < 0 || bal_check2 < 0) {
      return alert("Not enough resources.");
    } else {
    arr[10] = index += amount;
    arr[3] = req1 -= amount;
    arr[0] = req2 -= amount;
    setResourceBalances(arr);
    setReqResources([resourceBalances[3], resourceBalances[0],null]);

    }
  }
  function makeSteak() {
    let arr = resourceBalances;
    let index = arr[6];
    let req1 = arr[5];
    let req2 = arr[1];
    let bal_check = req1 -  (amount * 5);
    let bal_check2 = req2 -  (amount * 10);
    if (bal_check < 0 || bal_check2 < 0) {
      return alert("Not enough resources.");
    } else {
    arr[6] = index += amount;
    arr[5] = req1 -= (amount * 5);
    arr[1] = req2 -=  (amount * 10);
    setResourceBalances(arr);
    setReqResources([resourceBalances[3], resourceBalances[0],null]);

    }
  }
  function makeCinnamonRoll() {
    let arr = resourceBalances;
    let index = arr[11];
    let req1 = arr[0];
    let req2 = arr[1];
    let req3 = arr[13];
    let bal_check = req1 - amount;
    let bal_check2 = req2 - (amount * 5);
    let bal_check3 = req3- amount;
    if (bal_check < 0 || bal_check2 < 0 || bal_check3 < 0) {
      return alert("Not enough resources.");
    } else {
    arr[11] = index += amount;
    arr[0] = req1 - amount;
    arr[1] = req2 - (amount * 5);
    arr[13] = req3 - amount; 
    setResourceBalances(arr);
    setReqResources([resourceBalances[0],  resourceBalances[1],resourceBalances[13]]);
    }
  }


  function craftItem() {
    if (buyTracker == 0) {
      makeBread();
    } else if (buyTracker == 1) {
      makeCorn();
    }else if (buyTracker == 2) {
      makeMushroom();
    }else if (buyTracker == 3) {
      makeStrawberry();
    }else if (buyTracker == 4) {
      makeSalmon();
    }else if (buyTracker == 5) {
      makeChicken();
    }else if (buyTracker == 6) {
      makeSteak();
    }else if (buyTracker == 7) {
      makeWheat();
    }else if (buyTracker == 8) {
      makeChocolate();
    }else if (buyTracker == 9) {
      makeChocolateDonut();
    }else if (buyTracker == 10) {
     makeStrawberryCake();
    }else if (buyTracker == 11) {
      makeCinnamonRoll();
    } else if (buyTracker == 12) {
      makeFish();
    } else if (buyTracker == 13) {
      makeCheese();
    } 
}

  function selectItem() {
    setCalc([10,null,null]);
    showInfo(<BreadTileBig/>, "Bread is bread.  What did you think it was?");
    findCreation4Real(0);
    setShow(true);
    setBuyTracker(0);
    setPricePer(10);
  }
  function selectItem2() {
    setCalc([10,null,null]);
    showInfo(<CornTileBig/>, "Corn grows in the ground like any other plant does.");
    findCreation4Real(1);
    setShow(true);
    setBuyTracker(1);
    setPricePer(10);
  }
  function selectItem3() {
    setCalc([20,null,null]);
    showInfo(<MushroomTileBig/>, "Mushrooms are like tiny umbrellas growing out of the ground.");
    findCreation4Real(2);
    setShow(true);
    setBuyTracker(2);
    setPricePer(10);
  }
  function selectItem4() {
    setCalc([10,null,null]);
    showInfo(<StrawberryTileBig/>, "Strawberry.  Nature's sweet gift to mankind." );
    findCreation4Real(3);
    setShow(true);
    setBuyTracker(3);
    setPricePer(30);
  }
  function selectItem5() {
    let num = [5,null,null];
    setCalc(num);
    showInfo(<SalmonTileBig/>, "Salmon is among the best kind of fish available.  Fully of fats and protein, it is perfect for bodybuilders.");
    findCreation4Real(4);
    setShow(true);
    setBuyTracker(4);
    setPricePer(300);
  }
  function selectItem6() {
    setCalc([5,null,null]);
    showInfo(<ChickenTileBig/>, "Chicken is easy to get since chickens can't fly.  It's tasty too.");
    findCreation4Real(5);
    setShow(true);
    setBuyTracker(5);
    setPricePer(100);
  }
  function selectItem7() {
    setCalc([5,10,null]);
    setTracker(5);
    showInfo(<SteakTileBig/>, "Steak comes from cows and it tastes pretty good.  Better cook it with onions and peppers for the best flavor.");
    findCreation4Real(6);
    setShow(true);
    setBuyTracker(6);
    setPricePer(350);
  }

  function selectItem9() {
      setCalc([1,null,null]);
      showInfo(<WheatTileBig/>, "Wheat can be harvested and baked into a tasty loaf of bread.");
      findCreation4Real(7);
      setShow(true);
      setBuyTracker(7);
      setPricePer(5);
  }
  function selectItem10() {
    setCalc([50,null,null]);
    showInfo(<ChocolateTileBig/>, "Chocolate is good for baking cakes and other items.");
    findCreation4Real(8);
    setShow(true);
    setBuyTracker(8);
    setPricePer(10000);
  }
  function selectItem11() {
      setCalc([3,1,null]);
      showInfo(<ChocolateDonutTileBig/>, "Chocolate Donuts are the best donuts.");
      findCreation4Real(9);
      setShow(true);
      setBuyTracker(9);
      setPricePer(500);
  }
  function selectItem12() {
    setCalc([1,1,null]);
    setTracker(2);
    showInfo(<StrawberryCakeTileBig/>, "Strawberry cake is just like normal cake, but with strawberries in it.");
    findCreation4Real(10);
    setShow(true);
    setBuyTracker(10);
    setPricePer(500);
  }

  function selectItem13() {
    setCalc([1,5,1]);
    setTracker(2);
    showInfo(<CinnamonRollTileBig/>, "Cinnamon Rolls are made from bread and cinnamon.");
    findCreation4Real(11);
    setShow(true);
    setBuyTracker(11);
    setPricePer(1000);
  }

  function selectItem14() {
    setCalc([3, null, null]);
    setTracker(2);
    showInfo(<FishTileBig/>, "Fish swim in rivers and oceans and can be eaten raw or cooked.");
    findCreation4Real(12);
    setShow(true);
    setBuyTracker(12);
    setPricePer(100);
  }
  function selectItem15() {
    setCalc([1, null, null]);
    setTracker(2);
    showInfo(<CheeseTileBig/>, "Cheese, the best addition to any good food.");
    findCreation4Real(13);
    setShow(true);
    setBuyTracker(13);
    setPricePer(250);
  }
  function selectItem16() {
    setCalc([null, null, null])
    showInfo(<SeedsTileBig/>, "Seeds are used for growing plants.  They are vital in Pixelland.");
    findCreation4Real(14);
    setShow(false);
    setBuyTracker(14);
    setPricePer(1);
  }

  function book() {
    let flip = !showBook;
    setShowBook(flip);
  }

  function showInfo(x, y) {
    setMainItem(x);
    setItemText(y);
  }

  function findDirectPrice() {
    let x = buyTracker;
    if(x == 0) {
        return 10;
    } else if(x == 1) {
        return 10;
    } else if(x == 2) {
        return 10;
    } else if(x == 3) {
        return 30;
    } else if(x == 4) {
        return 300;
    } else if(x == 5) {
        return 100;
    } else if(x == 6) {
        return 350;
    } else if(x == 7) {
        return 5;
    } else if(x == 8) {
        return 10000;
    }else if(x == 9) {
        return 500;
    } else if(x == 10) {
        return 500;
     } else if(x == 11) {
        return 1000;
    } else if(x == 12) {
        return 100;
     }else if(x == 13) {
        return 250;
     }  else if(x ==14) {
       return 1;
     }
}

  function buyResources() {
    
    
    const db = getDatabase();
   
      let arr = resourceBalances;
      let index = buyTracker;
      let price = findDirectPrice();
      console.log(price);
      let newPixelBal = pixelBal - (price * amountToBuy);
      if(newPixelBal < 0) {
        return alert("Not enough pixel.");
      } else {
        arr[index] += amountToBuy;
        console.log(arr[index]);
        setPixelBal(newPixelBal);
        setResourceBalances(arr);
        setAmountToBuy('');
        set(ref(db, `tokens/${playerId}/coins`), {
          coins: newPixelBal,
          strawberry: resourceBalances[3],
          bread: resourceBalances[0],
          seed: resourceBalances[14]
        });
        getData()
      }

  }

   function findCreation4Real(t) {
    if(t == 0) {
      //await resources.methods.makeHealthPotion(1).send({from: accounts[0]});
      setItem1(<WheatTile />);     //10
      setItem2(null); //5
      setItem3(null);
      setCraftReq([10, null, null]);
      setReqResources([resourceBalances[7], null,null]);
      //setCalc([[10, 5, null]]);
      //console.log("You created a Health Potion.");
    } else if (t == 1) {
      setItem1(<SeedsTile />);  //10
      setItem2(null); //5
      setItem3(null);
      setCraftReq([10, null, null]);
      setReqResources([resourceBalances[14], null,null]);
     // setCalc([[10, 5, null]]);
    } else if (t == 2) {
      setItem1(<SeedsTile />);  //10
      setItem2(null); //5
      setItem3(null);
      setCraftReq([20, null, null]);
      setReqResources([resourceBalances[14], null,null]);
     // setCalc([[10, 10, 5]]);
     } else if (t == 3) {
      setItem1(<SeedsTile />);  //10
      setItem2(null); //5
      setItem3(null);
      setCraftReq([10, null, null]);
      setReqResources([resourceBalances[14], null,null]);
	   } else if (t == 4) {
      setItem1(<MushroomTile />);  //10
      setItem2(null); //5
      setItem3(null);
      setCraftReq([5, null, null]);
      setReqResources([resourceBalances[2], null,null]);
    //  setCalc([[5, 10, null]]);
		} else if (t == 5) {
      setItem1(<CornTile />);  //10
      setItem2(null); //5
      setItem3(null);
      setCraftReq([5, null, null]);
      setReqResources([resourceBalances[1], null,null]);
		} else if (t == 6) {
      setItem1(<BreadTile />);  //10
      setItem2(<CornTile />); //5
      setItem3(null);
      setCraftReq([5, 10, null]);
      setReqResources([resourceBalances[0], resourceBalances[1],null]);
		}else if (t == 7) {
      setItem1(<SeedsTile />);  //10
      setItem2(null); //5
      setItem3(null);
      setCraftReq([1, null, null]);
      setReqResources([resourceBalances[14], null,null]);
		}else if (t == 8) {
      setItem1(<SeedsTile/>);  //10
      setItem2(null); //5
      setItem3(null);
      setCraftReq([50, null, null]);
      setReqResources([resourceBalances[14], null,null]);
		}else if (t == 9) {
      setItem1(<ChocolateTile />);  //10
      setItem2(<BreadTile/>); //5
      setItem3(null);
      setCraftReq([3, 1, null]);
      setReqResources([resourceBalances[8], resourceBalances[0],null]);
		}else if (t == 10) {
      setItem1(<StrawberryTile />);  //10
      setItem2(<BreadTile/>); //5
      setItem3(null);
      setCraftReq([1, 1, null]);
      setReqResources([resourceBalances[3], resourceBalances[0],null]);
		}else if (t == 11) {
      setItem1(<BreadTile />);  //10
      setItem2(<CornTile />); //5
      setItem3(<CheeseTile/>);
      setCraftReq([1, 5, 1]);
      setReqResources([resourceBalances[0],  resourceBalances[1],resourceBalances[13]]);
		}else if (t == 12) {
      setItem1(<MushroomTile />);  //10
      setItem2(null); //5
      setItem3(null);
      setCraftReq([3, null, null]);
      setReqResources([resourceBalances[2], null,null]);
		}else if (t == 13) {
      setItem1(<SteakTile/>);  //10
      setItem2(null); //5
      setItem3(null);
      setCraftReq([1, null, null]);
      setReqResources([resourceBalances[6], null,null]);
		} else if (t == 14) {
      setItem1(null);  //10
      setItem2(null); //5
      setItem3(null);
      setCraftReq([null, null, null]);
      setReqResources([null, null,null]);
		}else {
      setItem1(null); //100
      setItem2(null); //5
      setItem3(null); //10_000
      setCraftReq([null, null, null]);
      setReqResources([null,null,null]);
      setCalc([null,null,null]);
      setShow(false);
    }
    return;
  }

  function clear() {
    setCraftReq([null,null,null]);
    setCalc([null, null, null]);
    setPair(null);
    setShow(false);
  }

  function calculate() {
    let current = craftReq;
    if (craftReq[1] == null) {
      if(amount == 1) {
        setCalc(current);
      } else if (amount == 5) {
        let a = current[0] * 5;
        let b = null;
        let c = null;
        setCalc([a,b,c]);
      } else if (amount == 20) {
        let a = current[0] * 20;
        let b = null;
        let c = null;
        setCalc([a,b,c]);
      }
    }else if (craftReq[2] != null) {
      if(amount == 1) {
        setCalc(current);
      } else if (amount == 5) {
        let a = current[0] * 5;
        let b = current[1] * 5;
        let c = current[2] * 5;
        setCalc([a,b,c]);
      } else if (amount == 20) {
        let a = current[0] * 20;
        let b = current[1] * 20;
        let c = current[2] * 20;
        setCalc([a,b,c]);
      }
    } else {
      if(amount == 1) {
        setCalc(current);
      } else if (amount == 5) {
        let a = current[0] * 5;
        let b = current[1] * 5;
        let c = null;
        setCalc([a,b,c]);
      } else if (amount == 20) {
        let a = current[0] * 20;
        let b = current[1] * 20;
        let c = null;
        setCalc([a,b,c]);
      }
    }

  }


  function switchSlidePagePlus() {
      let now = slidePage + 1;
      setSlidePage(now);
  }

  function switchSlidePageMinus() {
      let now = slidePage - 1;
      setSlidePage(now);
  }

  function changeCraftPage() {
    let now = !craftingPage;
    let a = artifactStylePair[0];
    let b = artifactStylePair[1];
    setCraftingPage(now);
    setArtifactStylePair([b, a]);
  }


  return(
    <div className='Main-Marketplace'>
      <div id='start'className='column'>
      <div className="HeaderBar">
        <div className="column">
      <img className='infoUi'src='character.png'></img>
      <Link to={'/'} style={{textDecoration: 'none'}} >
      <button component={Link} className='buttonpic buyButton' type='button'>Home</button>
      </Link>
    </div>
    <div className='mask'>
      <div className='column'>
    <div className='infoUi2'>
      <div className='column columnPicUi'>
        <p>User: Jonny</p>
        <p>Pixel: {pixelBal}</p>
        </div>

        </div>
        <Popup trigger={<button className='buttonpic' type='button'>Resource Faucet</button>} position="left center">
          {ethBal > 0 ?
          <div className='popupper'>
          <h3>1 per account.</h3>
         <button onClick={faucet} className='buttonpic'>Get Resources and $PIXEL</button>
          </div> 
          
          : 
          
          <div className='popupper'>
                       <h3>You have no testnet BNB.  Please click below to go to the testnet faucet first.</h3>
                       <a href='https://testnet.binance.org/faucet-smart' target='_blank'><button className='buttonpic'>Get BNB</button></a>
                       </div>}

                     </Popup>
    </div>
    </div>
    

      </div>
     
      <div className='App2'>
      <HTMLFlipBook className='Book' background-color={'black'} drawShadow={true} disableFlipByClick={true} padding-bottom={200} width={500} height={700}>
      <div id='page 1' className='column'>
      <img className='artifact'src='artifact.png' />
                      <div className='rowOfThree'>
                      <div className='column'> <button className='tilepic' onClick={selectItem} ><BreadTile/></button>
                      {resourceBalances[0]}
                      </div>
                      <div className='column'> <button className='tilepic' onClick={selectItem2} ><CornTile /></button>
                      {resourceBalances[1]}
                      </div>
                      <div className='column'> <button className='tilepic' onClick={selectItem3} ><MushroomTile /></button>
                      {resourceBalances[2]}
                      </div>   
                      <div className='column'><button className='tilepic' onClick={selectItem7} ><SteakTile /></button>
                        {resourceBalances[6]}
                        </div>
  
                        </div>
						<div className='rowOfThree'>
                        <div className='column'><button className='tilepic' onClick={selectItem5} ><SalmonTile/>
						</button>
					            	{resourceBalances[4]}</div>
                        <div className='column'><button className='tilepic' onClick={selectItem10}><ChocolateTile /></button>
						            {resourceBalances[8]}</div>
                        <div className='column'><button className='tilepic' onClick={selectItem4} ><StrawberryTile /></button>
                        {resourceBalances[3]}
                        </div>  
                        <div className='column'><button className='tilepic' onClick={selectItem6} ><ChickenTile/>
                        </button>
                        {resourceBalances[5]}
                        </div>
                         
                      </div>
                      <div className='rowOfThree'>
                        <div className='column'><button  className='tilepic' onClick={selectItem9}><WheatTile/>
                        </button>
                        {resourceBalances[7]}
                        </div>
                        <div className='column'><button className='tilepic' onClick={selectItem11}><ChocolateDonutTile /></button>
                        {resourceBalances[9]}
                        </div>
                        <div className='column'><button className='tilepic'  onClick={selectItem12}><StrawberryCakeTile/></button>
                        {resourceBalances[10]}
                        </div> 
                        <div className='column'><button className='tilepic' onClick={selectItem7}><SteakTile/></button>
                        {resourceBalances[6]}
                        </div>      
                      </div>
                      <div className='rowOfThree'>
                        <div className='column'><button  className='tilepic'  onClick={selectItem16}><SeedsTile/>
                        </button>
                        {resourceBalances[14]}
                        </div>
                        <div className='column'><button className='tilepic' onClick={selectItem13}><CinnamonRollTile /></button>
                        {resourceBalances[0]}
                        </div>
                        <div className='column'><button className='tilepic' onClick={selectItem14}><FishTile/></button>
                        {resourceBalances[12]}
                        </div> 
                        <div className='column'><button className='tilepic' onClick={selectItem15}><CheeseTile/></button>
                        {resourceBalances[13]}
                        </div>      
                      </div>
                      </div>               
      <div id='page 2' className='column'>
        <div className='column'> 
        <p className='right'>Next</p>
        <button className='tilepicBig' onClick={selectItem} >{mainItem}</button>
        </div>
        <div className='infoBlock column'> 
        <p>{itemText}</p>
      
        </div>
        <Popup trigger={<button className='buttonpic buyButton' type='button'>Buy Resource</button>} position="top center">
                     <div className='popupperBook'>
                       <h3>How many do you want to buy?</h3>
                       <h3>Price:  {pricePer} $PIXEL</h3>
                       <input className='inputSpec'type='text' value={amountToBuy} onChange={handleChange2}></input>
                       <button className='buttonpic buyButton' onClick={buyResources}>Submit</button>
                       </div>
                     </Popup>
        </div> 
      <div id='page 3' className='column'>
      <p className='left'>Back</p>
      <img className='artifact'src='crafting.png' />                    
                      <div className='rowOfThree'>
                      <div className='column'> <button className='tilepic' onClick={selectItem} ><BreadTile/></button>
                      {resourceBalances[0]}
                      </div>
                      <div className='column'> <button className='tilepic'  onClick={selectItem2}><CornTile /></button>
                      {resourceBalances[1]}
                      </div>
                      <div className='column'> <button className='tilepic'  onClick={selectItem3}><MushroomTile /></button>
                      {resourceBalances[2]}
                      </div>   
                      <div className='column'><button className='tilepic'  onClick={selectItem7}><SteakTile /></button>
                        {resourceBalances[6]}
                        </div>
  
                        </div>
						<div className='rowOfThree'>
                        <div className='column'><button className='tilepic'   onClick={selectItem5}><SalmonTile/>
						</button>
						{resourceBalances[4]}</div>
                        <div className='column'><button className='tilepic' onClick={selectItem10} ><ChocolateTile /></button>
						{resourceBalances[8]}</div>
                        <div className='column'><button className='tilepic'   onClick={selectItem4}><StrawberryTile /></button>
                        {resourceBalances[3]}
                        </div>  
                        <div className='column'><button className='tilepic'  onClick={selectItem6}><ChickenTile/>
                        </button>
                        {resourceBalances[5]}
                        </div>
                         
                      </div>
                      <div className='rowOfThree'>
                        <div className='column'><button  className='tilepic'  onClick={selectItem9}><WheatTile/>
                        </button>
                        {resourceBalances[7]}
                        </div>
                        <div className='column'><button className='tilepic'  onClick={selectItem11}><ChocolateDonutTile /></button>
                        {resourceBalances[9]}
                        </div>
                        <div className='column'><button className='tilepic'  onClick={selectItem12}><StrawberryCakeTile /></button>
                        {resourceBalances[10]}
                        </div> 
                        <div className='column'><button className='tilepic'  onClick={selectItem7}><SteakTile/></button>
                        {resourceBalances[6]}
                        </div>      
                      </div>
                      <div className='rowOfThree'>
                        <div className='column'><button  className='tilepic' onClick={selectItem13}><CinnamonRollTile/>
                        </button>
                        {resourceBalances[11]}
                        </div>
                        <div className='column'><button className='tilepic'  onClick={selectItem14}><FishTile /></button>
                        {resourceBalances[12]}
                        </div>
                        <div className='column'><button className='tilepic'  onClick={selectItem15}><CheeseTile/></button>
                        {resourceBalances[13]}
                        </div> 
                        <div className='column'><button className='tilepic'  onClick={selectItem16}><SeedsTile /></button>
                        {resourceBalances[14]}
                        </div>      
                      </div>
                
      </div>
      
    <div id='page 4'className='column'>
    <div className='column'> 
        <button className='tilepicBig' >{mainItem}</button>
        </div>
        <div className='infoBlock2 row'> 
        <div className='column'>
        {show ? <h3>Required</h3> : 'Uncraftable.'}
        <div >{item1}{calc[0]}</div>
        <div >{item2}{calc[1]}</div>
        <div >{item3}{calc[2]}</div>
        </div>
        <div className='column'>
        {show ? <h3>Balance</h3> : ''}
        <div >{item1}{reqResources[0]}</div>
        <div >{item2}{reqResources[1]}</div>
        <div >{item3}{reqResources[2]}</div>
        </div>
        <div className='column'>
                      <FormControl>
                       <FormLabel id="demo-controlled-radio-buttons-group"><h2>Amount</h2></FormLabel>
                             <RadioGroup
                             aria-labelledby="demo-controlled-radio-buttons-group"
                             name="controlled-radio-buttons-group"
                             value={amount}
                             onChange={handleChange}
                             >                           
                      <FormControlLabel value="1"  control={<Radio />} label="1" />
                      <FormControlLabel value="5"  control={<Radio />} label="5" />
                       <FormControlLabel value="20"  control={<Radio />} label="20" />
                      </RadioGroup>
                       </FormControl>
                       </div>  
        </div>
     
    <div className='rowOfThree'>
            <button className='buttonpic buyButton' onClick={craftItem}>Craft</button>
            <button className='buttonpic buyButton' onClick={calculate}>Check</button>
            <button className='buttonpic buyButton' onClick={clear}>Clear</button>
						  </div>                                        
    </div>
    </HTMLFlipBook>
    </div>
    </div>
   </div>
    
    
  )
} 



export default MarketPage;
