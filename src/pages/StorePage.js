import React, { useRef } from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import Countdown from 'https://cdn.skypack.dev/react-countdown';


const Icons = {
  market: () => (
    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
  ),
  dashboard: () => (
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  ),
  favourites: () => (
    <path
      fillRule="evenodd"
      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
      clipRule="evenodd"
    />
  ),
  trending: () => (
    <path
      fillRule="evenodd"
      d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
      clipRule="evenodd"
    />
  ),
  collection: () => (
    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
  ),
  wallet: () => (
    <>
      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
      <path
        fillRule="evenodd"
        d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
        clipRule="evenodd"
      />
    </>
  ),
  settings: () => (
    <path
      fillRule="evenodd"
      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
      clipRule="evenodd"
    />
  ),
  logout: () => (
    <path
      fillRule="evenodd"
      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
      clipRule="evenodd"
    />
  ),
};
const items = [
  {
    key: '1',
    artist: 4,
    image: 'https://assets.codepen.io/3685267/nft-dashboard-art-0.jpg',
    price: '3.8',
    title: 'People Abstract Painting',
    timeLeft: 84670923,
  },
  {
    key: '2',
    artist: 2,
    image: 'https://assets.codepen.io/3685267/nft-dashboard-art-1.jpg',
    price: '2.5',
    title: 'Abstract Art Painting',
    timeLeft: 12873491,
  },
  {
    key: '3',
    artist: 0,
    image: 'https://assets.codepen.io/3685267/nft-dashboard-art-2.jpg',
    price: '9.0',
    title: 'Purple Liquid Painting',
    timeLeft: 84720185,
  },
  {
    key: '4',
    artist: 3,
    image: 'https://assets.codepen.io/3685267/nft-dashboard-art-3.jpg',
    price: '16.5',
    title: 'Generative Art',
    timeLeft: 43826185,
  },
  {
    key: '5',
    artist: 2,
    image: 'https://assets.codepen.io/3685267/nft-dashboard-art-4.jpg',
    price: '4.0',
    title: 'Liquid Base Painting',
    timeLeft: 134627,
  },
  {
    key: '6',
    artist: 1,
    image: 'https://assets.codepen.io/3685267/nft-dashboard-art-5.jpg',
    price: '1.3',
    title: 'Colorful Wind Painting',
    timeLeft: 12008745,
  },
];
const artists = [
  {
    name: 'Raven Simmons',
    handler: '@raven',
    image: 'https://assets.codepen.io/3685267/nft-dashboard-pro-1.jpg',
  },
  {
    name: 'Uriah Gardner',
    handler: '@uriah',
    image: 'https://assets.codepen.io/3685267/nft-dashboard-pro-2.jpg',
  },
  {
    name: 'Colin Mitchell',
    handler: '@colin',
    image: 'https://assets.codepen.io/3685267/nft-dashboard-pro-4.jpg',
  },
  {
    name: 'Emely Hall',
    handler: '@emely',
    image: 'https://assets.codepen.io/3685267/nft-dashboard-pro-3.jpg',
  },
  {
    name: 'Raphael Scott',
    handler: '@raphael',
    image: 'https://assets.codepen.io/3685267/nft-dashboard-pro-5.jpg',
  },
];
const App = () => {
  return(
   <>
      <SidebarLeft />
      <Header />

      <div className="flex flex-col md:flex-row">
        <div className="w-48 hidden lg:block shrink-0" />
        <div className=" grow ">
          <Content />
          <Items />
        </div>
        <SidebarRight />
      </div>
    </>
  );
}

ReactDOM.render(<App />,
document.getElementById("root"))



function SidebarRight() {
  return (
    <div className="p-3 md:w-72 shrink-0 md:sticky md:top-16 shrink-0 h-full">
      <h2 className="text-xl font-semibold">Top Artists</h2>
      <ul className="mt-3 space-y-3">
        {artists.map(({ name, handler, image }) => (
          <li
            className="bg-zinc-800 rounded-md p-2 flex shadow-lg"
            key={handler}
          >
            <img
              src={image}
              className="w-12 h-12 rounded-md"
              alt={`top artist ${name}`}
            />
            <div className="ml-3">
              <h3 className="font-semibold">{name}</h3>
              <p className="text-sm text-zinc-400">{handler}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="w-full rounded-md bg-gradient-to-tr from-fuchsia-600 to-violet-600 mt-3 p-3 relative overflow-hidden">
        <div className="z-10 relative">
          <h2 className="text-white font-semibold">
            Buy a collection with ethereum
          </h2>
          <p className="text-white/50 text-sm mt-1 ">
            you can buy a collection of artwork with ethereum very easy and
            simple
          </p>
          <button className="bg-white w-full rounded-md h-12 text-gray-900 font-semibold mt-2">
            Get Started
          </button>
        </div>
        <div className="absolute left-0 right-0 top-0 z-0">
          <svg
            className="w-full"
            viewBox="0 0 679 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2_2)">
              <path
                d="M102.854 22L159.666 116.276L102.854 90.4544V22Z"
                fill="#8A92B2"
                fillOpacity="0.35"
              />
              <path
                d="M102.854 90.4544L159.666 116.276L102.854 149.866V90.4544Z"
                fill="#62688F"
                fillOpacity="0.35"
              />
              <path
                d="M46.0315 116.276L102.854 22V90.4544L46.0315 116.276Z"
                fill="#62688F"
                fillOpacity="0.35"
              />
              <path
                d="M102.854 149.866L46.0315 116.276L102.854 90.4544V149.866Z"
                fill="#454A75"
                fillOpacity="0.35"
              />
              <path
                d="M159.666 127.055L102.854 207.12V160.625L159.666 127.055Z"
                fill="#8A92B2"
                fillOpacity="0.35"
              />
              <path
                d="M102.854 160.625V207.12L46 127.055L102.854 160.625Z"
                fill="#62688F"
                fillOpacity="0.35"
              />
              <circle
                cx="552"
                cy="35"
                r="132"
                stroke="white"
                strokeOpacity="0.1"
                strokeWidth="10"
              />
              <circle
                cx="640"
                cy="115"
                r="132"
                stroke="white"
                strokeOpacity="0.1"
                strokeWidth="10"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_2">
                <rect width="679" height="360" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}


function Items() {
  return (
    <ul className="p-1.5 flex flex-wrap">
      {items.map(({ key, artist, image, price, title, timeLeft }) => (
        <li className="w-full lg:w-1/2 xl:w-1/3  p-1.5" key={key}>
          <a
            className="block bg-zinc-800 rounded-md w-full overflow-hidden pb-4 shadow-lg"
            href="#items"
          >
            <div
              className="w-full h-40 bg-center bg-cover relative"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute left-1/2 -translate-x-1/2 bottom-2  w-5/6 bg-white rounded-md flex items-center bg-opacity-30 backdrop-blur-md">
                <div className="w-1/2 p-3">
                  <h3 className="font-semibold">Current Bid</h3>
                  <div className="">{price} ETH</div>
                </div>
                <div className="w-1/2 p-3">
                  <h3 className="font-semibold">Ending in</h3>
                  <Countdown
                    date={Date.now() + timeLeft}
                    renderer={({ hours, minutes, seconds }) => (
                      <div className="">{`${hours}h: ${minutes}m: ${seconds}s`}</div>
                    )}
                  />
                </div>
              </div>
            </div>
            <h3 className="font-semibold text-lg px-3 mt-2">{title}</h3>
            <div className="flex items-center px-3 mt-2">
              <img
                src={artists[artist].image}
                className="w-10 h-10 rounded-full"
                alt="item-owner"
              />
              <span className=" ml-2 text-zinc-400">
                {artists[artist].handler}
              </span>
            </div>
            <div className="flex mt-2">
              <div className="p-3 w-1/2">
                <button className="bg-gradient-to-tr from-fuchsia-600 to-violet-600  w-full h-12 rounded-md font-semibold">
                  Place a bid
                </button>
              </div>
              <div className="p-3 w-1/2">
                <button className="bg-gradient-to-tr from-fuchsia-600 to-violet-600  w-full rounded-md font-semibold h-12 p-px">
                  <div className="bg-zinc-800 w-full h-full rounded-md grid place-items-center">
                    View artwork
                  </div>
                </button>
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}

function ArtworkSelector({ text, index }) {
  return (
    <li className="">
      <button
        className={` ${
          index ? 'text-zinc-500' : 'text-fuchsia-600 underline font-bold'
        }`}
      >
        {text}
      </button>
    </li>
  );
}

function Content() {
  return (
    <div className="">
      <h1 className="text-2xl font-bold px-3 mt-3">Dashboard</h1>
      <h2 className="text-zinc-500 px-3">
        Buy and sell digital artwork, NFT collection
      </h2>
      <div className="p-3">
        <div
          className="w-full h-44  rounded-md bg-center bg-cover flex flex-col justify-center px-4"
          style={{
            backgroundImage:
              'url(https://assets.codepen.io/3685267/nft-dashboard-art-6.jpg)',
          }}
        >
          <h2 className="font-bold text-3xl max-w-sm">
            Find a collection of best artwork here
          </h2>
          <button className="py-2 bg-gradient-to-tr from-fuchsia-600 to-violet-600 rounded-md w-44 mt-3">
            Explore Now
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between px-3 mt-3">
        <h2 className="text-xl font-semibold">Trending Artworks</h2>
        <ul className="inline-flex space-x-3 ">
          {['Art', 'Collectables', 'Music', 'Sport'].map((text, index) => (
            <ArtworkSelector key={text} text={text} index={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="flex flex-wrap p-3 items-center sticky top-0 bg-zinc-900 h-fit  md:h-16 z-30">
      <div className="flex items-center grow md:grow-0 w-fit md:w-48">
        <div className="w-10 h-10 bg-gradient-to-tr from-fuchsia-600 to-violet-600 grid place-items-center rounded-full font-bold text-white  text-2xl">
          D
        </div>
        <div className="ml-2 font-bold text-xl">DIGIART</div>
      </div>

      <div className="flex items-center order-2 md:order-3 pl-0 md:pl-3">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
          <div className="absolute right-0 top-0 w-3 h-3 bg-zinc-900 rounded-full p-0.5">
            <div className="bg-red-500 w-full h-full  rounded-full" />
          </div>
        </div>
        <img
          src="https://assets.codepen.io/3685267/nft-dashboard-pro-1.jpg"
          alt="user"
          className="w-10 h-10 rounded-full ml-4"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 ml-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <div className="flex  mt-4 md:mt-0 order-3 md:order-2 w-full grow md:w-fit ">
        <button className="w-10 h-10 rounded-md bg-zinc-700 grid place-items-center mr-2 block md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <form className="relative grow md:max-w-lg">
          <input
            type="text"
            className="bg-zinc-700 pl-3 pr-10 h-10 rounded-md w-full "
            placeholder="search for collection"
          />
          <span className="absolute right-0 top-0 bottom-0 w-10 grid place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </form>
      </div>
    </div>
  );
}



function SidebarItem({ text, index }) {
  return (
    <li className="relative">
      {index === 1 ? (
        <div className="absolute -left-1 top-0 bg-fuchsia-600 w-2 h-8 rounded-full" />
      ) : null}
      <a
        href="#"
        className={`pl-4 flex items-center capitalize   ${
          index === 1 ? 'text-white' : 'text-zinc-500'
        }`}
      >
        <span
          className={`bg-zinc-800 w-8 h-8 grid place-items-center mr-2 rounded-md ${
            index === 1 ? 'bg-fuchsia-600' : 'bg-zinc-800'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            {Icons[text]()}
          </svg>
        </span>
        {text}
      </a>
    </li>
  );
}


function SidebarLeft() {
  return (
    <div className="hidden lg:flex h-screen flex-col justify-between w-48 fixed left-0 top-0 bottom-0 pt-24">
      <ul className="space-y-8">
        {[
          'market',
          'dashboard',
          'favourites',
          'trending',
          'collection',
          'wallet',
          'settings',
        ].map((key, index) => (
          <SidebarItem key={key} text={key} index={index} />
        ))}
      </ul>
      <div className="pb-5  px-4">
        <hr className="mb-5 text-zinc-700" />
        <a href="#" className="py-2 flex items-center  text-zinc-500">
          <span className="bg-zinc-800 w-8 h-8 grid place-items-center mr-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {Icons.logout()}
            </svg>
          </span>
          Logout
        </a>
      </div>
    </div>
  );
}
