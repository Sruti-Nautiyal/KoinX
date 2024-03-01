import Header from "./components/Header";
import Price from "./components/Price";
import Rank from "./components/Rank";
import Trending from "./components/Trending";
import YouMayAlsoLike from "./components/YouMayAlsoLike";
import { AiOutlineDoubleRight } from "react-icons/ai";


function App() {
  return (
    <div className=" bg-slate-300">
        <Header/>
      <p className="p-2 mt-20 md:ml-2 ml-14 text-xs font-light flex">Cryptocurrencies <span className=" text-gray-500 p-0.5"> <AiOutlineDoubleRight/> </span> <span className="font-bold" > Bitcoin</span></p>
      {/* <Price/>
      <Trending/>
      <Rank/> */} 
      <div className=" flex items-center justify-evenly sm:flex-col md:flex-row" >
        <div className="w-3/4 ">
          <Rank className=''/>
        </div>
        <div className="w-1/4 flex flex-col items-center sm:w-fit sm:flex-col-reverse ">
          <Price/>
          <Trending/>
        </div>
      </div>
      <div className="bg-white m-2 rounded-lg">
        <YouMayAlsoLike text='You May Also like this'/>
        <YouMayAlsoLike text='Trending Coins'/>
      </div>
      
    </div>
  );
}

export default App;
