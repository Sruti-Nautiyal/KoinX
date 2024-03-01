// Example in a React functional component
import { useState, useEffect } from 'react';
import axios from 'axios';
import { VscTriangleDown,VscTriangleUp } from "react-icons/vsc";

const Trending = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/search/trending'
        );
        setTrendingCoins(response.data.coins.slice(0, 3));
        // console.log(response.data.coins)
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      }
    };

    fetchTrendingCoins();
  }, []);

  // Render trending coins
  return (
    <div className='m-1 py-3 px-4 bg-white text-black h-full w-[370px] border-2 rounded-lg'>
      <h2 className='font-semibold '>Trending Coins(24h)</h2>
      <ul className='py-3 text-sm'>
        {trendingCoins.map((coin) => (
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3 py-1.5'>
              <img src={coin.item.thumb} alt="image" className='rounded-full' />
              <li key={coin.item.id} className='py-1.5 text-xs font-medium'>{coin.item.name} ({coin.item.symbol})</li>
              {/* {coin.item && typeof coin.item.usd_24h_change === 'number' ?coin.item.price_change_percentage_24h.usd.toFixed(2) : 'N/A'} */}
            </div>
            <div>
              { coin.item.data.price_change_percentage_24h.usd>0?
              (<>
                <button className=' bg-green-100 text-green-700 p-1 flex items-center justify-center text-xs rounded-sm h-6 w-20'><VscTriangleUp/> {coin.item ?coin.item.data.price_change_percentage_24h.usd.toFixed(2)+' %' : 'N/A'} </button>
              </>):
              (<>
                <button className=' bg-red-100 text-red-700 p-1 flex items-center justify-center text-xs rounded-sm h-6 w-20'><VscTriangleDown/> {coin.item ?coin.item.data.price_change_percentage_24h.usd.toFixed(2)+' %' : 'N/A'} </button>
               
              </>)}

            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Trending;
